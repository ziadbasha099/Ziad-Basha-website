/**
 * form-submit.js — sends the project-data form in the background (AJAX) and
 * shows the translated success message on the same page, instead of letting
 * the browser navigate to FormSubmit's generic English page.
 *
 * Load it AFTER app.js: app.js validates the custom select first and calls
 * preventDefault() when invalid; this handler then skips the request.
 * Pages without .pd-form are left untouched.
 */
(() => {
  'use strict';

  /* ---------- Constants ---------- */
  const LOG_PREFIX = '[form-submit]';
  const FORMSUBMIT_HOST = 'formsubmit.co';
  const AJAX_PATH_PREFIX = '/ajax/';
  const REQUEST_TIMEOUT_MS = 60000; // uploads (logo, videos, Figma) can be slow
  const SELECTORS = Object.freeze({
    form: '.pd-form',
    submitButton: '.pd-submit',
    errorMessage: '.pd-form-error',
    successPanel: '.pd-success',
  });
  const DISABLED_OPACITY = '.6';

  /* ---------- Pure helpers (unit-tested) ---------- */

  /**
   * Converts a FormSubmit form action into its AJAX endpoint.
   * @param {string} actionUrl e.g. "https://formsubmit.co/me@mail.com"
   * @returns {string} e.g. "https://formsubmit.co/ajax/me@mail.com"
   * @throws {Error} When the URL is invalid or not a FormSubmit URL.
   * @example toAjaxEndpoint('https://formsubmit.co/a@b.c'); // ".../ajax/a@b.c"
   */
  function toAjaxEndpoint(actionUrl) {
    let parsedUrl;
    try {
      parsedUrl = new URL(actionUrl);
    } catch {
      throw new Error(`Invalid form action URL: ${actionUrl}`);
    }
    if (parsedUrl.hostname !== FORMSUBMIT_HOST) {
      throw new Error(`Unsupported form host: ${parsedUrl.hostname}`);
    }
    if (!parsedUrl.pathname.startsWith(AJAX_PATH_PREFIX)) {
      parsedUrl.pathname = `${AJAX_PATH_PREFIX}${parsedUrl.pathname.replace(/^\/+/, '')}`;
    }
    return parsedUrl.toString();
  }

  /**
   * Reads FormSubmit's JSON reply (success may be boolean or the string "true").
   * @param {unknown} payload Parsed JSON body.
   * @returns {boolean} True when FormSubmit accepted the submission.
   * @example isSubmissionSuccessful({ success: 'true' }); // true
   */
  function isSubmissionSuccessful(payload) {
    return Boolean(payload) && (payload.success === true || payload.success === 'true');
  }

  /* ---------- Network ---------- */

  /**
   * POSTs the form (files included) to FormSubmit's AJAX endpoint.
   * @param {HTMLFormElement} form Form to send.
   * @returns {Promise<void>} Resolves on success.
   * @throws {Error} On timeout, network failure, HTTP error or rejected reply.
   */
  async function postForm(form) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
    try {
      const response = await fetch(toAjaxEndpoint(form.action), {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
        signal: controller.signal,
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const payload = await response.json();
      if (!isSubmissionSuccessful(payload)) {
        throw new Error(`FormSubmit rejected the submission: ${payload?.message ?? 'no message'}`);
      }
    } finally {
      clearTimeout(timeoutId);
    }
  }

  /* ---------- UI state ---------- */

  /**
   * Shows or hides the inline error message.
   * @param {HTMLElement | null} errorElement Error paragraph.
   * @param {boolean} isVisible Whether to show it.
   * @returns {void}
   */
  function toggleError(errorElement, isVisible) {
    if (errorElement) errorElement.hidden = !isVisible;
  }

  /**
   * Enables/disables the submit button (also marks the form as busy).
   * @param {HTMLFormElement} form Form owning the button.
   * @param {boolean} isBusy True while a request is in flight.
   * @returns {void}
   */
  function setBusy(form, isBusy) {
    const submitButton = form.querySelector(SELECTORS.submitButton);
    form.setAttribute('aria-busy', String(isBusy));
    if (!submitButton) return;
    submitButton.disabled = isBusy;
    submitButton.style.opacity = isBusy ? DISABLED_OPACITY : '';
  }

  /**
   * Swaps the form for the success panel and brings it into view.
   * @param {HTMLFormElement} form Submitted form.
   * @returns {void}
   */
  function showSuccess(form) {
    const successPanel = document.querySelector(SELECTORS.successPanel);
    if (!successPanel) return;
    form.hidden = true;
    successPanel.hidden = false;
    successPanel.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  /**
   * Submit handler: validate (done by app.js) → send → success or inline error.
   * @param {SubmitEvent} event Submit event.
   * @returns {Promise<void>}
   */
  async function handleSubmit(event) {
    if (event.defaultPrevented) return; // app.js found an invalid field
    event.preventDefault();

    const form = event.currentTarget;
    const errorElement = form.querySelector(SELECTORS.errorMessage);
    toggleError(errorElement, false);
    setBusy(form, true);

    try {
      await postForm(form);
      showSuccess(form);
    } catch (error) {
      console.error(`${LOG_PREFIX} Submission failed:`, error);
      toggleError(errorElement, true);
      setBusy(form, false);
    }
  }

  /** Wires the form; no-op on pages without it. @returns {void} */
  function initFormSubmit() {
    const form = document.querySelector(SELECTORS.form);
    if (form) form.addEventListener('submit', handleSubmit);
  }

  if (typeof document !== 'undefined') initFormSubmit();

  // Expose pure helpers for unit tests (Node); ignored in the browser.
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { toAjaxEndpoint, isSubmissionSuccessful };
  }
})();

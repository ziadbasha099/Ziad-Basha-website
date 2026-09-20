/**
 * why-us.js — behaviour for the "ما يميزنا" (Why us) section.
 *
 * To remove the feature entirely: delete this file, its <script> tag in
 * index.html, and every block marked "WHY-US" in index.html / style.css / app.js.
 *
 * Responsibilities:
 *   - Reveal the title (word by word) and the cards when they scroll into view.
 *   - Animate the price counter.
 *   - Add a cursor-following spotlight to the cards.
 *
 * It reacts to the `app:language-applied` event dispatched by app.js, so the
 * two files stay decoupled. Pages without #why-us are left untouched.
 */
(() => {
  'use strict';

  /* ---------- Constants ---------- */
  const LOG_PREFIX = '[why-us]';
  const LANGUAGE_APPLIED_EVENT = 'app:language-applied'; // must match app.js
  const DEFAULT_LANGUAGE = 'ar';
  const DEFAULT_LOCALE = 'en-US';
  const COUNTER_LOCALES = Object.freeze({ ar: 'ar-EG', en: 'en-US' });
  const COUNTER_DURATION_MS = 1600;
  const EASE_EXPONENT = 3;
  const REVEAL_THRESHOLD = 0.25;
  const REVEAL_ROOT_MARGIN = '0px 0px -80px 0px';
  const CLASS_REVEALED = 'in';
  const CLASS_ARMED = 'is-armed';
  const SELECTORS = Object.freeze({
    section: '#why-us',
    grid: '.why-grid',
    cards: '.why-card',
    title: '.why-title',
    counters: '.why-counter',
  });

  /** @type {string} Language currently shown; updated on every language switch. */
  let activeLanguage = DEFAULT_LANGUAGE;
  /** @type {Map<string, Intl.NumberFormat>} Cached formatters (avoids re-creating one per frame). */
  const numberFormatters = new Map();

  /* ---------- Pure helpers (unit-tested in why-us.test.js) ---------- */

  /**
   * Cubic ease-out curve: fast start, gentle finish.
   * @param {number} progress Linear progress; values outside 0..1 are clamped.
   * @returns {number} Eased progress between 0 and 1.
   * @example easeOutCubic(0.5); // 0.875
   */
  function easeOutCubic(progress) {
    if (!Number.isFinite(progress)) return 0;
    const clamped = Math.min(Math.max(progress, 0), 1);
    return 1 - Math.pow(1 - clamped, EASE_EXPONENT);
  }

  /**
   * Formats a number for the given UI language (Arabic-Indic digits for "ar").
   * @param {number} value Number to format (rounded; non-finite becomes 0).
   * @param {string} lang UI language code, e.g. "ar" or "en".
   * @returns {string} Localised number string.
   * @example formatCounterValue(300, 'en'); // "300"
   */
  function formatCounterValue(value, lang) {
    const locale = COUNTER_LOCALES[lang] ?? DEFAULT_LOCALE;
    if (!numberFormatters.has(locale)) {
      numberFormatters.set(locale, new Intl.NumberFormat(locale));
    }
    const safeValue = Number.isFinite(value) ? Math.round(value) : 0;
    return numberFormatters.get(locale).format(safeValue);
  }

  /**
   * Splits text into words on any whitespace.
   * @param {string} text Source text.
   * @returns {string[]} Non-empty words; empty array for non-string input.
   * @example splitTextIntoWords('a  b'); // ['a', 'b']
   */
  function splitTextIntoWords(text) {
    if (typeof text !== 'string') return [];
    return text.trim().split(/\s+/).filter(Boolean);
  }

  /* ---------- DOM helpers ---------- */

  /** @returns {boolean} True when the visitor prefers reduced motion. */
  function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  /**
   * Wraps each word of an element in a span (--word-index drives the stagger).
   * Words are wrapped, never letters, so Arabic letter joining stays intact.
   * @param {HTMLElement} element Element whose text should be wrapped.
   * @returns {void}
   */
  function wrapWordsForReveal(element) {
    const words = splitTextIntoWords(element.textContent);
    const fragment = document.createDocumentFragment();
    words.forEach((word, index) => {
      const wordSpan = document.createElement('span');
      wordSpan.className = 'word';
      wordSpan.setAttribute('aria-hidden', 'true');
      wordSpan.style.setProperty('--word-index', String(index));
      wordSpan.textContent = word;
      fragment.append(wordSpan, ' ');
    });
    element.setAttribute('aria-label', words.join(' '));
    element.replaceChildren(fragment);
  }

  /**
   * Adds the "in" class the first time an element scrolls into view.
   * @param {HTMLElement} element Element to observe.
   * @param {() => void} [onReveal] Optional callback fired once on reveal.
   * @returns {void}
   */
  function revealOnce(element, onReveal) {
    if (!('IntersectionObserver' in window)) {
      element.classList.add(CLASS_REVEALED);
      onReveal?.();
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        element.classList.add(CLASS_REVEALED);
        observer.disconnect();
        onReveal?.();
      },
      { threshold: REVEAL_THRESHOLD, rootMargin: REVEAL_ROOT_MARGIN }
    );
    observer.observe(element);
  }

  /* ---------- Counters ---------- */

  /**
   * Reads and validates a counter's data-count-to attribute.
   * @param {HTMLElement} counterElement Counter element.
   * @returns {number | null} Target value, or null when invalid.
   */
  function readCounterTarget(counterElement) {
    const target = Number(counterElement.dataset.countTo);
    if (!Number.isFinite(target) || target < 0) {
      console.error(`${LOG_PREFIX} Invalid data-count-to value:`, counterElement.dataset.countTo);
      return null;
    }
    return target;
  }

  /**
   * Animates one counter from 0 to its target value.
   * @param {HTMLElement} counterElement Counter element.
   * @param {number} targetValue Final value.
   * @returns {void}
   */
  function animateCounter(counterElement, targetValue) {
    const finish = () => {
      counterElement.dataset.counted = 'true';
      counterElement.textContent = formatCounterValue(targetValue, activeLanguage);
    };
    if (prefersReducedMotion()) {
      finish();
      return;
    }
    const startTime = performance.now();
    const step = (now) => {
      const progress = (now - startTime) / COUNTER_DURATION_MS;
      counterElement.textContent = formatCounterValue(targetValue * easeOutCubic(progress), activeLanguage);
      if (progress < 1) requestAnimationFrame(step);
      else finish();
    };
    requestAnimationFrame(step);
  }

  /** Starts the animation of every counter in the section. @returns {void} */
  function startCounters() {
    document.querySelectorAll(SELECTORS.counters).forEach((counterElement) => {
      const target = readCounterTarget(counterElement);
      if (target !== null) animateCounter(counterElement, target);
    });
  }

  /**
   * Re-renders counters after a language switch (final value if already
   * counted, otherwise 0 while waiting to be revealed).
   * @param {string} lang UI language code.
   * @returns {void}
   */
  function renderCounters(lang) {
    document.querySelectorAll(SELECTORS.counters).forEach((counterElement) => {
      const target = readCounterTarget(counterElement);
      if (target === null) return;
      const shown = counterElement.dataset.counted === 'true' ? target : 0;
      counterElement.textContent = formatCounterValue(shown, lang);
    });
  }

  /* ---------- Section setup ---------- */

  /**
   * Makes a card's spotlight follow the pointer.
   * @param {HTMLElement} card Card element.
   * @returns {void}
   */
  function enableSpotlight(card) {
    card.addEventListener('pointermove', (event) => {
      const bounds = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${event.clientX - bounds.left}px`);
      card.style.setProperty('--my', `${event.clientY - bounds.top}px`);
    });
  }

  /**
   * Handles a language switch: the translated title needs its words re-wrapped.
   * @param {CustomEvent<{lang: string}>} event Language-applied event.
   * @returns {void}
   */
  function handleLanguageApplied(event) {
    activeLanguage = event.detail?.lang ?? activeLanguage;
    const title = document.querySelector(SELECTORS.title);
    if (title) wrapWordsForReveal(title);
    renderCounters(activeLanguage);
  }

  /** Wires up the whole section; no-op on pages without #why-us. @returns {void} */
  function initWhyUsSection() {
    const section = document.querySelector(SELECTORS.section);
    if (!section) return;

    activeLanguage = document.documentElement.lang || DEFAULT_LANGUAGE;

    const grid = section.querySelector(SELECTORS.grid);
    const title = section.querySelector(SELECTORS.title);
    if (title) revealOnce(title);
    if (grid) {
      grid.classList.add(CLASS_ARMED);
      revealOnce(grid, startCounters);
    }
    if (window.matchMedia('(hover: hover)').matches) {
      section.querySelectorAll(SELECTORS.cards).forEach(enableSpotlight);
    }
    document.addEventListener(LANGUAGE_APPLIED_EVENT, handleLanguageApplied);
  }

  if (typeof document !== 'undefined') initWhyUsSection();

  // Expose pure helpers for unit tests (Node); ignored in the browser.
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { easeOutCubic, formatCounterValue, splitTextIntoWords };
  }
})();

/**
 * performance.js — keeps heavy decorative effects cheap.
 *
 *  1. Detects weak devices (few CPU cores, low memory, data-saver, slow network)
 *     and flags <html data-perf="lite"> so CSS can drop the costly effects.
 *  2. Pauses infinite animations while their section is off-screen, by toggling
 *     the `is-offscreen` class (CSS maps it to animation-play-state: paused).
 *
 * Load it in <head> (no defer) so the "lite" flag is set before first paint.
 */
(() => {
  'use strict';

  /* ---------- Constants ---------- */
  const LOG_PREFIX = '[performance]';
  const LOW_END_MAX_CPU_CORES = 4;
  const LOW_END_MAX_MEMORY_GB = 4;
  const SLOW_CONNECTION_TYPES = Object.freeze(['slow-2g', '2g']);
  const PERF_ATTRIBUTE = 'perf';
  const PERF_LITE_VALUE = 'lite';
  const OFFSCREEN_CLASS = 'is-offscreen';
  const OFFSCREEN_ROOT_MARGIN = '120px 0px';
  /** Elements that run infinite animations (see perf-and-form.css). */
  const ANIMATED_SELECTORS = Object.freeze(['.hero', '#why-us', '.work-card--featured', '.pd-price']);

  /* ---------- Pure helpers (unit-tested) ---------- */

  /**
   * Decides whether a device should get the lightweight visual mode.
   * Missing browser APIs are treated as "unknown", never as "weak".
   * @param {Partial<Navigator> & {deviceMemory?: number, connection?: {saveData?: boolean, effectiveType?: string}}} [nav]
   * @returns {boolean} True when heavy effects should be reduced.
   * @example isLowEndDevice({ hardwareConcurrency: 2 }); // true
   */
  function isLowEndDevice(nav = {}) {
    const { hardwareConcurrency, deviceMemory, connection } = nav;
    const hasFewCores = Number.isFinite(hardwareConcurrency) && hardwareConcurrency <= LOW_END_MAX_CPU_CORES;
    const hasLowMemory = Number.isFinite(deviceMemory) && deviceMemory <= LOW_END_MAX_MEMORY_GB;
    const wantsDataSaving = Boolean(connection?.saveData);
    const isSlowNetwork = SLOW_CONNECTION_TYPES.includes(connection?.effectiveType);
    return hasFewCores || hasLowMemory || wantsDataSaving || isSlowNetwork;
  }

  /* ---------- DOM behaviour ---------- */

  /** Flags the document as "lite" on weak devices. @returns {void} */
  function applyPerformanceMode() {
    if (isLowEndDevice(navigator)) {
      document.documentElement.dataset[PERF_ATTRIBUTE] = PERF_LITE_VALUE;
    }
  }

  /**
   * Toggles `is-offscreen` on an element as it leaves/enters the viewport.
   * @param {IntersectionObserverEntry[]} entries Observer entries.
   * @returns {void}
   */
  function handleVisibilityChange(entries) {
    entries.forEach((entry) => {
      entry.target.classList.toggle(OFFSCREEN_CLASS, !entry.isIntersecting);
    });
  }

  /** Starts observing every animated section. @returns {void} */
  function pauseAnimationsWhenOffscreen() {
    if (!('IntersectionObserver' in window)) return;
    try {
      const observer = new IntersectionObserver(handleVisibilityChange, { rootMargin: OFFSCREEN_ROOT_MARGIN });
      document.querySelectorAll(ANIMATED_SELECTORS.join(',')).forEach((element) => observer.observe(element));
    } catch (error) {
      console.error(`${LOG_PREFIX} Could not observe animated sections:`, error);
    }
  }

  /** Entry point. @returns {void} */
  function init() {
    applyPerformanceMode();
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', pauseAnimationsWhenOffscreen, { once: true });
    } else {
      pauseAnimationsWhenOffscreen();
    }
  }

  if (typeof document !== 'undefined') init();

  // Expose pure helpers for unit tests (Node); ignored in the browser.
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { isLowEndDevice };
  }
})();

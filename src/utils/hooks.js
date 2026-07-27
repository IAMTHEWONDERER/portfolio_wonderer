import { useEffect, useState } from 'react';
import Lenis from 'lenis';
// Required. Lenis needs `html.lenis, html.lenis body { height: auto }`; without
// it the shell keeps whatever height the document had and scrolling misbehaves.
import 'lenis/dist/lenis.css';

/* ------------------------------------------------------------------ */
/* Motion constants                                                    */
/* ------------------------------------------------------------------ */
/* Live here rather than beside the motion components so that file can
   export components only, which is what react-refresh wants. */

export const EASE = [0.25, 0.46, 0.45, 0.94];

/**
 * Fire once, as soon as a slice of the element is on screen.
 *
 * Deliberately uses `amount` rather than a negative `margin`: with a
 * rootMargin the observer never fired for tall grid items here, which
 * left whole sections stuck at opacity 0.
 */
export const VIEWPORT = { once: true, amount: 0.15 };

/* ------------------------------------------------------------------ */
/* IntersectionObserver health probe                                   */
/* ------------------------------------------------------------------ */
/**
 * Every reveal holds its content at `opacity: 0` until an
 * IntersectionObserver reports it on screen. That is the behaviour we
 * want, but it puts the visibility of the entire site behind one browser
 * API: anything that never delivers a callback renders a blank page
 * rather than an unanimated one.
 *
 * So we probe it once with a 1px sentinel. If no callback arrives,
 * `useObserverFallback` flips every reveal to visible, and the worst case
 * degrades to "no animation" instead of "no content".
 */

const fallbackListeners = new Set();
let observerBroken = false;

const markObserverBroken = () => {
  if (observerBroken) return;
  observerBroken = true;
  fallbackListeners.forEach((notify) => notify());
};

if (typeof window !== 'undefined') {
  if (typeof IntersectionObserver === 'undefined') {
    observerBroken = true;
  } else {
    const startProbe = () => {
      const sentinel = document.createElement('div');
      sentinel.setAttribute('aria-hidden', 'true');
      sentinel.style.cssText =
        'position:fixed;top:0;left:0;width:1px;height:1px;opacity:0;pointer-events:none';
      document.body.appendChild(sentinel);

      let delivered = false;
      const observer = new IntersectionObserver(() => {
        delivered = true;
        observer.disconnect();
        sentinel.remove();
      });
      observer.observe(sentinel);

      window.setTimeout(() => {
        if (delivered) return;
        observer.disconnect();
        sentinel.remove();
        markObserverBroken();
      }, 3000);
    };

    if (document.body) startProbe();
    else window.addEventListener('DOMContentLoaded', startProbe, { once: true });
  }
}

/**
 * True once IntersectionObserver has proven unusable. Reveals OR this with
 * their own in-view state, so they can only ever fail open.
 */
export const useObserverFallback = () => {
  const [broken, setBroken] = useState(observerBroken);

  useEffect(() => {
    if (broken) return undefined;
    const notify = () => setBroken(true);
    fallbackListeners.add(notify);
    return () => {
      fallbackListeners.delete(notify);
    };
  }, [broken]);

  return broken;
};

/** Magnetic hover and other cursor effects are pointer-fine only. */
export const useFinePointer = () => {
  const [fine, setFine] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(pointer: fine)');
    const update = () => setFine(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  return fine;
};

/**
 * Safari sniff, previously duplicated in seven components.
 * Safari refuses to render PDFs in a same-origin iframe reliably, so the
 * modal swaps to an "open in a new tab" panel for it.
 */
export const useIsSafari = () => {
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent;
    setIsSafari(/Safari/.test(ua) && !/Chrome/.test(ua) && !/Chromium/.test(ua));
  }, []);

  return isSafari;
};

/**
 * Locks page scroll while a modal is open, and restores whatever the
 * document had before — so nested or sequential locks cannot strand the
 * page in `overflow: hidden`.
 */
export const useBodyScrollLock = (locked) => {
  useEffect(() => {
    if (!locked) return undefined;

    const { body, documentElement } = document;
    const previousBody = body.style.overflow;
    const previousRoot = documentElement.style.overflow;

    body.style.overflow = 'hidden';
    documentElement.style.overflow = 'hidden';

    return () => {
      body.style.overflow = previousBody;
      documentElement.style.overflow = previousRoot;
    };
  }, [locked]);
};

/**
 * Lenis smooth scroll.
 *
 * The previous per-page copies started a self-perpetuating
 * `requestAnimationFrame` loop and only ever called `lenis.destroy()` on
 * cleanup — so every route change left a permanent 60fps loop calling
 * `.raf()` on a destroyed instance, and they accumulated for the session.
 * The frame id is captured and cancelled here.
 */
export const useLenis = () => {
  useEffect(() => {
    // Smooth scroll is precisely the kind of motion reduced-motion users turn
    // off. Native scrolling is also the safer default, so bail out entirely.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    /*
     * `smooth`, `direction`, `gestureDirection`, `mouseMultiplier` and
     * `smoothTouch` are Lenis v0 options. This project is on v1, where they
     * are ignored in favour of the names below.
     */
    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.2,
      smoothWheel: true,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    let disposed = false;
    let frames = 0;
    let frameId;

    const dispose = () => {
      if (disposed) return;
      disposed = true;
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };

    frameId = requestAnimationFrame(function raf(time) {
      lenis.raf(time);
      frames += 1;
      frameId = requestAnimationFrame(raf);
    });

    /*
     * Watchdog. Lenis calls preventDefault() on wheel events and then owns
     * scrolling itself, so if this frame loop never advances the page cannot
     * be scrolled at all. Rather than trap the visitor, tear Lenis down and
     * let the browser scroll natively — the cost is the easing, not the page.
     */
    const watchdog = window.setTimeout(() => {
      if (frames === 0) dispose();
    }, 1000);

    return () => {
      window.clearTimeout(watchdog);
      dispose();
    };
  }, []);
};

/** Tracks a media query. Used for the sub-`md` image carousel. */
export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches,
  );

  useEffect(() => {
    const list = window.matchMedia(query);
    const update = () => setMatches(list.matches);
    update();
    list.addEventListener('change', update);
    return () => list.removeEventListener('change', update);
  }, [query]);

  return matches;
};

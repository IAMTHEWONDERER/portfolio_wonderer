import { useEffect, useState } from 'react';
import Lenis from 'lenis';

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
    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      touchMultiplier: 2,
    });

    let frameId = requestAnimationFrame(function raf(time) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    });

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
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

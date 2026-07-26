import React, { useEffect, useId, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Download, FileText, X } from 'lucide-react';
import { useIsSafari, useBodyScrollLock } from '../../utils/hooks';
import { useReducedMotion } from '../../utils/motion';

/**
 * The one PDF viewer.
 *
 * Replaces five near-identical copies (ThinkPortfolio, TechStackLanding,
 * ContactPage, DisplayPortfolio, PorftolioLanding) that had drifted on
 * close-button glyph (`×` vs lucide `X`), aria-labels, a dead
 * `id="pdf-loading"` block, and where in the tree they rendered.
 *
 * Rendered through a portal to <body> so it escapes every ancestor
 * stacking context — previously `.page-transition-content` (z-index: 0)
 * and PortfolioPage's `<main class="z-10">` trapped it beneath the fixed
 * navbar, leaving the top strip of the modal click-dead.
 */
const PdfModal = ({
  open,
  onClose,
  title,
  fileUrl,
  downloadName,
  eyebrow,
  newTabLabel = 'OPEN IN NEW TAB',
  downloadLabel = 'DOWNLOAD',
  showDownload = true,
}) => {
  const isSafari = useIsSafari();
  const reduced = useReducedMotion();
  const titleId = useId();
  const panelRef = useRef(null);
  const closeRef = useRef(null);
  const restoreFocusRef = useRef(null);

  useBodyScrollLock(open);

  /* Escape to close, Tab trapped inside the dialog, focus restored on exit. */
  useEffect(() => {
    if (!open) return undefined;

    restoreFocusRef.current = document.activeElement;
    const focusTimer = window.setTimeout(() => closeRef.current?.focus(), 0);

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.stopPropagation();
        onClose();
        return;
      }

      if (event.key !== 'Tab' || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll(
        'a[href], button:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener('keydown', handleKeyDown);
      restoreFocusRef.current?.focus?.();
    };
  }, [open, onClose]);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = downloadName || '';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const overlayMotion = reduced
    ? {}
    : { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } };

  const panelMotion = reduced
    ? {}
    : {
        initial: { scale: 0.96, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        exit: { scale: 0.96, opacity: 0 },
      };

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          {...overlayMotion}
          className="fixed inset-0 bg-[#0a0100]/90 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={onClose}
        >
          <motion.div
            {...panelMotion}
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="bg-[#f5f5f0] shadow-2xl w-full max-w-5xl h-full sm:h-[95vh] sm:max-h-[95vh] overflow-hidden flex flex-col"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-[#f5f5f0] p-3 sm:p-6 border-b border-[#0a0100]/10 flex-shrink-0">
              <div className="flex items-center gap-2 sm:gap-4">
                <h2
                  id={titleId}
                  className="font-erstoria text-lg sm:text-2xl tracking-wide text-[#0a0100]"
                >
                  {title}
                </h2>
                <div className="w-4 sm:w-8 h-px bg-[#e61f00]" />
              </div>
            </div>

            {/* Viewer */}
            <div className="flex-1 bg-[#f5f5f0] p-2 sm:p-6 pt-2 sm:pt-4 overflow-hidden">
              <div className="w-full h-full bg-white shadow-inner overflow-auto">
                {isSafari ? (
                  <div className="w-full h-full flex flex-col items-center justify-center space-y-6 p-8">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-[#0a0100]/10 rounded-full flex items-center justify-center mx-auto">
                        <FileText className="w-8 h-8 text-[#0a0100]/60" />
                      </div>
                      <h3 className="font-erstoria text-lg text-[#0a0100] tracking-wide">
                        Safari PDF Viewer
                      </h3>
                      <p className="text-[#0a0100]/70 text-sm max-w-md">
                        Safari restricts embedded PDFs. Open it in a new tab for the
                        best viewing experience.
                      </p>
                    </div>

                    <div className="flex flex-col gap-3">
                      <a
                        href={fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="focus-ring group inline-flex items-center justify-center gap-3 px-6 py-3 bg-[#0a0100] text-white hover:bg-[#e61f00] transition-all duration-300 cursor-pointer active:scale-95"
                      >
                        <span className="font-erstoria text-sm tracking-wide">
                          {newTabLabel}
                        </span>
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </a>

                      {showDownload && (
                        <a
                          href={fileUrl}
                          download={downloadName}
                          className="focus-ring group inline-flex items-center justify-center gap-3 px-6 py-3 border border-[#0a0100] text-[#0a0100] hover:bg-[#0a0100]/5 transition-all duration-300 cursor-pointer active:scale-95"
                        >
                          <Download className="w-4 h-4" />
                          <span className="font-erstoria text-sm tracking-wide">
                            {downloadLabel}
                          </span>
                        </a>
                      )}
                    </div>
                  </div>
                ) : (
                  <iframe
                    src={`${fileUrl}#toolbar=0&navpanes=0&scrollbar=1&zoom=FitH`}
                    className="w-full h-full border-none"
                    title={title}
                  />
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="bg-[#f5f5f0] p-3 sm:p-6 border-t border-[#0a0100]/10 flex-shrink-0">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs uppercase tracking-widest text-[#0a0100]/60 font-erstoria">
                  {eyebrow}
                </span>

                <div className="flex items-center gap-1">
                  {showDownload && (
                    <button
                      type="button"
                      onClick={handleDownload}
                      className="focus-ring group flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[#0a0100] hover:bg-[#e61f00] text-white transition-all duration-300 cursor-pointer active:scale-95"
                      title={downloadLabel}
                      aria-label={downloadLabel}
                    >
                      <Download size={16} className="sm:w-5 sm:h-5" />
                    </button>
                  )}

                  <button
                    type="button"
                    ref={closeRef}
                    onClick={onClose}
                    className="focus-ring group flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[#0a0100] hover:bg-[#e61f00] text-white transition-all duration-300 cursor-pointer active:scale-95"
                    aria-label="Close"
                  >
                    <X size={16} className="sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
};

export default PdfModal;

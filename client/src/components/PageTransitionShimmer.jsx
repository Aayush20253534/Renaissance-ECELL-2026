import React, { useEffect, useState, useRef, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Custom hook to trigger seamless page transitions imperatively
 */
export function useSeamlessNavigate() {
  const navigate = useNavigate();
  return useCallback(
    (to, options = {}) => {
      window.dispatchEvent(
        new CustomEvent("seamless-navigate", { detail: { to, options } })
      );
    },
    []
  );
}

export default function PageTransitionShimmer() {
  const location = useLocation();
  const navigate = useNavigate();
  const [curtainState, setCurtainState] = useState("idle"); // "idle" | "veiling" | "holding" | "unveiling"
  const isTransitioningRef = useRef(false);
  const prevPathRef = useRef(location.pathname);

  // Smooth atmospheric cloud mist transition (~700ms total)
  const startTransition = useCallback(
    (targetPath) => {
      if (isTransitioningRef.current) return;
      isTransitioningRef.current = true;

      setCurtainState("veiling");

      setTimeout(() => {
        if (targetPath && targetPath !== location.pathname) {
          navigate(targetPath);
        }
        window.dispatchEvent(new CustomEvent("reset-artifacts"));
        setCurtainState("holding");

        setTimeout(() => {
          setCurtainState("unveiling");

          setTimeout(() => {
            setCurtainState("idle");
            isTransitioningRef.current = false;
          }, 350);
        }, 250);
      }, 300);
    },
    [location.pathname, navigate]
  );

  // Intercept internal Link / <a> clicks at capture phase
  useEffect(() => {
    const handleGlobalClick = (e) => {
      const anchor = e.target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      if (
        href.startsWith("http://") ||
        href.startsWith("https://") ||
        href.startsWith("//") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("#") ||
        anchor.target === "_blank" ||
        e.ctrlKey ||
        e.metaKey ||
        e.shiftKey ||
        e.altKey ||
        e.defaultPrevented
      ) {
        return;
      }

      e.preventDefault();
      e.stopPropagation();
      startTransition(href);
    };

    document.addEventListener("click", handleGlobalClick, true);
    return () => document.removeEventListener("click", handleGlobalClick, true);
  }, [startTransition]);

  // Trigger transition when route changes (if not already triggered by click)
  useEffect(() => {
    if (prevPathRef.current !== location.pathname) {
      prevPathRef.current = location.pathname;
      if (!isTransitioningRef.current) {
        isTransitioningRef.current = true;
        setCurtainState("veiling");
        setTimeout(() => {
          setCurtainState("holding");
          setTimeout(() => {
            setCurtainState("unveiling");
            setTimeout(() => {
              setCurtainState("idle");
              isTransitioningRef.current = false;
            }, 350);
          }, 250);
        }, 300);
      }
    }
  }, [location.pathname]);

  // Listen for programmatic transition events
  useEffect(() => {
    const handleProgrammaticNav = (e) => {
      const { to } = e.detail || {};
      if (to) {
        startTransition(to);
      }
    };

    window.addEventListener("seamless-navigate", handleProgrammaticNav);
    return () => window.removeEventListener("seamless-navigate", handleProgrammaticNav);
  }, [startTransition]);

  const isVisible = curtainState !== "idle";

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[999999] pointer-events-auto overflow-hidden">
          {/* Left Cloud Mist Panel Sweep */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{
              x: curtainState === "unveiling" ? "-100%" : "0%",
            }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="absolute top-0 left-0 w-1/2 h-full bg-[#020610]/95 backdrop-blur-2xl border-r border-[#C5A25F]/30"
          >
            {/* Atmospheric 2D Cloud Fog Texture */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(244,235,217,0.12)_0%,transparent_70%)] animate-cloud-drift pointer-events-none" />
          </motion.div>

          {/* Right Cloud Mist Panel Sweep */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{
              x: curtainState === "unveiling" ? "100%" : "0%",
            }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="absolute top-0 right-0 w-1/2 h-full bg-[#020610]/95 backdrop-blur-2xl border-l border-[#C5A25F]/30"
          >
            {/* Atmospheric 2D Cloud Fog Texture */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.12)_0%,transparent_70%)] animate-cloud-drift-reverse pointer-events-none" />
          </motion.div>

          {/* Center Emblem & Gold Accent */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{
                scale: curtainState === "unveiling" ? 1.05 : 1,
                opacity: curtainState === "unveiling" ? 0 : 1,
              }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="flex flex-col items-center px-4 text-center select-none"
            >
              {/* Transparent Emblem Logo */}
              <div className="w-48 sm:w-64 md:w-[300px] mb-3 flex items-center justify-center">
                <img
                  src="/renaissance-logo-clean.png"
                  alt="Renaissance 10th Edition"
                  className="w-full h-auto object-contain filter drop-shadow-[0_0_30px_rgba(197,162,95,0.7)]"
                />
              </div>

              {/* Gold Divider Line */}
              <div className="w-36 sm:w-56 h-[1.5px] bg-gradient-to-r from-transparent via-[#C5A25F] to-transparent my-2 shadow-[0_0_12px_#C5A25F]" />

              {/* Sub-caption */}
              <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-[0.35em] text-transparent bg-clip-text bg-gradient-to-r from-[#F4EBD9] via-[#E6CA85] to-[#C5A25F]">
                10TH EDITION • THE GREAT VOYAGE
              </span>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}

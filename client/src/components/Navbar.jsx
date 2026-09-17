import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";
import {
  Compass,
  Anchor,
  Calendar,
  Users,
  Image,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    {
      name: "Home",
      path: "/",
      icon: Compass,
    },
    {
      name: "Sponsors",
      path: "/sponsors",
      icon: Anchor,
    },
    {
      name: "Events",
      path: "/events",
      icon: Calendar,
    },
    {
      name: "Teams",
      path: "/teams",
      icon: Users,
    },
    {
      name: "Gallery",
      path: "/gallery",
      icon: Image,
    },
  ];

  // Lock page scrolling while the mobile navigation is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Automatically close mobile navigation after route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (path) => {
    if (path === "/") {
      return (
        location.pathname === "/" ||
        location.pathname === "/udbhav"
      );
    }

    return (
      location.pathname.startsWith(path) ||
      location.pathname.startsWith(`/udbhav${path}`)
    );
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-white/10 px-4 py-4 sm:px-6">
        {/* Seamless ambient marine gradient */}
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-28 bg-gradient-to-b from-[#020610]/80 via-[#020610]/30 to-transparent" />

        <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between">
          {/* Renaissance Logo */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3"
            aria-label="Renaissance Home"
          >
            <img
              src="/renaissance-logo-clean.png"
              alt="Renaissance Logo"
              onError={(event) => {
                event.currentTarget.src =
                  "/renaissance-logo-transparent.png";
              }}
              className="h-9 sm:h-10 w-auto object-contain bg-slate-200/80 backdrop-blur-md border border-slate-300/50 rounded-full px-4 py-1.5 shadow-md hover:bg-slate-100 transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-4 rounded-full border border-white/15 bg-[#030d1c]/80 px-5 py-2 font-light text-xs tracking-widest shadow-[0_4px_24px_rgba(0,0,0,0.6)] backdrop-blur-xl md:flex">
            {navLinks.map((link) => {
              const current = isActive(link.path);
              const Icon = link.icon;

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`inline-flex cursor-pointer items-center gap-1.5 transition-all duration-300 ${
                    current
                      ? "rounded-full border border-[#C5A25F]/60 bg-[#C5A25F]/25 px-3.5 py-1 font-extrabold text-[#F4EBD9] shadow-[0_0_16px_rgba(197,162,95,0.4)] drop-shadow-[0_0_8px_rgba(197,162,95,0.5)]"
                      : "px-2 py-1 font-semibold text-[#94A3B8] hover:text-[#F8FAFC]"
                  }`}
                >
                  <Icon
                    className={`h-3.5 w-3.5 ${
                      current
                        ? "text-[#C5A25F]"
                        : "opacity-90"
                    }`}
                    strokeWidth={1.8}
                  />

                  <span>{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Desktop Sign In */}
          <div className="hidden items-center md:flex">
            <Link
              to="/register"
              className="flex items-center gap-2 rounded-full border border-[#C5A25F]/60 bg-gradient-to-r from-[#F4EBD9] via-[#EBDDC8] to-[#C5A25F]/30 px-5 py-2 font-mono text-xs font-bold tracking-wider text-[#0C2B3D] transition-all duration-300 hover:scale-[1.03] hover:border-[#C5A25F] hover:shadow-[0_0_20px_rgba(197,162,95,0.45)]"
            >
              <span>SIGN IN</span>

              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0C2B3D] p-1 text-[#F4EBD9] shadow-sm">
                <FiArrowUpRight
                  size={12}
                  className="stroke-[3]"
                />
              </span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() =>
              setIsOpen((previous) => !previous)
            }
            aria-label={
              isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isOpen}
            className="relative z-50 rounded-xl border border-[#C5A25F]/40 bg-[#040f21]/80 p-2.5 text-[#F4EBD9] shadow-[0_0_15px_rgba(197,162,95,0.15)] transition-all hover:text-[#C5A25F] active:scale-95 md:hidden"
          >
            {isOpen ? (
              <FiX
                size={22}
                className="text-[#C5A25F]"
              />
            ) : (
              <FiMenu size={22} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Animated Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col justify-between overflow-y-auto bg-[#020610]/95 p-6 pb-8 pt-24 backdrop-blur-2xl md:hidden"
          >
            {/* Gold Ambient Glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-[#C5A25F]/10 blur-[90px]" />

            <div className="relative z-10 my-auto w-full max-w-sm mx-auto space-y-6">
              {/* Mobile Menu Heading */}
              <div className="mb-6 text-center">
                <span className="mb-1 block font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#C5A25F]">
                  Renaissance X Edition
                </span>

                <h2 className="text-xl font-bold tracking-tight text-white">
                  Expedition Navigation
                </h2>
              </div>

              {/* Mobile Navigation Items */}
              <div className="space-y-2.5">
                {navLinks.map((link, index) => {
                  const current = isActive(link.path);
                  const Icon = link.icon;

                  return (
                    <motion.div
                      key={link.path}
                      initial={{
                        opacity: 0,
                        y: 15,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay:
                          index * 0.05 + 0.1,
                        duration: 0.2,
                      }}
                    >
                      <Link
                        to={link.path}
                        onClick={() =>
                          setIsOpen(false)
                        }
                        className={`flex w-full items-center justify-between rounded-2xl border px-5 py-3.5 font-mono text-xs uppercase tracking-wider transition-all duration-300 ${
                          current
                            ? "border-[#C5A25F]/60 bg-gradient-to-r from-[#C5A25F]/30 via-[#C5A25F]/15 to-transparent font-bold text-[#F4EBD9] shadow-[0_0_20px_rgba(197,162,95,0.25)]"
                            : "border-white/10 bg-[#040f21]/60 text-[#94A3B8] hover:border-white/20 hover:text-white"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`rounded-lg p-1.5 ${
                              current
                                ? "bg-[#C5A25F] text-[#0C2B3D]"
                                : "bg-white/5 text-[#94A3B8]"
                            }`}
                          >
                            <Icon
                              className="h-4 w-4"
                              strokeWidth={1.8}
                            />
                          </div>

                          <span className="text-sm font-semibold">
                            {link.name}
                          </span>
                        </div>

                        {current && (
                          <span className="h-2 w-2 rounded-full bg-[#C5A25F] shadow-[0_0_8px_#C5A25F]" />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Mobile Sign In CTA */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.35,
                  duration: 0.2,
                }}
                className="pt-4"
              >
                <Link
                  to="/register"
                  onClick={() =>
                    setIsOpen(false)
                  }
                  className="flex w-full items-center justify-center gap-2 rounded-2xl border border-[#C5A25F]/60 bg-gradient-to-r from-[#F4EBD9] via-[#EBDDC8] to-[#C5A25F] py-4 font-mono text-xs font-extrabold uppercase tracking-widest text-[#0C2B3D] shadow-[0_0_25px_rgba(197,162,95,0.4)] transition-all active:scale-[0.98]"
                >
                  <span>SIGN IN TO ENLIST</span>

                  <FiArrowUpRight
                    size={16}
                    className="stroke-[3]"
                  />
                </Link>
              </motion.div>
            </div>

            {/* Mobile Footer */}
            <div className="relative z-10 mx-auto w-full max-w-sm border-t border-white/10 pt-4 text-center">
              <p className="font-mono text-[10px] uppercase tracking-widest text-[#94A3B8]">
                E-CELL MNNIT • ALL RIGHTS RESERVED
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
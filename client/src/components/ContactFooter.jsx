import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Mail, MapPin, Compass } from "lucide-react";

export default function ContactFooter() {
  return (
    <footer className="relative z-30 bg-[#020610] border-t border-[#38BDF8]/20 pt-16 pb-12 px-6 text-[#94A3B8] shadow-[0_-20px_60px_rgba(0,0,0,0.95)] select-none">
      {/* Seamless Ocean Gradient Backdrop Guard */}
      <div className="absolute -top-32 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-[#020610]/80 to-[#020610] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 mb-12 text-xs relative z-10">
        {/* Left Column (5 Cols): Logo, Description & Social Handles */}
        <div className="md:col-span-5 flex flex-col items-start gap-4">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/renaissance-logo-clean.png"
              alt="Renaissance 10th Edition Logo"
              onError={(e) => {
                e.currentTarget.src = "/renaissance-logo-transparent.png";
              }}
              className="h-10 w-auto object-contain filter drop-shadow-[0_0_5px_rgba(255,255,255,0.95)] drop-shadow-[0_0_15px_rgba(255,255,255,0.75)] transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          <p className="text-[#CBD5E1] text-xs font-light leading-relaxed max-w-sm">
            Renaissance is the annual flagship entrepreneurship summit of MNNIT Allahabad, charting new horizons in deep tech, venture creation, and innovation.
          </p>

          {/* Social Handles */}
          <div className="flex items-center gap-3 mt-2">
            <a
              href="https://www.linkedin.com/company/ecellmnnit"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full border border-[#38BDF8]/30 bg-[#040f21]/80 flex items-center justify-center text-[#38BDF8] hover:bg-[#38BDF8] hover:text-[#020610] hover:border-[#38BDF8] transition-all duration-300 shadow-[0_0_15px_rgba(56,189,248,0.2)]"
            >
              <FaLinkedinIn className="w-4 h-4" />
            </a>

            <a
              href="https://www.instagram.com/ecellmnnit"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full border border-[#38BDF8]/30 bg-[#040f21]/80 flex items-center justify-center text-[#38BDF8] hover:bg-[#38BDF8] hover:text-[#020610] hover:border-[#38BDF8] transition-all duration-300 shadow-[0_0_15px_rgba(56,189,248,0.2)]"
            >
              <FaInstagram className="w-4 h-4" />
            </a>

            <a
              href="https://twitter.com/ecellmnnit"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="w-9 h-9 rounded-full border border-[#38BDF8]/30 bg-[#040f21]/80 flex items-center justify-center text-[#38BDF8] hover:bg-[#38BDF8] hover:text-[#020610] hover:border-[#38BDF8] transition-all duration-300 shadow-[0_0_15px_rgba(56,189,248,0.2)]"
            >
              <FaTwitter className="w-4 h-4" />
            </a>

            <a
              href="https://youtube.com/@ecellmnnit"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-9 h-9 rounded-full border border-[#38BDF8]/30 bg-[#040f21]/80 flex items-center justify-center text-[#38BDF8] hover:bg-[#38BDF8] hover:text-[#020610] hover:border-[#38BDF8] transition-all duration-300 shadow-[0_0_15px_rgba(56,189,248,0.2)]"
            >
              <FaYoutube className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Middle Column (3 Cols): Navigation */}
        <div className="md:col-span-3 flex flex-col gap-3">
          <h4 className="font-mono text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2">
            <Compass className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>Navigation</span>
          </h4>
          <div className="grid grid-cols-2 gap-2 text-xs font-medium">
            <Link to="/" className="text-[#94A3B8] hover:text-[#38BDF8] transition-colors">Home</Link>
            <Link to="/events" className="text-[#94A3B8] hover:text-[#38BDF8] transition-colors">Events</Link>
            <Link to="/sponsors" className="text-[#94A3B8] hover:text-[#38BDF8] transition-colors">Sponsors</Link>
            <Link to="/teams" className="text-[#94A3B8] hover:text-[#38BDF8] transition-colors">Teams</Link>
            <Link to="/gallery" className="text-[#94A3B8] hover:text-[#38BDF8] transition-colors">Gallery</Link>
            <Link to="/register" className="text-[#38BDF8] font-bold hover:underline">Register</Link>
          </div>
        </div>

        {/* Right Column (4 Cols): Contact & Location */}
        <div className="md:col-span-4 flex flex-col gap-3">
          <h4 className="font-mono text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>Summit Headquarters</span>
          </h4>
          <div className="flex items-start gap-2.5 text-xs text-[#CBD5E1]">
            <MapPin className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
            <p>E-Cell, Motilal Nehru National Institute of Technology (MNNIT) Allahabad, Prayagraj, UP - 211004</p>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#38BDF8] font-mono font-semibold mt-1">
            <Mail className="w-3.5 h-3.5" />
            <a href="mailto:ecell@mnnit.ac.in" className="hover:underline">ecell@mnnit.ac.in</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono relative z-10">
        <p className="text-[#64748B]">
          © 2026 Renaissance (10th Edition) • E-Cell MNNIT Allahabad. All rights reserved.
        </p>
        <span className="text-[#38BDF8]/80 uppercase tracking-widest font-semibold">
          10th Edition • Venture Beyond Known
        </span>
      </div>
    </footer>
  );
}

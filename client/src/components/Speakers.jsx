import React from "react";
import { SPEAKERS_DATA } from "../data/speakersData";

export default function Speakers() {
  return (
    <section className="py-24 px-6 bg-transparent relative overflow-hidden border-t border-[#C5A25F]/15">
      {/* 2D Atmospheric Cloud Fog Overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(244,235,217,0.12)_0%,rgba(197,162,95,0.06)_50%,transparent_80%)] blur-3xl animate-cloud-drift" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header with Cloud Glass Backdrop */}
        <div className="text-center max-w-2xl mx-auto mb-16 p-6 sm:p-8 rounded-3xl bg-[#0c2b3d]/50 backdrop-blur-xl border border-[#C5A25F]/30 shadow-2xl">
          <span className="inline-block px-3 py-1 rounded-full text-[10px] font-mono tracking-widest text-[#C5A25F] bg-[#0c2b3d]/80 border border-[#C5A25F]/30 uppercase mb-3">
            Renaissance Keynotes
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F4EBD9] via-[#E6CA85] to-[#C5A25F] tracking-wide mb-3 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Distinguished Speakers
          </h2>
          <div className="w-16 h-[2px] bg-[#C5A25F] mx-auto mb-4" />
          <p className="font-montserrat text-xs text-[#F4EBD9] leading-relaxed drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
            Eminent pioneers, founders, and leaders who have steered discussions across previous voyages of Renaissance.
          </p>
        </div>

        {/* Structured Symmetrical 3x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto justify-center">
          {SPEAKERS_DATA.map((speaker, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-[#0c2b3d]/50 backdrop-blur-xl border border-[#C5A25F]/30 flex flex-col items-center text-center justify-center shadow-[0_15px_35px_rgba(0,0,0,0.8)] transition-all duration-300 hover:border-[#C5A25F]/60 hover:-translate-y-1 group"
            >
              {/* Avatar with Nautical Gold Frame */}
              <div className="relative w-28 h-28 rounded-full p-1 bg-gradient-to-b from-[#C5A25F]/40 to-transparent border border-[#C5A25F]/30 shadow-md group-hover:scale-105 transition-transform duration-300">
                <img
                  src={speaker.image}
                  alt="Guest Speaker"
                  className="w-full h-full rounded-full object-cover bg-[#050B14]"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder-speaker.svg";
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

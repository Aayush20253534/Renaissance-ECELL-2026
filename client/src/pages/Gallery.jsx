import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactFooter from "../components/ContactFooter";

const MASONRY_IMAGES = [
  { id: 1, src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1600", aspect: "aspect-[4/5]", delay: 0.1 },
  { id: 2, src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1600", aspect: "aspect-[3/4]", delay: 0.2 },
  { id: 3, src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1600", aspect: "aspect-[4/3]", delay: 0.15 },
  { id: 4, src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1600", aspect: "aspect-[4/5]", delay: 0.25 },
  { id: 5, src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1600", aspect: "aspect-square", delay: 0.1 },
  { id: 6, src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600", aspect: "aspect-[16/9]", delay: 0.2 },
  { id: 7, src: "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?auto=format&fit=crop&q=80&w=1600", aspect: "aspect-[3/4]", delay: 0.3 },
  { id: 8, src: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=1600", aspect: "aspect-[4/5]", delay: 0.15 },
  { id: 9, src: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80&w=1600", aspect: "aspect-square", delay: 0.25 },
  { id: 10, src: "https://images.unsplash.com/photo-1533174000243-7826359f1c7d?auto=format&fit=crop&q=80&w=1600", aspect: "aspect-[3/4]", delay: 0.1 },
  { id: 11, src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1600", aspect: "aspect-[16/9]", delay: 0.3 },
  { id: 12, src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1600", aspect: "aspect-[4/5]", delay: 0.15 },
  { id: 13, src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=1600", aspect: "aspect-[3/4]", delay: 0.2 },
  { id: 14, src: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80&w=1600", aspect: "aspect-square", delay: 0.1 },
  { id: 15, src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1600", aspect: "aspect-[4/5]", delay: 0.25 }
];

const PAST_SPEAKERS = [
  { id: 1, name: "ALEXANDER WRIGHT", designation: "CHIEF INNOVATION OFFICER", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" },
  { id: 2, name: "SARAH CHEN", designation: "AI RESEARCH LEAD", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" },
  { id: 3, name: "MARCUS JOHNSON", designation: "STARTUP VISIONARY", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800" },
  { id: 4, name: "ELENA RODRIGUEZ", designation: "GLOBAL STRATEGY DIRECTOR", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800" },
  { id: 5, name: "DAVID KIM", designation: "TECH ENTREPRENEUR", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <main className="relative w-full min-h-screen bg-fixed bg-gradient-to-br from-[#9AC8DB] via-[#D3E3DD] to-[#F4EBD9] text-[#0C2B3D] overflow-x-hidden font-montserrat selection:bg-[#C5A25F] selection:text-white">
      
      <style>{`
        @keyframes marqueeLeftToRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee-ltr {
          display: flex;
          width: max-content;
          animation: marqueeLeftToRight 50s linear infinite;
        }
        .animate-marquee-ltr:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Intro Header */}
      <section className="relative z-10 w-full min-h-[60vh] flex flex-col justify-end px-6 lg:px-24 pb-24 overflow-hidden">
        {/* Ocean Image Background fading into transparent */}
        <div className="absolute inset-0 pointer-events-none -z-10 [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)]">
          <img
            src="/bg_images/events.png"
            alt="Renaissance Ocean Voyage"
            aria-hidden="true"
            className="h-full w-full object-cover object-top opacity-60 mix-blend-multiply"
            draggable="false"
          />
        </div>
        <div className="overflow-hidden">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
            className="font-cinzel text-6xl md:text-[8vw] font-extrabold text-[#0C2B3D] leading-none uppercase tracking-tight"
          >
            Archive
          </motion.h1>
        </div>
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
          className="mt-8 flex items-center gap-6"
        >
          <div className="h-px w-24 sm:w-48 bg-[#C5A25F] opacity-60"></div>
          <p className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-[#8E6422] uppercase font-bold">
            A visual documentation of past expeditions
          </p>
        </motion.div>
      </section>

      {/* Past Speakers Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full py-16 sm:py-24 overflow-hidden"
      >
        <div className="px-6 lg:px-24 mb-16 text-center sm:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-block"
          >
            <h2 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0C2B3D] tracking-tight uppercase">
              Past Speakers
            </h2>
            <div className="h-[2px] w-1/2 sm:w-2/3 bg-[#C5A25F] opacity-80 mt-4 mx-auto sm:mx-0"></div>
          </motion.div>
        </div>

        {/* Infinite Marquee Left to Right */}
        <div className="w-full overflow-hidden relative">
          <div className="animate-marquee-ltr py-8">
            {[...PAST_SPEAKERS, ...PAST_SPEAKERS, ...PAST_SPEAKERS, ...PAST_SPEAKERS].map((speaker, idx) => (
              <div key={`${speaker.id}-${idx}`} className="w-64 sm:w-80 flex-shrink-0 mx-4 sm:mx-8 group cursor-pointer">
                
                {/* Image Container with Offset Square */}
                <div className="relative w-full aspect-square mb-6">
                  {/* Solid background offset (Blue matching theme text color) */}
                  <div className="absolute top-4 left-4 sm:top-6 sm:left-6 w-full h-full bg-[#0C2B3D] transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2" />
                  
                  {/* Portrait */}
                  <div className="relative w-full h-full overflow-hidden bg-[#F4EBD9]">
                    <img 
                      src={speaker.img} 
                      alt={speaker.name} 
                      className="w-full h-full object-cover filter grayscale contrast-125 brightness-90 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]" 
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[#C5A25F]/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
                
                {/* Text Content */}
                <div className="pl-4 sm:pl-5 border-l-2 border-[#C5A25F] group-hover:border-[#0C2B3D] transition-colors duration-500">
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#0C2B3D] uppercase tracking-wide leading-tight">
                    {speaker.name}
                  </h3>
                  <p className="font-mono text-[10px] sm:text-xs text-[#8E6422] uppercase tracking-widest mt-1.5 font-bold">
                    {speaker.designation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Masonry Grid Layout (Archive) */}
      <section className="relative z-10 w-full px-3 sm:px-8 lg:px-24 pb-32">
        <div className="px-3 sm:px-0 mb-12 sm:mb-16 text-center sm:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-block"
          >
            <h2 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0C2B3D] tracking-tight uppercase">
              Event Photos
            </h2>
            <div className="h-[2px] w-1/2 sm:w-2/3 bg-[#C5A25F] opacity-80 mt-4 mx-auto sm:mx-0"></div>
          </motion.div>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 sm:gap-6">
          {MASONRY_IMAGES.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                ease: [0.19, 1, 0.22, 1],
                delay: img.delay 
              }}
              layoutId={`gallery-img-${img.id}`}
              onClick={() => setSelectedImage(img)}
              className={`relative mb-3 sm:mb-6 overflow-hidden rounded-xl break-inside-avoid shadow-lg hover:shadow-2xl transition-shadow duration-500 bg-[#E8D7C2]/30 ${img.aspect} group cursor-pointer`}
            >
              <img
                src={img.src}
                alt={`Archive capture ${index + 1}`}
                className="w-full h-full object-cover filter contrast-[1.05] brightness-[1.02] transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105"
                loading="lazy"
              />
              {/* Subtle ambient overlay to blend with theme */}
              <div className="absolute inset-0 bg-[#0A2239] opacity-[0.03] mix-blend-overlay pointer-events-none group-hover:opacity-0 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </section>

      <ContactFooter />

      {/* Click-to-Zoom Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0C2B3D]/90 backdrop-blur-md p-4 sm:p-8 pt-24 cursor-zoom-out"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-24 right-6 sm:top-28 sm:right-8 lg:right-12 z-[110] flex items-center justify-center w-12 h-12 rounded-full bg-[#F4EBD9]/10 text-[#F4EBD9] hover:bg-[#F4EBD9]/20 transition-colors border border-[#F4EBD9]/20 shadow-lg cursor-pointer"
            >
              <svg width="18" height="18" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 1L1 13M1 1L13 13" />
              </svg>
            </button>

            <motion.div 
              layoutId={`gallery-img-${selectedImage.id}`}
              className="relative w-full max-w-5xl max-h-[75vh] flex items-center justify-center mt-12"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt="Enlarged Archive Capture"
                className="w-auto h-auto max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl filter contrast-[1.05]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

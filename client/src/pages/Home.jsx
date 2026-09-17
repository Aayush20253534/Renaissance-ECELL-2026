import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Navigation,
  Wind,
  UserCheck,
  Clock,
  Compass,
  Sparkles,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { useSmoothScroll } from "../lib/smoothScroll";
import ContactFooter from "../components/ContactFooter";

gsap.registerPlugin(ScrollTrigger, Draggable);

const EVENTS = [
  {
    id: "01",
    name: "Deep Sea Coding",
    category: "Flagship 36-Hour Sprint",
    time: "10:00 AM • Day 1",
    desc: "Build autonomous subsea systems, AI agents, and deep-tech prototypes in a 36-hour continuous build sprint.",
    prize: "₹2,50,000 Pool",
  },
  {
    id: "02",
    name: "Pitchers 10.0",
    category: "Venture Capital Arena",
    time: "02:00 PM • Day 1",
    desc: "Present your high-impact startup to top syndicate investors, angel funds, and tier-1 venture cartographers.",
    prize: "₹5,00,000 Pool",
  },
  {
    id: "03",
    name: "Case Odyssey",
    category: "Corporate Strategy Battle",
    time: "10:00 AM • Day 2",
    desc: "Solve high-stakes strategic challenges and market disruption problems presented by global corporate leaders.",
    prize: "₹1,50,000 Pool",
  },
];

const CURRENT_SPONSORS = [
  { name: "Bank of Baroda", image: "/sponsors/Bank-of-Baroda-logo.jpg" },
  { name: "Royal Enfield", image: "/sponsors/Royal_Enfield_Logo_full.png" },
  { name: "Campa Cola", image: "/sponsors/campacola.jpeg" },
  { name: "D2D", image: "/sponsors/D2D LOGO (1).png" },
  { name: "Summit Armada", image: "/sponsors/LOGO.png" },
  { name: "Voyage Guild", image: "/sponsors/unnamed.png" },
];

const PAST_SPONSORS = [
  { name: "Sponsor 1", image: "/sponsors/832d34dc-25b4-4e44-a8a3-3fcd1edea9a6.png" },
  { name: "Sponsor 2", image: "/sponsors/280276600_833963994673566_1134578587338969714_n.jpg" },
  { name: "Sponsor 3", image: "/sponsors/download.jpeg" },
  { name: "Sponsor 4", image: "/sponsors/images (2).jpeg" },
  { name: "Sponsor 5", image: "/sponsors/images (3).png" },
  { name: "Sponsor 6", image: "/sponsors/images (4).png" },
  { name: "Sponsor 7", image: "/sponsors/images (5).png" },
  { name: "Sponsor 8", image: "/sponsors/images (6).png" },
];

const SPEAKERS = [
  { id: 1, label: "Speaker 01" },
  { id: 2, label: "Speaker 02" },
  { id: 3, label: "Speaker 03" },
  { id: 4, label: "Speaker 04" },
];

export default function Home() {
  const smoothScroll = useSmoothScroll();

  const heroSectionRef = useRef(null);
  const eventsSectionRef = useRef(null);
  const wheelContainerRef = useRef(null);
  const wheelImgRef = useRef(null);
  const eventsHeaderRef = useRef(null);
  const visualsRef = useRef([]);
  const eventsFooterRef = useRef(null);

  // About Section Refs
  const aboutSectionRef = useRef(null);
  const aboutAuraRef = useRef(null);
  const aboutTitleRef = useRef(null);
  const aboutDescRef = useRef(null);
  const statCard1Ref = useRef(null);
  const statCard2Ref = useRef(null);
  const statCard3Ref = useRef(null);
  const statCard4Ref = useRef(null);
  const aboutCtaRef = useRef(null);

  const speakersSectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // -------------------------------------------------------------
      // Section 2: About Renaissance (Shorter Pinned Parallax Timeline +=1500)
      // -------------------------------------------------------------
      if (aboutSectionRef.current) {
        const aboutTl = gsap.timeline({
          scrollTrigger: {
            trigger: aboutSectionRef.current,
            start: "top top",
            end: "+=1500",
            pin: true,
            scrub: 0.8,
          },
        });

        // 1. Atmospheric Cloud Glow Aura Expands with scroll
        if (aboutAuraRef.current) {
          aboutTl.fromTo(
            aboutAuraRef.current,
            { scale: 0.7, opacity: 0.2 },
            { scale: 1.25, opacity: 0.75, ease: "none" },
            0
          );
        }

        // 2. Giant "About Renaissance" Title reveals
        if (aboutTitleRef.current) {
          aboutTl.fromTo(
            aboutTitleRef.current,
            { opacity: 0, scale: 0.7 },
            { opacity: 1, scale: 1.15, ease: "power2.out" },
            0.1
          );
        }

        // 3. Detailed Description text floats up
        if (aboutDescRef.current) {
          aboutTl.fromTo(
            aboutDescRef.current,
            { opacity: 0, y: 50, scale: 0.95 },
            { opacity: 1, y: 0, scale: 1.0, ease: "power2.out" },
            0.25
          );
        }

        // 4. Stat Cards drop down sequentially
        if (statCard1Ref.current) {
          aboutTl.fromTo(
            statCard1Ref.current,
            { opacity: 0, y: -60, scale: 0.88 },
            { opacity: 1, y: 0, scale: 1.0, ease: "power2.out" },
            0.48
          );
        }

        if (statCard2Ref.current) {
          aboutTl.fromTo(
            statCard2Ref.current,
            { opacity: 0, y: -60, scale: 0.88 },
            { opacity: 1, y: 0, scale: 1.0, ease: "power2.out" },
            0.58
          );
        }

        if (statCard3Ref.current) {
          aboutTl.fromTo(
            statCard3Ref.current,
            { opacity: 0, y: -60, scale: 0.88 },
            { opacity: 1, y: 0, scale: 1.0, ease: "power2.out" },
            0.68
          );
        }

        if (statCard4Ref.current) {
          aboutTl.fromTo(
            statCard4Ref.current,
            { opacity: 0, y: -60, scale: 0.88 },
            { opacity: 1, y: 0, scale: 1.0, ease: "power2.out" },
            0.78
          );
        }

        if (aboutCtaRef.current) {
          aboutTl.fromTo(
            aboutCtaRef.current,
            { opacity: 0, y: 25 },
            { opacity: 1, y: 0, ease: "power2.out" },
            0.82
          );
        }

        // 5. Comfortable hold phase so full view stays pinned before unlocking
        aboutTl.to({}, { duration: 0.4 });
      }

      // -------------------------------------------------------------
      // Section 4: Featured Events (Unified Pinned Parallax Timeline +=2800)
      // -------------------------------------------------------------
      if (eventsSectionRef.current) {
        if (wheelImgRef.current) {
          gsap.set(wheelImgRef.current, { transformOrigin: "50% 50%" });
        }

        const mainTl = gsap.timeline({
          scrollTrigger: {
            trigger: eventsSectionRef.current,
            start: "top top",
            end: "+=2800",
            pin: true,
            anticipatePin: 1,
            pinSpacing: true,
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        });

        // Rotate pirate wheel smoothly across entire pin duration
        if (wheelImgRef.current) {
          mainTl.to(
            wheelImgRef.current,
            { rotation: 720, ease: "none", duration: 10 },
            0
          );
        }

        const totalEvents = EVENTS.length;
        const stepDuration = 3.0;

        EVENTS.forEach((_, idx) => {
          const cardEl = visualsRef.current[idx];
          if (!cardEl) return;

          const startTime = idx * stepDuration;

          // Single Unified Event Challenge Block Fades In & Scales Up
          mainTl.fromTo(
            cardEl,
            { opacity: 0, scale: 0.9, y: 40, pointerEvents: "none" },
            { opacity: 1, scale: 1.0, y: 0, pointerEvents: "auto", duration: 0.7, ease: "power2.out" },
            startTime
          );

          // Solid Hold phase so user can view & interact with the single flagship card
          mainTl.to(cardEl, { opacity: 1, duration: 1.5 }, startTime + 0.7);

          // Exit transition for next event (if not last)
          if (idx < totalEvents - 1) {
            mainTl.to(
              cardEl,
              {
                opacity: 0,
                scale: 0.94,
                y: -30,
                pointerEvents: "none",
                duration: 0.6,
                ease: "power2.in",
              },
              startTime + 2.2
            );
          }
        });
      }

      // -------------------------------------------------------------
      // Section 6: Keynote Speakers (Automatic Scroll Trigger Entrance)
      // -------------------------------------------------------------
      if (speakersSectionRef.current) {
        const speakersHeaderEl = speakersSectionRef.current.querySelector(".speakers-header");
        const speakerCardEls = speakersSectionRef.current.querySelectorAll(".speaker-card-item");

        const speakersTl = gsap.timeline({
          scrollTrigger: {
            trigger: speakersSectionRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        if (speakersHeaderEl) {
          speakersTl.fromTo(
            speakersHeaderEl,
            { opacity: 0, y: 35, scale: 0.95 },
            { opacity: 1, y: 0, scale: 1.0, duration: 0.6, ease: "power2.out" }
          );
        }

        if (speakerCardEls.length > 0) {
          speakersTl.fromTo(
            speakerCardEls,
            { opacity: 0, y: 50, scale: 0.92 },
            { opacity: 1, y: 0, scale: 1.0, duration: 0.5, stagger: 0.12, ease: "power2.out" },
            "-=0.3"
          );
        }
      }
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="relative z-10 w-full text-white selection:bg-[#38BDF8] selection:text-[#020610]">
      {/* ============================================================ */}
      {/* 1. HERO SECTION (100vh)                                      */}
      {/* ============================================================ */}
      <section
        ref={heroSectionRef}
        className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 pt-20 pb-12 text-center overflow-visible mx-auto"
      >
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto overflow-visible my-auto">
          {/* Centered Transparent Emblem Logo */}
          <div className="w-full max-w-xl sm:max-w-2xl md:max-w-3xl mb-6 sm:mb-8 flex items-center justify-center overflow-visible">
            <img
              src="/renaissance-logo-clean.png"
              alt="Renaissance 10th Edition Emblem"
              onError={(e) => {
                e.currentTarget.src = "/renaissance-logo-transparent.png";
              }}
              className="w-full h-auto object-contain filter drop-shadow-[0_15px_35px_rgba(0,0,0,0.9)] drop-shadow-[0_0_30px_rgba(56,189,248,0.35)] select-none pointer-events-none transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>

          <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.32em] text-[#38BDF8]/90 mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            E-Cell MNNIT Allahabad • Annual Entrepreneurship Summit
          </p>

          {/* Action CTAs: Register Now + Explore Events */}
          <div className="overflow-visible flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 w-full max-w-xs sm:max-w-none mx-auto">
            <Link
              to="/register"
              className="group relative flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-[#F4EBD9] via-[#EBDDC8] to-[#C5A25F] text-[#0C2B3D] font-bold text-xs uppercase tracking-widest hover:shadow-[0_0_30px_rgba(197,162,95,0.6)] transition-all duration-300 transform hover:scale-[1.03] overflow-visible cursor-pointer border border-[#C5A25F]/60 w-full sm:w-auto"
            >
              <UserCheck className="w-4 h-4 text-[#0C2B3D] overflow-visible" />
              <span>Register Now</span>
            </Link>

            <a
              href="#events"
              onClick={(e) => {
                e.preventDefault();
                if (smoothScroll?.scrollTo && eventsSectionRef.current) {
                  smoothScroll.scrollTo(eventsSectionRef.current, { duration: 1.2 });
                } else {
                  eventsSectionRef.current?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="group relative flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full border border-[#38BDF8]/50 bg-[#031d33]/80 backdrop-blur-md text-[#CBD5E1] hover:text-white hover:border-[#38BDF8] hover:bg-[#042542]/90 transition-all duration-300 shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:shadow-[0_0_35px_rgba(56,189,248,0.45)] overflow-visible cursor-pointer w-full sm:w-auto"
            >
              <div className="overflow-visible flex items-center justify-center">
                <Navigation className="w-4 h-4 text-[#38BDF8] transform -rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 overflow-visible" />
              </div>
              <span className="text-xs font-semibold tracking-widest uppercase">
                Explore Events
              </span>
              <div className="overflow-visible flex items-center justify-center">
                <Wind className="w-3.5 h-3.5 text-[#38BDF8]/80 group-hover:text-[#38BDF8] transition-colors overflow-visible" />
              </div>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#38BDF8]/70 text-xs font-mono overflow-visible">
          <span className="tracking-widest uppercase text-[10px]">Scroll To Navigate</span>
          <div className="w-4 h-7 border border-[#38BDF8]/40 rounded-full flex items-start justify-center p-1 overflow-visible">
            <div className="w-1.5 h-1.5 bg-[#38BDF8] rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. ABOUT RENAISSANCE SECTION (PINNED PARALLAX SCROLL)       */}
      {/* ============================================================ */}
      <section
        ref={aboutSectionRef}
        className="relative min-h-[85vh] w-full flex flex-col items-center justify-center px-6 text-center z-10 bg-transparent pt-24 pb-8 sm:pt-32 sm:pb-12"
      >
        {/* Atmospheric Cloud Fog Aura */}
        <div
          ref={aboutAuraRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[750px] sm:h-[750px] bg-[radial-gradient(ellipse_at_center,rgba(244,235,217,0.14)_0%,rgba(197,162,95,0.12)_45%,transparent_75%)] rounded-full blur-[100px] pointer-events-none animate-cloud-drift"
        />

        <div className="relative max-w-4xl mx-auto flex flex-col items-center justify-center text-center z-10 px-4">
          <h2
            ref={aboutTitleRef}
            className="text-4xl sm:text-7xl font-extrabold tracking-tight text-white mb-6 z-10 drop-shadow-[0_4px_25px_rgba(0,0,0,0.95)]"
          >
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4EBD9] via-[#E6CA85] to-[#C5A25F]">
              Renaissance
            </span>
          </h2>

          <p
            ref={aboutDescRef}
            className="text-base sm:text-xl text-[#F4EBD9] font-light leading-relaxed mb-10 max-w-3xl z-10 drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]"
          >
            The Institution’s Innovation Council and Entrepreneurship Cell at MNNIT Allahabad present the 10th edition of Renaissance. The summit brings together students, founders, and leaders to foster entrepreneurship and innovation across diverse disciplines.
          </p>

          {/* Summit Statistics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full my-6 z-10">
            <div
              ref={statCard1Ref}
              className="flex flex-col items-center justify-center p-4 sm:p-5 rounded-2xl bg-[#0c2b3d]/40 border border-[#C5A25F]/35 backdrop-blur-md shadow-[0_0_20px_rgba(197,162,95,0.15)]"
            >
              <span className="text-2xl sm:text-3xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-[#F4EBD9] via-[#E6CA85] to-[#C5A25F] tracking-tight">
                15,000+
              </span>
              <span className="text-[10px] sm:text-xs font-mono text-[#F4EBD9]/80 uppercase tracking-wider font-semibold mt-1.5">
                Footfall
              </span>
            </div>

            <div
              ref={statCard2Ref}
              className="flex flex-col items-center justify-center p-4 sm:p-5 rounded-2xl bg-[#0c2b3d]/40 border border-[#C5A25F]/35 backdrop-blur-md shadow-[0_0_20px_rgba(197,162,95,0.15)]"
            >
              <span className="text-xl sm:text-3xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-[#F4EBD9] via-[#E6CA85] to-[#C5A25F] tracking-tight">
                ₹5,00,000+
              </span>
              <span className="text-[10px] sm:text-xs font-mono text-[#F4EBD9]/80 uppercase tracking-wider font-semibold mt-1.5">
                Prize Pool
              </span>
            </div>

            <div
              ref={statCard3Ref}
              className="flex flex-col items-center justify-center p-4 sm:p-5 rounded-2xl bg-[#0c2b3d]/40 border border-[#C5A25F]/35 backdrop-blur-md shadow-[0_0_20px_rgba(197,162,95,0.15)]"
            >
              <span className="text-2xl sm:text-3xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-[#F4EBD9] via-[#E6CA85] to-[#C5A25F] tracking-tight">
                40+
              </span>
              <span className="text-[10px] sm:text-xs font-mono text-[#F4EBD9]/80 uppercase tracking-wider font-semibold mt-1.5">
                Startups & VCs
              </span>
            </div>

            <div
              ref={statCard4Ref}
              className="flex flex-col items-center justify-center p-4 sm:p-5 rounded-2xl bg-[#0c2b3d]/40 border border-[#C5A25F]/35 backdrop-blur-md shadow-[0_0_20px_rgba(197,162,95,0.15)]"
            >
              <span className="text-2xl sm:text-3xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-[#F4EBD9] via-[#E6CA85] to-[#C5A25F] tracking-tight">
                10th
              </span>
              <span className="text-[10px] sm:text-xs font-mono text-[#F4EBD9]/80 uppercase tracking-wider font-semibold mt-1.5">
                Edition
              </span>
            </div>
          </div>

          <p
            ref={aboutCtaRef}
            className="text-xs sm:text-sm text-transparent bg-clip-text bg-gradient-to-r from-[#F4EBD9] via-[#E6CA85] to-[#C5A25F] font-mono tracking-widest uppercase font-bold z-10 drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] flex items-center gap-2 mt-4"
          >
            <span>Scroll down for current sponsors</span>
            <span className="animate-bounce text-[#C5A25F]">↓</span>
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. CURRENT SPONSORS SECTION (ATMOSPHERIC CLOUD MIST & SQUARE MARQUEE) */}
      {/* ============================================================ */}
      <section className="relative py-8 sm:py-12 w-full bg-transparent backdrop-blur-sm select-none z-20 my-6 sm:my-8 overflow-hidden">
        {/* TOP MAHOGANY & GOLD BEVEL BORDER BAR */}
        <div className="absolute top-0 left-0 right-0 h-3.5 sm:h-4 bg-[linear-gradient(90deg,#1c1007_0%,#3a2210_20%,#4e2e15_50%,#3a2210_80%,#1c1007_100%)] border-t-2 border-b border-[#C5A25F] shadow-[0_4px_15px_rgba(0,0,0,0.8)] z-20 flex items-center justify-between px-4 sm:px-12 pointer-events-none overflow-hidden">
          <div className="w-full flex justify-between items-center opacity-60">
            <div className="flex gap-8 sm:gap-16 items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A25F] shadow-[inset_0_1px_1px_rgba(0,0,0,0.8)]" />
              <span className="w-1 h-3 bg-[#C5A25F]/20" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A25F] shadow-[inset_0_1px_1px_rgba(0,0,0,0.8)] hidden sm:inline-block" />
            </div>
            <div className="flex gap-8 sm:gap-16 items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A25F] shadow-[inset_0_1px_1px_rgba(0,0,0,0.8)] hidden sm:inline-block" />
              <span className="w-1 h-3 bg-[#C5A25F]/20" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A25F] shadow-[inset_0_1px_1px_rgba(0,0,0,0.8)]" />
            </div>
          </div>
        </div>

        {/* TOP CENTRAL MEDALLION */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex items-center justify-center pointer-events-none">
          <div className="relative group">
            <div className="absolute inset-0 rounded-xl bg-[#C5A25F] blur-md opacity-60" />
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#1c1007] via-[#040f21] to-[#3a2210] border-2 border-[#C5A25F] shadow-[0_0_20px_rgba(197,162,95,0.7)] flex items-center justify-center rotate-45 p-1">
              <img
                src="/renaissance-logo-clean.png"
                alt="Renaissance Emblem"
                className="-rotate-45 w-6 h-6 sm:w-7 sm:h-7 object-contain filter drop-shadow-[0_2px_6px_rgba(197,162,95,0.9)]"
              />
            </div>
          </div>
        </div>

        {/* BOTTOM MAHOGANY & GOLD BEVEL BORDER BAR */}
        <div className="absolute bottom-0 left-0 right-0 h-3.5 sm:h-4 bg-[linear-gradient(90deg,#1c1007_0%,#3a2210_20%,#4e2e15_50%,#3a2210_80%,#1c1007_100%)] border-b-2 border-t border-[#C5A25F] shadow-[0_-4px_15px_rgba(0,0,0,0.8)] z-20 flex items-center justify-between px-4 sm:px-12 pointer-events-none overflow-hidden">
          <div className="w-full flex justify-between items-center opacity-60">
            <div className="flex gap-8 sm:gap-16 items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A25F] shadow-[inset_0_1px_1px_rgba(0,0,0,0.8)]" />
              <span className="w-1 h-3 bg-[#C5A25F]/20" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A25F] shadow-[inset_0_1px_1px_rgba(0,0,0,0.8)] hidden sm:inline-block" />
            </div>
            <div className="flex gap-8 sm:gap-16 items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A25F] shadow-[inset_0_1px_1px_rgba(0,0,0,0.8)] hidden sm:inline-block" />
              <span className="w-1 h-3 bg-[#C5A25F]/20" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A25F] shadow-[inset_0_1px_1px_rgba(0,0,0,0.8)]" />
            </div>
          </div>
        </div>

        {/* BOTTOM CENTRAL MEDALLION */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-30 flex items-center justify-center pointer-events-none">
          <div className="relative group">
            <div className="absolute inset-0 rounded-xl bg-[#C5A25F] blur-md opacity-60" />
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#1c1007] via-[#040f21] to-[#3a2210] border-2 border-[#C5A25F] shadow-[0_0_20px_rgba(197,162,95,0.7)] flex items-center justify-center rotate-45 p-1">
              <img
                src="/renaissance-logo-clean.png"
                alt="Renaissance Emblem"
                className="-rotate-45 w-6 h-6 sm:w-7 sm:h-7 object-contain filter drop-shadow-[0_2px_6px_rgba(197,162,95,0.9)]"
              />
            </div>
          </div>
        </div>

        {/* Atmospheric Cloud Fog Layers Behind Marquee */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-0 left-1/4 w-[700px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(244,235,217,0.12)_0%,rgba(197,162,95,0.06)_40%,transparent_70%)] blur-3xl animate-cloud-drift" />
        </div>

        <div className="max-w-7xl mx-auto px-6 mb-6 text-center relative z-10">
          <span className="text-[10px] font-mono text-transparent bg-clip-text bg-gradient-to-r from-[#F4EBD9] via-[#E6CA85] to-[#C5A25F] uppercase tracking-[0.25em] font-semibold block mb-1">
            Industry & Innovation Partners
          </span>
          <h2 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight drop-shadow-[0_4px_15px_rgba(0,0,0,0.8)]">
            Current Sponsors
          </h2>
        </div>

        {/* Marquee with Square Sponsor Cards & Floating Ship Separators */}
        <div className="w-full overflow-hidden relative z-10">
          <div className="animate-marquee flex items-center gap-6 sm:gap-10 whitespace-nowrap min-w-max py-3 px-4">
            {[...CURRENT_SPONSORS, ...CURRENT_SPONSORS, ...CURRENT_SPONSORS, ...CURRENT_SPONSORS].map((sponsor, idx) => (
              <React.Fragment key={`curr-group-${idx}`}>
                <div
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border-2 border-[#C5A25F]/50 bg-[#0c2b3d]/60 backdrop-blur-md flex items-center justify-center p-3 shrink-0 group hover:border-[#C5A25F] hover:shadow-[0_0_25px_rgba(197,162,95,0.5)] transition-all duration-300 transform hover:scale-105 cursor-pointer"
                >
                  {sponsor.image ? (
                    <img
                      src={sponsor.image}
                      alt={sponsor.name}
                      className="max-h-full max-w-full object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] brightness-110 group-hover:brightness-125 transition-all"
                    />
                  ) : (
                    <div className="w-4 h-4 rounded-sm border border-[#C5A25F]/60 bg-[#C5A25F]/30 rotate-45 group-hover:rotate-90 group-hover:bg-[#C5A25F]/80 transition-transform duration-500" />
                  )}
                </div>

                {/* Animated Floating Pirate Ship Icon Separator */}
                <div className="flex items-center justify-center shrink-0 opacity-85 hover:opacity-100 transition-opacity">
                  <img
                    src="/pirate-ship-icon.png"
                    alt="Pirate Ship Separator"
                    className="w-7 h-7 sm:w-9 sm:h-9 object-contain animate-ship-realistic filter drop-shadow-[0_2px_8px_rgba(197,162,95,0.5)]"
                  />
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. FEATURED EVENTS SECTION (ATMOSPHERIC CLOUD & BIG WHEEL)   */}
      {/* ============================================================ */}
      <section
        id="events"
        ref={eventsSectionRef}
        className="relative w-full min-h-screen sm:h-screen bg-transparent flex flex-col justify-between pt-28 sm:pt-32 pb-6 px-4 sm:px-12 overflow-hidden select-none"
      >
        {/* Atmospheric Cloud Fog Layers */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.12)_0%,rgba(2,132,199,0.06)_45%,transparent_75%)] blur-3xl animate-cloud-drift" />
          <div className="absolute bottom-10 right-10 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(244,235,217,0.1)_0%,transparent_70%)] blur-3xl animate-cloud-drift-reverse" />
        </div>

        {/* Enlarged Rotating Nautical Pirate Wheel */}
        <div
          ref={wheelContainerRef}
          className="absolute left-1/2 md:left-[-5%] top-1/2 -translate-y-1/2 -translate-x-1/2 md:translate-x-0 w-[85vh] h-[85vh] sm:w-[115vh] sm:h-[115vh] md:w-[135vh] md:h-[135vh] pointer-events-none z-0 md:z-10 flex items-center justify-center opacity-30 md:opacity-100 overflow-visible"
        >
          <div className="absolute w-[72%] h-[72%] rounded-full bg-[radial-gradient(circle_at_center,rgba(197,162,95,0.22)_0%,rgba(56,189,248,0.12)_50%,transparent_75%)] blur-3xl pointer-events-none" />
          <img
            ref={wheelImgRef}
            src="/pirate-wheel-transparent.png"
            alt="Nautical Wheel"
            className="w-full h-full object-contain filter drop-shadow-[0_25px_60px_rgba(0,0,0,0.95)] drop-shadow-[0_0_50px_rgba(56,189,248,0.45)] select-none pointer-events-none will-change-transform overflow-visible"
          />
        </div>

        {/* Right Half Container: Events Header & 1 UNIFIED FLAGSHIP EVENT BLOCK */}
        <div className="max-w-7xl w-full mx-auto flex flex-col items-end justify-center my-auto relative z-20">
          <div className="w-full max-w-lg sm:max-w-xl ml-auto flex flex-col gap-4">

            {/* Header */}
            <div
              ref={eventsHeaderRef}
              className="w-full flex items-end justify-between pb-3 border-b border-white/15"
            >
              <div>
                <span className="text-[10px] sm:text-[11px] font-mono text-[#38BDF8] uppercase tracking-[0.25em] font-semibold flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>Summit Flagships</span>
                </span>
                <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                  Featured Events
                </h2>
              </div>
            </div>

            {/* 1 UNIFIED COMBINED EVENT CHALLENGE BLOCK */}
            <div className="relative w-full h-[380px] sm:h-[420px]">
              {EVENTS.map((event, idx) => (
                <div
                  key={event.id}
                  ref={(el) => (visualsRef.current[idx] = el)}
                  className="absolute inset-0 w-full h-full p-6 sm:p-8 rounded-3xl border border-[#C5A25F]/60 bg-gradient-to-br from-[#0c2b3d]/95 via-[#041021]/95 to-[#020610]/95 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.85)] flex flex-col justify-between gap-4 will-change-transform pointer-events-auto overflow-hidden"
                >
                  {/* Atmospheric Inner Glow */}
                  <div className="absolute -top-10 -right-10 w-56 h-56 bg-[#C5A25F]/15 rounded-full blur-3xl pointer-events-none" />

                  {/* Top Bar: Challenge ID + Category */}
                  <div className="w-full flex items-center justify-between pb-3 border-b border-[#C5A25F]/20 relative z-10">
                    <span className="text-xs font-mono font-extrabold text-[#C5A25F] tracking-widest uppercase flex items-center gap-2">
                      <Compass className="w-4 h-4 text-[#C5A25F]" />
                      <span>CHALLENGE {event.id} / 03</span>
                    </span>
                    <span className="text-xs font-mono px-3.5 py-1 rounded-full border border-[#C5A25F]/60 bg-[#C5A25F]/20 text-[#F4EBD9] uppercase tracking-wider font-extrabold shadow-[0_0_12px_rgba(197,162,95,0.3)]">
                      {event.category}
                    </span>
                  </div>

                  {/* Title & Prize Pool */}
                  <div className="flex flex-col text-left py-1 relative z-10">
                    <h3 className="text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#F4EBD9] via-[#E6CA85] to-[#C5A25F] tracking-wide">
                      {event.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs font-mono text-[#F4EBD9]/80 font-bold uppercase tracking-wider">
                        Prize Pool:
                      </span>
                      <span className="text-xs sm:text-sm font-mono font-extrabold px-3 py-0.5 rounded-md bg-[#C5A25F]/20 text-[#E6CA85] border border-[#C5A25F]/40 shadow-sm">
                        {event.prize}
                      </span>
                    </div>
                  </div>

                  {/* Timing & Description Box */}
                  <div className="flex flex-col gap-2 relative z-10 bg-white/5 p-3.5 sm:p-4 rounded-2xl border border-white/10">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#38BDF8] font-bold uppercase tracking-wider">
                      <Clock className="w-4 h-4 text-[#38BDF8]" />
                      <span>{event.time}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#CBD5E1] font-mono leading-relaxed">
                      {event.desc}
                    </p>
                  </div>

                  {/* Action CTAs */}
                  <div className="pt-2 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 relative z-10">
                    <Link
                      to="/register"
                      className="group relative flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#F4EBD9] via-[#EBDDC8] to-[#C5A25F] text-[#0C2B3D] font-extrabold text-xs uppercase tracking-widest hover:shadow-[0_0_25px_rgba(197,162,95,0.7)] transition-all duration-300 transform hover:scale-[1.02] cursor-pointer border border-[#C5A25F]/60 w-full sm:w-auto shrink-0"
                    >
                      <UserCheck className="w-4 h-4 text-[#0C2B3D] shrink-0" />
                      <span>Register Now</span>
                    </Link>

                    <Link to="/events" className="text-xs font-mono text-[#38BDF8] font-bold hover:underline whitespace-nowrap flex items-center gap-1">
                      <span>View Full Schedule</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Footer Info */}
        <div
          ref={eventsFooterRef}
          className="max-w-7xl w-full mx-auto flex items-center justify-between text-xs font-mono text-[#64748B] relative z-20"
        >
          <span className="text-[#38BDF8]/80">Scroll to reveal featured summit challenges</span>
          <span className="hidden sm:inline text-[#64748B]">10th Edition Summit</span>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. PAST SPONSORS SECTION (ATMOSPHERIC CLOUD MIST & SQUARE MARQUEE) */}
      {/* ============================================================ */}
      <section className="relative py-8 sm:py-12 w-full bg-transparent backdrop-blur-sm select-none z-20 my-6 sm:my-8 overflow-hidden">
        {/* TOP DRIFTWOOD & CYAN BEVEL BORDER BAR */}
        <div className="absolute top-0 left-0 right-0 h-3.5 sm:h-4 bg-[linear-gradient(90deg,#0a1622_0%,#13283a_20%,#1c3850_50%,#13283a_80%,#0a1622_100%)] border-t-2 border-b border-[#38BDF8] shadow-[0_4px_15px_rgba(0,0,0,0.8)] z-20 flex items-center justify-between px-4 sm:px-12 pointer-events-none overflow-hidden">
          <div className="w-full flex justify-between items-center opacity-60">
            <div className="flex gap-8 sm:gap-16 items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] shadow-[inset_0_1px_1px_rgba(0,0,0,0.8)]" />
              <span className="w-1 h-3 bg-[#38BDF8]/20" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] shadow-[inset_0_1px_1px_rgba(0,0,0,0.8)] hidden sm:inline-block" />
            </div>
            <div className="flex gap-8 sm:gap-16 items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] shadow-[inset_0_1px_1px_rgba(0,0,0,0.8)] hidden sm:inline-block" />
              <span className="w-1 h-3 bg-[#38BDF8]/20" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] shadow-[inset_0_1px_1px_rgba(0,0,0,0.8)]" />
            </div>
          </div>
        </div>

        {/* TOP CENTRAL CYAN MEDALLION */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex items-center justify-center pointer-events-none">
          <div className="relative group">
            <div className="absolute inset-0 rounded-xl bg-[#38BDF8] blur-md opacity-60" />
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#0a1622] via-[#040f21] to-[#1c3850] border-2 border-[#38BDF8] shadow-[0_0_20px_rgba(56,189,248,0.7)] flex items-center justify-center rotate-45 p-1">
              <img
                src="/renaissance-logo-clean.png"
                alt="Renaissance Emblem"
                className="-rotate-45 w-6 h-6 sm:w-7 sm:h-7 object-contain filter drop-shadow-[0_2px_6px_rgba(56,189,248,0.9)]"
              />
            </div>
          </div>
        </div>

        {/* BOTTOM DRIFTWOOD & CYAN BEVEL BORDER BAR */}
        <div className="absolute bottom-0 left-0 right-0 h-3.5 sm:h-4 bg-[linear-gradient(90deg,#0a1622_0%,#13283a_20%,#1c3850_50%,#13283a_80%,#0a1622_100%)] border-b-2 border-t border-[#38BDF8] shadow-[0_-4px_15px_rgba(0,0,0,0.8)] z-20 flex items-center justify-between px-4 sm:px-12 pointer-events-none overflow-hidden">
          <div className="w-full flex justify-between items-center opacity-60">
            <div className="flex gap-8 sm:gap-16 items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] shadow-[inset_0_1px_1px_rgba(0,0,0,0.8)]" />
              <span className="w-1 h-3 bg-[#38BDF8]/20" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] shadow-[inset_0_1px_1px_rgba(0,0,0,0.8)] hidden sm:inline-block" />
            </div>
            <div className="flex gap-8 sm:gap-16 items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] shadow-[inset_0_1px_1px_rgba(0,0,0,0.8)] hidden sm:inline-block" />
              <span className="w-1 h-3 bg-[#38BDF8]/20" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] shadow-[inset_0_1px_1px_rgba(0,0,0,0.8)]" />
            </div>
          </div>
        </div>

        {/* BOTTOM CENTRAL CYAN MEDALLION */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-30 flex items-center justify-center pointer-events-none">
          <div className="relative group">
            <div className="absolute inset-0 rounded-xl bg-[#38BDF8] blur-md opacity-60" />
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#0a1622] via-[#040f21] to-[#1c3850] border-2 border-[#38BDF8] shadow-[0_0_20px_rgba(56,189,248,0.7)] flex items-center justify-center rotate-45 p-1">
              <img
                src="/renaissance-logo-clean.png"
                alt="Renaissance Emblem"
                className="-rotate-45 w-6 h-6 sm:w-7 sm:h-7 object-contain filter drop-shadow-[0_2px_6px_rgba(56,189,248,0.9)]"
              />
            </div>
          </div>
        </div>

        {/* Atmospheric Cloud Fog Layers Behind Marquee */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-0 right-1/4 w-[700px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.12)_0%,rgba(2,132,199,0.06)_40%,transparent_70%)] blur-3xl animate-cloud-drift-reverse" />
        </div>

        <div className="max-w-7xl mx-auto px-6 mb-6 text-center relative z-10">
          <span className="text-[10px] font-mono text-[#38BDF8] uppercase tracking-[0.25em] font-semibold block mb-1">
            Pioneers & Legacy Partners
          </span>
          <h2 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight drop-shadow-[0_4px_15px_rgba(0,0,0,0.8)]">
            Past Sponsors
          </h2>
        </div>

        {/* Marquee with Square Sponsor Cards & Floating Ship Separators */}
        <div className="w-full overflow-hidden relative z-10">
          <div className="animate-marquee-reverse flex items-center gap-6 sm:gap-10 whitespace-nowrap min-w-max py-3 px-4">
            {[...PAST_SPONSORS, ...PAST_SPONSORS, ...PAST_SPONSORS, ...PAST_SPONSORS].map((sponsor, idx) => (
              <React.Fragment key={`past-group-${idx}`}>
                <div
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border-2 border-[#38BDF8]/50 bg-[#0c2b3d]/60 backdrop-blur-md flex items-center justify-center p-3 shrink-0 group hover:border-[#38BDF8] hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] transition-all duration-300 transform hover:scale-105 cursor-pointer"
                >
                  {sponsor.image ? (
                    <img
                      src={sponsor.image}
                      alt={sponsor.name}
                      className="max-h-full max-w-full object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] brightness-110 group-hover:brightness-125 transition-all"
                    />
                  ) : (
                    <div className="w-4 h-4 rounded-sm border border-[#38BDF8]/60 bg-[#38BDF8]/30 rotate-45 group-hover:rotate-90 group-hover:bg-[#38BDF8]/80 transition-transform duration-500" />
                  )}
                </div>

                {/* Animated Floating Pirate Ship Icon Separator */}
                <div className="flex items-center justify-center shrink-0 opacity-85 hover:opacity-100 transition-opacity">
                  <img
                    src="/pirate-ship-icon.png"
                    alt="Pirate Ship Separator"
                    className="w-7 h-7 sm:w-9 sm:h-9 object-contain animate-ship-realistic filter drop-shadow-[0_2px_8px_rgba(56,189,248,0.5)]"
                  />
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. KEYNOTE SPEAKERS SECTION (ATMOSPHERIC CLOUD MIST GRID)    */}
      {/* ============================================================ */}
      <section
        ref={speakersSectionRef}
        className="relative min-h-screen w-full bg-transparent flex flex-col items-center justify-center px-6 sm:px-12 py-24 sm:py-36 overflow-hidden select-none z-20"
      >
        {/* Atmospheric Cloud Fog Layers */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] h-[550px] bg-[radial-gradient(ellipse_at_center,rgba(244,235,217,0.12)_0%,rgba(56,189,248,0.08)_50%,transparent_80%)] rounded-full blur-[140px] animate-cloud-drift" />
        </div>

        <div className="max-w-5xl w-full mx-auto flex flex-col items-center justify-center relative z-10 my-auto">
          <div className="speakers-header text-center mb-12 sm:mb-16">
            <span className="text-xs font-mono text-transparent bg-clip-text bg-gradient-to-r from-[#F4EBD9] via-[#E6CA85] to-[#C5A25F] uppercase tracking-[0.25em] font-semibold block mb-2">
              Eminent Voyagers
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
              Featured Keynote Speakers
            </h2>
          </div>

          {/* 2x2 Grid of Speaker Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 w-full max-w-4xl">
            {SPEAKERS.map((speaker) => (
              <div
                key={speaker.id}
                className="speaker-card-item group relative rounded-3xl border border-[#C5A25F]/35 bg-[#0c2b3d]/50 backdrop-blur-xl p-10 sm:p-14 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-[#C5A25F] hover:shadow-[0_0_35px_rgba(197,162,95,0.3)] hover:-translate-y-1.5 cursor-pointer min-h-[180px] sm:min-h-[240px]"
              >
                <span className="text-xl sm:text-3xl font-extrabold font-mono text-[#F4EBD9] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#F4EBD9] group-hover:via-[#E6CA85] group-hover:to-[#C5A25F] transition-all tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                  {speaker.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. GLOBAL SUMMIT FOOTER                                      */}
      {/* ============================================================ */}
      <ContactFooter />
    </div>
  );
}

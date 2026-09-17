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
  const detailsRef = useRef([]);
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

        // 1. Deep Ocean Glow Aura Expands with scroll
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
      // Section 4: Featured Events (Unified Pinned Parallax Timeline +=3000)
      // -------------------------------------------------------------
      if (eventsSectionRef.current) {
        if (wheelImgRef.current) {
          gsap.set(wheelImgRef.current, { transformOrigin: "50% 50%" });
        }

        const mainTl = gsap.timeline({
          scrollTrigger: {
            trigger: eventsSectionRef.current,
            start: "top top",
            end: "+=3000",
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
          const visualEl = visualsRef.current[idx];
          const detailsEl = detailsRef.current[idx];
          if (!visualEl || !detailsEl) return;

          const startTime = idx * stepDuration;

          // Event Visual Fades In
          mainTl.fromTo(
            visualEl,
            { opacity: 0, scale: 0.9, pointerEvents: "none" },
            { opacity: 1, scale: 1.0, pointerEvents: "auto", duration: 0.6, ease: "power2.out" },
            startTime
          );

          // Details Panel Slides Up
          mainTl.fromTo(
            detailsEl,
            { opacity: 0, y: 30, pointerEvents: "none" },
            { opacity: 1, y: 0, pointerEvents: "auto", duration: 0.6, ease: "power2.out" },
            startTime + 0.2
          );

          // Solid Hold phase so user can view/interact with the event card
          mainTl.to([visualEl, detailsEl], { opacity: 1, duration: 1.2 }, startTime + 0.8);

          // Exit transition for next event (if not last)
          if (idx < totalEvents - 1) {
            mainTl.to(
              [visualEl, detailsEl],
              {
                opacity: 0,
                y: -25,
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
        {/* Ambient Glow Aura */}
        <div
          ref={aboutAuraRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] sm:w-[650px] sm:h-[650px] bg-[radial-gradient(ellipse_at_center,rgba(197,162,95,0.14)_0%,rgba(2,132,199,0.12)_45%,transparent_70%)] rounded-full blur-[90px] pointer-events-none"
        />

        <div className="relative max-w-4xl mx-auto flex flex-col items-center justify-center text-center z-10 px-4">
          <h2
            ref={aboutTitleRef}
            className="text-4xl sm:text-7xl font-extrabold tracking-tight text-white mb-6 z-10 drop-shadow-[0_4px_25px_rgba(0,0,0,0.95)]"
          >
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F4EBD9] to-[#C5A25F]">
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
              className="flex flex-col items-center justify-center p-4 sm:p-5 rounded-2xl bg-[#040f21]/60 border border-[#C5A25F]/30 backdrop-blur-md"
            >
              <span className="text-2xl sm:text-3xl font-extrabold font-mono text-[#C5A25F] tracking-tight">
                15,000+
              </span>
              <span className="text-[10px] sm:text-xs font-mono text-[#CBD5E1] uppercase tracking-wider font-semibold mt-1.5">
                Footfall
              </span>
            </div>

            <div
              ref={statCard2Ref}
              className="flex flex-col items-center justify-center p-4 sm:p-5 rounded-2xl bg-[#040f21]/60 border border-[#C5A25F]/30 backdrop-blur-md"
            >
              <span className="text-xl sm:text-3xl font-extrabold font-mono text-[#C5A25F] tracking-tight">
                ₹5,00,000+
              </span>
              <span className="text-[10px] sm:text-xs font-mono text-[#CBD5E1] uppercase tracking-wider font-semibold mt-1.5">
                Prize Pool
              </span>
            </div>

            <div
              ref={statCard3Ref}
              className="flex flex-col items-center justify-center p-4 sm:p-5 rounded-2xl bg-[#040f21]/60 border border-[#C5A25F]/30 backdrop-blur-md"
            >
              <span className="text-2xl sm:text-3xl font-extrabold font-mono text-[#C5A25F] tracking-tight">
                40+
              </span>
              <span className="text-[10px] sm:text-xs font-mono text-[#CBD5E1] uppercase tracking-wider font-semibold mt-1.5">
                Startups & VCs
              </span>
            </div>

            <div
              ref={statCard4Ref}
              className="flex flex-col items-center justify-center p-4 sm:p-5 rounded-2xl bg-[#040f21]/60 border border-[#C5A25F]/30 backdrop-blur-md"
            >
              <span className="text-2xl sm:text-3xl font-extrabold font-mono text-[#C5A25F] tracking-tight">
                10th
              </span>
              <span className="text-[10px] sm:text-xs font-mono text-[#CBD5E1] uppercase tracking-wider font-semibold mt-1.5">
                Edition
              </span>
            </div>
          </div>

          <p
            ref={aboutCtaRef}
            className="text-xs sm:text-sm text-[#C5A25F] font-mono tracking-widest uppercase font-bold z-10 drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] flex items-center gap-2 mt-4"
          >
            <span>Scroll down for current sponsors</span>
            <span className="animate-bounce">↓</span>
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. CURRENT SPONSORS SECTION (NAUTICAL GOLD & WOOD MARQUEE)   */}
      {/* ============================================================ */}
      <section className="relative py-6 sm:py-8 w-full bg-[#040f21]/92 shadow-[inset_0_0_60px_rgba(197,162,95,0.18)] backdrop-blur-md select-none z-20 my-6 sm:my-8">
        {/* TOP LOGO-THEMED MAHOGANY WOOD & GOLD BEVEL BORDER BAR */}
        <div className="absolute top-0 left-0 right-0 h-3.5 sm:h-4 bg-[linear-gradient(90deg,#1c1007_0%,#3a2210_20%,#4e2e15_50%,#3a2210_80%,#1c1007_100%)] border-t-2 border-b border-[#C5A25F] shadow-[0_4px_15px_rgba(0,0,0,0.8)] z-20 flex items-center justify-between px-4 sm:px-12 pointer-events-none overflow-hidden">
          {/* Simulated Wood-Grain Divider Lines & Brass Rivets */}
          <div className="w-full flex justify-between items-center opacity-60">
            <div className="flex gap-8 sm:gap-16 items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A25F] shadow-[inset_0_1px_1px_rgba(0,0,0,0.8)]" />
              <span className="w-1 h-3 bg-[#C5A25F]/20" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A25F] shadow-[inset_0_1px_1px_rgba(0,0,0,0.8)] hidden sm:inline-block" />
              <span className="w-1 h-3 bg-[#C5A25F]/20 hidden sm:inline-block" />
            </div>
            <div className="flex gap-8 sm:gap-16 items-center">
              <span className="w-1 h-3 bg-[#C5A25F]/20 hidden sm:inline-block" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A25F] shadow-[inset_0_1px_1px_rgba(0,0,0,0.8)] hidden sm:inline-block" />
              <span className="w-1 h-3 bg-[#C5A25F]/20" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A25F] shadow-[inset_0_1px_1px_rgba(0,0,0,0.8)]" />
            </div>
          </div>
        </div>

        {/* TOP CENTRAL RENAISSANCE LOGO COMPASS EMBLEM MEDALLION */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex items-center justify-center pointer-events-none">
          <div className="relative group">
            {/* Ambient Gold Glow Behind Emblem */}
            <div className="absolute inset-0 rounded-xl bg-[#C5A25F] blur-md opacity-60" />
            
            {/* Logo Emblem Diamond Shield */}
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#1c1007] via-[#040f21] to-[#3a2210] border-2 border-[#C5A25F] shadow-[0_0_20px_rgba(197,162,95,0.7)] flex items-center justify-center rotate-45 p-1">
              <img
                src="/renaissance-logo-clean.png"
                alt="Renaissance Emblem"
                className="-rotate-45 w-6 h-6 sm:w-7 sm:h-7 object-contain filter drop-shadow-[0_2px_6px_rgba(197,162,95,0.9)]"
              />
            </div>
          </div>
        </div>

        {/* BOTTOM LOGO-THEMED MAHOGANY WOOD & GOLD BEVEL BORDER BAR */}
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

        {/* BOTTOM CENTRAL RENAISSANCE LOGO COMPASS EMBLEM MEDALLION */}
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

        {/* Extended Top & Bottom Seamless Dark Blur Vignettes */}
        <div className="absolute -top-10 left-0 right-0 h-16 bg-gradient-to-b from-[#020610]/95 via-[#020610]/70 to-transparent backdrop-blur-md pointer-events-none z-10" />
        <div className="absolute -bottom-10 left-0 right-0 h-16 bg-gradient-to-t from-[#020610]/95 via-[#020610]/70 to-transparent backdrop-blur-md pointer-events-none z-10" />

        {/* Ambient Glowing Rich Gold Backing Aura */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[240px] bg-[radial-gradient(ellipse_at_center,rgba(197,162,95,0.4)_0%,rgba(217,119,6,0.25)_40%,transparent_80%)] rounded-full blur-[110px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 mb-4 text-center relative z-10">
          <span className="text-[10px] font-mono text-[#C5A25F] uppercase tracking-[0.25em] font-semibold block mb-1">
            Industry & Innovation Partners
          </span>
          <h2 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight drop-shadow-[0_4px_15px_rgba(0,0,0,0.8)]">
            Current Sponsors
          </h2>
        </div>

        {/* Clean Marquee with Logo-Only Cards */}
        <div className="w-full overflow-hidden relative z-10">
          <div className="animate-marquee flex items-center gap-8 sm:gap-14 whitespace-nowrap min-w-max py-2 px-4">
            {[...CURRENT_SPONSORS, ...CURRENT_SPONSORS, ...CURRENT_SPONSORS, ...CURRENT_SPONSORS].map((sponsor, idx) => (
              <div
                key={`curr-${idx}`}
                className="w-28 h-14 sm:w-40 sm:h-18 rounded-2xl border-2 border-[#C5A25F]/50 bg-gradient-to-br from-[#0c2b3d] via-[#040f21] to-[#12364c] backdrop-blur-md flex items-center justify-center p-2.5 sm:p-3.5 shrink-0 group hover:border-[#C5A25F] hover:shadow-[0_0_25px_rgba(197,162,95,0.5)] transition-all duration-300 transform hover:scale-105 cursor-pointer"
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
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. FEATURED EVENTS SECTION (SHORTENED PIN DISTANCE +=2200)   */}
      {/* ============================================================ */}
      <section
        id="events"
        ref={eventsSectionRef}
        className="relative w-full min-h-screen sm:h-screen bg-gradient-to-b from-[#020610]/95 via-[#04192d]/90 to-[#072545]/90 border-b border-[#38BDF8]/20 flex flex-col justify-between pt-28 sm:pt-32 pb-6 px-4 sm:px-12 overflow-hidden select-none"
      >
        {/* Top Seamless Dark Gradient Vignette with Backdrop Blur */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#020610] via-[#020610]/70 to-transparent backdrop-blur-md pointer-events-none z-10" />
        {/* Dynamic Blue Blur Aura */}
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-[#0284C7]/25 rounded-full blur-[100px] pointer-events-none animate-pulse" />

        {/* Giant Rotating Nautical Wheel */}
        <div
          ref={wheelContainerRef}
          className="absolute left-1/2 md:left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[65vh] h-[65vh] sm:w-[85vh] sm:h-[85vh] md:w-[100vh] md:h-[100vh] pointer-events-none z-0 md:z-10 flex items-center justify-center opacity-25 md:opacity-100 overflow-visible"
        >
          <div className="absolute w-[68%] h-[68%] rounded-full bg-[radial-gradient(circle_at_center,rgba(197,162,95,0.18)_0%,rgba(217,119,6,0.08)_35%,rgba(56,189,248,0.08)_60%,transparent_75%)] blur-2xl pointer-events-none" />
          <img
            ref={wheelImgRef}
            src="/pirate-wheel-transparent.png"
            alt="Nautical Wheel"
            className="w-full h-full object-contain filter drop-shadow-[0_25px_60px_rgba(0,0,0,0.95)] drop-shadow-[0_0_50px_rgba(56,189,248,0.45)] select-none pointer-events-none will-change-transform overflow-visible"
          />
        </div>

        {/* Right Half Container: Events Header & Event Showcase */}
        <div className="max-w-7xl w-full mx-auto flex flex-col items-end justify-center my-auto relative z-20">
          <div className="w-full max-w-lg sm:max-w-xl ml-auto flex flex-col gap-3 sm:gap-4">

            {/* Header */}
            <div
              ref={eventsHeaderRef}
              className="w-full flex items-end justify-between pb-2 border-b border-white/10"
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

            {/* Event Showcase Cards */}
            <div className="relative w-full h-[410px] sm:h-[450px] md:h-[480px]">
              {EVENTS.map((event, idx) => (
                <div
                  key={event.id}
                  className="absolute inset-0 w-full h-full flex flex-col gap-3 sm:gap-4 pointer-events-none"
                >
                  {/* Event Main Banner Card */}
                  <div
                    ref={(el) => (visualsRef.current[idx] = el)}
                    className="w-full p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-[#C5A25F]/50 bg-[#F4EBD9]/95 text-[#0C2B3D] backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col gap-3 overflow-hidden will-change-transform pointer-events-auto shrink-0"
                  >
                    <div className="w-full flex items-center justify-between pb-2 border-b border-[#0C2B3D]/15">
                      <span className="text-xs font-mono font-extrabold text-[#0C2B3D] tracking-widest uppercase">
                        CHALLENGE {event.id} / 03
                      </span>
                      <span className="text-xs font-mono px-3 py-1 rounded-full border border-[#C5A25F]/60 bg-[#C5A25F]/20 text-[#0C2B3D] uppercase tracking-wider font-extrabold">
                        {event.category}
                      </span>
                    </div>

                    <div className="flex flex-col text-left py-2">
                      <h3 className="text-xl sm:text-3xl font-extrabold text-[#0C2B3D] tracking-wide">
                        {event.name}
                      </h3>
                      <span className="text-xs font-mono text-[#9A7432] font-extrabold tracking-wider mt-1">
                        Prize Pool: {event.prize}
                      </span>
                    </div>
                  </div>

                  {/* Event Details Panel (Clean, Phase 2 badge removed) */}
                  <div
                    ref={(el) => (detailsRef.current[idx] = el)}
                    className="w-full p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-[#38BDF8]/60 bg-[#0C2B3D]/95 text-white backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col gap-3.5 will-change-transform pointer-events-auto z-30"
                  >
                    <div className="flex items-center justify-between pb-2 border-b border-white/10">
                      <div className="flex items-center gap-1.5 text-xs font-mono text-[#38BDF8] font-bold uppercase tracking-wider">
                        <Clock className="w-4 h-4 text-[#38BDF8]" />
                        <span>{event.time}</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-[#CBD5E1] font-mono leading-relaxed">
                      {event.desc}
                    </p>

                    <div className="pt-2 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                      <Link
                        to="/register"
                        className="group relative flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#F4EBD9] via-[#EBDDC8] to-[#C5A25F] text-[#0C2B3D] font-extrabold text-xs uppercase tracking-widest hover:shadow-[0_0_25px_rgba(197,162,95,0.7)] transition-all duration-300 transform hover:scale-[1.02] cursor-pointer border border-[#C5A25F]/60 w-full sm:w-auto shrink-0"
                      >
                        <UserCheck className="w-4 h-4 text-[#0C2B3D] shrink-0" />
                        <span>Register Now</span>
                      </Link>

                      <Link to="/events" className="text-xs font-mono text-[#38BDF8] font-bold hover:underline whitespace-nowrap">
                        View Schedule →
                      </Link>
                    </div>
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
      {/* 5. PAST SPONSORS SECTION (NAUTICAL CYAN & DRIFTWOOD MARQUEE)  */}
      {/* ============================================================ */}
      <section className="relative py-6 sm:py-8 w-full bg-[#040f21]/92 shadow-[inset_0_0_60px_rgba(56,189,248,0.15)] backdrop-blur-md select-none z-20 my-6 sm:my-8">
        {/* TOP LOGO-THEMED DRIFTWOOD & CYAN BEVEL BORDER BAR */}
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

        {/* TOP CENTRAL RENAISSANCE LOGO CYAN MEDALLION */}
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

        {/* BOTTOM LOGO-THEMED DRIFTWOOD & CYAN BEVEL BORDER BAR */}
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

        {/* BOTTOM CENTRAL RENAISSANCE LOGO CYAN MEDALLION */}
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

        {/* Extended Top & Bottom Seamless Dark Blur Vignettes */}
        <div className="absolute -top-10 left-0 right-0 h-16 bg-gradient-to-b from-[#020610]/95 via-[#020610]/70 to-transparent backdrop-blur-md pointer-events-none z-10" />
        <div className="absolute -bottom-10 left-0 right-0 h-16 bg-gradient-to-t from-[#020610]/95 via-[#020610]/70 to-transparent backdrop-blur-md pointer-events-none z-10" />

        {/* Ambient Glowing Cyan Backing Aura */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[240px] bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.25)_0%,rgba(2,132,199,0.15)_50%,transparent_80%)] rounded-full blur-[110px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 mb-4 text-center relative z-10">
          <span className="text-[10px] font-mono text-[#38BDF8] uppercase tracking-[0.25em] font-semibold block mb-1">
            Pioneers & Legacy Partners
          </span>
          <h2 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight drop-shadow-[0_4px_15px_rgba(0,0,0,0.8)]">
            Past Sponsors
          </h2>
        </div>

        {/* Clean Reverse Logo Marquee with Logo-Only Cards */}
        <div className="w-full overflow-hidden relative z-10">
          <div className="animate-marquee-reverse flex items-center gap-8 sm:gap-14 whitespace-nowrap min-w-max py-2 px-4">
            {[...PAST_SPONSORS, ...PAST_SPONSORS, ...PAST_SPONSORS, ...PAST_SPONSORS].map((sponsor, idx) => (
              <div
                key={`past-${idx}`}
                className="w-28 h-14 sm:w-40 sm:h-18 rounded-2xl border-2 border-[#38BDF8]/50 bg-gradient-to-br from-[#0c2b3d] via-[#040f21] to-[#041a2e] backdrop-blur-md flex items-center justify-center p-2.5 sm:p-3.5 shrink-0 group hover:border-[#38BDF8] hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] transition-all duration-300 transform hover:scale-105 cursor-pointer"
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
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. KEYNOTE SPEAKERS SECTION (FULL SCREEN UNPINNED SCRUB GRID)*/}
      {/* ============================================================ */}
      {/* ============================================================ */}
      {/* 6. KEYNOTE SPEAKERS SECTION (RICH DARK UNPINNED GRID)       */}
      {/* ============================================================ */}
      <section
        ref={speakersSectionRef}
        className="relative min-h-screen w-full bg-[#020914]/92 backdrop-blur-md flex flex-col items-center justify-center px-6 sm:px-12 py-24 sm:py-36 overflow-hidden select-none z-20"
      >
        {/* Soft top & bottom gradient vignettes for seamless blending into adjacent dark sections */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#020610] to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#020610] via-[#020610]/80 to-transparent pointer-events-none z-10" />

        {/* Ambient Backing Aura */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(197,162,95,0.18)_0%,rgba(56,189,248,0.14)_50%,transparent_80%)] rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-5xl w-full mx-auto flex flex-col items-center justify-center relative z-10 my-auto">
          <div className="speakers-header text-center mb-12 sm:mb-16">
            <span className="text-xs font-mono text-[#C5A25F] uppercase tracking-[0.25em] font-semibold block mb-2">
              Eminent Voyagers
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
              Featured Keynote Speakers
            </h2>
          </div>

          {/* Expanded 2x2 Grid of Spacious Speaker Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 w-full max-w-4xl">
            {SPEAKERS.map((speaker) => (
              <div
                key={speaker.id}
                className="speaker-card-item group relative rounded-3xl border border-[#C5A25F]/35 bg-[#040f21]/85 backdrop-blur-xl p-10 sm:p-14 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-[#C5A25F] hover:shadow-[0_0_35px_rgba(197,162,95,0.3)] hover:-translate-y-1.5 cursor-pointer min-h-[180px] sm:min-h-[240px]"
              >
                <span className="text-xl sm:text-3xl font-extrabold font-mono text-[#F4EBD9] group-hover:text-[#C5A25F] transition-colors tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
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

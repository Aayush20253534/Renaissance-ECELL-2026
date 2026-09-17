import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Compass,
  Anchor,
  ArrowRight,
  Sparkles,
  Star,
  Navigation,
  Ship,
} from "lucide-react";

import ContactFooter from "../components/ContactFooter";
import SocialSideRail from "../components/SocialSideRail";
import ScrollIndicatorRail from "../components/ScrollIndicatorRail";
import { SPONSOR_TIERS } from "../data/sponsorsData";

/* ================================================================
   SPONSORS PAGE — RENAISSANCE OCEANIC EXPEDITION
   Theme: Warm Beach Sand + Caribbean Oceanic Sea (No Stark White)
   Hero: Previous bg image kept with smooth drift animation
   Boat: Boat thing completely removed!
================================================================ */

export default function Sponsors({ embedded = false }) {
  const presentingSponsor = SPONSOR_TIERS?.[0]?.sponsors?.[0];
  const principalAllies = SPONSOR_TIERS?.[0]?.sponsors?.slice(1) || [];
  const goldenFleet = SPONSOR_TIERS?.[1]?.sponsors || [];
  const voyageFellowship = SPONSOR_TIERS?.[2]?.sponsors || [];

  const [activeSponsor, setActiveSponsor] = useState(null);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-gradient-to-b
        from-[#EBDDC8]
        via-[#D8ECEE]
        to-[#E6D4BC]
        text-[#0C2B3D]
        selection:bg-[#C5A25F]
        selection:text-white
      "
    >
      {/* ============================================================
          GLOBAL SANDY + OCEANIC ATMOSPHERE
      ============================================================ */}
      <SandyOceanAtmosphere />

      {!embedded && <SocialSideRail />}
      {!embedded && <ScrollIndicatorRail />}

      {/* ============================================================
          HERO: Previous bg image + background drift animation KEPT
                Boat thing REMOVED
      ============================================================ */}
      {!embedded && (
        <section className="relative z-10 min-h-[82vh] overflow-hidden">
          {/* Previous Ocean Background Image with animation kept */}
          <div className="absolute inset-0">
            <img
              src="/bg_images/events.png"
              alt="Renaissance Ocean Voyage"
              aria-hidden="true"
              className="sponsor-hero-raster h-full w-full object-cover object-top select-none pointer-events-none"
              draggable="false"
            />

            {/* Subtle marine depth tint */}
            <div className="absolute inset-0 bg-[#062538]/20 mix-blend-multiply" />

            {/* Bright oceanic sea wash */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#D2E9ED]/30 via-transparent to-[#EBDDC8]/95" />

            {/* Warm morning sunlight sand wash */}
            <div className="absolute left-0 top-0 h-full w-[72%] bg-gradient-to-r from-[#EBDDC8]/92 via-[#EBDDC8]/50 to-transparent" />

            {/* Bottom sandy shoreline blend into the page */}
            <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#EBDDC8] via-[#EBDDC8]/85 to-transparent" />
          </div>

          {/* Decorative horizon line */}
          <div className="pointer-events-none absolute inset-x-0 bottom-[17%] z-[2]">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#5FA5B5]/45 to-transparent" />
          </div>

          {/* NOTE: Boat thing (<AnimatedVoyageShip />) is REMOVED completely */}

          {/* Hero text */}
          <div
            className="
              relative
              z-10
              mx-auto
              flex
              min-h-[82vh]
              max-w-[1500px]
              items-center
              px-6
              pb-20
              pt-32
              sm:px-10
              lg:px-16
            "
          >
            <div className="max-w-3xl">
              {/* Eyebrow */}
              <div className="mb-7 flex items-center gap-4">
                <span className="h-px w-12 bg-[#A37A32]" />
                <span
                  className="
                    font-mono
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.35em]
                    text-[#8E6422]
                    sm:text-[10px]
                  "
                >
                  Our Voyage Partners
                </span>
                <Compass
                  className="h-5 w-5 text-[#A37A32]"
                  strokeWidth={1.3}
                />
              </div>

              {/* Heading */}
              <h1
                className="
                  font-cinzel
                  text-[40px]
                  font-extrabold
                  uppercase
                  leading-[1.02]
                  tracking-[0.015em]
                  text-[#0C2B3D]
                  sm:text-5xl
                  md:text-6xl
                  lg:text-[72px]
                "
              >
                The Allies
                <br />
                <span className="text-[#165D73]">Behind The</span>
                <br />
                <span className="text-[#9E6D1F]">Expedition</span>
              </h1>

              {/* Subtitle */}
              <p
                className="
                  mt-7
                  max-w-2xl
                  font-montserrat
                  text-sm
                  leading-7
                  text-[#2C5263]
                  sm:text-base
                  md:text-lg
                  font-medium
                "
              >
                Great journeys are never sailed alone. Meet the organizations,
                visionaries and partners helping Renaissance venture beyond the
                known.
              </p>

              {/* Navigation-style line */}
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <div className="h-px w-20 bg-[#B58B3E]/70" />
                <span
                  className="
                    font-mono
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.28em]
                    text-[#855D1E]
                  "
                >
                  Different Minds · Same Destination
                </span>
              </div>
            </div>
          </div>

          {/* Large decorative compass watermark */}
          <div
            className="
              sponsor-compass-slow
              pointer-events-none
              absolute
              bottom-[13%]
              right-[7%]
              z-[3]
              hidden
              opacity-25
              lg:block
            "
          >
            <Compass
              className="h-48 w-48 text-[#144F63]"
              strokeWidth={0.7}
            />
          </div>

          {/* Navigation coordinate */}
          <div
            className="
              pointer-events-none
              absolute
              bottom-[8%]
              right-[8%]
              z-[5]
              hidden
              font-mono
              text-[8px]
              font-bold
              uppercase
              tracking-[0.25em]
              text-[#3D6B7C]
              lg:block
            "
          >
            25° 12′ N · 71° 04′ W
          </div>
        </section>
      )}

      {/* ============================================================
          PARTNER NAVIGATION BAR (Warm Sand + Lagoon Glass Strip)
      ============================================================ */}
      <section className="relative z-30 mx-auto -mt-7 max-w-[1280px] px-5 sm:px-8">
        <div
          className="
            overflow-hidden
            rounded-2xl
            border
            border-[#C2A169]/55
            bg-[#EBDDC8]/95
            shadow-[0_14px_40px_rgba(20,50,65,0.12)]
            backdrop-blur-md
          "
        >
          <div
            className="
              flex
              flex-wrap
              items-center
              justify-center
              gap-x-8
              gap-y-4
              px-5
              py-4
              sm:justify-between
              sm:px-8
            "
          >
            <button
              type="button"
              onClick={() => scrollToSection("presenting-partner")}
              className="cursor-pointer"
            >
              <PartnerStripItem
                icon={<Star className="h-4 w-4 text-[#9E6D1F]" />}
                text="The Flagship"
              />
            </button>

            <div className="hidden h-5 w-px bg-[#C2A169]/40 sm:block" />

            <button
              type="button"
              onClick={() => scrollToSection("principal-allies")}
              className="cursor-pointer"
            >
              <PartnerStripItem
                icon={<Navigation className="h-4 w-4 text-[#165D73]" />}
                text="Principal Allies"
              />
            </button>

            <div className="hidden h-5 w-px bg-[#C2A169]/40 sm:block" />

            <button
              type="button"
              onClick={() => scrollToSection("golden-fleet")}
              className="cursor-pointer"
            >
              <PartnerStripItem
                icon={<Sparkles className="h-4 w-4 text-[#9E6D1F]" />}
                text="Strategic Partners"
              />
            </button>

            <div className="hidden h-5 w-px bg-[#C2A169]/40 sm:block" />

            <button
              type="button"
              onClick={() => scrollToSection("voyage-fellowship")}
              className="cursor-pointer"
            >
              <PartnerStripItem
                icon={<Anchor className="h-4 w-4 text-[#165D73]" />}
                text="Voyage Fellowship"
              />
            </button>
          </div>
        </div>
      </section>

      {/* ============================================================
          PRESENTING PARTNER (Sandy-Oceanic Sovereign Vault)
      ============================================================ */}
      {presentingSponsor && (
        <section
          id="presenting-partner"
          className="relative z-10 mx-auto max-w-[1280px] px-5 pb-20 pt-24 sm:px-8 lg:pt-28"
          style={{ contentVisibility: "auto", containIntrinsicSize: "500px" }}
        >
          <SectionHeading
            icon={<Star className="h-5 w-5" />}
            eyebrow="The Flagship"
            title="Presenting Partner"
            subtitle="The principal ally helping lead the expedition across uncharted horizons."
          />

          <div
            className="
              sponsor-feature-card
              group
              relative
              mx-auto
              mt-12
              max-w-5xl
              overflow-hidden
              rounded-[28px]
              border-2
              border-[#C5A25F]/70
              bg-gradient-to-br
              from-[#EEDFCA]
              via-[#E6D6C0]
              to-[#DCECEE]
              shadow-[0_22px_70px_rgba(20,55,70,0.15)]
              transition-all
              duration-500
              hover:border-[#B58B3E]
            "
          >
            {/* Gold edge */}
            <div
              className="
                absolute
                inset-x-0
                top-0
                z-20
                h-[3px]
                bg-gradient-to-r
                from-transparent
                via-[#C7A052]
                to-transparent
              "
            />

            {/* Nautical chart background */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
              <NauticalChart />
            </div>

            {/* Decorative compass watermark */}
            <div className="pointer-events-none absolute -right-24 -top-24 opacity-[0.06]">
              <Compass
                className="h-80 w-80 text-[#0F4356]"
                strokeWidth={0.6}
              />
            </div>

            <div className="relative grid items-center gap-10 p-6 sm:p-10 md:grid-cols-[1fr_1.05fr] md:p-14">
              {/* Logo plaque in sandy parchment tone */}
              <div
                className="
                  relative
                  flex
                  min-h-[235px]
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#BFA275]/60
                  bg-[#F2E5D4]
                  p-8
                  shadow-inner
                  sm:min-h-[285px]
                "
              >
                {/* Inner navigation frame */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-4
                    rounded-xl
                    border
                    border-[#A87E35]/35
                  "
                />

                <div className="pointer-events-none absolute left-4 top-4 h-6 w-6 border-l border-t border-[#9E6D1F]/55" />
                <div className="pointer-events-none absolute bottom-4 right-4 h-6 w-6 border-b border-r border-[#9E6D1F]/55" />

                <img
                  src={presentingSponsor.image}
                  alt={presentingSponsor.name}
                  className="
                    relative
                    z-10
                    max-h-44
                    max-w-[82%]
                    object-contain
                    drop-shadow-[0_4px_10px_rgba(20,55,70,0.15)]
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Information - Centre aligned */}
              <div className="flex flex-col items-center justify-center text-center">
                <div className="mb-4 flex items-center justify-center gap-3">
                  <span className="h-px w-8 bg-[#B58B3E]" />
                  <span
                    className="
                      font-mono
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.3em]
                      text-[#8A5F1C]
                    "
                  >
                    Presenting Partner
                  </span>
                  <span className="h-px w-8 bg-[#B58B3E]" />
                </div>

                <h3
                  className="
                    font-cinzel
                    text-3xl
                    font-bold
                    uppercase
                    tracking-wide
                    text-[#0C2B3D]
                    sm:text-4xl
                  "
                >
                  {presentingSponsor.name}
                </h3>

                <span className="mt-2 inline-block rounded-full border border-[#C5A25F]/50 bg-[#E8D7C2] px-4 py-1 font-mono text-[10px] font-bold text-[#14556C]">
                  {presentingSponsor.category}
                </span>

                <p
                  className="
                    mt-5
                    max-w-xl
                    font-montserrat
                    text-sm
                    leading-7
                    text-[#2C5263]
                    font-medium
                    mx-auto
                  "
                >
                  {presentingSponsor.description ||
                    "Our flagship partner in this journey of ideas, collaboration, innovation and maritime discovery. Archiving uncharted archipelagos and powering Renaissance 2026."}
                </p>

                <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
                  <button
                    type="button"
                    onClick={() => setActiveSponsor(presentingSponsor)}
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-[#A87E35]
                      bg-gradient-to-r
                      from-[#B58B3E]
                      to-[#9E6D1F]
                      px-6
                      py-2.5
                      font-cinzel
                      text-xs
                      font-bold
                      uppercase
                      tracking-wider
                      text-white
                      shadow-md
                      transition-all
                      hover:brightness-110
                      hover:scale-105
                      cursor-pointer
                    "
                  >
                    <span>View Dossier</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>

                  <div className="flex items-center gap-2 font-mono text-[9px] font-semibold uppercase tracking-[0.22em] text-[#5A7E8C]">
                    <Ship
                      className="h-4 w-4 text-[#9E6D1F]"
                      strokeWidth={1.3}
                    />
                    <span>Sailing With Renaissance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ============================================================
          PRINCIPAL ALLIES (Those At The Helm — Sandy Paper Tone)
      ============================================================ */}
      {principalAllies.length > 0 && (
        <SponsorSection
          id="principal-allies"
          eyebrow="Our Principal Allies"
          title="Those At The Helm"
          subtitle="The partners helping chart the course for Renaissance."
          sponsors={principalAllies}
          size="large"
          theme="sandy"
          onInspect={(s) => setActiveSponsor(s)}
        />
      )}

      {/* ============================================================
          STRATEGIC PARTNERS (The Golden Fleet — Oceanic Lagoon Wash)
      ============================================================ */}
      {goldenFleet.length > 0 && (
        <SponsorSection
          id="golden-fleet"
          eyebrow="The Golden Fleet"
          title="Strategic Partners"
          subtitle="Organizations sailing alongside us to turn ideas into impact."
          sponsors={goldenFleet}
          size="medium"
          theme="oceanic"
          onInspect={(s) => setActiveSponsor(s)}
        />
      )}

      {/* ============================================================
          VOYAGE FELLOWSHIP (Our Wider Fellowship — Warm Sand Tone)
      ============================================================ */}
      {voyageFellowship.length > 0 && (
        <SponsorSection
          id="voyage-fellowship"
          eyebrow="The Voyage Fellowship"
          title="Our Wider Fellowship"
          subtitle="Media, community and event partners carrying the voyage further."
          sponsors={voyageFellowship}
          size="small"
          theme="sandy"
          onInspect={(s) => setActiveSponsor(s)}
        />
      )}

      {/* ============================================================
          JOIN THE VOYAGE (Deep Oceanic Contrast Section)
      ============================================================ */}
      {!embedded && (
        <section
          className="
            relative
            z-10
            overflow-hidden
            border-t
            border-[#6B9CA9]/40
            bg-[#0F3549]
          "
        >
          {/* Ocean glow */}
          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              top-0
              h-44
              bg-gradient-to-b
              from-[#4CA1B5]/20
              to-transparent
            "
          />

          {/* Compass watermark */}
          <div
            className="
              pointer-events-none
              absolute
              -left-24
              top-1/2
              hidden
              -translate-y-1/2
              opacity-[0.08]
              md:block
            "
          >
            <Compass
              className="h-80 w-80 text-[#E2D09A]"
              strokeWidth={0.6}
            />
          </div>

          {/* Anchor watermark */}
          <div
            className="
              pointer-events-none
              absolute
              -right-20
              bottom-[-100px]
              opacity-[0.07]
            "
          >
            <Anchor
              className="h-80 w-80 text-[#E2D09A]"
              strokeWidth={0.7}
            />
          </div>

          <div className="relative mx-auto max-w-4xl px-6 py-28 text-center sm:px-8">
            <Anchor
              className="mx-auto mb-7 h-10 w-10 text-[#D7B86D]"
              strokeWidth={1.2}
            />

            <p
              className="
                mb-4
                font-mono
                text-[9px]
                font-bold
                uppercase
                tracking-[0.35em]
                text-[#D7B86D]
              "
            >
              Chart A New Course
            </p>

            <h2
              className="
                font-cinzel
                text-3xl
                font-bold
                uppercase
                tracking-wide
                text-[#FFF9ED]
                sm:text-4xl
                md:text-5xl
              "
            >
              Join The Voyage
            </h2>

            <p
              className="
                mx-auto
                mt-6
                max-w-xl
                font-montserrat
                text-sm
                leading-7
                text-[#CBE0E4]
                sm:text-base
                font-light
              "
            >
              Every meaningful expedition begins with those willing to explore
              beyond the familiar. Become a partner and help us shape the next
              horizon.
            </p>

            <Link
              to="/contact"
              className="
                group
                mt-9
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-[#D5B66B]
                bg-[#D5B66B]
                px-8
                py-4
                font-cinzel
                text-sm
                font-bold
                uppercase
                tracking-[0.15em]
                text-[#0B2838]
                shadow-[0_8px_30px_rgba(0,0,0,0.22)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#E5CA88]
                hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)]
                cursor-pointer
              "
            >
              <span>Become a Partner</span>
              <ArrowRight
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>
          </div>
        </section>
      )}

      {/* ============================================================
          FOOTER (Matching Warm Beach Sand Tone)
      ============================================================ */}
      {!embedded && (
        <div className="relative z-10 bg-[#E2D2BC]">
          <ContactFooter />
        </div>
      )}

      {/* ============================================================
          SPONSOR DOSSIER MODAL (Sandy-Oceanic Glass Modal)
      ============================================================ */}
      {activeSponsor && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#072433]/70 p-4 backdrop-blur-sm"
          onClick={() => setActiveSponsor(null)}
        >
          <div
            className="relative w-full max-w-md overflow-hidden rounded-3xl border-2 border-[#C5A25F] bg-gradient-to-b from-[#F2E5D4] to-[#E8D7C2] p-6 text-[#0C2B3D] shadow-[0_24px_70px_rgba(12,45,60,0.3)] sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top gold bar */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#C5A25F] to-transparent" />

            <button
              type="button"
              onClick={() => setActiveSponsor(null)}
              className="absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full border border-[#BFA275] bg-[#EEDFCA] text-sm font-bold text-[#5A4526] hover:text-[#0C2B3D] cursor-pointer"
              aria-label="Close sponsor details"
            >
              ✕
            </button>

            <div className="flex flex-col items-center text-center space-y-4">
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-[#8E6422] border-b border-[#C5A25F]/40 pb-1">
                Official Fleet Partner
              </span>

              <div className="flex h-36 w-full items-center justify-center rounded-2xl border border-[#97BFC7] bg-[#E4ECEB] p-5 shadow-inner">
                <img
                  src={activeSponsor.image}
                  alt={activeSponsor.name}
                  className="max-h-full max-w-full object-contain filter drop-shadow-[0_2px_8px_rgba(20,61,77,0.15)]"
                />
              </div>

              <h3 className="font-cinzel text-2xl font-bold text-[#0C2B3D]">
                {activeSponsor.name}
              </h3>

              <span className="rounded-full border border-[#C5A25F]/50 bg-[#E8D7C2] px-3.5 py-0.5 font-mono text-[10px] font-bold text-[#14556C]">
                {activeSponsor.category}
              </span>

              <p className="font-montserrat text-xs leading-relaxed text-[#2C5263] font-medium">
                {activeSponsor.description ||
                  "Official fleet partner for Renaissance 2026, sailing with the voyage and empowering entrepreneurship across uncharted horizons."}
              </p>

              <button
                type="button"
                onClick={() => setActiveSponsor(null)}
                className="mt-2 rounded-xl bg-[#0F3549] px-6 py-2.5 font-cinzel text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#164963] cursor-pointer"
              >
                Close Dossier
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================
          PAGE ANIMATIONS (Hero Drift & Compass Kept, Boat Removed)
      ============================================================ */}
      <style>{`
        @keyframes renaissanceCompass {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes renaissanceHeroDrift {
          0%, 100% {
            transform: scale(1.05) translate3d(0, 0, 0);
          }
          50% {
            transform: scale(1.09) translate3d(-1.2%, -0.6%, 0);
          }
        }

        .sponsor-hero-raster {
          animation: renaissanceHeroDrift 20s ease-in-out infinite;
          will-change: transform;
        }

        .sponsor-compass-slow {
          animation: renaissanceCompass 55s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .sponsor-hero-raster,
          .sponsor-compass-slow {
            animation: none !important;
            transform: scale(1.05);
          }
        }
      `}</style>
    </main>
  );
}

/* =================================================================
   PARTNER STRIP ITEM
================================================================= */

function PartnerStripItem({ icon, text }) {
  return (
    <div className="group flex items-center gap-2.5 transition-colors hover:text-[#8E6422]">
      <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#BFA275]/50 bg-[#E2CEB3] transition-colors group-hover:border-[#9E6D1F] group-hover:bg-[#DAC4A5]">
        {icon}
      </span>
      <span className="font-cinzel text-xs font-bold uppercase tracking-[0.14em] text-[#0C2B3D] group-hover:text-[#8E6422]">
        {text}
      </span>
    </div>
  );
}

/* =================================================================
   SECTION HEADING
================================================================= */

function SectionHeading({ icon, eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="mb-4 flex items-center justify-center gap-3">
        <span className="h-px w-12 bg-[#B58B3E]/60" />
        <span className="text-[#8E6422]">{icon}</span>
        <span className="h-px w-12 bg-[#B58B3E]/60" />
      </div>

      <p
        className="
          font-mono
          text-[9px]
          font-bold
          uppercase
          tracking-[0.32em]
          text-[#8E6422]
        "
      >
        {eyebrow}
      </p>

      <h2
        className="
          mt-3
          font-cinzel
          text-3xl
          font-bold
          uppercase
          tracking-wide
          text-[#0C2B3D]
          sm:text-4xl
        "
      >
        {title}
      </h2>

      <p
        className="
          mx-auto
          mt-4
          max-w-xl
          font-montserrat
          text-sm
          leading-6
          text-[#2C5263]
          font-medium
        "
      >
        {subtitle}
      </p>

      <div className="mx-auto mt-7 flex items-center justify-center gap-3">
        <span className="h-px w-14 bg-[#C2A169]/50" />
        <span className="h-1.5 w-1.5 rotate-45 border border-[#8E6422]" />
        <span className="h-px w-14 bg-[#C2A169]/50" />
      </div>
    </div>
  );
}

/* =================================================================
   SPONSOR SECTION (Sandy + Oceanic Variants, Zero Stark White)
================================================================= */

function SponsorSection({
  id,
  eyebrow,
  title,
  subtitle,
  sponsors,
  size,
  theme = "sandy",
  onInspect,
}) {
  const isOceanic = theme === "oceanic";

  return (
    <section
      id={id}
      className={`
        relative
        z-10
        border-t
        ${
          isOceanic
            ? "bg-[#D7EAEC]/65 border-[#80B2BE]/45"
            : "bg-[#EFE2CF]/60 border-[#C2A169]/40"
        }
      `}
      style={{ contentVisibility: "auto", containIntrinsicSize: "400px" }}
    >
      {/* Section horizon line */}
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${
          isOceanic ? "via-[#5EA5B4]/45" : "via-[#C2A169]/50"
        } to-transparent`}
      />

      <div className="mx-auto max-w-[1280px] px-5 py-24 sm:px-8 lg:py-28">
        <SectionHeading
          icon={<Compass className="h-5 w-5" />}
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
        />

        <div
          className="
            mx-auto
            mt-14
            flex
            flex-wrap
            items-stretch
            justify-center
            gap-7
            sm:gap-8
            max-w-6xl
          "
        >
          {sponsors.map((sponsor, index) => (
            <div
              key={`${sponsor.name}-${index}`}
              className={`
                flex
                justify-center
                w-full
                ${
                  size === "large"
                    ? "sm:w-[calc(50%-1.25rem)] max-w-[440px]"
                    : size === "medium"
                    ? "sm:w-[calc(50%-1.25rem)] lg:w-[calc(33.333%-1.5rem)] max-w-[370px]"
                    : "w-[calc(50%-0.75rem)] sm:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.5rem)] max-w-[280px]"
                }
              `}
            >
              <SponsorCard
                sponsor={sponsor}
                size={size}
                theme={theme}
                onInspect={() => onInspect && onInspect(sponsor)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =================================================================
   SPONSOR CARD (Rich Sandy & Oceanic Tones, Centre Aligned)
================================================================= */

function SponsorCard({ sponsor, size = "medium", theme = "sandy", onInspect }) {
  const isLarge = size === "large";
  const isSmall = size === "small";
  const isOceanic = theme === "oceanic";

  return (
    <article
      onClick={onInspect}
      className={`
        sponsor-card
        group
        relative
        w-full
        flex
        flex-col
        justify-between
        overflow-hidden
        rounded-[22px]
        border
        ${
          isOceanic
            ? "border-[#86B4BF]/65 bg-gradient-to-b from-[#E7EEED] to-[#DBE8EA] hover:border-[#388D9E]"
            : "border-[#C2A169]/65 bg-gradient-to-b from-[#EFE3D2] to-[#E8D7C2] hover:border-[#8E6422]"
        }
        shadow-[0_10px_30px_rgba(20,55,70,0.10)]
        transition-all
        duration-300
        hover:shadow-[0_18px_45px_rgba(20,55,70,0.18)]
        hover:-translate-y-1
        cursor-pointer
      `}
    >
      {/* Gold top edge bar */}
      <div className="absolute inset-x-0 top-0 z-30 h-[3px] bg-gradient-to-r from-transparent via-[#C5A25F] to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

      {/* Decorative Brass Corners */}
      <div
        className={`pointer-events-none absolute left-3 top-3 z-30 h-7 w-7 border-l-2 border-t-2 ${
          isOceanic ? "border-[#629FA8]/50" : "border-[#A87E35]/45"
        } group-hover:border-[#9E6D1F] transition-colors`}
      />
      <div
        className={`pointer-events-none absolute right-3 top-3 z-30 h-7 w-7 border-r-2 border-t-2 ${
          isOceanic ? "border-[#629FA8]/50" : "border-[#A87E35]/45"
        } group-hover:border-[#9E6D1F] transition-colors`}
      />

      {/* Visual / Logo Area in warm sand/ocean tones */}
      <div
        className={`
          relative
          overflow-hidden
          border-b
          ${isOceanic ? "border-[#A8CDD4]/60" : "border-[#D5C29E]/60"}
          bg-gradient-to-b
          ${
            isOceanic
              ? "from-[#DFECEE] via-[#D3E5E8] to-[#C9DFE2]"
              : "from-[#EADDC9] via-[#E4D4BD] to-[#DCBFA2]"
          }
          flex
          items-center
          justify-center
          p-5
          ${isLarge ? "h-[240px]" : isSmall ? "h-[145px]" : "h-[190px]"}
        `}
      >
        {/* Subtle Nautical Chart Texture in the Card */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08] bg-cover bg-center"
          style={{ backgroundImage: "url('/ship-map-hero.jpg')" }}
        />

        {/* Logo Plaque (Sandy/Oceanic Tint) */}
        <div
          className={`
            relative
            z-10
            flex
            h-[80%]
            w-[86%]
            items-center
            justify-center
            rounded-xl
            border
            ${
              isOceanic
                ? "border-[#99C5CF] bg-[#E8F2F3]"
                : "border-[#D0B78B] bg-[#F5EAD9]"
            }
            p-3
            shadow-[0_4px_16px_rgba(20,55,70,0.08)]
            transition-all
            duration-300
            group-hover:scale-105
          `}
        >
          <img
            src={sponsor.image}
            alt={sponsor.name}
            loading="lazy"
            className="max-h-full max-w-full object-contain filter drop-shadow-[0_2px_8px_rgba(20,55,70,0.14)]"
          />
        </div>

        {/* Tier badge */}
        <div
          className={`
            absolute
            bottom-2.5
            left-1/2
            z-20
            -translate-x-1/2
            whitespace-nowrap
            rounded-full
            border
            ${
              isOceanic
                ? "border-[#77ABB6] bg-[#D4E8EA]"
                : "border-[#C5A25F]/60 bg-[#E8D7C2]"
            }
            px-3.5
            py-0.5
            shadow-sm
          `}
        >
          <span
            className={`font-mono text-[7px] font-bold uppercase tracking-[0.2em] ${
              isOceanic ? "text-[#0F4B5A]" : "text-[#7A5418]"
            }`}
          >
            {isLarge
              ? "Captain's Ally"
              : isSmall
              ? "Voyage Ally"
              : "Golden Fleet"}
          </span>
        </div>
      </div>

      {/* Card Information - Centre Aligned */}
      <div
        className={`relative flex flex-1 flex-col items-center justify-between text-center ${
          isLarge ? "p-6 sm:p-7" : isSmall ? "p-4" : "p-5"
        }`}
      >
        <div className="flex flex-col items-center justify-center text-center w-full">
          {/* Centered Decorative Accent */}
          <div className="mb-2.5 flex items-center justify-center gap-2">
            <span className="h-px w-6 bg-[#B58B3E]/60" />
            <span className="h-1.5 w-1.5 rotate-45 bg-[#8E6422]" />
            <span className="h-px w-6 bg-[#B58B3E]/60" />
          </div>

          <h3 className="font-cinzel text-lg font-bold text-[#0C2B3D] transition-colors group-hover:text-[#8E6422] sm:text-xl">
            {sponsor.name}
          </h3>

          <p
            className={`mt-1 font-mono text-[10px] uppercase tracking-wider font-bold ${
              isOceanic ? "text-[#125D73]" : "text-[#855D1E]"
            }`}
          >
            {sponsor.category}
          </p>

          {sponsor.description && (
            <p className="mt-2 text-xs font-montserrat text-[#315768] font-medium leading-relaxed max-w-[280px] line-clamp-2">
              {sponsor.description}
            </p>
          )}
        </div>

        <div
          className={`mt-4 flex items-center justify-center gap-2 border-t ${
            isOceanic ? "border-[#BCD8DE]" : "border-[#DDCBBA]"
          } pt-3 text-[10px] font-mono font-bold text-[#8E6422] group-hover:text-[#0C2B3D] transition-colors w-full`}
        >
          <Anchor className="h-3.5 w-3.5 text-[#8E6422]" />
          <span>Inspect Fleet Dossier</span>
          <span>→</span>
        </div>
      </div>
    </article>
  );
}

/* =================================================================
   GLOBAL SANDY + OCEANIC ATMOSPHERE (No White, Warm Beach & Sea)
================================================================= */

function SandyOceanAtmosphere() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Soft Caribbean Blue Depth Wash */}
      <div className="absolute right-[-10%] top-[16%] h-[600px] w-[600px] rounded-full bg-[#5FB0C3]/12 blur-[90px]" />
      <div className="absolute left-[-10%] top-[50%] h-[550px] w-[550px] rounded-full bg-[#3F95A9]/10 blur-[90px]" />

      {/* Warm sunlight sand glow */}
      <div className="absolute left-[28%] top-[-5%] h-[500px] w-[500px] rounded-full bg-[#E8C87A]/15 blur-[100px]" />

      {/* Fine sand parchment grain texture */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(20,65,80,.25) 0 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, rgba(165,120,45,.22) 0 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px, 58px 58px",
        }}
      />
    </div>
  );
}

/* =================================================================
   NAUTICAL CHART (Static Vector Background Graphic)
================================================================= */

function NauticalChart() {
  return (
    <svg
      viewBox="0 0 900 500"
      className="h-full w-full"
      preserveAspectRatio="none"
    >
      <path
        d="
          M0 380
          C120 300 180 440 320 330
          C450 230 540 360 690 250
          C770 195 840 245 900 180
        "
        fill="none"
        stroke="#124A5E"
        strokeWidth="1.1"
        strokeDasharray="8 10"
      />
      <path
        d="
          M0 150
          C150 200 210 100 360 180
          C500 255 620 125 900 310
        "
        fill="none"
        stroke="#8A5F1C"
        strokeWidth="1.1"
        strokeDasharray="5 8"
      />
      <circle
        cx="680"
        cy="150"
        r="80"
        fill="none"
        stroke="#124A5E"
        strokeWidth="1"
      />
      <circle
        cx="680"
        cy="150"
        r="50"
        fill="none"
        stroke="#124A5E"
        strokeWidth="0.8"
      />
      <path
        d="M680 65 L680 235 M595 150 L765 150"
        stroke="#124A5E"
        strokeWidth="0.7"
      />
      <path
        d="M180 390 L280 280 L360 350 L440 250"
        fill="none"
        stroke="#124A5E"
        strokeWidth="0.8"
      />
      <circle cx="180" cy="390" r="4" fill="#8A5F1C" />
      <circle cx="440" cy="250" r="4" fill="#8A5F1C" />
    </svg>
  );
}

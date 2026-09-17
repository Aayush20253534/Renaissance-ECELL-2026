import { useRef, useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import ContactFooter from "../components/ContactFooter";

// Replace this path with each member's photo when it is available.
const DUMMY_MEMBER_PHOTO = "/placeholder-speaker.svg";
const MAIN_SECTION_HEADING_CLASS =
  "group mx-auto mb-5 flex w-fit cursor-default flex-col items-center font-cinzel text-[1.65rem] font-bold leading-tight tracking-[0.04em] text-[#166E94] sm:mb-9 sm:text-5xl sm:tracking-[0.06em]";

const facultyIncharges = [
  {
    name: "Prof. Mukul Shukla",
    image_url:
      "https://res.cloudinary.com/ddjzcyl4d/image/upload/v1774029796/image_1_roojuv.avif",
    linkedin: "https://www.linkedin.com/in/mukul-shukla-329a7121",
  },
  {
    name: "Prof. Mayank Pandey",
    image_url:
      "https://res.cloudinary.com/ddjzcyl4d/image/upload/v1774029797/image_wj6szw.avif",
    linkedin: "https://www.linkedin.com/in/mayank-pandey-0b433137/",
  },
];

const finalYearMembers = Array.from({ length: 10 }, (_, index) => ({
  name: `Final Year Member ${index + 1}`,
  position: "Final Year",
  image_url: DUMMY_MEMBER_PHOTO,
  linkedin: `https://www.linkedin.com/in/final-year-member-${index + 1}/`,
}));

const thirdYearTeams = [
  "Web Team",
  "Marketing Team",
  "Design Team",
  "Content Team",
  "Video Team",
].map((teamName) => ({
  name: teamName,
  members: Array.from({ length: 10 }, (_, index) => ({
    name: `${teamName} Member ${index + 1}`,
    position: "Third Year",
    image_url: DUMMY_MEMBER_PHOTO,
    linkedin: `https://www.linkedin.com/in/${teamName
      .toLowerCase()
      .replace(/\s/g, "-")}-member-${index + 1}/`,
  })),
}));

const secondYearTeams = [
  "Web Team",
  "Marketing Team",
  "Design Team",
  "Content Team",
  "Video Team",
].map((teamName) => ({
  name: teamName,
  members: Array.from({ length: 10 }, (_, index) => ({
    name: `${teamName} Member ${index + 1}`,
    registration_no: `2024${String(index + 1).padStart(4, "0")}`,
    linkedin: `https://www.linkedin.com/in/second-year-${teamName
      .toLowerCase()
      .replace(/\s/g, "-")}-member-${index + 1}/`,
  })),
}));

const MemberCard = ({ member, compact = false }) => (
  <div className={`teams-member-card group relative rounded-2xl bg-[#FDF3DF] border border-[#78C8ED] hover:border-[#238BBB] shadow-[0_8px_22px_rgba(35,93,119,0.16)] hover:shadow-[0_12px_28px_rgba(35,93,119,0.22)] transition-all duration-300 flex flex-col items-center text-center overflow-hidden cursor-pointer ${compact ? "min-h-[210px] justify-center px-6 py-8" : "p-6"}`}>

    {!compact && (
      <div className="relative w-24 h-24 rounded-full p-1 bg-[#78C8ED] mb-4 shadow-lg group-hover:scale-105 transition-transform duration-300">
        <div className="w-full h-full rounded-full overflow-hidden bg-[#FDF3DF] p-0.5 border border-[#238BBB]">
          <img
            src={member.image_url || "/placeholder-speaker.svg"}
            alt={member.name}
            className="w-full h-full object-cover rounded-full filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
            onError={(e) => {
              e.target.src = "/placeholder-speaker.svg";
            }}
          />
        </div>
      </div>
    )}

    <h3 className={`font-cinzel font-bold text-[#173F56] mb-1.5 tracking-wide group-hover:text-[#238BBB] transition-colors ${compact ? "text-lg" : "text-sm sm:text-base"}`}>
      {member.name}
    </h3>

    {!compact && member.position && (
      <p className="text-[11px] text-[#166E94] font-montserrat font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded-full bg-[#C7EBFA] border border-[#78C8ED] shadow-sm">
        {member.position}
      </p>
    )}

    {compact && member.registration_no && (
      <p className="mt-4 text-xs font-montserrat font-semibold tracking-wider text-[#7A6A58] uppercase">
        Reg: {member.registration_no}
      </p>
    )}

    {member.team && (
      <p className="text-[10px] text-[#9A6B27] font-mono mt-2 tracking-widest uppercase">
        {member.team}
      </p>
    )}

    {member.linkedin && (
      <a
        href={member.linkedin}
        target="_blank"
        rel="noreferrer"
        className={`mt-3 inline-flex items-center justify-center gap-2 font-montserrat font-bold uppercase tracking-wider text-[#7A6A58] transition-colors hover:text-[#173F56] ${compact ? "w-full rounded-lg border border-[#D8C4A8] bg-[#F1E0C9] px-4 py-3 text-xs" : "text-[10px] underline underline-offset-4"}`}
      >
        <FaLinkedin className="text-base" aria-hidden="true" />
        <span>LinkedIn</span>
      </a>
    )}
  </div>
);

const FacultyCard = ({ member }) => (
  <article className="teams-member-card teams-faculty-card group flex w-[calc((100vw-60px)/2)] shrink-0 flex-col rounded-xl border border-[#D8C4A8] bg-[#FDF3DF] p-2.5 text-center shadow-[0_10px_24px_rgba(84,64,43,0.2)] transition-all duration-300 sm:w-[232px] sm:rounded-2xl sm:p-4">
    <div className="aspect-square w-full overflow-hidden rounded-xl border border-[#D8C4A8] bg-[#EAD7BC]">
      <img
        src={member.image_url}
        alt={member.name}
        className="h-full w-full object-cover"
        onError={(e) => {
          e.currentTarget.src = "/placeholder-speaker.svg";
        }}
      />
    </div>
    <h3 className="mt-3 font-cinzel text-base font-bold leading-snug text-[#40352B] sm:mt-5 sm:text-2xl">
      {member.name}
    </h3>
    <a
      href={member.linkedin}
      target="_blank"
      rel="noreferrer"
      className="mt-2.5 inline-flex items-center justify-center gap-1.5 self-center font-montserrat text-[10px] font-bold uppercase tracking-[0.1em] text-[#7A6A58] transition-colors hover:text-[#40352B] sm:mt-4 sm:gap-2 sm:text-xs sm:tracking-[0.13em]"
    >
      <FaLinkedin className="text-lg" aria-hidden="true" />
      <span>LinkedIn</span>
    </a>
  </article>
);

const ScrollingMemberRow = ({ members, label, compact = false }) => {
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);
  const trackRef = useRef(null);

  const keepScrollLooping = () => {
    const carousel = carouselRef.current;
    const track = trackRef.current;

    if (!carousel || !track) return;

    const groupWidth = track.scrollWidth / 3;

    if (carousel.scrollLeft < groupWidth / 2) {
      carousel.scrollLeft += groupWidth;
    } else if (carousel.scrollLeft > groupWidth * 1.5) {
      carousel.scrollLeft -= groupWidth;
    }
  };

  return (
    <div
      ref={carouselRef}
      className={`teams-member-row -mx-4 -my-6 rounded-2xl px-4 py-6 ${
        isPaused
          ? "overflow-x-auto cursor-ew-resize"
          : "overflow-hidden"
      }`}
      aria-label={`Automatically scrolling ${label} members`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onScroll={keepScrollLooping}
    >
      <div
        ref={trackRef}
        className="flex w-max"
        style={{
          animation: "teams-member-scroll 36s linear infinite",
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {[...members, ...members, ...members].map((member, index) => (
          <div
            key={`${member.name}-${index}`}
            className={`${compact ? "w-[372px]" : "w-[312px]"} shrink-0 pr-8`}
            aria-hidden={index >= members.length}
          >
            <MemberCard
              member={member}
              compact={compact}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Teams({ embedded = false }) {
  return (
    <div className={`${embedded ? "py-16" : "teams-page-root min-h-screen pt-[68px] pb-12 sm:pt-24"} bg-[radial-gradient(ellipse_at_15%_18%,rgba(249,231,196,0.60)_0%,transparent_34%),radial-gradient(ellipse_at_85%_76%,rgba(128,199,220,0.35)_0%,transparent_36%),linear-gradient(180deg,#E9DFC9_0%,#C6DEE0_20%,#D7E1D9_44%,#F2E8C8_72%,#FFD9A5_100%)] text-[#173F56] flex flex-col justify-between`}>
      <style>{`
        @keyframes teams-member-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333333%); }
        }

        .teams-member-card {
          transform: perspective(900px) translateZ(0);
          transform-style: preserve-3d;
          will-change: transform;
        }

        .teams-member-card:hover {
          transform: perspective(900px) translateZ(36px) scale(1.025);
          box-shadow: 0 0 14px rgba(120, 200, 237, 0.7), 0 0 30px rgba(120, 200, 237, 0.4);
        }

        .teams-member-row {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .teams-member-row::-webkit-scrollbar {
          display: none;
        }

        /* Scale the reference composition across the full desktop range. */
        @media (min-width: 1024px) {
          .teams-content {
            max-width: min(calc(100% - 4rem), 91.75rem);
          }

          .teams-faculty-cards {
            gap: clamp(2rem, 3.3vw, 4rem);
          }

          .teams-faculty-card {
            width: clamp(16.25rem, 17.6vw, 21.5625rem);
          }
        }

        /* Keep the complete faculty introduction above the fold on short desktop windows. */
        @media (min-width: 1024px) and (max-height: 780px) {
          .teams-page-root {
            padding-top: 4rem !important;
          }

          .teams-team-banner {
            margin-bottom: 1rem !important;
          }

          .teams-team-banner__inner {
            min-height: 150px !important;
            padding-top: 1rem !important;
            padding-bottom: 1rem !important;
          }

          .teams-team-banner__inner > span:not(.absolute) {
            padding: 0.25rem 1rem !important;
            font-size: 0.625rem !important;
          }

          .teams-team-banner__inner h1 {
            margin-top: 0.5rem !important;
            font-size: 2rem !important;
          }

          .teams-team-banner__inner > div {
            margin-top: 0.75rem !important;
          }

          .teams-team-banner__inner p {
            margin-top: 0.5rem !important;
            font-size: 0.875rem !important;
          }

          .teams-faculty-heading {
            margin-bottom: 1rem !important;
            font-size: 2.25rem !important;
          }

          .teams-faculty-heading > span:last-child {
            margin-top: 0.5rem !important;
          }

          .teams-faculty-card {
            width: 260px !important;
            padding: 0.75rem !important;
          }

          .teams-faculty-card h3 {
            margin-top: 0.75rem !important;
            font-size: 1.25rem !important;
            line-height: 1.25 !important;
          }

          .teams-faculty-card a {
            margin-top: 0.75rem !important;
            font-size: 0.625rem !important;
          }
        }
      `}</style>
      <div className="teams-content mx-auto w-full max-w-6xl px-4 mb-36 sm:px-6">
        <header className="teams-team-banner relative mb-4 rounded-[22px] border border-[#C9953D] bg-[#FDF6E8] p-1 shadow-[0_16px_32px_rgba(92,67,27,0.18)] sm:mb-6 sm:rounded-[30px] sm:p-2">
          <div className="teams-team-banner__inner relative flex min-h-[142px] flex-col items-center justify-center overflow-hidden rounded-[17px] border border-[#E1BC73] px-4 py-4 text-center sm:min-h-[200px] sm:rounded-[23px] sm:px-5 sm:py-6">
            <span className="absolute left-3 top-2 font-serif text-sm text-[#B98531] sm:left-4 sm:top-3">✦</span>
            <span className="absolute right-3 top-2 font-serif text-sm text-[#B98531] sm:right-4 sm:top-3">✦</span>
            <span className="absolute bottom-2 left-3 font-serif text-sm text-[#B98531] sm:bottom-3 sm:left-4">✦</span>
            <span className="absolute bottom-2 right-3 font-serif text-sm text-[#B98531] sm:bottom-3 sm:right-4">✦</span>

            <span className="rounded-full border border-[#C9953D] px-3 py-1.5 font-mono text-[7px] font-bold uppercase tracking-[0.26em] text-[#A97929] sm:px-6 sm:py-2 sm:text-xs sm:tracking-[0.5em]">
              ✦ The Organizing Guild ✦
            </span>
            <h1 className="mt-2.5 pt-3 font-cinzel text-[1.65rem] font-bold uppercase tracking-[0.08em] text-[#31291F] sm:mt-5 sm:text-4xl">
              Our Team
            </h1>
            <div className="mt-2.5 flex items-center gap-3 text-[#C9953D] sm:mt-5 sm:gap-5">
              <span className="h-px w-11 bg-[#C9953D] sm:w-28" />
              <span className="text-sm">✦</span>
              <span className="h-px w-11 bg-[#C9953D] sm:w-28" />
            </div>
            <p className="mt-2 font-montserrat text-[11px] font-medium leading-snug tracking-wide text-[#796E5B] sm:mt-4 sm:text-base">
              Meet the people behind Renaissance 2026.
            </p>
          </div>
        </header>

        <div className="space-y-14">
          <section
            className="teams-faculty-section overflow-x-clip"
            aria-labelledby="faculty-incharge-heading"
          >
            <h2
              id="faculty-incharge-heading"
              className={`${MAIN_SECTION_HEADING_CLASS} teams-faculty-heading`}
            >
              <span className="transition-transform duration-300 group-hover:scale-105">Faculty Incharge</span>
              <span className="mt-2 h-1 w-20 rounded-full bg-[#78C8ED] transition-all duration-300 group-hover:w-[70%] sm:mt-3 sm:w-24" />
            </h2>
            <div className="teams-faculty-cards flex justify-center gap-3 px-1 pb-2 sm:gap-12">
              {facultyIncharges.map((member) => (
                <FacultyCard key={member.name} member={member} />
              ))}
            </div>
          </section>

          <section aria-labelledby="final-year-heading">
            <h2
              id="final-year-heading"
              className={MAIN_SECTION_HEADING_CLASS}
            >
              <span className="transition-transform duration-300 group-hover:scale-105">Final Year</span>
              <span className="mt-3 h-1 w-24 rounded-full bg-[#78C8ED] transition-all duration-300 group-hover:w-[70%]" />
            </h2>
            <ScrollingMemberRow members={finalYearMembers} label="final year" />
          </section>

          <section aria-labelledby="third-year-heading">
            <h2
              id="third-year-heading"
              className={MAIN_SECTION_HEADING_CLASS}
            >
              <span className="transition-transform duration-300 group-hover:scale-105">Third Year</span>
              <span className="mt-3 h-1 w-24 rounded-full bg-[#78C8ED] transition-all duration-300 group-hover:w-[70%]" />
            </h2>
            <div className="space-y-10">
              {thirdYearTeams.map(({ name, members }) => (
                <div key={name}>
                  <h3 className="group mx-auto mb-14 flex w-fit cursor-default flex-col items-center font-cinzel text-lg font-bold uppercase tracking-[0.06em] text-[#173F56]">
                    <span className="transition-transform duration-300 group-hover:scale-105">{name}</span>
                    <span className="mt-2 h-0.5 w-12 rounded-full bg-[#78C8ED] transition-all duration-300 group-hover:w-[70%]" />
                  </h3>
                  <ScrollingMemberRow members={members} label={name} />
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="second-year-heading">
            <h2
              id="second-year-heading"
              className={MAIN_SECTION_HEADING_CLASS}
            >
              <span className="transition-transform duration-300 group-hover:scale-105">Second Year</span>
              <span className="mt-3 h-1 w-24 rounded-full bg-[#78C8ED] transition-all duration-300 group-hover:w-[70%]" />
            </h2>
            <div className="space-y-10">
              {secondYearTeams.map(({ name, members }) => (
                <div key={name}>
                  <h3 className="group mx-auto mb-14 flex w-fit cursor-default flex-col items-center font-cinzel text-lg font-bold uppercase tracking-[0.06em] text-[#173F56]">
                    <span className="transition-transform duration-300 group-hover:scale-105">{name}</span>
                    <span className="mt-2 h-0.5 w-12 rounded-full bg-[#78C8ED] transition-all duration-300 group-hover:w-[70%]" />
                  </h3>
                  <ScrollingMemberRow members={members} label={name} compact />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {!embedded && <ContactFooter />}
    </div>
  );
}

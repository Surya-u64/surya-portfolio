import { useState, useEffect } from "react";

const PRIMARY = "#6EE7B7";
const SECONDARY = "#10B981";
const ACCENT = "#047857";
const GRADIENT = `linear-gradient(135deg, ${PRIMARY} 0%, ${SECONDARY} 55%, ${ACCENT} 100%)`;
import emailjs from "@emailjs/browser";

// Get a free access key at https://web3forms.com (use suryavvenkat@gmail.com)
// and paste it here so contact-form submissions email you directly — no
// backend server required.

// Real links pulled from the resume PDF
const CYBERSEC_PROOF =
  "https://drive.google.com/file/d/1nsn_m7ZUPyTbwUx-JYhYjqXX06EjFqU0/view?usp=drive_link";
const HACKATHON_PROOF =
  "https://drive.google.com/file/d/1DFyhvArzKMWLCPKIQLCvdu-KbzugXwXX/view?usp=drive_link";
const JAVA_CERT_LINK =
  "https://drive.google.com/file/d/18aouKSabHXKkLC5N8aBEYtyXdkWZW-hC/view?usp=drive_link";
const WEBDEV_CERT_LINK =
  "https://drive.google.com/file/d/1oCc-5ceQNQEc3Qb5csVwgamoULlSgM_S/view?usp=drive_link";

const stats = [
  {
    value: "Top 8",
    sub: "Cyber Security Summit Finalist",
    link: CYBERSEC_PROOF,
  },
  { value: "3rd", sub: "Catch-24 Hackathon", link: HACKATHON_PROOF },
  { value: "11+", sub: "Technologies Mastered" },
  { value: "100%", sub: "Certified Java Full Stack", link: JAVA_CERT_LINK },
];

const skills = [
  { n: "01", text: "Core Java & Spring Boot", icon: "☕" },
  { n: "02", text: "React, HTML, CSS & JS", icon: "⚛️" },
  { n: "03", text: "PostgreSQL & SQL", icon: "🗄️" },
  { n: "04", text: "JDBC & Hibernate", icon: "🔗" },
];

const heroChips = [
  { icon: "☕", label: "Java" },
  { icon: "⚛️", label: "React" },
  { icon: "🗄️", label: "SQL" },
  { icon: "🔗", label: "Hibernate" },
];

const education = [
  {
    degree: "Bachelor of Computer Science and Engineering",
    school: "Mahendra Institute of Technology",
    period: "08/2022 – 05/2025",
  },
  {
    degree: "Diploma in Electrical and Electronics Engineering",
    school: "Mahendra Polytechnic College",
    period: "08/2019 – 05/2021",
  },
];

const certifications = [
  {
    title: "Java Full Stack Certification",
    org: "JSpiders Training & Development Center",
    desc: "Core Java, J2EE, and SQL applied to industry-standard, full-stack frameworks.",
    link: JAVA_CERT_LINK,
  },
  {
    title: "Full-Stack Web Development Internship",
    org: "Imagecon",
    desc: "Built and deployed dynamic web applications with scalable architecture.",
    link: WEBDEV_CERT_LINK,
  },
];

const projects = [
  {
    tag: "AI & IoT",
    e: "🧠",
    title: "Mind Sync Smart Glasses",
    accent: ACCENT,
    badge: "AI Memory System 🚀",
    desc: "Developed an AI-powered smart glasses solution using ESP32-CAM, React.js, Node.js, MongoDB, Pinecone, and Hugging Face. The system captures images, generates searchable memory embeddings, performs face recognition, and enables contextual memory recall through natural language queries.",
    link: "https://mind-sync-eight.vercel.app/",
  },
  {
    tag: "Backend Engineering",
    e: "✈️",
    title: "Flight Booking System",
    accent: ACCENT,
    badge: "Java + Spring Boot",
    desc: "Built a scalable flight booking backend using Java, Spring Boot, Spring Data JPA, Hibernate, and PostgreSQL. Designed RESTful APIs for flight scheduling, reservation management, and user operations while implementing layered architecture, data persistence, and global exception handling.",
    link: "YOUR_GITHUB_LINK",
  },
  {
    tag: "Enterprise Application",
    e: "🎓",
    title: "Student Management System",
    accent: ACCENT,
    badge: "JWT + CQRS 🚀+Clean Architecture ⚡",
    desc: "Developed a secure and scalable Student Management System using React.js, ASP.NET Core Web API, and PostgreSQL. Features include JWT Authentication, Course Enrollment Management, CQRS, Repository Pattern, Dependency Injection, and full CRUD functionality following Clean Architecture principles.",
    link: "https://github.com/Surya-u64/Student-Registration-System",
  },
  {
    tag: "JavaScript / Linux",
    e: "🪞",
    title: "Smart Mirror",
    accent: "#34D399",
    badge: "3rd Place 🏆",
    desc: "Built an interactive Smart Mirror application using JavaScript and Kali Linux, featuring real-time information display, system integration, and a user-friendly interface optimized for smart environments.",
    link: "https://drive.google.com/file/d/1DFyhvArzKMWLCPKIQLCvdu-KbzugXwXX/view?usp=drive_link",
  },
  {
    tag: "Cybersecurity",
    e: "🛡️",
    title: "File Metamorphy",
    accent: ACCENT,
    badge: "Top 8 🏆",
    desc: "A cybersecurity project selected as one of the top eight teams at the India Cyber Security Summit 2024.",
    link: "https://drive.google.com/file/d/1nsn_m7ZUPyTbwUx-JYhYjqXX06EjFqU0/view?usp=sharing",
  },
  {
    tag: "Full Stack Development",
    e: "🎓",
    title: "Student Registration System",
    accent: ACCENT,
    badge: "React + Spring Boot",
    desc: "Developed a full-stack student management system using React, Spring Boot, and PostgreSQL. Implemented student registration, CRUD operations, search, filtering, validation, exception handling, and responsive UI with RESTful API integration.",
    link: "https://github.com/Surya-u64/Student-Management-System",
  },
];

const tags = [
  "Java Development",
  "Spring Boot",
  "Hibernate",
  "Servlet",
  "JDBC",
  "React",
  "PostgreSQL",
  "Full Stack",
  "Cybersecurity",
  "AI / ML",
  "REST APIs",
  "Git & GitHub",
  "Postman",
  "Kali Linux",
  "ESP32",
  "MERN Stack",
];
const navLinks = ["About", "Education", "Skills", "Projects", "Contact"];

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onFormChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      setSendError("");
      setSending(true);

      // Email to you
      await emailjs.send(
        "service_7xcd93o",
        "template_733e5rc",
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "q5ZqHD3DXph1oRgjJ",
      );

      // Auto reply to visitor
      await emailjs.send(
        "service_7xcd93o",
        "template_vi3v0uj",
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "q5ZqHD3DXph1oRgjJ",
      );

      alert("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        message: "",
      });

      setSent(true); // optional if you have a success state
    } catch (err) {
      console.error("EMAILJS ERROR:", err);

      setSendError(err?.text || "Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  // Dynamic Theme Palette — Neon Emerald
  const theme = {
    bg: isDark ? "#000000" : "#ffffff",
    bgSec: isDark ? "#111111" : "#f5f5f7",
    bgCard: isDark ? "#1C1C1E" : "#ffffff",
    text: isDark ? "#FFFFFF" : "#000000",
    textMuted: isDark ? "#A1A1AA" : "#6e6e73",
    border: isDark ? "#2C2C2E" : "#d2d2d7",
    borderSoft: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)",
    navBg: scrolled
      ? isDark
        ? "rgba(0,0,0,0.88)"
        : "rgba(255,255,255,0.92)"
      : isDark
        ? "rgba(0,0,0,0.5)"
        : "rgba(255,255,255,0.65)",
    inputBg: isDark ? "#1C1C1E" : "#ffffff",
    spot: isDark
      ? "radial-gradient(ellipse 1000px 560px at 50% -12%, rgba(16,185,129,0.10), transparent 60%), radial-gradient(ellipse 700px 420px at 90% 10%, rgba(4,120,87,0.10), transparent 60%)"
      : "radial-gradient(ellipse 1000px 560px at 50% -12%, rgba(16,185,129,0.06), transparent 60%), radial-gradient(ellipse 700px 420px at 90% 10%, rgba(4,120,87,0.06), transparent 60%)",
    btnDark: isDark ? "#000000" : "#000000",
  };

  const css = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,700;1,800;1,900&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { scroll-behavior: smooth; margin: 0; padding: 0; width: 100%; }
  #root { max-width: none !important; padding: 0 !important; margin: 0 !important; width: 100% !important; }

  body { background: ${theme.bg}; color: ${theme.text}; transition: background 0.3s, color 0.3s; }
  .pf { font-family: 'Inter', system-ui, sans-serif; transition: background 0.3s, color 0.3s; width: 100%; }
  a { text-decoration: none; }
  button { font-family: inherit; transition: all 0.25s cubic-bezier(.2,.8,.2,1); }

  .nl { color: ${theme.textMuted}; font-size: 14px; font-weight: 600; transition: color .2s; cursor: pointer; position: relative; }
  .nl::after { content: ''; position: absolute; left: 0; bottom: -6px; width: 0; height: 2px; background: ${GRADIENT}; transition: width .25s ease; border-radius: 2px; }
  .nl:hover { color: ${theme.text}; }
  .nl:hover::after { width: 100%; }

  .glow-btn { transition: transform .3s cubic-bezier(.2,.8,.2,1), box-shadow .3s ease; will-change: transform; }
  .glow-btn:hover { transform: translateY(-3px) scale(1.02); box-shadow: 0 14px 32px -8px ${PRIMARY}66, 0 6px 16px -6px ${ACCENT}40; }

  .lift-card { transition: transform .35s cubic-bezier(.2,.8,.2,1), box-shadow .35s ease, border-color .35s ease; will-change: transform; }
  .lift-card:hover { transform: translateY(-6px) scale(1.015); border-color: ${PRIMARY}55 !important; box-shadow: 0 24px 50px -20px ${PRIMARY}38; }

  .tilt-card { transition: transform .4s cubic-bezier(.2,.8,.2,1), box-shadow .4s ease, border-color .4s ease; will-change: transform; }
  .tilt-card:hover { transform: perspective(1000px) rotateX(3deg) rotateY(-3deg) translateY(-6px) scale(1.015); box-shadow: 0 32px 70px -24px ${PRIMARY}45; border-color: ${PRIMARY}55 !important; }

  .sk-row { transition: transform .25s ease, border-color .25s ease, background .25s ease, box-shadow .25s ease; cursor: pointer; }
  .sk-row:hover { transform: translateX(4px); border-color: ${PRIMARY}55 !important; background: ${theme.bgCard} !important; box-shadow: 0 14px 30px -14px ${PRIMARY}40; }

  .btn-outline-dark:hover { background: ${theme.text} !important; color: ${theme.bg} !important; }

  .spin-star { animation: spinit 12s linear infinite; display: inline-block; }
  @keyframes spinit { to { transform: rotate(360deg); } }

  .fade-in { animation: fadein .8s cubic-bezier(.2,.8,.2,1) both; }
  @keyframes fadein { from{opacity:0;transform:translateY(22px)} to{opacity:1;transform:none} }

  @keyframes floaty { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
  .float-el { animation: floaty 5s ease-in-out infinite; }

  input, textarea { font-family: inherit; transition: background 0.3s, border-color 0.3s, color 0.3s, box-shadow .3s; }
  input:focus, textarea:focus { outline: none; border-color: ${PRIMARY} !important; box-shadow: 0 0 0 4px ${PRIMARY}22; }

  section { scroll-margin-top: 80px; width: 100%; position: relative; }
  .pill { border-radius: 9999px; font-weight: 700; display: inline-block; }
  .grad-text { background: ${GRADIENT}; -webkit-background-clip: text; background-clip: text; color: transparent; }

  .theme-icon { font-size: 17px; cursor: pointer; padding: 9px; border-radius: 50%; background: ${theme.bgCard}; color: ${theme.text}; border: 1px solid ${theme.border}; transition: all 0.3s; }
  .theme-icon:hover { border-color: ${PRIMARY}; box-shadow: 0 0 16px ${PRIMARY}40; }

  .glass { backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); }

  .grad-border { border: 1px solid transparent; border-radius: 26px; background-image: linear-gradient(${theme.bgSec}, ${theme.bgSec}), linear-gradient(135deg, ${PRIMARY}90, ${ACCENT}55); background-origin: border-box; background-clip: padding-box, border-box; }
  .grad-border-card { border: 1px solid transparent; border-radius: 22px; background-image: linear-gradient(${theme.bgSec}, ${theme.bgSec}), linear-gradient(135deg, ${PRIMARY}60, ${ACCENT}45); background-origin: border-box; background-clip: padding-box, border-box; }

  /* Infinite Marquee Animation */
  .marquee-wrapper { display: flex; overflow: hidden; user-select: none; gap: 12px; width: 100%; }
  .marquee-content { display: flex; flex-shrink: 0; gap: 12px; animation: scroll-left 32s linear infinite; }
  .marquee-wrapper:hover .marquee-content { animation-play-state: paused; }
  @keyframes scroll-left {
    from { transform: translateX(0); }
    to { transform: translateX(calc(-100% - 12px)); }
  }

  @media (prefers-reduced-motion: reduce) {
    .float-el, .fade-in, .spin-star { animation: none !important; }
    .lift-card:hover, .tilt-card:hover, .glow-btn:hover { transform: none !important; }
  }

  @media (max-width: 768px) {
    .desk-nav { display: none !important; }
    .hero-flex { flex-direction: column !important; }
    .hero-decor { display: none !important; }
    .about-flex { flex-direction: column !important; }
    .skills-flex { flex-direction: column !important; }
    .contact-flex { flex-direction: column !important; }
    .footer-flex { flex-direction: column !important; align-items: center !important; text-align: center; }
    .hero-text h1 { font-size: 2.4rem !important; }
    .stat-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 20px !important; }
    .proj-grid { grid-template-columns: 1fr !important; }
    section { padding-left: 20px !important; padding-right: 20px !important; }
    .tilt-card:hover { transform: translateY(-4px) scale(1.01) !important; }
  }
  @media (min-width: 769px) {
    .mob-toggle { display: none !important; }
    .mob-drawer { display: none !important; }
  }
`;

  return (
    <div
      className="pf"
      style={{
        backgroundColor: theme.bg,
        color: theme.text,
        overflowX: "hidden",
        minHeight: "100vh",
      }}
    >
      <style>{css}</style>

      {/* ── NAVBAR ── */}
      <nav
        className="glass"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 40px",
          height: 68,
          background: theme.navBg,
          borderBottom: `1px solid ${theme.border}`,
          boxShadow: scrolled ? `0 12px 30px -18px ${PRIMARY}55` : "none",
          transition: "background .3s, box-shadow .3s",
        }}
      >
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span
            className="spin-star"
            style={{ color: ACCENT, fontSize: 20, fontWeight: 900 }}
          >
            ✦
          </span>
          <span
            style={{
              color: theme.text,
              fontSize: 20,
              fontWeight: 800,
              letterSpacing: "-0.04em",
            }}
          >
            Surya
          </span>
        </a>

        <div
          className="desk-nav"
          style={{ display: "flex", alignItems: "center", gap: 36 }}
        >
          {navLinks.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="nl">
              {l}
            </a>
          ))}
          <button
            onClick={() => setIsDark(!isDark)}
            className="theme-icon"
            title="Toggle Theme"
          >
            {isDark ? "☀️" : "🌙"}
          </button>
          <a
            href="#contact"
            className="pill glow-btn"
            style={{
              background: GRADIENT,
              color: "#000",
              padding: "9px 22px",
              fontSize: 13,
              fontWeight: 800,
              boxShadow: `0 8px 22px -8px ${PRIMARY}70`,
            }}
          >
            Hire Me ✦
          </a>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button
            className="mob-toggle theme-icon"
            onClick={() => setIsDark(!isDark)}
            style={{ fontSize: 16 }}
          >
            {isDark ? "☀️" : "🌙"}
          </button>
          <button
            className="mob-toggle theme-icon"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ fontSize: 16 }}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* mobile drawer */}
      {menuOpen && (
        <div
          className="mob-drawer glass"
          style={{
            position: "fixed",
            top: 68,
            left: 0,
            right: 0,
            zIndex: 90,
            background: theme.navBg,
            borderBottom: `1px solid ${theme.border}`,
            padding: "20px 0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
          }}
        >
          {navLinks.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="nl"
              onClick={() => setMenuOpen(false)}
              style={{ fontSize: 16 }}
            >
              {l}
            </a>
          ))}
          <a
            href="#contact"
            className="pill glow-btn"
            onClick={() => setMenuOpen(false)}
            style={{
              background: GRADIENT,
              color: "#000",
              padding: "10px 26px",
              fontSize: 14,
              fontWeight: 800,
            }}
          >
            Hire Me ✦
          </a>
        </div>
      )}

      {/* ── HERO ── */}
      <section
        style={{
          paddingTop: 68,
          background: theme.bg,
          backgroundImage: theme.spot,
        }}
      >
        <div
          style={{
            padding: "64px 48px 90px",
            width: "100%",
          }}
        >
          <div style={{ maxWidth: 1160, margin: "0 auto" }}>
            <div
              className="hero-flex"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 56,
              }}
            >
              <div
                className="hero-text fade-in"
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: 24,
                }}
              >
                <span
                  className="pill"
                  style={{
                    background: isDark ? `${PRIMARY}22` : `${PRIMARY}14`,
                    color: ACCENT,
                    border: `1px solid ${PRIMARY}55`,
                    padding: "7px 18px",
                    fontSize: 12,
                    fontWeight: 800,
                    width: "fit-content",
                  }}
                >
                  ✦ &nbsp; Available for Work
                </span>
                <h1
                  style={{
                    color: theme.text,
                    fontSize: "clamp(2.8rem,5.5vw,4.5rem)",
                    fontWeight: 900,
                    lineHeight: 1.07,
                    letterSpacing: "-0.045em",
                    maxWidth: 800,
                  }}
                >
                  Building Innovative
                  <br />
                  <span className="grad-text">Full‑Stack</span> Solutions
                </h1>
                <p
                  style={{
                    color: theme.textMuted,
                    fontSize: 16,
                    lineHeight: 1.78,
                    maxWidth: 600,
                  }}
                >
                  Hi, I'm{" "}
                  <strong style={{ color: theme.text, fontWeight: 700 }}>
                    Surya
                  </strong>
                  , a Full Stack Developer specializing in Java, Spring Boot,
                  React, and SQL. From dynamic database schemas to interactive
                  UIs, let's create something exceptional together.
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: 14,
                    flexWrap: "wrap",
                    alignItems: "center",
                  }}
                >
                  <a
                    href="#projects"
                    className="pill glow-btn"
                    style={{
                      background: GRADIENT,
                      color: "#000",
                      padding: "13px 30px",
                      fontSize: 14,
                      fontWeight: 800,
                      boxShadow: `0 10px 28px -10px ${PRIMARY}66`,
                    }}
                  >
                    View My Work
                  </a>
                  <a
                    href="#contact"
                    className="pill btn-outline-dark"
                    style={{
                      border: `2px solid ${theme.border}`,
                      color: theme.text,
                      padding: "12px 28px",
                      fontSize: 14,
                      fontWeight: 800,
                      transition: "all .2s",
                    }}
                  >
                    Let's Collaborate
                  </a>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: 10,
                    flexWrap: "wrap",
                    marginTop: 6,
                  }}
                >
                  {heroChips.map((c, i) => (
                    <span
                      key={c.label}
                      className="pill float-el"
                      style={{
                        animationDelay: `${i * 0.35}s`,
                        background: theme.bgCard,
                        border: `1px solid ${theme.border}`,
                        padding: "8px 14px",
                        fontSize: 12,
                        fontWeight: 700,
                        color: theme.textMuted,
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                    >
                      <span style={{ fontSize: 14 }}>{c.icon}</span>
                      {c.label}
                    </span>
                  ))}
                </div>
              </div>

              {/* decorative floating profile card */}
              <div
                className="hero-decor"
                style={{
                  flex: "0 0 300px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  className="grad-border float-el"
                  style={{
                    width: 270,
                    padding: "40px 28px",
                    textAlign: "center",
                    boxShadow: `0 30px 80px -24px ${PRIMARY}55`,
                  }}
                >
                  <div
                    style={{
                      width: 84,
                      height: 84,
                      borderRadius: "50%",
                      background: GRADIENT,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 36,
                      margin: "0 auto 18px",
                      boxShadow: `0 14px 34px -10px ${PRIMARY}70`,
                    }}
                  >
                    🧑‍💻
                  </div>
                  <p
                    style={{
                      color: theme.text,
                      fontWeight: 800,
                      fontSize: 18,
                    }}
                  >
                    Surya
                  </p>
                  <p
                    style={{
                      color: theme.textMuted,
                      fontSize: 13,
                      marginTop: 4,
                    }}
                  >
                    Full Stack Developer
                  </p>
                  <div
                    style={{
                      height: 1,
                      background: theme.border,
                      margin: "20px 0",
                    }}
                  />
                  <p
                    style={{
                      color: theme.textMuted,
                      fontSize: 12,
                      lineHeight: 1.7,
                    }}
                  >
                    Java · Spring Boot · React · PostgreSQL
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section
        style={{
          background: theme.bg,
          borderBottom: `1px solid ${theme.border}`,
          padding: "56px 48px",
        }}
      >
        <div
          className="stat-grid"
          style={{
            maxWidth: 1160,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 24,
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="lift-card"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 6,
                textAlign: "center",
                background: theme.bgSec,
                border: `1px solid ${theme.border}`,
                borderRadius: 20,
                padding: "28px 18px",
              }}
            >
              <span
                className="grad-text"
                style={{
                  fontSize: "clamp(2rem,4vw,2.8rem)",
                  fontWeight: 900,
                  letterSpacing: "-0.04em",
                }}
              >
                {s.value}
              </span>
              <span
                style={{
                  color: theme.textMuted,
                  fontSize: 14,
                  lineHeight: 1.5,
                  maxWidth: 220,
                }}
              >
                {s.sub}
              </span>
              {s.link && (
                <a
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: ACCENT,
                    fontSize: 11,
                    fontWeight: 700,
                    marginTop: 2,
                  }}
                >
                  View proof →
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section
        id="about"
        style={{ background: theme.bg, padding: "100px 48px" }}
      >
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div
            className="about-flex"
            style={{ display: "flex", alignItems: "center", gap: 64 }}
          >
            <div style={{ flex: "1 1 320px" }}>
              <div className="grad-border" style={{ padding: 24 }}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 16,
                  }}
                >
                  <div
                    className="tilt-card"
                    style={{
                      background: theme.bgCard,
                      borderRadius: 22,
                      height: 170,
                      border: `1px solid ${theme.borderSoft}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 44,
                    }}
                  >
                    💻
                  </div>
                  <div
                    className="tilt-card"
                    style={{
                      background: theme.bgCard,
                      borderRadius: 22,
                      height: 170,
                      border: `1px solid ${theme.borderSoft}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 44,
                      marginTop: 32,
                    }}
                  >
                    ⚙️
                  </div>
                  <div style={{ gridColumn: "1/-1", marginTop: 6 }}>
                    <span
                      className="pill"
                      style={{
                        background: GRADIENT,
                        color: "#000",
                        padding: "6px 18px",
                        fontSize: 11,
                        fontWeight: 900,
                        letterSpacing: ".12em",
                        textTransform: "uppercase",
                      }}
                    >
                      A Full Stack Developer
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                flex: "2 1 320px",
                display: "flex",
                flexDirection: "column",
                gap: 22,
              }}
            >
              <h2
                style={{
                  color: theme.text,
                  fontSize: "clamp(2rem,4vw,3.2rem)",
                  fontWeight: 900,
                  lineHeight: 1.12,
                  letterSpacing: "-0.04em",
                }}
              >
                Turning Ideas Into
                <br />
                <span className="grad-text">Masterpieces</span>
              </h2>
              <p
                style={{
                  color: theme.textMuted,
                  fontSize: 15,
                  lineHeight: 1.85,
                }}
              >
                I'm Surya Venkat, a Full Stack Developer passionate about
                building scalable web applications and innovative technology
                solutions. With experience in Java, Spring Boot, React.js,
                ASP.NET Core, and PostgreSQL, I enjoy developing secure backend
                systems, responsive user interfaces, and AI-driven applications
                that solve real-world problems.
              </p>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <button
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/Surya Venkat.pdf";
                    link.download = "Surya Venkat.pdf";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="pill glow-btn"
                  style={{
                    background: GRADIENT,
                    color: "#000",
                    border: "none",
                    padding: "13px 30px",
                    fontSize: 14,
                    fontWeight: 800,
                    cursor: "pointer",
                    boxShadow: `0 10px 28px -10px ${PRIMARY}66`,
                  }}
                >
                  Download CV →
                </button>
                <button
                  className="pill"
                  style={{
                    background: "transparent",
                    color: theme.text,
                    border: `1px solid ${theme.border}`,
                    padding: "13px 28px",
                    fontSize: 14,
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EDUCATION & CERTIFICATIONS ── */}
      <section
        id="education"
        style={{ background: theme.bgSec, padding: "100px 48px" }}
      >
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <span
              className="pill"
              style={{
                background: GRADIENT,
                color: "#000",
                padding: "6px 18px",
                fontSize: 12,
              }}
            >
              Background
            </span>
            <h2
              style={{
                color: theme.text,
                fontSize: "clamp(2rem,4vw,3.2rem)",
                fontWeight: 900,
                letterSpacing: "-0.04em",
                marginTop: 16,
              }}
            >
              Education & <span className="grad-text">Certifications</span>
            </h2>
          </div>

          <div
            className="about-flex"
            style={{ display: "flex", gap: 40, alignItems: "flex-start" }}
          >
            {/* timeline */}
            <div
              style={{
                flex: "1 1 320px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {education.map((ed, i) => (
                <div
                  key={ed.degree}
                  style={{
                    display: "flex",
                    gap: 18,
                    paddingBottom: i === education.length - 1 ? 0 : 36,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      flexShrink: 0,
                    }}
                  >
                    <span
                      style={{
                        width: 14,
                        height: 14,
                        borderRadius: "50%",
                        background: GRADIENT,
                        boxShadow: `0 0 0 4px ${theme.bgSec}, 0 0 14px ${PRIMARY}70`,
                        marginTop: 4,
                      }}
                    />
                    {i !== education.length - 1 && (
                      <span
                        style={{
                          width: 2,
                          flex: 1,
                          background: theme.border,
                          marginTop: 4,
                        }}
                      />
                    )}
                  </div>
                  <div
                    className="lift-card"
                    style={{
                      background: theme.bg,
                      border: `1px solid ${theme.border}`,
                      borderRadius: 18,
                      padding: "20px 24px",
                      flex: 1,
                    }}
                  >
                    <p
                      style={{
                        color: ACCENT,
                        fontSize: 12,
                        fontWeight: 700,
                        marginBottom: 6,
                      }}
                    >
                      {ed.period}
                    </p>
                    <p
                      style={{
                        color: theme.text,
                        fontWeight: 800,
                        fontSize: 15,
                        lineHeight: 1.4,
                      }}
                    >
                      {ed.degree}
                    </p>
                    <p
                      style={{
                        color: theme.textMuted,
                        fontSize: 13,
                        marginTop: 4,
                      }}
                    >
                      {ed.school}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* certifications */}
            <div
              style={{
                flex: "1 1 320px",
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              {certifications.map((c) => (
                <div
                  key={c.title}
                  className="lift-card"
                  style={{
                    background: theme.bg,
                    border: `1px solid ${theme.border}`,
                    borderRadius: 18,
                    padding: "22px 24px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      gap: 12,
                    }}
                  >
                    <div>
                      <p
                        style={{
                          color: theme.text,
                          fontWeight: 800,
                          fontSize: 15,
                        }}
                      >
                        {c.title}
                      </p>
                      <p
                        style={{
                          color: theme.textMuted,
                          fontSize: 13,
                          marginTop: 4,
                        }}
                      >
                        {c.org}
                      </p>
                    </div>
                    <span
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 10,
                        background: GRADIENT,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 16,
                        flexShrink: 0,
                      }}
                    >
                      🎓
                    </span>
                  </div>
                  <p
                    style={{
                      color: theme.textMuted,
                      fontSize: 13,
                      lineHeight: 1.7,
                      marginTop: 10,
                    }}
                  >
                    {c.desc}
                  </p>
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: ACCENT,
                      fontSize: 13,
                      fontWeight: 700,
                      marginTop: 12,
                      display: "inline-block",
                    }}
                  >
                    View Certificate →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section
        id="skills"
        style={{ background: theme.bgSec, padding: "100px 48px" }}
      >
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div
            className="skills-flex"
            style={{ display: "flex", gap: 24, alignItems: "stretch" }}
          >
            <div
              className="grad-border"
              style={{
                flex: "1 1 300px",
                padding: "44px 40px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <span
                  className="pill"
                  style={{
                    background: GRADIENT,
                    color: "#000",
                    padding: "6px 18px",
                    fontSize: 12,
                  }}
                >
                  My Skills
                </span>
                <h2
                  style={{
                    color: theme.text,
                    fontSize: "clamp(1.6rem,2.8vw,2.2rem)",
                    fontWeight: 900,
                    lineHeight: 1.18,
                    letterSpacing: "-0.04em",
                    marginTop: 20,
                  }}
                >
                  Technologies
                  <br />I Work With
                </h2>
                <p
                  style={{
                    color: theme.textMuted,
                    fontSize: 13,
                    lineHeight: 1.82,
                    marginTop: 14,
                  }}
                >
                  Staying agile and working hand-in-hand with clients, I
                  transform ideas into cutting-edge solutions that make a
                  lasting impression.
                </p>
              </div>
              <div>
                <div
                  style={{
                    marginTop: 32,
                    padding: "16px 0",
                    borderTop: `1px solid ${theme.border}`,
                  }}
                >
                  <p
                    style={{
                      color: theme.textMuted,
                      fontSize: 12,
                      marginBottom: 8,
                    }}
                  >
                    Also familiar with
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {[
                      "Servlet",
                      "Git",
                      "GitHub",
                      "Postman",
                      "VS Code",
                      "Canva",
                    ].map((t) => (
                      <span
                        key={t}
                        style={{
                          background: isDark
                            ? "rgba(255,255,255,0.06)"
                            : "rgba(0,0,0,0.04)",
                          color: theme.textMuted,
                          border: `1px solid ${theme.border}`,
                          borderRadius: 8,
                          padding: "4px 12px",
                          fontSize: 11,
                          fontWeight: 600,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => window.open("/Surya Venkat.pdf", "_blank")}
                  className="pill glow-btn"
                  style={{
                    marginTop: 20,
                    background: theme.text,
                    color: theme.bg,
                    border: "none",
                    padding: "13px",
                    cursor: "pointer",
                    fontSize: 13,
                    fontWeight: 800,
                    width: "100%",
                  }}
                >
                  Download Resume →
                </button>
              </div>
            </div>

            <div
              style={{
                flex: "2 1 360px",
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              {skills.map((sk) => (
                <div
                  key={sk.n}
                  className="sk-row"
                  style={{
                    background: theme.bg,
                    border: `1px solid ${theme.border}`,
                    borderRadius: 18,
                    padding: "22px 26px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 16 }}
                  >
                    <span
                      style={{
                        color: ACCENT,
                        fontWeight: 700,
                        fontSize: 13,
                      }}
                    >
                      {sk.n}
                    </span>
                    <span
                      style={{
                        color: theme.text,
                        fontWeight: 600,
                        fontSize: 15,
                      }}
                    >
                      {sk.text}
                    </span>
                  </div>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                  >
                    <span
                      style={{
                        width: 38,
                        height: 38,
                        borderRadius: 12,
                        background: GRADIENT,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 18,
                      }}
                    >
                      {sk.icon}
                    </span>
                    <span style={{ color: theme.textMuted, fontSize: 18 }}>
                      →
                    </span>
                  </div>
                </div>
              ))}

              <div
                className="grad-border-card"
                style={{
                  padding: "22px 26px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <p
                    style={{
                      color: ACCENT,
                      fontWeight: 800,
                      fontSize: 14,
                    }}
                  >
                    Ever wondered how I work?
                  </p>
                  <p
                    style={{
                      color: theme.textMuted,
                      fontSize: 12,
                      marginTop: 4,
                    }}
                  >
                    Explore projects below to see it in action
                  </p>
                </div>
                <a
                  href="#projects"
                  className="pill glow-btn"
                  style={{
                    background: GRADIENT,
                    color: "#000",
                    padding: "10px 20px",
                    fontSize: 12,
                    fontWeight: 800,
                  }}
                >
                  See how →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div
        style={{
          background: theme.bg,
          padding: "48px 48px",
          borderTop: `1px solid ${theme.border}`,
          borderBottom: `1px solid ${theme.border}`,
          textAlign: "center",
        }}
      >
        <p
          className="grad-text"
          style={{
            fontSize: "clamp(2rem,4.5vw,3rem)",
            fontWeight: 900,
            fontStyle: "italic",
            letterSpacing: "-0.03em",
          }}
        >
          Innovate &nbsp;✦&nbsp; Inspire &nbsp;✦&nbsp; Create
        </p>
        <div
          style={{
            height: 1,
            background: theme.border,
            marginTop: 32,
          }}
        />
      </div>

      {/* ── PROJECTS ── */}
      <section
        id="projects"
        style={{ background: theme.bg, padding: "100px 48px" }}
      >
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <span
              className="pill"
              style={{
                background: GRADIENT,
                color: "#000",
                padding: "6px 18px",
                fontSize: 12,
              }}
            >
              My Work
            </span>
            <h2
              style={{
                color: theme.text,
                fontSize: "clamp(2rem,4vw,3.2rem)",
                fontWeight: 900,
                letterSpacing: "-0.04em",
                marginTop: 16,
              }}
            >
              Featured <span className="grad-text">Projects</span>
            </h2>
          </div>

          <div
            className="proj-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              gap: 22,
            }}
          >
            {projects.map((p, i) => (
              <div
                key={i}
                className="tilt-card"
                style={{
                  background: theme.bgSec,
                  border: `1px solid ${theme.border}`,
                  borderRadius: 28,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  cursor: "pointer",
                }}
              >
                {/* preview area */}
                <div
                  style={{
                    height: 130,
                    background: `radial-gradient(circle at 30% 30%, ${p.accent}35, transparent 65%), linear-gradient(135deg, ${p.accent}1a, transparent)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderBottom: `1px solid ${theme.border}`,
                    position: "relative",
                  }}
                >
                  <span style={{ fontSize: 46 }}>{p.e}</span>
                  {p.badge && (
                    <span
                      className="pill"
                      style={{
                        position: "absolute",
                        top: 14,
                        right: 14,
                        background: `${ACCENT}20`,
                        color: ACCENT,
                        border: `1px solid ${ACCENT}55`,
                        padding: "3px 13px",
                        fontSize: 10,
                        fontWeight: 800,
                      }}
                    >
                      {p.badge}
                    </span>
                  )}
                </div>

                <div
                  style={{
                    padding: "26px 28px 28px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                    flex: 1,
                  }}
                >
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    <span
                      className="pill"
                      style={{
                        background: `${p.accent}18`,
                        color: p.accent,
                        border: `1px solid ${p.accent}40`,
                        padding: "3px 13px",
                        fontSize: 11,
                      }}
                    >
                      {p.tag}
                    </span>
                  </div>
                  <h3
                    style={{
                      color: theme.text,
                      fontSize: 20,
                      fontWeight: 900,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      color: theme.textMuted,
                      fontSize: 13,
                      lineHeight: 1.78,
                      flex: 1,
                    }}
                  >
                    {p.desc}
                  </p>
                  <div
                    style={{
                      borderTop: `1px solid ${theme.border}`,
                      paddingTop: 16,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    {p.link ? (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          background: "none",
                          border: "none",
                          color: p.accent,
                          fontSize: 13,
                          fontWeight: 700,
                          cursor: "pointer",
                        }}
                      >
                        View Code →
                      </a>
                    ) : (
                      <button
                        style={{
                          background: "none",
                          border: "none",
                          color: p.accent,
                          fontSize: 13,
                          fontWeight: 700,
                          cursor: "pointer",
                        }}
                      >
                        View Details →
                      </button>
                    )}
                    <span style={{ color: theme.textMuted, fontSize: 18 }}>
                      ↗
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS MARQUEE ── */}
      <div
        className="marquee-wrapper"
        style={{
          background: theme.bgSec,
          borderTop: `1px solid ${theme.border}`,
          padding: "24px 0",
        }}
      >
        <div className="marquee-content">
          {tags.map((t, i) => (
            <span
              key={i}
              className="pill"
              style={{
                background: isDark
                  ? "rgba(255,255,255,0.05)"
                  : "rgba(0,0,0,0.04)",
                color: theme.textMuted,
                border: `1px solid ${theme.border}`,
                padding: "7px 18px",
                fontSize: 12,
              }}
            >
              {t}
            </span>
          ))}
        </div>
        <div className="marquee-content" aria-hidden="true">
          {tags.map((t, i) => (
            <span
              key={i + tags.length}
              className="pill"
              style={{
                background: isDark
                  ? "rgba(255,255,255,0.05)"
                  : "rgba(0,0,0,0.04)",
                color: theme.textMuted,
                border: `1px solid ${theme.border}`,
                padding: "7px 18px",
                fontSize: 12,
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ── CONTACT ── */}
      <section
        id="contact"
        style={{ background: theme.bg, padding: "100px 48px" }}
      >
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div
            className="contact-flex"
            style={{ display: "flex", gap: 64, alignItems: "flex-start" }}
          >
            <div
              style={{
                flex: "1 1 300px",
                display: "flex",
                flexDirection: "column",
                gap: 24,
              }}
            >
              <div>
                <span
                  className="pill"
                  style={{
                    background: GRADIENT,
                    color: "#000",
                    padding: "6px 18px",
                    fontSize: 12,
                  }}
                >
                  Say Hello
                </span>
                <h2
                  style={{
                    color: theme.text,
                    fontSize: "clamp(2rem,4vw,3.2rem)",
                    fontWeight: 900,
                    lineHeight: 1.12,
                    letterSpacing: "-0.04em",
                    marginTop: 16,
                  }}
                >
                  Get in Touch <span className="grad-text">Today!</span>
                </h2>
              </div>
              <p
                style={{
                  color: theme.textMuted,
                  fontSize: 14,
                  lineHeight: 1.85,
                }}
              >
                Let's transform your ideas into remarkable digital experiences.
                Whether you have a project in mind or just want to connect, I'm
                always open for a conversation.
              </p>

              <div
                style={{ display: "flex", flexDirection: "column", gap: 14 }}
              >
                {[
                  {
                    icon: "📧",
                    label: "Email",
                    val: "suryavvenkat@gmail.com",
                    href: "mailto:suryavvenkat@gmail.com",
                  },
                  {
                    icon: "📱",
                    label: "Phone",
                    val: "+91 76959 94048",
                    href: "tel:+917695994048",
                  },
                  {
                    icon: "💼",
                    label: "LinkedIn",
                    val: "linkedin.com/in/surya-v-96613830a",
                    href: "https://www.linkedin.com/in/surya-v-96613830a/",
                  },
                  {
                    icon: "💻",
                    label: "GitHub",
                    val: "github.com/Surya-u64",
                    href: "https://github.com/Surya-u64",
                  },
                ].map((c, i) => (
                  <a
                    key={i}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      c.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="lift-card"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      background: theme.bgSec,
                      border: `1px solid ${theme.border}`,
                      borderRadius: 16,
                      padding: "16px 20px",
                    }}
                  >
                    <span
                      style={{
                        width: 38,
                        height: 38,
                        borderRadius: 12,
                        background: GRADIENT,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 18,
                        flexShrink: 0,
                      }}
                    >
                      {c.icon}
                    </span>
                    <div>
                      <p
                        style={{
                          color: theme.textMuted,
                          fontSize: 11,
                          fontWeight: 600,
                          textTransform: "uppercase",
                          letterSpacing: ".08em",
                        }}
                      >
                        {c.label}
                      </p>
                      <p
                        style={{
                          color: theme.text,
                          fontSize: 13,
                          fontWeight: 600,
                          marginTop: 2,
                        }}
                      >
                        {c.val}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div style={{ flex: "1.2 1 320px" }}>
              {sent ? (
                <div
                  className="grad-border"
                  style={{
                    padding: "60px 48px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: GRADIENT,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 32,
                      color: "#000",
                      margin: "0 auto",
                      boxShadow: `0 14px 34px -10px ${PRIMARY}70`,
                    }}
                  >
                    ✓
                  </div>
                  <h3
                    style={{
                      color: theme.text,
                      fontSize: 26,
                      fontWeight: 900,
                      marginTop: 20,
                    }}
                  >
                    Message Sent!
                  </h3>
                  <p
                    style={{
                      color: theme.textMuted,
                      marginTop: 10,
                      fontSize: 14,
                    }}
                  >
                    I'll get back to you very soon.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="pill glow-btn"
                    style={{
                      marginTop: 28,
                      background: GRADIENT,
                      color: "#000",
                      border: "none",
                      padding: "12px 30px",
                      fontSize: 14,
                      fontWeight: 800,
                      cursor: "pointer",
                    }}
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <div className="grad-border" style={{ padding: "36px 32px" }}>
                  <h3
                    style={{
                      color: theme.text,
                      fontWeight: 800,
                      fontSize: 18,
                      marginBottom: 24,
                    }}
                  >
                    Send Me a Message
                  </h3>
                  <form
                    onSubmit={onSubmit}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 18,
                    }}
                  >
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 14,
                      }}
                    >
                      {[
                        {
                          label: "Your Name",
                          name: "name",
                          type: "text",
                          ph: "Surya Prakash",
                        },
                        {
                          label: "Email",
                          name: "email",
                          type: "email",
                          ph: "you@example.com",
                        },
                      ].map((f) => (
                        <div key={f.name}>
                          <label
                            style={{
                              color: theme.textMuted,
                              fontSize: 12,
                              fontWeight: 600,
                              display: "block",
                              marginBottom: 8,
                            }}
                          >
                            {f.label}
                          </label>
                          <input
                            name={f.name}
                            type={f.type}
                            value={form[f.name]}
                            onChange={onFormChange}
                            placeholder={f.ph}
                            required
                            style={{
                              width: "100%",
                              background: theme.inputBg,
                              color: theme.text,
                              border: `1px solid ${theme.border}`,
                              borderRadius: 12,
                              padding: "12px 16px",
                              fontSize: 14,
                            }}
                          />
                        </div>
                      ))}
                    </div>
                    <div>
                      <label
                        style={{
                          color: theme.textMuted,
                          fontSize: 12,
                          fontWeight: 600,
                          display: "block",
                          marginBottom: 8,
                        }}
                      >
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={onFormChange}
                        placeholder="Tell me about your project..."
                        rows={5}
                        required
                        style={{
                          width: "100%",
                          background: theme.inputBg,
                          color: theme.text,
                          border: `1px solid ${theme.border}`,
                          borderRadius: 12,
                          padding: "12px 16px",
                          fontSize: 14,
                          resize: "vertical",
                        }}
                      />
                    </div>
                    {sendError && (
                      <p
                        style={{
                          color: "#f87171",
                          fontSize: 13,
                          fontWeight: 600,
                        }}
                      >
                        {sendError}
                      </p>
                    )}
                    <button
                      type="submit"
                      disabled={sending}
                      className="pill glow-btn"
                      style={{
                        background: GRADIENT,
                        color: "#000",
                        border: "none",
                        padding: "15px",
                        fontSize: 15,
                        fontWeight: 900,
                        cursor: sending ? "default" : "pointer",
                        opacity: sending ? 0.7 : 1,
                        width: "100%",
                        boxShadow: `0 12px 30px -10px ${PRIMARY}66`,
                      }}
                    >
                      {sending ? "Sending..." : "Send Message ✦"}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        style={{
          background: theme.bgSec,
          borderTop: `1px solid ${theme.border}`,
          padding: "52px 48px 36px",
        }}
      >
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div
            className="footer-flex"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 24,
              marginBottom: 36,
            }}
          >
            <a
              href="#"
              style={{ display: "flex", alignItems: "center", gap: 8 }}
            >
              <span style={{ color: ACCENT, fontSize: 20, fontWeight: 900 }}>
                ✦
              </span>
              <span
                style={{
                  color: theme.text,
                  fontSize: 20,
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                }}
              >
                Surya
              </span>
            </a>
            <div style={{ display: "flex", gap: 30 }}>
              {navLinks.map((l) => (
                <a key={l} href={`#${l.toLowerCase()}`} className="nl">
                  {l}
                </a>
              ))}
            </div>
            <div style={{ display: "flex", gap: 14 }}>
              {[
                { name: "GitHub", url: "https://github.com/Surya-u64" },
                {
                  name: "LinkedIn",
                  url: "https://www.linkedin.com/in/surya-v-96613830a/",
                },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill nl"
                  style={{
                    border: `1px solid ${theme.border}`,
                    padding: "7px 16px",
                    fontSize: 12,
                  }}
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>

          <div
            style={{
              height: 1,
              background: theme.border,
              marginBottom: 28,
            }}
          />

          <div
            className="footer-flex"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 16,
            }}
          >
            <p style={{ color: theme.textMuted, fontSize: 13 }}>
              © 2025 Surya. Built with React & Tailwind CSS.
            </p>
            <p
              style={{
                color: theme.textMuted,
                fontSize: 13,
                fontStyle: "italic",
              }}
            >
              Innovate <span style={{ color: ACCENT }}>✦</span> Inspire{" "}
              <span style={{ color: ACCENT }}>✦</span> Create
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

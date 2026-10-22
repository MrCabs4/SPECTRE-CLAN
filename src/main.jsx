import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { Megaphone, Swords, UsersRound, CalendarDays, ArrowRight, Menu, X, ShieldCheck } from "lucide-react";
import "./styles.css";

const announcements = [
  { image: "/assets/announcement-1.jpg", tag: "OFFICIAL", date: "OCT 14, 2025", title: "The Shadows Grow Stronger.", body: "New updates, events, and important announcements for the clan." },
  { image: "/assets/announcement-2.jpg", tag: "COMMUNITY", date: "OCT 11, 2025", title: "Welcome to the Clan!", body: "A new member has joined our ranks. Let’s keep building together." },
  { image: "/assets/announcement-3.jpg", tag: "EVENT", date: "OCT 08, 2025", title: "Scrim Schedule Update", body: "The latest scrim schedule has been posted. Check the scrim page for full details." },
];

function Header() {
  const [open, setOpen] = useState(false);
  const links = ["HOME", "ABOUT", "LEADERSHIP", "SCRIM", "JOIN"];
  return <header className="topbar">
    <a className="brand" href="#home" aria-label="SPECTRE home">
      <img src="/assets/spectre-logo.png" alt="" className="brand-mark" />
      <span className="brand-name">SPECTRE</span>
    </a>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open}>
      {open ? <X size={22}/> : <Menu size={22}/>}
    </button>
    <nav className={`navigation ${open ? "open" : ""}`} aria-label="Main navigation">
      {links.map((link, i) => <a key={link} className={`nav-link ${i === 0 ? "active" : ""}`} href={i === 0 ? "#home" : `#${link.toLowerCase()}`} onClick={() => setOpen(false)}>{link}</a>)}
    </nav>
    <a className="discord-button" href="#login" onClick={(e) => { e.preventDefault(); document.querySelector("#login-note")?.showModal(); }}>
      <span className="discord-mark">◉</span><span>AUTHORIZE WITH DISCORD</span>
    </a>
  </header>;
}

function Hero() {
  return <section className="hero" aria-label="Welcome to SPECTRE">
    <div className="hero-shade"/>
    <div className="hero-copy">
      <p className="eyebrow">WELCOME TO THE CLAN</p>
      <h1><span>WE ARE</span><strong>SPECTRE.</strong></h1>
      <p className="tagline">You Can’t Bury What Never Dies.</p>
      <div className="ornament" aria-hidden="true"><span/><i/><span/></div>
    </div>
    <div className="hero-emblem"><img src="/assets/spectre-logo.png" alt="SPECTRE clan emblem"/></div>
    <div className="hero-bottom-line"/>
  </section>;
}

function Announcements() {
  return <article className="panel announcements" id="announcements">
    <div className="panel-heading"><Megaphone className="heading-icon"/><h2>LATEST ANNOUNCEMENTS</h2></div>
    <div className="announcement-list">
      {announcements.map((a) => <a className="announcement" href="#announcements" key={a.title}>
        <img src={a.image} alt="" className="announcement-image"/>
        <div className="announcement-content">
          <div className="meta"><span className={`tag ${a.tag.toLowerCase()}`}>{a.tag}</span><time>{a.date}</time></div>
          <h3>{a.title}</h3><p>{a.body}</p>
        </div>
        <ArrowRight className="arrow" aria-hidden="true"/>
      </a>)}
    </div>
  </article>;
}

function StatCard({ icon: Icon, label, value, caption, wide = false }) {
  return <div className={`stat-card ${wide ? "wide" : ""}`}>
    <Icon className="stat-icon" aria-hidden="true"/>
    <p className="stat-label">{label}</p><strong className="stat-value">{value}</strong><span className="stat-caption">{caption}</span>
  </div>;
}

function Statistics() {
  return <article className="panel statistics">
    <div className="panel-heading stats-heading"><h2>CLAN STATISTICS</h2></div>
    <div className="stats-grid">
      <StatCard icon={Swords} label="SCRIM RECORD" value="— / —" caption="Wins / Losses"/>
      <StatCard icon={UsersRound} label="TOTAL MEMBERS" value="—" caption="Clan Members"/>
      <StatCard icon={CalendarDays} label="UPCOMING EVENTS" value="—" caption="Scheduled Events" wide/>
    </div>
  </article>;
}

function App() {
  return <>
    <Header/>
    <main id="home">
      <Hero/>
      <section className="dashboard" aria-label="Clan dashboard"><Announcements/><Statistics/></section>
      <div className="bottom-fade" aria-hidden="true"/>
    </main>
    <dialog id="login-note" className="login-dialog">
      <button className="dialog-close" aria-label="Close" onClick={() => document.querySelector("#login-note")?.close()}>×</button>
      <ShieldCheck size={34} color="#ff1737"/>
      <h2>Discord authentication</h2>
      <p>Discord sign-in will be connected after the secure backend and OAuth application are configured. This prototype does not collect credentials.</p>
      <button className="dialog-ok" onClick={() => document.querySelector("#login-note")?.close()}>UNDERSTOOD</button>
    </dialog>
  </>;
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App/></React.StrictMode>);

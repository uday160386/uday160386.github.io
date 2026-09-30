---
layout: archive
title: ""
permalink: /learnings/
author_profile: false
redirect_from:
  - /sparetime/
  - /resume
---

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">

<style>
  /* ============================================================
     "Signal & System" — Learnings (education, certifications,
     courses, presentations). Colours come from the site theme
     tokens, so black and white backgrounds both work.
     ============================================================ */
  .ln{
    max-width: 860px; margin: 0 auto; padding: 2.25rem 1.25rem 3.5rem;
    font-family: 'IBM Plex Sans', sans-serif; color: var(--sys-ink-muted); line-height: 1.6;
  }
  .ln a{ text-decoration: none; }

  .ln-label{
    font-family:'IBM Plex Mono', monospace; font-size:0.74rem; color: var(--sys-ink-dim);
    margin-bottom:0.9rem; display:flex; align-items:center; gap:0.55rem;
  }
  .ln-label::before{ content:''; width:5px; height:5px; border-radius:50%; background:var(--sys-warm); }
  .ln-title{
    font-family:'Space Grotesk', sans-serif; font-weight:700;
    font-size: clamp(1.9rem, 4.6vw, 2.5rem); color: var(--sys-ink); letter-spacing:-0.01em; margin:0 0 0.6rem;
  }
  .ln-sub{ max-width: 60ch; font-size:1rem; margin:0 0 0.5rem; }

  .ln-jump{ display:flex; flex-wrap:wrap; gap:1.2rem; padding-top:1.3rem; margin-top:1.2rem; border-top:1px solid var(--sys-line);
    font-family:'IBM Plex Mono', monospace; font-size:0.78rem; }
  .ln-jump a{ color: var(--sys-warm); }
  .ln-jump a:hover{ color: var(--sys-cool); }

  .ln-section{ padding: 2.25rem 0 0; scroll-margin-top: 90px; }
  .ln-section h2{
    display:flex; align-items:baseline; gap:0.75rem;
    font-family:'Space Grotesk', sans-serif; font-weight:600; font-size:1.3rem; color: var(--sys-ink); margin:0 0 1rem;
  }
  .ln-section h2 .n{ font-family:'IBM Plex Mono', monospace; font-size:0.74rem; font-weight:400; color: var(--sys-ink-dim); }

  /* education */
  .ln-edu{ list-style:none; margin:0; padding:0; }
  .ln-edu li{
    display:flex; justify-content:space-between; gap:1rem; margin:0;
    padding:1rem 0; border-top:1px solid var(--sys-line);
  }
  .ln-edu li:first-child{ border-top:none; }
  .ln-edu .what{ color: var(--sys-ink); font-weight:500; max-width: 44ch; }
  .ln-edu .where{ font-family:'IBM Plex Mono', monospace; font-size:0.78rem; color: var(--sys-warm); text-align:right; flex:0 0 auto; padding-top:0.15rem; }

  /* certifications */
  .ln-certs{ list-style:none; margin:0; padding:0; display:grid; grid-template-columns: repeat(auto-fill, minmax(230px, 1fr)); gap:0.75rem; }
  .ln-certs li{
    margin:0; display:flex; align-items:center; gap:0.7rem;
    padding:0.85rem 1rem; border:1px solid var(--sys-line); border-radius:10px; background: var(--sys-panel);
    color: var(--sys-ink); font-size:0.92rem; font-weight:500; line-height:1.35;
  }
  .ln-certs .issuer{
    flex:0 0 auto; font-family:'IBM Plex Mono', monospace; font-size:0.64rem; text-transform:uppercase; letter-spacing:0.04em;
    color: var(--sys-cool); background: var(--sys-cool-soft); border:1px solid var(--sys-cool-line); border-radius:5px; padding:0.14rem 0.45rem;
  }

  /* courses */
  .ln-group{ margin-bottom:1.5rem; }
  .ln-group h3{ font-family:'IBM Plex Mono', monospace !important; font-size:0.74rem; font-weight:500; color: var(--sys-ink-dim) !important;
    text-transform:uppercase; letter-spacing:0.05em; margin:0 0 0.4rem; }
  .ln-courses{ list-style:none; margin:0; padding:0; }
  .ln-courses li{
    display:flex; justify-content:space-between; align-items:baseline; gap:1rem; margin:0;
    padding:0.7rem 0; border-top:1px solid var(--sys-line); font-size:0.94rem; color: var(--sys-ink);
  }
  .ln-courses li:first-child{ border-top:none; }
  .ln-courses .platform{ font-family:'IBM Plex Mono', monospace; font-size:0.72rem; color: var(--sys-ink-dim); flex:0 0 auto; }

  /* presentations */
  .ln-talk{
    display:flex; align-items:center; justify-content:space-between; gap:1rem;
    padding:1.1rem 1.2rem; border:1px solid var(--sys-line); border-radius:12px; background: var(--sys-panel);
    transition: border-color .15s, transform .15s;
  }
  .ln-talk:hover{ border-color: var(--sys-warm); transform: translateY(-2px); }
  .ln-talk .t{ color: var(--sys-ink); font-weight:600; font-family:'Space Grotesk', sans-serif; font-size:1.02rem; }
  .ln-talk .m{ font-family:'IBM Plex Mono', monospace; font-size:0.74rem; color: var(--sys-ink-dim); margin-top:0.2rem; }
  .ln-talk .arrow{ color: var(--sys-warm); font-size:1.1rem; }

  @media (max-width:600px){
    .ln-edu li, .ln-courses li{ flex-direction:column; gap:0.15rem; }
    .ln-edu .where{ text-align:left; }
  }
</style>

<div class="ln">
  <div class="ln-label">Learnings</div>
  <h1 class="ln-title">3L — Life Long Learning</h1>
  <p class="ln-sub">A record of formal education, certifications, courses, and knowledge shared over the years.</p>
  <nav class="ln-jump" aria-label="On this page">
    <a href="#education">Education</a>
    <a href="#certifications">Certifications</a>
    <a href="#courses">Courses</a>
    <a href="#presentations">Presentations</a>
  </nav>

  <section class="ln-section" id="education">
    <h2>Education</h2>
    <ul class="ln-edu">
      <li><span class="what">PG Certification Program in Artificial Intelligence and Machine Learning</span><span class="where">IIIT Hyderabad</span></li>
      <li><span class="what">Master's in Software Engineering</span><span class="where">BITS Pilani</span></li>
    </ul>
  </section>

  <section class="ln-section" id="certifications">
    <h2>Certifications <span class="n">7</span></h2>
    <ul class="ln-certs">
      <li><span class="issuer">AWS</span>AWS Cloud Practitioner</li>
      <li><span class="issuer">AWS</span>AWS Certified Security – Specialty</li>
      <li><span class="issuer">Azure</span>Azure Fundamentals</li>
      <li><span class="issuer">SAFe</span>SAFe® 6 Agilist</li>
      <li><span class="issuer">Scrum</span>Certified ScrumMaster</li>
      <li><span class="issuer">SRE</span>SRE Foundation℠</li>
      <li><span class="issuer">Green</span>Green Software for Practitioners</li>
    </ul>
  </section>

  <section class="ln-section" id="courses">
    <h2>Courses</h2>

    <div class="ln-group">
      <h3>AI &amp; Product Development</h3>
      <ul class="ln-courses">
        <li>AI Product Development: Technical Feasibility and Prototyping <span class="platform">LinkedIn</span></li>
        <li>Integrating AI into the Product Architecture <span class="platform">LinkedIn</span></li>
        <li>AI-102: Azure AI Engineer Associate Prep <span class="platform">Microsoft</span></li>
      </ul>
    </div>

    <div class="ln-group">
      <h3>Architecture &amp; Security</h3>
      <ul class="ln-courses">
        <li>REST API Management, Monitoring &amp; Analytics using Kong 3 <span class="platform">Udemy</span></li>
        <li>Microservices Software Architecture: Patterns and Techniques <span class="platform">Udemy</span></li>
        <li>Microservices: Security <span class="platform">LinkedIn</span></li>
        <li>Cloud Security Architecture for the Enterprise <span class="platform">LinkedIn</span></li>
        <li>Design a Cloud Migration Strategy <span class="platform">LinkedIn</span></li>
      </ul>
    </div>

    <div class="ln-group">
      <h3>Leadership &amp; Soft Skills</h3>
      <ul class="ln-courses">
        <li>Mentoring Others <span class="platform">LinkedIn</span></li>
        <li>Leadership Foundations <span class="platform">LinkedIn</span></li>
      </ul>
    </div>
  </section>

  <section class="ln-section" id="presentations">
    <h2>Presentations</h2>
    <a class="ln-talk" href="{{ '/Documents/ASR-Presentation.pdf' | relative_url }}" target="_blank" rel="noopener">
      <div>
        <div class="t">Automated Speech Recognition in English</div>
        <div class="m">Presented 22 Oct 2024 · PDF</div>
      </div>
      <span class="arrow" aria-hidden="true">↗</span>
    </a>
  </section>
</div>

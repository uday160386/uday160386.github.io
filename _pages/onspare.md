---
layout: archive
title: ""
permalink: /sparetime/
author_profile: true
redirect_from:
  - /resume
---

<style>
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@300;400;500;600&display=swap');

  :root {
    --bg: #0c0c0c;
    --surface: #141414;
    --surface2: #1c1c1c;
    --border: rgba(255,255,255,0.07);
    --text: #e8e8e8;
    --text-muted: #888;
    --accent: #c8f0d8;
    --accent2: #f0c8d8;
    --accent3: #c8d8f0;
  }

  .ll-page {
    font-family: 'DM Sans', sans-serif;
    color: var(--text);
    max-width: 860px;
    margin: 0 auto;
    padding: 0 0 80px 0;
  }

  /* Hero */
  .ll-hero {
    padding: 56px 0 48px;
    border-bottom: 1px solid var(--border);
    margin-bottom: 56px;
  }
  .ll-hero-label {
    font-size: 11px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--text-muted);
    margin-bottom: 16px;
    font-weight: 500;
  }
  .ll-hero-title {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(1.2rem, 2vw, 2.4rem);
    font-weight: 200;
    line-height: 1.15;
    letter-spacing: -0.01em;
    margin: 0 0 18px;
    color: #fff;
  }
  .ll-hero-title em {
    font-style: italic;
    color: var(--accent);
  }
  .ll-hero-sub {
    font-size: 1rem;
    color: var(--text-muted);
    font-weight: 300;
    line-height: 1.6;
    max-width: 520px;
  }

  /* Section */
  .ll-section {
    margin-bottom: 56px;
    opacity: 0;
    transform: translateY(18px);
    animation: ll-rise 0.5s ease forwards;
  }
  .ll-section:nth-child(1) { animation-delay: 0.05s; }
  .ll-section:nth-child(2) { animation-delay: 0.12s; }
  .ll-section:nth-child(3) { animation-delay: 0.19s; }
  .ll-section:nth-child(4) { animation-delay: 0.26s; }
  @keyframes ll-rise {
    to { opacity: 1; transform: none; }
  }

  .ll-section-header {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 24px;
  }
  .ll-section-icon {
    width: 36px;
    height: 36px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 17px;
    flex-shrink: 0;
  }
  .icon-edu   { background: rgba(200,240,216,0.1); }
  .icon-cert  { background: rgba(240,200,216,0.1); }
  .icon-course{ background: rgba(200,216,240,0.1); }
  .icon-pres  { background: rgba(240,232,200,0.1); }

  .ll-section-title {
    font-family: 'DM Serif Display', serif;
    font-size: 1.35rem;
    font-weight: 400;
    color: #fff;
    letter-spacing: -0.01em;
  }

  /* Education - simple two-item list */
  .ll-edu-list {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  .ll-edu-item {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 18px 22px;
    display: flex;
    align-items: flex-start;
    gap: 14px;
    transition: border-color 0.2s;
  }
  .ll-edu-item:hover { border-color: rgba(200,240,216,0.2); }
  .ll-edu-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--accent);
    margin-top: 6px;
    flex-shrink: 0;
  }
  .ll-edu-name {
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--text);
    line-height: 1.4;
  }

  /* Certifications - badge grid */
  .ll-cert-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .ll-cert-badge {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 10px 16px;
    font-size: 0.875rem;
    color: var(--text);
    font-weight: 400;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: all 0.2s;
    line-height: 1.3;
  }
  .ll-cert-badge:hover {
    border-color: rgba(255,255,255,0.18);
    background: var(--surface2);
    transform: translateY(-1px);
  }
  .ll-cert-badge .badge-emoji { font-size: 15px; }

  /* Courses - grouped */
  .ll-course-group {
    margin-bottom: 28px;
  }
  .ll-course-group:last-child { margin-bottom: 0; }
  .ll-course-group-label {
    font-size: 11px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--text-muted);
    font-weight: 600;
    margin-bottom: 12px;
    padding-left: 2px;
  }
  .ll-course-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .ll-course-item {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 13px 18px;
    font-size: 0.9rem;
    color: var(--text);
    display: flex;
    align-items: center;
    gap: 10px;
    transition: all 0.18s;
    line-height: 1.4;
  }
  .ll-course-item:hover {
    border-color: rgba(255,255,255,0.14);
    background: var(--surface2);
  }
  .ll-course-check {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: rgba(200,216,240,0.1);
    border: 1px solid rgba(200,216,240,0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    font-size: 10px;
    color: var(--accent3);
  }
  .ll-course-platform {
    margin-left: auto;
    font-size: 10px;
    color: var(--text-muted);
    white-space: nowrap;
    padding: 2px 8px;
    border-radius: 4px;
    background: rgba(255,255,255,0.04);
    border: 1px solid var(--border);
  }

  /* Presentations */
  .ll-pres-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 14px;
    padding: 24px 28px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    transition: all 0.2s;
    text-decoration: none;
  }
  .ll-pres-card:hover {
    border-color: rgba(240,232,200,0.25);
    background: var(--surface2);
    transform: translateY(-2px);
    text-decoration: none;
  }
  .ll-pres-title {
    font-size: 1rem;
    font-weight: 500;
    color: #fff;
    margin-bottom: 5px;
    line-height: 1.4;
  }
  .ll-pres-meta {
    font-size: 0.82rem;
    color: var(--text-muted);
  }
  .ll-pres-arrow {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: rgba(240,232,200,0.08);
    border: 1px solid rgba(240,232,200,0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: rgba(240,232,200,0.7);
    font-size: 16px;
    transition: all 0.2s;
  }
  .ll-pres-card:hover .ll-pres-arrow {
    background: rgba(240,232,200,0.15);
    color: #f0e8c8;
  }
</style>

<div class="ll-page">

  <!-- Hero -->
  <div class="ll-hero">
    <!-- <div class="ll-hero-label">Lifelong Learning</div> -->
    <h1 class="ll-hero-title">3L — Life Long Learning</h1>
    <p class="ll-hero-sub">A record of formal education, certifications, courses, and knowledge I've shared over the years.</p>
  </div>

  <!-- Education -->
  <div class="ll-section">
    <div class="ll-section-header">
      <div class="ll-section-icon icon-edu">🎓</div>
      <div class="ll-section-title">Education</div>
    </div>
    <div class="ll-edu-list">
      <div class="ll-edu-item">
        <div class="ll-edu-dot"></div>
        <div class="ll-edu-name">PG Certification Program in Artificial Intelligence and Machine Learning — IIIT Hyderabad</div>
      </div>
      <div class="ll-edu-item">
        <div class="ll-edu-dot"></div>
        <div class="ll-edu-name">Masters in Software Engineering — BITS Pilani</div>
      </div>
    </div>
  </div>

  <!-- Certifications -->
  <div class="ll-section">
    <div class="ll-section-header">
      <div class="ll-section-icon icon-cert">🏅</div>
      <div class="ll-section-title">Certifications</div>
    </div>
    <div class="ll-cert-grid">
      <div class="ll-cert-badge"><span class="badge-emoji">☁️</span> AWS Cloud Practitioner</div>
      <div class="ll-cert-badge"><span class="badge-emoji">🔵</span> Azure Fundamentals</div>
      <div class="ll-cert-badge"><span class="badge-emoji">🔒</span> AWS Certified Security – Specialty</div>
      <div class="ll-cert-badge"><span class="badge-emoji">📋</span> SAFe® 6 Agilist</div>
      <div class="ll-cert-badge"><span class="badge-emoji">🏃</span> Certified ScrumMaster</div>
      <div class="ll-cert-badge"><span class="badge-emoji">⚙️</span> SRE Foundation℠</div>
      <div class="ll-cert-badge"><span class="badge-emoji">🌱</span> Green Software for Practitioners</div>
    </div>
  </div>

  <!-- Courses -->
  <div class="ll-section">
    <div class="ll-section-header">
      <div class="ll-section-icon icon-course">📚</div>
      <div class="ll-section-title">Courses</div>
    </div>

    <div class="ll-course-group">
      <div class="ll-course-group-label">AI &amp; Product Development</div>
      <div class="ll-course-list">
        <div class="ll-course-item">
          <div class="ll-course-check">✓</div>
          AI Product Development: Technical Feasibility and Prototyping
          <span class="ll-course-platform">LinkedIn</span>
        </div>
        <div class="ll-course-item">
          <div class="ll-course-check">✓</div>
          Integrating AI into the Product Architecture
          <span class="ll-course-platform">LinkedIn</span>
        </div>
        <div class="ll-course-item">
          <div class="ll-course-check">✓</div>
          AI-102: Azure AI Engineer Associate Prep
          <span class="ll-course-platform">Microsoft</span>
        </div>
      </div>
    </div>

    <div class="ll-course-group">
      <div class="ll-course-group-label">Architecture &amp; Security</div>
      <div class="ll-course-list">
        <div class="ll-course-item">
          <div class="ll-course-check">✓</div>
          REST API Management, Monitoring &amp; Analytics using Kong 3
          <span class="ll-course-platform">Udemy</span>
        </div>
        <div class="ll-course-item">
          <div class="ll-course-check">✓</div>
          Microservices Software Architecture: Patterns and Techniques
          <span class="ll-course-platform">Udemy</span>
        </div>
        <div class="ll-course-item">
          <div class="ll-course-check">✓</div>
          Microservices: Security
          <span class="ll-course-platform">LinkedIn</span>
        </div>
        <div class="ll-course-item">
          <div class="ll-course-check">✓</div>
          Cloud Security Architecture for the Enterprise
          <span class="ll-course-platform">LinkedIn</span>
        </div>
        <div class="ll-course-item">
          <div class="ll-course-check">✓</div>
          Design a Cloud Migration Strategy
          <span class="ll-course-platform">LinkedIn</span>
        </div>
      </div>
    </div>

    <div class="ll-course-group">
      <div class="ll-course-group-label">Leadership &amp; Soft Skills</div>
      <div class="ll-course-list">
        <div class="ll-course-item">
          <div class="ll-course-check">✓</div>
          Mentoring Others
          <span class="ll-course-platform">LinkedIn</span>
        </div>
        <div class="ll-course-item">
          <div class="ll-course-check">✓</div>
          Leadership Foundations
          <span class="ll-course-platform">LinkedIn</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Presentations -->
  <div class="ll-section">
    <div class="ll-section-header">
      <div class="ll-section-icon icon-pres">🗣️</div>
      <div class="ll-section-title">Presentations</div>
    </div>
    <a class="ll-pres-card" href="../Documents/ASR-Presentation.pdf">
      <div>
        <div class="ll-pres-title">Automated Speech Recognition in English 📈</div>
        <div class="ll-pres-meta">Presented October 22, 2024</div>
      </div>
      <div class="ll-pres-arrow">↗</div>
    </a>
  </div>

</div>
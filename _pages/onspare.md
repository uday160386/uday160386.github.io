---
layout: archive
title: ""
permalink: /sparetime/
author_profile: true
redirect_from:
  - /resume
---

<style>
/* ── Page wrapper ── */
.ll-page {
  max-width: 860px;
  margin: 0 auto;
  padding-bottom: 4rem;
  font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
}

/* ── Page title ── */
.ll-page-title {
  font-size: clamp(1.4rem, 3vw, 2rem);
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.03em;
  margin: 0 0 0.3rem 0;
}
.ll-page-sub {
  font-size: 0.85rem;
  color: #ffffff;
  margin: 0 0 2.5rem 0;
  line-height: 1.5;
}
.ll-page-divider {
  border: none;
  border-top: 2px solid #f1f5f9;
  margin: 0 0 2.5rem 0;
}

/* ── Section ── */
.ll-section {
  margin-bottom: 2.5rem;
}
.ll-section-header {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  margin-bottom: 1.1rem;
}
.ll-section-icon {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  flex-shrink: 0;
}
.icon-edu   { background: #eff6ff; }
.icon-cert  { background: #fdf4ff; }
.icon-course{ background: #f0fdf4; }
.icon-pres  { background: #fff7ed; }

.ll-section-title {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #ffffff;
}
.ll-section-line {
  flex: 1;
  height: 1px;
  background: #e5e7eb;
}

/* ── Education ── */
.ll-edu-list {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
.ll-edu-item {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 1rem 1.3rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.ll-edu-item:hover {
  border-color: #93c5fd;
  box-shadow: 0 2px 12px rgba(37,99,235,0.07);
}
.ll-edu-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #3b82f6;
  margin-top: 5px;
  flex-shrink: 0;
}
.ll-edu-name {
  font-size: 0.9rem;
  font-weight: 500;
  color: #111827;
  line-height: 1.5;
}

/* ── Certifications ── */
.ll-cert-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
}
.ll-cert-badge {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 0.5rem 0.9rem;
  font-size: 0.82rem;
  color: #1e293b;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.45rem;
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.18s;
  line-height: 1.3;
}
.ll-cert-badge:hover {
  border-color: #a5b4fc;
  box-shadow: 0 2px 10px rgba(99,102,241,0.09);
  transform: translateY(-1px);
}

/* ── Course groups ── */
.ll-course-group {
  margin-bottom: 1.2rem;
}
.ll-course-group:last-child { margin-bottom: 0; }
.ll-course-group-label {
  font-size: 0.65rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #94a3b8;
  font-weight: 700;
  margin-bottom: 0.5rem;
  padding-left: 2px;
}
.ll-course-list {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}
.ll-course-item {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 0.7rem 1rem;
  font-size: 0.855rem;
  color: #1e293b;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  transition: border-color 0.2s, background 0.2s;
  line-height: 1.4;
}
.ll-course-item:hover {
  border-color: #86efac;
  background: #f9fffe;
}
.ll-course-check {
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background: #f0fdf4;
  border: 1px solid #86efac;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 9px;
  color: #16a34a;
}
.ll-course-platform {
  margin-left: auto;
  font-size: 0.63rem;
  color: #000000;
  white-space: nowrap;
  padding: 2px 7px;
  border-radius: 4px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
}

/* ── Presentations ── */
.ll-pres-card {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 1.2rem 1.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
  text-decoration: none !important;
  color: inherit !important;
}
.ll-pres-card:hover {
  border-color: #fbbf24;
  box-shadow: 0 4px 18px rgba(251,191,36,0.1);
  transform: translateY(-2px);
  text-decoration: none !important;
}
.ll-pres-title {
  font-size: 0.92rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.25rem;
  line-height: 1.4;
}
.ll-pres-meta {
  font-size: 0.75rem;
  color: #94a3b8;
}
.ll-pres-arrow {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #fffbeb;
  border: 1px solid #fde68a;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: #d97706;
  font-size: 14px;
  transition: background 0.2s;
}
.ll-pres-card:hover .ll-pres-arrow {
  background: #fef3c7;
}

@media (max-width: 540px) {
  .ll-cert-grid { gap: 0.35rem; }
  .ll-cert-badge { font-size: 0.78rem; }
}
</style>

<div class="ll-page">

  <h1 class="ll-page-title">3L — Life Long Learning</h1>
  <p class="ll-page-sub">A record of formal education, certifications, courses, and knowledge shared over the years.</p>
  <br >

  <!-- ── Education ── -->
  <div class="ll-section">
    <div class="ll-section-header">
      <div class="ll-section-icon icon-edu">🎓</div>
      <div class="ll-section-title">Education</div>
      <div class="ll-section-line"></div>
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

  <!-- ── Certifications ── -->
  <div class="ll-section">
    <div class="ll-section-header">
      <div class="ll-section-icon icon-cert">🏅</div>
      <div class="ll-section-title">Certifications</div>
      <div class="ll-section-line"></div>
    </div>
    <div class="ll-cert-grid">
      <div class="ll-cert-badge">☁️ AWS Cloud Practitioner</div>
      <div class="ll-cert-badge">🔵 Azure Fundamentals</div>
      <div class="ll-cert-badge">🔒 AWS Certified Security – Specialty</div>
      <div class="ll-cert-badge">📋 SAFe® 6 Agilist</div>
      <div class="ll-cert-badge">🏃 Certified ScrumMaster</div>
      <div class="ll-cert-badge">⚙️ SRE Foundation℠</div>
      <div class="ll-cert-badge">🌱 Green Software for Practitioners</div>
    </div>
  </div>

  <!-- ── Courses ── -->
  <div class="ll-section">
    <div class="ll-section-header">
      <div class="ll-section-icon icon-course">📚</div>
      <div class="ll-section-title">Courses</div>
      <div class="ll-section-line"></div>
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

  <!-- ── Presentations ── -->
  <div class="ll-section">
    <div class="ll-section-header">
      <div class="ll-section-icon icon-pres">🗣️</div>
      <div class="ll-section-title">Presentations</div>
      <div class="ll-section-line"></div>
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

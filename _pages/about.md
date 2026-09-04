---
layout: archive
permalink: /index.html
title: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<style>
  .home-panel {
    background: #12161c;
    border-radius: 14px;
    padding: 0.5rem 2.25rem 2rem;
    margin: 0.5rem auto 2rem;
    max-width: 900px;
  }

  /* ── Hero ── */
  .hero-wrap {
    display: block;
    padding: 2.5rem 0 2rem;
  }
  .hero-eyebrow {
    font-family: 'SF Mono', 'JetBrains Mono', Consolas, monospace;
    font-size: 0.78rem;
    color: #5cb3c9;
    margin-bottom: 0.5rem;
  }
  .hero-name {
    font-size: 2rem;
    font-weight: 700;
    color: #f4f6f8;
    letter-spacing: -0.01em;
    line-height: 1.2;
    margin-bottom: 0.35rem;
  }
  .hero-title {
    font-size: 1.05rem;
    color: #b3bcc2;
    margin-bottom: 1.1rem;
  }
  .hero-intro {
    font-size: 0.98rem;
    line-height: 1.65;
    color: #c7ced3;
    max-width: 46em;
    margin-bottom: 1.3rem;
  }
  @media (max-width: 640px) {
    .hero-intro { max-width: none; }
  }

  /* ── Section rhythm ── */
  .section-divider {
    border: none;
    border-top: 1px solid rgba(255,255,255,0.08);
    margin: 2.25rem 0;
  }
  .section-heading {
    font-size: 1.3rem;
    font-weight: 700;
    color: #f4f6f8;
    margin-bottom: 0.9rem;
  }

  /* Focus Points */
  .focus-points {
    margin: 20px 0 10px 0;
    padding-left: 1.2em;
    color: #c7ced3;
  }
  .focus-points li {
    margin-bottom: 12px;
    line-height: 1.6;
  }

  /* Hero social icon links */
  .hero-links {
    display: flex;
    gap: 0.6rem;
    margin-top: 1.1rem;
  }
  .hero-icon-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1.5px solid #5cb3c9;
    color: #5cb3c9;
    font-size: 1.05rem;
    text-decoration: none !important;
    transition: background 0.2s, color 0.2s;
  }
  .hero-icon-link:hover {
    background: #5cb3c9;
    color: #12161c !important;
  }

  /* Core Expertise badges */
  .expertise-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 0.55rem;
    margin: 1rem 0 0.5rem 0;
    padding: 0;
    list-style: none;
  }
  .expertise-badge {
    background: rgba(92,179,201,0.10);
    border: 1px solid rgba(92,179,201,0.35);
    border-radius: 8px;
    padding: 0.5rem 0.9rem;
    font-size: 0.82rem;
    color: #8fd4e3;
    font-weight: 500;
    line-height: 1.3;
    transition: border-color 0.2s, background 0.2s, transform 0.18s;
  }
  .expertise-badge:hover {
    border-color: #5cb3c9;
    background: rgba(92,179,201,0.18);
    transform: translateY(-1px);
  }

  /* Education cards */
  .edu-list {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    margin: 1rem 0 0.5rem 0;
  }
  .edu-item {
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 10px;
    padding: 1rem 1.3rem;
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    transition: border-color 0.2s, background 0.2s;
  }
  .edu-item:hover {
    border-color: rgba(92,179,201,0.4);
    background: rgba(92,179,201,0.06);
  }
  .edu-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #5cb3c9;
    margin-top: 6px;
    flex-shrink: 0;
  }
  .edu-text {
    display: flex;
    flex-direction: column;
  }
  .edu-name {
    font-size: 0.92rem;
    font-weight: 600;
    color: #f4f6f8;
    line-height: 1.5;
  }
  .edu-school {
    font-size: 0.8rem;
    color: #9aa3a8;
    line-height: 1.4;
  }

  /* Body copy inside the panel that isn't covered by a component above
     (the plain <p> tags under Professional Overview / Content sections) */
  .home-panel p,
  .home-panel ul:not(.expertise-grid):not(.focus-points) {
    color: #c7ced3;
  }
  .home-panel h3 {
    color: #f4f6f8;
  }
</style>

<div class="home-panel" style="text-align: left;">

  <div class="hero-wrap">
    <div>
      <div class="hero-eyebrow">Singapore 🇸🇬</div>
      <!-- <div class="hero-name">{{ site.author.name }}</div> -->
      <div class="hero-title">Engineering Lead — Applied AI | Transformation | Solutions &amp; Integrations</div>
      <p class="hero-intro">I am an Engineering Lead with a strong global track record across Banking, Energy &amp; Utilities, and Digital Transformation. I specialize in closing the gap between business strategy and technical delivery — bringing hands-on depth in designing and shipping production-ready, cloud-native APIs at enterprise scale.</p>
      {% if site.author.linkedin or site.author.github or site.author.uri %}
        <div class="hero-links">
          {% if site.author.linkedin %}
            <a class="hero-icon-link" href="https://www.linkedin.com/in/{{ site.author.linkedin }}" aria-label="LinkedIn">
              <i class="fab fa-fw fa-linkedin" aria-hidden="true"></i>
            </a>
          {% endif %}
          {% if site.author.github %}
            <a class="hero-icon-link" href="https://github.com/{{ site.author.github }}" aria-label="GitHub">
              <i class="fab fa-fw fa-github" aria-hidden="true"></i>
            </a>
          {% endif %}
          {% if site.author.uri %}
            <a class="hero-icon-link" href="{{ site.author.uri }}" aria-label="Website">
              <i class="fas fa-fw fa-link" aria-hidden="true"></i>
            </a>
          {% endif %}
        </div>
      {% endif %}
    </div>
  </div>

  <hr class="section-divider">

  <h2 class="section-heading">Professional Overview</h2>
  <p>My background spans the full delivery lifecycle: requirements gathering, architecture, API management, backend and test engineering, and production-grade execution. Having begun my career in the IT sector at age 20, I currently serve as Engineering Tech Lead for the SME Digital, Open API and Partnerships program at Standard Chartered, Singapore, where I continue to deliver high-impact solutions across multiple domains.</p>

  <h2 class="section-heading" style="margin-top: 1.75rem;">Core Expertise</h2>
  <ul class="expertise-grid">
    <li class="expertise-badge">Technical Leadership</li>
    <li class="expertise-badge">Open API</li>
    <li class="expertise-badge">Solution Design</li>
    <li class="expertise-badge">AI Implementation and Transformation</li>
    <li class="expertise-badge">Applied AI and Delivery</li>
    <li class="expertise-badge">Automated Speech</li>
    <li class="expertise-badge">Green Software</li>

  </ul>

  <hr class="section-divider">

  <h2 class="section-heading">Education</h2>
  <ul>
    <li>PG Certification Program in Artificial Intelligence and Machine Learning from IIIT Hyderabad</li>
    <li>Masters in Software Engineering from BITS Pilani</li>
  </ul>

  <hr class="section-divider">

  <h2 class="section-heading">Content &amp; Knowledge Sharing</h2>
  <p>I leverage this platform to publish technical insights and posts in several key areas — practical lessons from hands-on implementation, not theory:</p>

  <h3>My Focus Areas</h3>
  <ul class="focus-points">
    <li>Driving productivity through strategic AI implementations; analyzing organizational challenges and crafting solutions through an AI-first lens.</li>
    <li>Building AI-powered applications with a focus on automated speech recognition and conversational AI systems.</li>
    <li>Translating cutting-edge research papers into practical, real-world solutions that deliver measurable business value.</li>
    <li>Promoting awareness and education around safe, ethical AI usage — what to do, and what to avoid.</li>
  </ul>

</div>

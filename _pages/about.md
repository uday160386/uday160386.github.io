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
  .avatar-ring {
    position: relative;
    width: 160px;
    height: 160px;
    margin: 0 auto 16px;
  }
  .avatar-ring::before {
    content: '';
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    background: conic-gradient(from 0deg, #fff, #888, #333, #fff);
    animation: avatarSpin 4s linear infinite;
    z-index: 0;
  }
  @keyframes avatarSpin {
    to { transform: rotate(360deg); }
  }
  .avatar-inner {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #111;
    border: 3px solid #111;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .avatar-status {
    position: absolute;
    bottom: 6px;
    right: 6px;
    width: 18px;
    height: 18px;
    background: #fff;
    border: 3px solid #111;
    border-radius: 50%;
    z-index: 2;
    animation: avatarPulse 2s infinite;
  }
  @keyframes avatarPulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(255,255,255,0.4); }
    50% { box-shadow: 0 0 0 5px rgba(255,255,255,0); }
  }

  /* Focus Points */
  .focus-points {
    margin: 20px 0 10px 0;
    padding-left: 1.2em;
  }
  .focus-points li {
    margin-bottom: 12px;
    line-height: 1.6;
  }

  /* Get in Touch Button */
  .get-in-touch-btn {
    display: inline-block;
    margin-top: 16px;
    padding: 12px 32px;
    background: #FFFFFF;
    color: #000000;
    font-size: 0.88rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    text-decoration: none !important;
    border-radius: 6px;
    border: 2px solid #000;
    font-family: 'Courier New', monospace;
    /* transition: background 0.2s, color 0.2s; */
  }
  .get-in-touch-btn:hover {
    background: #fff;
    color: #000000 !important;
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
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.25);
    border-radius: 8px;
    padding: 0.5rem 0.9rem;
    font-size: 0.82rem;
    color: #ffffff;
    font-weight: 500;
    line-height: 1.3;
    transition: border-color 0.2s, background 0.2s, transform 0.18s;
  }
  .expertise-badge:hover {
    border-color: #ffffff;
    background: rgba(255,255,255,0.12);
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
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 10px;
    padding: 1rem 1.3rem;
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    transition: border-color 0.2s, background 0.2s;
  }
  .edu-item:hover {
    border-color: rgba(255,255,255,0.5);
    background: rgba(255,255,255,0.09);
  }
  .edu-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #ffffff;
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
    color: #ffffff;
    line-height: 1.5;
  }
  .edu-school {
    font-size: 0.8rem;
    color: rgba(255,255,255,0.65);
    line-height: 1.4;
  }
</style>

<div style="max-width: 3800px; margin: 10px auto; border-radius: 1px; box-shadow: 0 4px 24px rgba(0,0,0,0.30); overflow: hidden; padding: 32px 24px; text-align: left;">
  <div style="width: 100%; display: flex; flex-direction: column; align-items: center; justify-content: flex-start;">

    <div class="avatar-ring">
      <div class="avatar-inner">
        <img src="/images{{ site.author.avatar }}" alt="{{ site.author.name }}"
             style="width: 100%; height: 100%; object-fit: cover;">
      </div>
      <div class="avatar-status" aria-hidden="true"></div>
    </div>

    <p>Based in Singapore 🇸🇬, I am an Engineering Lead with a strong global track record across Banking, Energy &amp; Utilities, and Digital Transformation. I specialize in closing the gap between business strategy and technical delivery — bringing hands-on depth in designing and shipping production-ready, cloud-native APIs at enterprise scale.</p>
  </div>
      <div class="page__footer-follow" style="text-align: center; margin-bottom: 10px;">
 
</div>
  <h2>Professional Overview</h2>
    <h2>Engineering Lead | AI enthusiast | Green Software Practioner</h2>
  <p>My background spans the full delivery lifecycle: requirements gathering, architecture, API management, backend and test engineering, and production-grade execution. Having begun my career in the IT sector at age 20, I currently serve as Engineering Tech Lead for the SME Digital, Open API and Partnerships program at Standard Chartered, Singapore, where I continue to deliver high-impact solutions across multiple domains.</p>

  <h3>Core Expertise</h3>
  <ul class="expertise-grid">
    <li class="expertise-badge">Technical Leadership</li>
    <li class="expertise-badge">Open API</li>
    <li class="expertise-badge">Solution Design</li>
    <li class="expertise-badge">Artificial Intelligence</li>
    <li class="expertise-badge">ML Models</li>
    <li class="expertise-badge">Automated Speech</li>
    <li class="expertise-badge">Green Software</li>
        <li class="expertise-badge">Cloud Migration</li>
  </ul>

  <h2>Education</h2>

   <ul>
    <li>PG Certification Program in Artificial Intelligence and Machine Learning from IIIT Hyderabad</li>
    <li>Masters in Software Engineering from BITS Pilani</li>
  </ul>


  <h2>Content &amp; Knowledge Sharing</h2>
  <p>I leverage this platform to publish technical insights and posts in several key areas:</p>
  <ul>
    <li>Provide practical insights from hands-on experience</li>
    <li>Share lessons learned from solution implementations</li>
  </ul>

  <h3>My Focus Areas</h3>

  <ul class="focus-points">
    <li>Driving productivity through strategic AI implementations; analyzing organizational challenges and crafting solutions through an AI-first lens.</li>
    <li>Building AI-powered applications with a focus on automated speech recognition and conversational AI systems.</li>
    <li>Translating cutting-edge research papers into practical, real-world solutions that deliver measurable business value.</li>
    <li>Promoting awareness and education around safe, ethical AI usage — what to do, and what to avoid.</li>
  </ul>

</div>

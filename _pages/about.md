---
layout: archive
permalink: /
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
</style>

<div style="max-width: 3800px; margin: 10px auto; border-radius: 1px; box-shadow: 0 4px 24px rgba(0,0,0,0.30); overflow: hidden; padding: 32px 24px; text-align: left;">
  <div style="width: 100%; display: flex; flex-direction: column; align-items: center; justify-content: flex-start;">
   
    <h2>Engineering Lead | AI enthusiast | Green Software Practioner | Traveller</h2>
    <hr>
    <p>Based in Singapore 🇸🇬, I am a technology professional with a passion for innovation and a proven track record of delivering enterprise-scale solutions across diverse industry verticals.</p>
  </div>
      <div class="page__footer-follow" style="text-align: center; margin-bottom: 10px;">
  <ul class="social-icons" style="display: flex; justify-content: center; align-items: center; gap: 20px; list-style: none; padding: 0;">
    <li>
      <a href="http://github.com/{{ site.author.github }}" style="color: white;">
github
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/{{ site.author.linkedin }}" style="color: white;">
Linkedin
      </a>
    </li>
    <li>
      <a href="/_pages/vukclicks/index.html" style="color: white;">
        vukclicks
      </a>
    </li>
  </ul>
</div>
  <h2>Professional Overview</h2>
  <p>Comprehensive experience in the IT sector, I currently serve as an Engineering Tech Lead, having begun my career at age 20. Throughout my professional journey, I have consistently delivered high-impact solutions across multiple domains:</p>

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

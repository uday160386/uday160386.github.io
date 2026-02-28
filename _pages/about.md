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
    width: 200px;
    height: 200px;
    margin: 0 auto 20px;
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
    bottom: 8px;
    right: 8px;
    width: 22px;
    height: 22px;
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

  /* Profile name/title area */
  .profile-name {
    font-size: 2rem;
    font-style: italic;
    font-weight: 700;
    margin: 0 0 8px 0;
  }
  .profile-subtitle {
    font-size: 1.2rem;
    margin: 0 0 12px 0;
  }
  .profile-bio {
    font-size: 1.05rem;
    line-height: 1.65;
    max-width: 540px;
  }

  /* Focus Area Tiles */
  .focus-tiles {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 18px;
    margin: 20px 0 10px 0;
    padding: 0;
    list-style: none;
  }
  .focus-tile {
    position: relative;
    background: linear-gradient(135deg, #1a1a1a 0%, #111 100%);
    border: 1px solid #2a2a2a;
    border-radius: 12px;
    padding: 22px 20px 18px;
    overflow: hidden;
    transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
    cursor: default;
  }
  .focus-tile::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    border-radius: 12px 12px 0 0;
    background: var(--tile-accent);
  }
  .focus-tile:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0,0,0,0.5);
    border-color: var(--tile-accent-dim);
  }
  .focus-tile .tile-icon {
    font-size: 2rem;
    margin-bottom: 10px;
    display: block;
    line-height: 1;
  }
  .focus-tile .tile-title {
    font-size: 0.95rem;
    font-weight: 700;
    color: #f0f0f0;
    margin: 0 0 8px 0;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    font-family: 'Courier New', monospace;
  }
  .focus-tile .tile-desc {
    font-size: 0.82rem;
    color: #999;
    line-height: 1.5;
    margin: 0;
  }
  .tile-ai-leadership   { --tile-accent: #6ee7f7; --tile-accent-dim: rgba(110,231,247,0.25); }
  .tile-speech          { --tile-accent: #b98aff; --tile-accent-dim: rgba(185,138,255,0.25); }
  .tile-research        { --tile-accent: #ffd166; --tile-accent-dim: rgba(255,209,102,0.25); }
  .tile-responsible     { --tile-accent: #6bcb77; --tile-accent-dim: rgba(107,203,119,0.25); }

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
  }
  .get-in-touch-btn:hover {
    background: #fff;
    color: #000000 !important;
  }
</style>

<div style="max-width: 3800px; margin: 10px auto; border-radius: 1px; box-shadow: 0 4px 24px rgba(0,0,0,0.30); overflow: hidden; padding: 32px 24px; text-align: left;">
  <div style="width: 100%; display: flex; flex-direction: column; align-items: center; justify-content: flex-start;">
  <table style="border-collapse: collapse; border: none;"><tr style="border-collapse: collapse; border: none;"><td style="border-collapse: collapse; border: none; vertical-align: top;">
  <p align="center">

    <!-- Digital Avatar -->
    <div class="avatar-ring">
      <div class="avatar-inner">
        <svg width="200" height="200" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
          <rect width="160" height="160" fill="#111"/>
          <ellipse cx="80" cy="148" rx="58" ry="38" fill="#111"/>
          <path d="M22 148 Q30 120 45 112 Q60 104 80 102 Q100 104 115 112 Q130 120 138 148" fill="#1a1a1a"/>
          <path d="M55 110 Q65 106 80 105 Q95 106 105 110 L108 118 Q95 114 80 113 Q65 114 52 118 Z" fill="#222"/>
          <path d="M104 110 L106 130" stroke="#ccc" stroke-width="1.5" stroke-linecap="round" opacity="0.7"/>
          <rect x="90" y="116" width="22" height="8" rx="2" fill="#1e1e1e" opacity="0.8"/>
          <text x="101" y="123" text-anchor="middle" font-size="4" fill="#888" font-family="monospace">WEDZE</text>
          <rect x="68" y="98" width="24" height="16" rx="8" fill="#8B6347"/>
          <ellipse cx="80" cy="76" rx="34" ry="38" fill="#8B6347"/>
          <ellipse cx="47" cy="78" rx="6" ry="9" fill="#7a5538"/>
          <ellipse cx="113" cy="78" rx="6" ry="9" fill="#7a5538"/>
          <ellipse cx="80" cy="44" rx="34" ry="18" fill="#1a1008"/>
          <path d="M46 60 Q44 44 50 36 Q58 26 80 24 Q102 26 110 36 Q116 44 114 60" fill="#1a1008"/>
          <path d="M52 52 Q58 46 68 44" stroke="#2a1f10" stroke-width="2.5" fill="none" stroke-linecap="round"/>
          <path d="M108 52 Q102 46 92 44" stroke="#2a1f10" stroke-width="2.5" fill="none" stroke-linecap="round"/>
          <path d="M57 62 Q67 58 73 62" stroke="#1a1008" stroke-width="3" fill="none" stroke-linecap="round"/>
          <path d="M87 62 Q93 58 103 62" stroke="#1a1008" stroke-width="3" fill="none" stroke-linecap="round"/>
          <rect x="53" y="65" width="22" height="16" rx="4" fill="none" stroke="#111" stroke-width="2.5"/>
          <rect x="53" y="65" width="22" height="16" rx="4" fill="rgba(255,255,255,0.05)"/>
          <rect x="85" y="65" width="22" height="16" rx="4" fill="none" stroke="#111" stroke-width="2.5"/>
          <rect x="85" y="65" width="22" height="16" rx="4" fill="rgba(255,255,255,0.05)"/>
          <line x1="75" y1="73" x2="85" y2="73" stroke="#111" stroke-width="2"/>
          <line x1="53" y1="73" x2="47" y2="73" stroke="#111" stroke-width="2"/>
          <line x1="107" y1="73" x2="113" y2="73" stroke="#111" stroke-width="2"/>
          <circle cx="64" cy="73" r="5" fill="#1a1008"/>
          <circle cx="96" cy="73" r="5" fill="#1a1008"/>
          <circle cx="65.5" cy="71.5" r="1.5" fill="white" opacity="0.8"/>
          <circle cx="97.5" cy="71.5" r="1.5" fill="white" opacity="0.8"/>
          <path d="M78 76 Q76 84 72 88 Q78 91 88 88 Q84 84 82 76" fill="#7a5538"/>
          <path d="M68 91 Q74 89 80 91 Q86 89 92 91 Q86 95 80 94 Q74 95 68 91Z" fill="#1a1008"/>
          <path d="M62 94 Q68 102 80 104 Q92 102 98 94 Q92 100 80 101 Q68 100 62 94Z" fill="#2a1f10" opacity="0.7"/>
          <path d="M72 93 Q80 97 88 93" stroke="#6b3a2a" stroke-width="1.5" fill="none" stroke-linecap="round"/>
          <rect x="50" y="128" width="30" height="36" rx="5" fill="#f5f0e8"/>
          <rect x="50" y="128" width="30" height="36" rx="5" fill="none" stroke="#ddd" stroke-width="1"/>
          <ellipse cx="65" cy="128" rx="15" ry="3" fill="#e8e0d0"/>
          <text x="65" y="144" text-anchor="middle" font-size="5.5" fill="#555" font-family="Georgia, serif" font-style="italic">Beautiful</text>
          <text x="65" y="152" text-anchor="middle" font-size="6" fill="#555" font-family="Georgia, serif" font-style="italic">Life</text>
          <circle cx="58" cy="136" r="2" fill="#c8a882" opacity="0.6"/>
          <circle cx="72" cy="158" r="2" fill="#c8a882" opacity="0.6"/>
        </svg>
      </div>
      <div class="avatar-status"></div>
    </div>

    <div class="page__footer-follow" style="text-align: center; margin-bottom: 10px;">
  <ul class="social-icons" style="display: flex; justify-content: center; align-items: center; gap: 20px; list-style: none; padding: 0;">
    <li>
      <a href="http://github.com/{{ site.author.github }}" style="color: white;">
        <i class="fab fa-github fa-3x" style="color: white;" aria-hidden="true"></i>
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/{{ site.author.linkedin }}" style="color: white;">
        <i class="fab fa-linkedin fa-3x" style="color: white;" aria-hidden="true"></i>
      </a>
    </li>
    <li>
      <a href="/_pages/vukclicks/index.html" style="color: white;">
        <i class="fas fa-link fa-3x" aria-hidden="true"></i>
      </a>
    </li>
  </ul>
</div>
</p></td>

<td style="border-collapse: collapse; border: none; padding-left: 24px;">
  <h1 class="profile-name"><i><strong>Uday BKV</strong></i></h1>
  <h2 class="profile-subtitle">Engineering Tech Lead | AI enthusiast | Green Software Practioner</h2>
  <hr>
  <p class="profile-bio">Based in Singapore 🇸🇬, I am a technology professional with a passion for innovation and a proven track record of delivering enterprise-scale solutions across diverse industry verticals.</p>
  </td>
  </tr>
  </table>
  </div>
  
  <h2>Professional Overview</h2>
  <p>With 17 years of comprehensive experience in the IT sector, I currently serve as an Engineering Tech Lead, having begun my career at age 20. Throughout my professional journey, I have consistently delivered high-impact solutions across multiple domains:</p>

  <h2>Content &amp; Knowledge Sharing</h2>
  <p>I leverage this platform to publish technical insights and posts in several key areas:</p>

  <h3>Primary Focus Areas</h3>

  <div class="focus-tiles">

    <div class="focus-tile tile-ai-leadership">
      <span class="tile-icon">🤖</span>
      <p class="tile-title">AI &amp; Leadership</p>
      <p class="tile-desc">Driving productivity through strategic AI implementations; analyzing organizational challenges and crafting solutions through an AI-first lens.</p>
    </div>

    <div class="focus-tile tile-speech">
      <span class="tile-icon">🎙️</span>
      <p class="tile-title">Speech Technology</p>
      <p class="tile-desc">Building AI-powered applications with a focus on automated speech recognition and conversational AI systems.</p>
    </div>

    <div class="focus-tile tile-research">
      <span class="tile-icon">🔬</span>
      <p class="tile-title">AI/ML Research</p>
      <p class="tile-desc">Translating cutting-edge research papers into practical, real-world solutions that deliver measurable business value.</p>
    </div>

    <div class="focus-tile tile-responsible">
      <span class="tile-icon">🛡️</span>
      <p class="tile-title">Responsible AI</p>
      <p class="tile-desc">Promoting awareness and education around safe, ethical AI usage — what to do, and what to avoid.</p>
    </div>

  </div>

  <h3>Content Philosophy</h3>
  <ul style="max-width:600px; margin:0 0 0 20px;">
    <li>Provide practical insights from hands-on experience</li>
    <li>Share lessons learned from solution implementations</li>
    <li>Offer actionable tips and best practices</li>
    <li>Foster knowledge exchange within the technology community</li>
  </ul>

  <h3>Connect &amp; Collaborate</h3>
  <p>I am always interested in connecting with like-minded professionals, discussing emerging technologies, and exploring potential collaboration opportunities.</p>
  <p>I welcome feedback, discussions, and collaborations from fellow technology professionals and enthusiasts!</p>

  <a href="mailto:vuday.bk@outlook.com" class="get-in-touch-btn">✉ Get in Touch</a>

</div>
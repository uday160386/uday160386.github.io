---
layout: archive
permalink: /index.html
title: ""
author_profile: false
redirect_from: 
  - /about/
  - /about.html
---

{% include base_path %}

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">

<style>
  /* ============================================================
     "Signal & System" — home page
     Palette + type scale match /_includes/head/custom.html
     ============================================================ */
  :root{
    --sg-bg: #14110d;
    --sg-panel: #1b1712;
    --sg-line: rgba(242,236,227,0.10);
    --sg-line-strong: rgba(242,236,227,0.18);
    --sg-ink: #f2ece3;
    --sg-ink-muted: #a79c8c;
    --sg-ink-dim: #7c7364;
    --sg-warm: #e8a23d;
    --sg-warm-soft: rgba(232,162,61,0.12);
    --sg-cool: #4fc3b0;
    --sg-cool-soft: rgba(79,195,176,0.12);
  }

  .home{
    max-width: 760px;
    margin: 0 auto;
    padding: 0.5rem 1.25rem 2rem;
    font-family: 'IBM Plex Sans', sans-serif;
    color: var(--sg-ink-muted);
    line-height: 1.6;
  }
  .home a{ color: var(--sg-warm); text-decoration: none; }
  .home a:hover{ color: var(--sg-cool); }

  /* hero */
  .sg-hero{ padding: 2rem 0 2.25rem; }
  .sg-status{
    display:inline-flex; align-items:center; gap:0.55rem;
    font-family:'IBM Plex Mono', monospace; font-size:0.76rem; color:var(--sg-ink-muted);
    border:1px solid var(--sg-line-strong); border-radius:100px;
    padding:0.35rem 0.8rem 0.35rem 0.6rem; margin-bottom:1.5rem;
  }
  .sg-status .dot{
    width:7px; height:7px; border-radius:50%; background:var(--sg-cool);
    animation:sg-pulse 2.4s ease-out infinite;
  }
  @keyframes sg-pulse{
    0%{ box-shadow:0 0 0 0 rgba(79,195,176,0.5); }
    70%{ box-shadow:0 0 0 7px rgba(79,195,176,0); }
    100%{ box-shadow:0 0 0 0 rgba(79,195,176,0); }
  }
  .sg-name{
    font-family:'Space Grotesk', sans-serif; font-weight:700;
    font-size:clamp(2rem, 5.4vw, 3rem); line-height:1.08; letter-spacing:-0.015em;
    margin:0 0 0.5rem; max-width:11ch; color: var(--sg-ink);
  }
  .sg-role{
    font-family:'Space Grotesk', sans-serif; font-size:1.08rem; font-weight:500;
    color: var(--sg-warm); margin:0 0 1.2rem;
  }
  .sg-role .sep{ color: var(--sg-ink-dim); margin:0 0.5rem; }
  .sg-intro{ max-width:56ch; font-size:1.01rem; margin:0 0 1.75rem; }
  .sg-intro strong{ color: var(--sg-ink); font-weight:600; }

  .sg-trace{ width:100%; max-width:480px; height:48px; display:block; margin:0 0 1.9rem -2px; }
  .sg-trace path{
    fill:none; stroke: var(--sg-cool); stroke-width:1.6;
    stroke-dasharray:900; stroke-dashoffset:900;
    animation: sg-draw 2.1s cubic-bezier(.65,0,.35,1) 0.2s forwards;
  }
  @keyframes sg-draw{ to{ stroke-dashoffset:0; } }
  @media (prefers-reduced-motion: reduce){
    .sg-trace path{ animation:none; stroke-dashoffset:0; }
    .sg-status .dot{ animation:none; }
  }

  .sg-links{ display:flex; gap:0.6rem; }
  .sg-icon-link{
    display:flex; align-items:center; justify-content:center;
    width:38px; height:38px; border-radius:9px;
    border:1px solid var(--sg-line-strong); color:var(--sg-ink-muted) !important;
    transition:border-color .15s, color .15s, background .15s;
  }
  .sg-icon-link:hover{ border-color:var(--sg-warm); color:var(--sg-warm) !important; background:var(--sg-warm-soft); }
  .sg-icon-link svg{ width:16px; height:16px; }

  /* sections */
  .home section{ padding:2.25rem 0; border-top:1px solid var(--sg-line); }
  .sg-label{
    font-family:'IBM Plex Mono', monospace; font-size:0.74rem;
    color: var(--sg-ink-dim); margin-bottom:0.9rem; display:flex; align-items:center; gap:0.55rem;
  }
  .sg-label::before{ content:''; width:5px; height:5px; border-radius:50%; background:var(--sg-warm); }
  .home h2{
    font-family:'Space Grotesk', sans-serif; font-weight:600; font-size:1.35rem;
    margin:0 0 1rem; color: var(--sg-ink);
  }
  .home h3.sg-sub{ font-size:1.02rem; margin: 1.8rem 0 0; color: var(--sg-ink); }
  .home p{ max-width:62ch; }

  .sg-chips{ display:flex; flex-wrap:wrap; gap:0.55rem; list-style:none; padding:0; margin:1.2rem 0 0; }
  .sg-chip{
    font-family:'IBM Plex Mono', monospace; font-size:0.78rem;
    color: var(--sg-cool); background: var(--sg-cool-soft);
    border:1px solid rgba(79,195,176,0.28); border-radius:7px; padding:0.45rem 0.75rem;
  }

  .sg-focus{ list-style:none; padding:0; margin:1.1rem 0 0; display:flex; flex-direction:column; gap:0.9rem; }
  .sg-focus li{ display:flex; gap:0.85rem; max-width:60ch; font-size:0.96rem; }
  .sg-focus li::before{ content:''; flex:0 0 auto; width:1px; margin-top:0.3rem; align-self:stretch; background:var(--sg-line-strong); }
  .sg-focus li b{ color: var(--sg-ink); font-weight:600; }

  .sg-edu{ display:flex; flex-direction:column; margin-top:1.1rem; }
  .sg-edu-item{
    display:flex; justify-content:space-between; gap:1rem;
    padding:0.9rem 0; border-top:1px solid var(--sg-line); font-size:0.94rem;
  }
  .sg-edu-item:first-child{ border-top:none; }
  .sg-edu-item .what{ color: var(--sg-ink); font-weight:500; max-width:38ch; }
  .sg-edu-item .where{ color: var(--sg-ink-dim); font-family:'IBM Plex Mono', monospace; font-size:0.78rem; text-align:right; flex:0 0 auto; padding-top:0.15rem; }

  .sg-projects{ display:flex; flex-direction:column; margin-top:1.1rem; }
  .sg-proj{
    display:grid; grid-template-columns:3px 1fr; gap:1.1rem;
    padding:1.1rem 0; border-top:1px solid var(--sg-line);
    transition:padding-left .15s;
  }
  .sg-proj:first-child{ border-top:none; }
  .sg-proj:hover{ padding-left:0.35rem; }
  .sg-proj .bar{ background: var(--sg-line-strong); border-radius:2px; transition:background .15s; }
  .sg-proj:hover .bar{ background: var(--sg-warm); }
  .sg-proj .name{ color: var(--sg-ink); font-weight:600; font-size:1rem; margin-bottom:0.3rem; }
  .sg-proj .name a{ color: inherit; }
  .sg-proj .desc{ font-size:0.9rem; max-width:58ch; margin-bottom:0.55rem; }
  .sg-proj .tags{ display:flex; flex-wrap:wrap; gap:0.45rem; }
  .sg-proj .tags span{
    font-family:'IBM Plex Mono', monospace; font-size:0.7rem; color: var(--sg-ink-dim);
    border:1px solid var(--sg-line); border-radius:5px; padding:0.2rem 0.5rem;
  }

  .sg-footer{ padding:2.4rem 0 1rem; border-top:1px solid var(--sg-line); }
  .sg-cta{ font-family:'Space Grotesk', sans-serif; font-size:1.25rem; font-weight:600; margin:0 0 1.3rem; max-width:20ch; color: var(--sg-ink); }
  .sg-contact-row{ display:flex; flex-wrap:wrap; align-items:center; gap:1.3rem; }
  .sg-mail{
    color: var(--sg-warm) !important; font-family:'IBM Plex Mono', monospace; font-size:0.9rem;
    border-bottom:1px solid rgba(232,162,61,0.35);
  }

  @media (max-width:600px){
    .sg-edu-item{ flex-direction:column; gap:0.2rem; }
    .sg-edu-item .where{ text-align:left; }
  }
</style>

<div class="home">

  <header class="sg-hero">
    <h1 class="sg-name">{{ site.author.name }}</h1>
    <p class="sg-role">Engineering Lead <span class="sep">/</span> Applied AI, Open API &amp; Cloud-Native Delivery</p>

    <svg class="sg-trace" viewBox="0 0 480 48" preserveAspectRatio="none">
      <path d="M0,24 L55,24 L69,7 L88,41 L106,13 L120,24 L185,24 C199,24 199,9 213,9 C227,9 227,24 241,24 L314,24 L328,37 L347,11 L363,24 L480,24" />
    </svg>

    <p class="sg-intro">I'm an <strong>Engineering Lead</strong> with a strong track record across Banking, Energy &amp; Utilities, and Digital Transformation. I specialise in closing the gap between business strategy and technical delivery — bringing hands-on depth in designing and shipping production-ready mobile apps and cloud-native APIs at enterprise scale.</p>

    <div class="sg-links">
      {% if site.author.linkedin %}
        <a class="sg-icon-link" href="https://www.linkedin.com/in/{{ site.author.linkedin }}" aria-label="LinkedIn" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>
        </a>
      {% endif %}
      {% if site.author.github %}
        <a class="sg-icon-link" href="https://github.com/{{ site.author.github }}" aria-label="GitHub" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.93.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.68-.1-.26-.45-1.28.1-2.66 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.66.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.94.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/></svg>
        </a>
      {% endif %}
      {% if site.author.uri %}
        <a class="sg-icon-link" href="{{ base_path }}{{ site.author.uri }}" aria-label="Website">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9s1.3-6.4 3.8-9z"/></svg>
        </a>
      {% endif %}
    </div>
  </header>

  <section id="overview">
    <div class="sg-label">Overview</div>
    <p>My background spans the full delivery lifecycle: requirements gathering, architecture, API management, backend and test engineering, and production-grade execution. Having begun my career in the IT sector at age 20, I currently serve as Engineering Tech Lead for the SME Digital, Open API and Partnerships program at Standard Chartered, Singapore, where I continue to deliver high-impact solutions across multiple domains.</p>
  </section>

  <section id="focus">
    <div class="sg-label">Current focus</div>
    <ul class="sg-chips">
      <li class="sg-chip">PyTorch</li>
      <li class="sg-chip">Conversational AI</li>
      <li class="sg-chip">Autonomous Multi-Agent AI Systems</li>
      <li class="sg-chip">AI Transformation</li>
      <li class="sg-chip">Multi-Modal AI</li>
    </ul>

    <h2>What I write and build about</h2>
    <p>I use this space to publish technical insights and posts drawn from hands-on implementation, not theory.</p>
    <ul class="sg-focus">
      <li><b>AI-first problem solving</b> — analysing organisational challenges and driving productivity through strategic AI implementations.</li>
      <li><b>Conversational &amp; speech systems</b> — building AI-powered applications focused on automated speech recognition and conversational AI.</li>
      <li><b>Research into practice</b> — translating cutting-edge research papers into practical solutions that deliver measurable business value.</li>
      <li><b>Responsible AI</b> — promoting awareness and education around safe, ethical AI usage — what to do, and what to avoid.</li>
    </ul>
  </section>

  <section id="education">
    <div class="sg-label">Education</div>
    <div class="sg-edu">
      <div class="sg-edu-item">
        <div class="what">PG Certification in Artificial Intelligence &amp; Machine Learning</div>
        <div class="where">IIIT Hyderabad</div>
      </div>
      <div class="sg-edu-item">
        <div class="what">Master's in Software Engineering</div>
        <div class="where">BITS Pilani</div>
      </div>
    </div>
  </section>

  <section id="projects">
    <div class="sg-label">Selected projects</div>
    <h2>Recent work</h2>
    <div class="sg-projects">
      {% assign featured = site.projects | reverse %}
      {% for project in featured limit:4 %}
        <div class="sg-proj">
          <div class="bar"></div>
          <div>
            <div class="name"><a href="{{ project.url | relative_url }}">{{ project.title }}</a></div>
            <div class="desc">{{ project.excerpt | strip_html | truncate: 160 }}</div>
            <div class="tags">
              {% for tag in project.tags limit:4 %}{% if tag %}<span>{{ tag }}</span>{% endif %}{% endfor %}
            </div>
          </div>
        </div>
      {% endfor %}
    </div>
  </section>

  <footer class="sg-footer">
    <p class="sg-cta">Building something in Applied AI? Let's talk.</p>
  </footer>

</div>

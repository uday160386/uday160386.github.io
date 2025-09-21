---
layout: archive
title: ""
permalink: /sparetime/
author_profile: true
redirect_from:
  - /resume
---
<!-- Tabs Example -->

<!-- Colorful Tabs Example -->

<style>
.tab-btn {
  background: #190903ff;
  border: none;
  color: white;
  padding: 16px 24px;
  margin-bottom: 12px;
  cursor: pointer;
  border-radius: 8px;
  font-weight: normal;
  width: 100%;
  text-align: left;
  font-size: 1.1em;
  transition: background 0.2s;
}
.tab-btn.active {
  background: linear-gradient(90deg, #191a1aff, #2f7f93);
}
.tab-content {
  border: none;
  border-radius: 8px;
  padding: 20px;
  background: #fff;
  margin-bottom: 20px;
  color: #131212ff;
  min-height: 200px;
  font-size: 1.08em;
}
.twocol-container {
  display: flex;
  flex-direction: row;
  max-width: 900px;
  margin: 24px auto;
  background: rgba(30,30,30,0.95);
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.18);
  overflow: hidden;
}
.twocol-left {
  flex: 0 0 220px;
  background: #191a1a;
  padding: 24px 12px 24px 12px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-height: 100px;
}
.twocol-right {
  flex: 1 1 0;
  padding: 24px 12px;
  background: #fff;
  color: #222;
}
@media (max-width: 700px) {
  .twocol-container {
    flex-direction: column;
    max-width: 98vw;
    margin: 8px auto;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.12);
  }
  .twocol-left {
    flex: none;
    width: 100%;
    min-height: unset;
    padding: 16px 8px;
    align-items: stretch;
    border-radius: 10px 10px 0 0;
  }
  .twocol-right {
    flex: none;
    width: 100%;
    padding: 16px 8px;
    border-radius: 0 0 10px 10px;
  }
  .tab-btn {
    font-size: 1.08em;
    padding: 14px 16px;
    margin-bottom: 10px;
  }
  .tab-content {
    font-size: 1em;
    padding: 14px 8px;
  }
}
</style>

<div style="font-weight:bold; font-size:20px; color:#fff; margin-bottom:24px;text-align:center">3L (Life Long Learning)</div>
<div class="twocol-container">
  <div class="twocol-left">
    
    <button class="tab-btn active" onclick="showTab('tab1', this)">Education</button>
    <button class="tab-btn" onclick="showTab('tab2', this)">Certifications</button>
    <button class="tab-btn" onclick="showTab('tab3', this)">Courses</button>
    <button class="tab-btn" onclick="showTab('tab4', this)">Presentations</button>
  </div>
  <div class="twocol-right">
    <div id="tab1" class="tab-content" style="display:block;">
      <p>
      🎓 PG Certification Program in Artificial Intelligence and Machine Learning, 
      IIIT Hyderabad <br>
      🎓 Masters in Software Engineering,
      BITS Pilani</p>
    </div>
    <div id="tab2" class="tab-content" style="display:none;">
      <p>
      ✔️  AWS Cloud Practitioner ☁️<br>
      ✔️ Microsoft Certified: Azure Fundamentals 🔵<br>
      ✔️ AWS Certified Security – Specialty 🔒<br>
      ✔️ Certified SAFe® 6 Agilist 📋<br>
      ✔️ Certified** ScrumMaster (Scrum Alliance) 🏃‍♂️<br>
      ✔️ Site Reliability Engineering (SRE) Foundation℠ (DevOps Institute) ⚙️<br>
      ✔️ Green Software for Practitioners (Linux Foundation) 🌱<br></p>
    </div>
    <div id="tab3" class="tab-content" style="display:none;">
      <p>
      AI & Product Development<br>
      ✔️  AI Product Development: Technical Feasibility and Prototyping (LinkedIn Learning) 🤖<br>
      ✔️  Integrating AI into the Product Architecture (LinkedIn Learning) 🏗️<br><br>
      Architecture & Security<br>
      ✔️  REST API Management, Monitoring & Analytics using Kong 3 (Udemy) 🔧<br>
      ✔️  Microservices Software Architecture: Patterns and Techniques (Udemy) 🏢<br>
      ✔️  Microservices: Security (LinkedIn Learning) 🔐<br>
      ✔️  Cloud Security Architecture for the Enterprise (LinkedIn Learning) 🛡️<br>
      ✔️  Design a Cloud Migration Strategy (LinkedIn Learning) ☁️<br><br>
      Leadership & Soft Skills<br>
      ✔️  Mentoring Others (LinkedIn Learning) 👥<br>
      ✔️  Leadership Foundations (LinkedIn Learning) 🎯<br>
      </p>
    </div>
    <div id="tab4" class="tab-content" style="display:none;">
      <i>Sharing knowledge and expertise through technical presentations</i>
      <br><br>
      <a href="../Documents/ASR-Presentation.pdf">[Automated Speech Recognition in English 📈]</a>   
      *Presented: October 22, 2024*
    </div>
  </div>
</div>
<script>
function showTab(tabId, btn) {
  document.getElementById('tab1').style.display = 'none';
  document.getElementById('tab2').style.display = 'none';
  document.getElementById('tab3').style.display = 'none';
  document.getElementById('tab4').style.display = 'none';

  document.getElementById(tabId).style.display = 'block';
  var buttons = document.getElementsByClassName('tab-btn');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('active');
  }
  btn.classList.add('active');
}
</script>

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
  padding: 10px 20px;
  margin-right: 5px;
  cursor: pointer;
  border-radius: 5px 5px 0 0;
  font-weight: normal;+
}
.tab-btn.active {
  background: linear-gradient(90deg, #191a1aff, #f6f1f1ff);
}
.tab-content {
  border: none;
  border-radius: 0 0 5px 5px;
  padding: 15px;
  background: #ffffffff;
  margin-bottom: 20px;
}
</style>
<div style="text-align:left; font-weight:bold; font-size:24px;">Life Long Learning ( L3 )<br><br></div>
<div>

  <button class="tab-btn active" onclick="showTab('tab1', this)">Education</button>
  <button class="tab-btn" onclick="showTab('tab2', this)">Certifications</button>
  <button class="tab-btn" onclick="showTab('tab3', this)">Courses</button>
  <button class="tab-btn" onclick="showTab('tab4', this)">Projects</button>
  <button class="tab-btn" onclick="showTab('tab5', this)">Presentations</button>
</div>
<div id="tab1" class="tab-content" style="display:block;">
  <p>
  🎓 PG Certification Program in Artificial Intelligence and Machine Learning
IIIT Hyderabad <br>
 🎓 Masters in Software Engineering
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
  <h3>Projects</h3>
  <p>Details about projects go here.</p>
</div>
<div id="tab5" class="tab-content" style="display:none;">
  <i>Sharing knowledge and expertise through technical presentations</i>
  
  <br><br>
  
  <a href="../Documents/ASR-Presentation.pdf">[Automated Speech Recognition in English 📈]</a>   
  *Presented: October 22, 2024*
  
  
</div>
<script>
function showTab(tabId, btn) {
  document.getElementById('tab1').style.display = 'none';
  document.getElementById('tab2').style.display = 'none';
  document.getElementById('tab3').style.display = 'none';
  document.getElementById('tab4').style.display = 'none';
  document.getElementById('tab5').style.display = 'none';
  document.getElementById(tabId).style.display = 'block';
  var buttons = document.getElementsByClassName('tab-btn');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('active');
  }
  btn.classList.add('active');
}
</script>

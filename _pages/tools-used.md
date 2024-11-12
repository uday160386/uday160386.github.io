---
layout: archive
title: ""
permalink: /toolsresources/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}


## Projects

{% include base_path %}
----
{% for post in site.aiprojects %}
  {% include archive-single.html %}
{% endfor %}

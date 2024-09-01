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

## Software/Tools I use :

| Tool Name |  Purpose|
| ------ | ------ |
| IDE |   Visual Studio, Google Colab, Conda |
| Machine Learning |   Numpy, Pandas, SKLearn, Matplotlib, ONNX |
| Deep Learning |  Tensorflow, Keras |
| Cloud |  Azure Open AI|
| RAG |  HuggingFace, Open AI, LangChain, Kaggle, VectorDB  |
| ML Lifecycle & Model Viewer |   MLflow, netron, protobuf |
| Data app |   Streamlit |


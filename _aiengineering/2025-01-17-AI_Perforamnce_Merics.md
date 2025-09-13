---
title: "AI Model Performance metrics"
collection: aiengineering
permalink: /aiengineering/aimodelmetrics
excerpt: ''
date: 2025-01-17
tags:
  - AI Bascis
  - Performance Mertcis
---

### - Perplexity
  
  - this measure reliably evaluates the model's text prediction accuracy. 
  - A language model with a perplexity of 20 is choosing from 20 equally likely options for each word in a sequence, per www.comet.com. 
  - Lower perplexity signifies greater confidence and better predictions.

### - Temperature
  
  - controls the randomness of output. 
  - A common issue is hallucination, where a model generates false information. 
  - Lowering the temperature can reduce, but not eliminate, hallucinations.

### - Latency
  
  evaluates a model's response time, essential for interactive experiences.
  ```
  End-to-End Latency (E2E) = Network Latency + Model Processing Time + Output Generation Time + Post-processing Time.
  ```

### - Token Throughput
  
  the model's processing speed and its token handling per second.
  
    ```For example, if a model generates 1,000 tokens in a batch of 50 within 10 seconds, the throughput is (1,000 * 50) / 10 = 5,000 tokens per second.```


*** Note: these metrics are important for model monitoring and improvement.

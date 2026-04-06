---
title: "Building a Production ready RAG Pipeline: TF-IDF, HNSW, LSH, Agentic RAG, CAG, guardrails and More"
collection: aiengineering
permalink: /aiengineering/s_rag_agentic_rag
excerpt: '**TL;DR**
This post outlines a potentially effective approach to user queries by implementing a Retrieval-Augmented Generation (RAG) strategy, enhanced with an Agetic RAG solution and 10-guardrail safety system.'
date: 2026-03-31


tags:
  - caching 
  - mcp 
  - chunking 
  - semantic-search 
  - rag-pipeline 
  - rag-chatbot 
  - agentic-rag 
---
**TL;DR**

> This post outlines a potentially effective approach to user queries by implementing a Retrieval-Augmented Generation (RAG) strategy, enhanced with an Agetic RAG solution and 10-guardrail safety system.. The proposed solutions involve utilizing Cache-Augmented Generation alongside Context Engineering, Semantic Search, Embeddings, Chunking, Page Indexing, a Web Chat User Interface, and large language models such as Olama and Gemeni. Additionally, it incorporates Hugging Face's Chain and the MCP Server for Claude Desktop.

### Standard RAG Pipeline

<img src="/images/posts/standard_rag.svg" style="border-radius: 15px;box-shadow: 0px 0px 5px 5px #000000;">

  - Raw Documents → /data/
  - Agentic Chunking + TF-IDF (semantic boundaries + vocabulary scoring)
  - Sentence Transformers — BGE model, dim=384, normalize
  - ChromaDB + HNSW + LSH — O(log n) ANN with the layer graph visualised
  - CAG (Redis) + Context Engine (7 steps) + LLM (Gemini/Ollama)


### Agentic RAG Pipeline

<img src="/images/posts/agentic_rag.svg" style="border-radius: 15px;box-shadow: 0px 0px 5px 5px #000000;">

- User Query → Agent Brain (LLM as orchestrator)
- 5-tool belt: search_chunks, search_pages, filter_by_file, summarise_doc, answer
- ToolExecutor → ChromaDB → Observation
- Self-Reflection: "Enough? YES → answer / NO → loop back"
- Loop-back arrow on the right showing max 5 iterations
- Real example trace at the bottom showing a 3-iteration comparison query

References are available at: 
- [GitHub Repo ](https://github.com/uday160386/production-ready-rag-solution)
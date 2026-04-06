---
title: "Building a Production ready Agentic RAG Pipeline: TF-IDF, HNSW, LSH, CAG, guardrails and More"
collection: aiengineering
permalink: /aiengineering/s_rag_agentic_rag
excerpt: '**TL;DR**
This post outlines a potentially effective approach to user queries by implementing a Agentic Retrieval-Augmented Generation (RAG) strategy,and 10-guardrail safety system.'
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

> This post outlines a potentially effective approach to user queries by implementing a Agentic Retrieval-Augmented Generation (RAG) strategy, and 10-guardrail safety system.. The proposed solutions involve utilizing Cache-Augmented Generation alongside Context Engineering, Semantic Search, Embeddings, Chunking, Page Indexing, a Web Chat User Interface, and large language models such as Olama and Gemeni. Additionally, it incorporates Hugging Face's Chain and the MCP Server for Claude Desktop.

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
---
title: "Developing powerful Agentic AI through GitHub Copilot’s custom agents."
collection: aiengineering
permalink: /aiengineering/2026/02/28/blog-post-1/
excerpt: 'In this post, we’ll explore what Copilot Custom Agents are, the problem they solve, and how you can automate multi-agent workflows using Python.'
date: 2026-02-28
tags:
  - Agentic AI
  - Github-copilot
  - Content-Generation
---

   Before procedding to problem statment, let us understand What is Copilot Custom agents?
   Custom agents are specialized versions of the Copilot agent defined using Markdown files called agent profiles (.agent.md files). But beyond simple code suggestions, Copilot now enables something much more powerful: Agentic AI through custom agents.

   In this post, we’ll explore what Copilot Custom Agents are, the problem they solve, and how you can automate multi-agent workflows using Python.

What Are Copilot Custom Agents?
Copilot Custom Agents are specialized AI agents defined using Markdown files (.agent.md). These files act as agent profiles, allowing you to configure:

-  Prompts
-  Tools
-  Execution behavior
-  External integrations (MCP servers)

This means you can encode your team’s workflows directly into reusable AI agents.

## How Engineers Use Custom Agents

Steps to use:
1. Open GitHub Copilot Chat in VS Code. 
2. From the agents dropdown at the bottom of the chat view, click "Configure Custom Agents..." to manage agents. 
3. Your .github/agents agents will appear in the dropdown when you click in the prompt box. 
4. You can access custom agents using @ syntax — type @ followed by the agent name in the chat input 

Example:

@story-generator


### Agent Profile Structure:
A typical .github/agents/storyagent.md file looks like:

Here’s what a simple custom agent looks like:
```
---
name: story generator
description: Describe what this custom agent does and when to use it create swager document for given user story. --- IGNORE ---
argument-hint: The inputs this agent expects, e.g., "a user story to implement" or "a question to answer". --- IGNORE ---
# tools: ['vscode', 'execute', 'read', 'agent', 'edit', 'search', 'web', 'todo'] 
# specify the tools this agent can use. If not set, all enabled tools are allowed.
---
write user story for mobile banking login scenario and genrate swagger file
```

## Problem: Manual Agent Orchestration

While custom agents are powerful, invoking them manually becomes inefficient when chaining multiple agents.
Opening a chat for each execution and inserting assertions can be tedious, especially when multiple agents need to be invoked. Currently, the Agentic AI solution follows a sequential flow of execution through a series of agent invocations, as outlined below:

Example Workflow:
@story-generator → Generate user stories
@testcase-generator → Generate test cases

Now imagine scaling this to:

5+ agents
Multiple iterations
Conditional flows

This quickly becomes tedious and error-prone.

Can this be done using Python code? The answer is yes.

## The Solution: Automating Agents with Python
You can automate multi-agent workflows using Python in three main ways.
## Option #1 
** GitHub Copilot Python SDK (Recommended)**  
The GitHub Copilot SDK provides a programmable interface for Python, TypeScript, Go, .NET, and Java, utilizing the same engine as the Copilot CLI. It manages tasks such as planning, tool invocations, file edits, and more, all while communicating with the Copilot CLI server through JSON-RPC.

### Install
```pip install github-copilot-sdk```
### Python Usage:

```
from copilot import CopilotClient
    import asyncio

    async def main():
        client = CopilotClient()
        await client.start()

    session = await client.create_session({
        "model": "claude-sonnet-4-6",
        "streaming": True,
    })

    # Run a specific agent by name (matches your .agent.md filename)
    await session.send_and_wait({
        "prompt": "Use the story-generator agent to create user stories for mobile banking application"
    })

    asyncio.run(main())
```

### Option #2
Subprocess — call Copilot CLI from Python
You can specify the custom agent directly using the --agent flag: copilot --agent story-generator --prompt "create user stories for mobile banking application" — where story-generator is the filename without the .agent.md extension. 
```
    import subprocess

    result = subprocess.run(
        [
            "copilot",
            "--agent", "story-generator",   
            "--prompt", "create user stories for mobile banking application"
        ],
        capture_output=True,
        text=True
    )
    print(result.stdout)
```
### Option 3: 
Microsoft Agent Framework (higher-level)
You can also use GitHubCopilotAgent from the Microsoft Agent Framework, which wraps the SDK with a consistent interface supporting multi-turn conversations, MCP servers, and function tools: 

```
from copilot import CopilotClient, PermissionHandler
from copilot.generated.session_events import SessionEventType
import asyncio
import os


async def main():
    print("[1] Starting client...")
    # Ensure GitHub Copilot token is set in environment variable instead of CLI
    token = os.getenv('GH_TOKEN') or os.getenv('GITHUB_TOKEN')
    if not token:
        raise ValueError("Please set GH_TOKEN or GITHUB_TOKEN environment variable with your GitHub Copilot token")
    client = CopilotClient()
    await client.start()
    print("[2] Client started")

    # Tell the session WHERE your repo is so it can find .github/agents/
    workspace = os.path.abspath(".")  # or full path: ""
    print(f"[2.5] Workspace: {workspace}")

    session = await client.create_session({
        "model": "claude-sonnet-4-6",
        "streaming": True,
        "on_permission_request": PermissionHandler.approve_all,
        "workspace": workspace,   # <-- add this
    })
    print(f"[3] Session created: {session.session_id}")

    output_parts = []

    def handle_event(event):
        print(f"[EVENT] {event.type} — {str(event.data)[:120]}")
        if event.type == SessionEventType.ASSISTANT_MESSAGE:
            text = getattr(event.data, "content", "")
            if text:
                print(text, end="", flush=True)
                output_parts.append(text)
        elif event.type == SessionEventType.SESSION_IDLE:
            print("\n[Agent done]\n")
        elif event.type == SessionEventType.SESSION_ERROR:
            print(f"\n[Error]: {getattr(event.data, 'message', event.data)}\n")

    unsubscribe = session.on(handle_event)

    print("[4] Sending prompt...")
    try:
        result = await session.send_and_wait({
            # Reference agent by name only, not full path
            "prompt": "@story-generator write a story for a banking app. Include a user checking their balance and making a transfer.",
        }, timeout=300)
        print(f"[5] send_and_wait returned: {result}")

        output_text = getattr(result.data, "content", "") if result else "".join(output_parts)
        with open("output.txt", "w") as f:
            f.write(output_text)
        print(f"[6] Written {len(output_text)} chars to output.txt")

    except TimeoutError:
        print("[ERROR] Timed out — SESSION_IDLE never received")
        if output_parts:
            with open("output.txt", "w") as f:
                f.write("".join(output_parts))
            print("Partial output saved.")

    except Exception as e:
        print(f"[ERROR] {type(e).__name__}: {e}")

    finally:
        unsubscribe()
        try:
            await client.stop()
        except ExceptionGroup as eg:
            real_errors = [e for e in eg.exceptions if "exited with code 0" not in str(e)]
            if real_errors:
                raise ExceptionGroup("errors during CopilotClient.stop()", real_errors)


if __name__ == "__main__":
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        print("\nShutdown complete.")
```

Building a Multi-Agent Pipeline

Here’s a simple conceptual pipeline:

### Step 1: Generate stories
await session.send_and_wait({
    "prompt": "@story-generator generate login stories"
})

### Step 2: Generate test cases
await session.send_and_wait({
    "prompt": "@testcase-generator generate test cases from previous output"
})

## Note:
All three require Copilot CLI installed and you being authenticated with GitHub (via VS Code or gh auth login)

### Conclusion:
Copilot Custom Agents significantly improve automated development workflows. By integrating custom agents with Python orchestration and structured pipelines, you can build advanced AI systems that minimize manual effort and accelerate the delivery process. 

### Reference: 
[Github copilot Custom Agents]



   [Github copilot Custom Agents]: <https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/create-custom-agents>
   

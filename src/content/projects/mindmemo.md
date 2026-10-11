---
title: MindMemo
summary: An AI assistant that runs its models on the phone and remembers you between chats. Web search is optional.
kind: personal
role: Sole developer
start: "2026-03"
end: "2026-03"
layers: [mobile, ai]
myWork:
  - Ran AI language models (Qwen2.5, 0.5B and 1.5B) fully on the phone with llama.cpp. Users download a model inside the app.
  - Built long-term memory. After each chat, the app saves key facts about the user on the phone and uses them in later chats.
  - Added optional web search and a reasoning mode with collapsible thinking steps.
stack: [Flutter, llama.cpp, Qwen2.5, SQLite, Provider, local_auth]
cover: ../../assets/covers/mindmemo.webp
coverNote: Adapted from the app's screens.
screens:
  - ../../assets/screens/mindmemo_chat.webp
  - ../../assets/screens/mindmemo_memories.webp
  - ../../assets/screens/mindmemo_models.webp
client:
  title: On-device AI
  category: Personal project, mobile app
  story: A mobile assistant with local model inference and memory between conversations.
  contribution: Independently built the app, model integration and local memory.
  note: Web search is an optional feature and uses an internet connection.
  tags: [Flutter, llama.cpp, SQLite, Provider]
  cover: ../../assets/covers/mindmemo.webp
  order: 4
featured: true
order: 4
verified: true
---

## Key details

- Runs Qwen2.5 (0.5B / 1.5B) and SmolLM2 models offline with llama.cpp.
- Models are downloaded inside the app as small, compressed files.
- Remembers facts about the user between chats, stored on the phone.
- Optional web search and reasoning mode.

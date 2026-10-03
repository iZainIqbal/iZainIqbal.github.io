---
title: MindMemo
summary: A private AI assistant that runs fully on the phone. No cloud, and it remembers you between chats.
kind: personal
role: Sole developer
start: "2026-03"
end: "2026-03"
layers: [mobile, ai]
myWork:
  - Ran AI language models (Qwen2.5, 0.5B and 1.5B) fully on the phone with llama.cpp. Users download a model inside the app.
  - Built long-term memory. After each chat, the app saves key facts about the user on the phone and uses them in later chats.
  - Added optional web search, a reasoning mode with collapsible thinking steps, and a biometric lock with secure storage.
stack: [Flutter, llama.cpp, Qwen2.5, SQLite, Provider, local_auth]
featured: true
order: 4
verified: true
---

## Key details

- Runs Qwen2.5 (0.5B / 1.5B) and SmolLM2 models offline with llama.cpp.
- Models are downloaded inside the app as small, compressed files.
- Remembers facts about the user between chats, stored on the phone.
- Optional web search, reasoning mode and biometric lock.

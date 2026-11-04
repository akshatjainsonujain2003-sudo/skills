---
name: build-your-own-x
description: Find step-by-step tutorials for re-creating a technology from scratch (database, Git, Docker, shell, interpreter or compiler, OS, emulator, web server, browser, regex engine, neural network, game, blockchain, BitTorrent client and more) from the build-your-own-x catalog of 359 guides, filtered by language. Use when someone wants to learn how something works by building it, asks "how do I write my own X", wants a from-scratch learning project, or wants a tutorial in a particular language.
license: CC0-1.0
metadata:
  origin: codecrafters-io/build-your-own-x
---

# Build Your Own X

> *What I cannot create, I do not understand.* — Richard Feynman

A catalog of well-written, step-by-step guides for re-creating familiar technologies from scratch, from [codecrafters-io/build-your-own-x](https://github.com/codecrafters-io/build-your-own-x). The full list is in [references/tutorials.md](references/tutorials.md).

## When to use

- "I want to build my own database / shell / Git / Redis / interpreter…"
- "How does Docker (or a regex engine, a TCP stack…) actually work? I want to write one."
- Looking for a learning project, ideally in a particular language
- Planning a from-scratch implementation and wanting a proven tutorial to follow

## Categories

3D Renderer · AI Model · Augmented Reality · BitTorrent Client · Blockchain / Cryptocurrency · Bot · Command-Line Tool · Database · Docker · Emulator / Virtual Machine · Front-end Framework / Library · Game · Git · Memory Allocator · Network Stack · Neural Network · Operating System · Physics Engine · Processor · Programming Language · Regex Engine · Search Engine · Shell · Template Engine · Text Editor · Visual Recognition System · Voxel Engine · Web Browser · Web Server · Uncategorized (DNS server, package manager, chat service, spreadsheet, URL shortener, and others)

## How to use the catalog

1. **Map the request to a category.** An interpreter or compiler is under `Programming Language`, a VM or CHIP-8 under `Emulator / Virtual Machine`, Redis or SQLite under `Database`, a container runtime under `Docker`, a TCP/IP stack under `Network Stack`. When nothing fits, look in `Uncategorized`.
2. **Search rather than read the whole file.** Grep [references/tutorials.md](references/tutorials.md) for the category header (`#### Build your own \`Database\``) or a keyword, and filter by language with `\*\*Rust\*\*`, `\*\*Python\*\*` and so on.
3. **Recommend 2–4 tutorials, not the whole list.** Prefer ones in the user's language. When the language doesn't matter, prefer complete multi-part series over a single post. Mention when an entry is a video (`[video]`).
4. **Give links exactly as they appear in the catalog.** Don't invent tutorials or URLs. Some links are old and may have moved; if one is dead, say so and offer another entry.
5. **If the user wants to start building**, suggest a minimal first milestone, such as a REPL that tokenizes input for an interpreter or a key-value store with an append-only log for a database, and grow the project step by step following the chosen tutorial.

## Example

User: "I want to learn how Git works by writing it in Python."

Look under `Git`, filter for Python, and recommend *Write yourself a Git!* (wyag.thb.lt) as the main guide. Add a second option in another language if useful, and suggest starting with `init`, `hash-object` and `cat-file` before commits and refs.

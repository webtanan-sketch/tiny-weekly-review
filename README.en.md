# Tiny Weekly Review — TinyManager Weekly Review

[🇮🇷 فارسی](README.md) · [🇬🇧 English](README.en.md)

> A short weekly management review: what went well, what got stuck, which decisions were made, and what matters next week.

## Status

**Foundation — 0.1.0**

The executable module is not released yet. This repository currently defines the product and module contract.

## Design principle

A weekly review should not become report-writing. TinyManager should collect most signals from other modules and ask the manager only for information that cannot be inferred.

Future flow:

```text
Tiny AI: “Prepare this week's review”
↓
Collect Deadline / Risk / Delegation / Decisions
↓
Show a concise summary
↓
Ask only 1–3 essential questions
↓
Confirm and save the review
```

## Planned capabilities

- Wins
- Blockers
- Decisions
- Slipped items
- Next-week priorities
- Automatic aggregation from modules
- Markdown / JSON export
- Dashboard widget
- Tiny AI actions

## Planned Tiny AI actions

- `tiny-weekly-review.prepare`
- `tiny-weekly-review.complete`
- `tiny-weekly-review.export`

## Architecture

TypeScript + React, runnable standalone and as a module inside [TinyManager](https://github.com/webtanan-sketch/tinymanager).

## License

MIT

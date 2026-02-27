# Design Rationale — EarlyEdge Feed

## The Brief in One Sentence

A founder is drowning in tools. They need one fast, minimal place to write updates, tag them, and share with cofounders.

---

## UX Decisions

### Write-first layout
The composer lives at the top of the page, above the feed. This mirrors how the tool is actually used — you come to post something, not to browse. Browsing is secondary.

### Fixed category tags
The founder listed four examples: Product, Research, Marketing, Team. Rather than building a custom tag system (which adds UI complexity and cognitive overhead), I locked these four in for v1. Users can scan and filter instantly without thinking. Custom tags are noted as a natural v2 feature.

### No login or authentication
The founder said "easy to share with cofounders." Adding auth would add days of complexity for zero real benefit at MVP stage. Instead, each user sets a display name on first visit, stored in localStorage. The app is shareable by URL — whoever opens it gets a fresh session with their own name.

### localStorage over a backend
For an MVP that needs to be fast to build and zero-friction to deploy, localStorage is the right call. It means no environment variables, no API keys, no database setup. The tradeoff (data is per-device, not shared) is clearly documented so the founder understands what v2 looks like.

### Relative timestamps
"2 hours ago" feels alive. "Feb 27, 2026 at 14:32" feels like a log file. Founders glancing at updates want to know how fresh the information is, not the exact timestamp.

### Color-coded cards by tag
Each card has a left border in the tag's color — green for Product, teal for Research, orange for Marketing, pink for Team. This lets a founder scan the feed visually without reading a single badge. It's a small detail that makes the feed feel like a real tool.

### Mood emoji on each post
Beyond category, mood adds emotional context at a glance. A 🧊 Blocked post reads differently than a 🚀 Launched post even with the same category tag. This was an intentional addition beyond the brief because startup updates are inherently emotional — things are either moving or they're stuck.

### Daily Digest view
The founder's core pain point was information scattered across tools. The Digest gives them a morning briefing — top 3 updates per category in a 2-column grid — without scrolling through everything. It's the same data, just a smarter view.

### Keyboard shortcut (N to compose)
Power users don't want to reach for the mouse. Pressing N from anywhere on the page focuses the composer instantly. This is a tiny feature that makes the app feel like a real product rather than a prototype.

---

## Assumptions Made

- "Share with cofounders" means shareable by URL, not multi-user login
- The four tag examples in the brief (product, market research, marketing, team) are the right starting set
- "Fast and minimal" means no external UI libraries — pure CSS keeps the bundle small and the design fully controlled
- No edit functionality in v1 — updates are append-only, like a founder log. Editing creates ambiguity about what cofounders have already read
- Mobile responsiveness matters because founders check things on their phones

---

## What I Would Build Next

**Immediate v2 (if the founder came back next week):**
- Supabase backend so all cofounders share the same feed in real time
- Pin / star posts to surface critical updates at the top
- Edit post functionality with a "last edited" timestamp

**Medium term:**
- Slack integration — post an update in EarlyEdge, it automatically posts to a Slack channel
- Morning email digest sent automatically at 9am
- User accounts so each cofounder has their own identity across devices

**Longer term:**
- Investor view — a read-only link that shows a curated subset of updates
- AI summary — weekly auto-generated summary of all updates across categories
- Custom tags and tag colors defined by the team
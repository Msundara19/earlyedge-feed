# EarlyEdge Feed

A lightweight internal dashboard for startup founders to post quick updates, track progress across categories, and share context with cofounders — without the overhead of a full project management tool.

Built as a freelance MVP assessment for Tenacity, simulating a real client brief from EarlyEdge, a startup studio that helps first-time founders launch MVPs.

---

## What I Built

A single-page React app where founders can:

- Write updates with a title, description, optional image or link, a category tag, and a mood emoji
- View all past updates in a clean scrollable feed
- Filter and search updates by tag or keyword
- Switch to a Daily Digest view showing the 3 most recent posts per category
- Have URLs and images auto-detected and rendered as previews inside cards
- Use a keyboard shortcut (N) to instantly jump to the composer
- See a personalized author avatar derived from their name on first visit

All data is stored in the browser's localStorage — no backend, no login, no setup friction.

---

## Tech Stack

- React 18 (Vite)
- Plain CSS with custom properties (no Tailwind or component libraries)
- canvas-confetti for the post animation
- uuid for unique post IDs
- localStorage for persistence

---

## Setup Instructions

### Prerequisites

- Node.js 18 or higher
- npm 9 or higher

### Run Locally

1. Clone the repository
```bash
git clone https://github.com/Msundara19/earlyedge-feed.git
cd earlyedge-feed
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

The production build will be in the `dist/` folder, ready for deployment on Vercel, Netlify, or any static host.

---

## Project Structure
```
src/
  components/
    AuthorAvatar.jsx      # Colored circle with author initials
    DailyDigest.jsx       # 2-column digest view, 3 posts per category
    MoodSelector.jsx      # Emoji mood picker for each post
    PostComposer.jsx      # New update form
    UpdateCard.jsx        # Individual post card with media preview
    UpdateFeed.jsx        # Feed with search and tag filter
    WelcomeModal.jsx      # First-visit name prompt
  hooks/
    useAuthor.js          # Author name persistence via localStorage
    usePosts.js           # Post state, localStorage sync, confetti
  utils/
    colorFromName.js      # Derives consistent color and initials from name
    detectMedia.js        # Detects image vs link URLs via regex
  App.jsx                 # Root component, view toggle, keyboard shortcut
  main.jsx                # Entry point
  index.css               # Global styles and design tokens
```

---

## Features

### Core
- Add posts with title, description, optional media URL, category tag, and mood
- Scrollable feed with live search and tag filter pills
- Auto-detect image URLs and render previews; auto-detect links and show domain cards
- Data persists across page refreshes via localStorage

### Bonus
- Daily Digest view — 3 most recent posts per category in a 2-column grid
- Mood emoji tags — 🔥 Hot, 🧊 Blocked, ✅ Done, 🤔 Thinking, 🚀 Launched
- Author avatar — color-coded circle with initials, consistent across sessions
- Confetti burst on every new post
- Keyboard shortcut — press N anywhere to jump to the composer
- Post count badges on filter pills
- Delete button on each card

---

## Design Decisions

- Composer at the top, feed below — write-first flow mirrors how founders actually use tools
- Fixed tags (Product, Research, Marketing, Team) keep the UI fast and scannable
- No auth or login — the founder explicitly wanted something lightweight to share with cofounders via URL
- localStorage over a backend — right tradeoff for an MVP; documented as a v2 upgrade point
- Relative timestamps ("2h ago") keep the feed feeling live and current
- Color-coded left border per tag — instant visual scanning without reading the badge

---

## Known Limitations

- Data is per-browser — each device has its own localStorage. A shared backend (Supabase or Firebase) would be the v2 upgrade
- No multi-user support — author identity is set once per device, not account-based
- No edit functionality — intentional for v1, updates are append-only like a log
- Images hosted externally may break if the source URL changes

---

## What I Would Build Next

- Supabase backend for real shared state across cofounders
- Pin / star important updates to the top of the feed
- Slack or email digest integration — auto-send the Daily Digest every morning
- User-defined custom tags
- Reactions (emoji responses) per post
- Export feed to PDF for investor updates
- Dark mode toggle

---

## Tools Used

- React + Vite — frontend framework and build tool
- canvas-confetti — post celebration animation
- uuid — unique ID generation
- Git + GitHub — version control
- Vercel — deployment

## AI Usage

AI was used for brainstorming feature ideas, planning the component architecture, and debugging specific errors during development. All code was written and reviewed manually. Final implementation, design decisions, and written documentation are original work.

---

## Time Estimate

| Task | Time |
|---|---|
| Planning and brainstorming | 30 min |
| Project setup and CSS | 45 min |
| Hooks and utilities | 30 min |
| Components | 90 min |
| Debugging and polish | 30 min |
| Documentation | 30 min |
| **Total** | **~4.5 hours** |
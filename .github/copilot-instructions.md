# Copilot Instructions for Soc Ops (VS Code Agent Lab)

## Development Checklist
Before making changes:
- [ ] `npm run lint` passes
- [ ] `npm run build` succeeds  
- [ ] `npm run test` passes (if tests exist)
- [ ] Review `.github/instructions/` for design/Tailwind guidance

## Project Overview
Social bingo game for mixers—find people matching squares, get 5 in a row to win. React + Vite + Tailwind v4, designed for rapid agentic iteration.

## Architecture
**Data Flow:** Questions (`src/data/questions.ts`) → 24 shuffled + free center → 5×5 board → `useBingoGame` hook → components

| Key Module | Purpose |
|------------|---------|
| `useBingoGame.ts` | State hook: board generation, win detection, localStorage persistence |
| `bingoLogic.ts` | Pure functions: `generateBoard()`, `toggleSquare()`, `checkBingo()` |
| `GameScreen.tsx` | Main UI: header, board, win indicator |
| `BingoBoard.tsx` → `BingoSquare.tsx` | Grid renderer → individual squares |

**State Pattern:** Centralized hook with immutable updates (`board.map()`), localStorage with validators, game states: `'start' | 'playing' | 'bingo'`

## Developer Workflows
```bash
npm run dev      # Vite dev server (localhost:5173)
npm run build    # GitHub Pages build  
npm run lint     # ESLint flat config
npm run test     # Vitest + jsdom (setup: src/test/setup.ts)
```

**Deploy:** Push to `main` → auto-deploy to GitHub Pages via Actions

## Agent Patterns
- **Custom Agents:** Quiz Master (themed questions), Pixel Jam (design-first), TDD agents (Red/Green/Refactor)
- **Background Agents:** Use for lint rules, deps, docs, type fixes
- **Design:** Reference `.github/instructions/frontend-design.instructions.md` (avoid generic AI aesthetics)
- **Tailwind v4:** Use `.github/instructions/tailwind-4.instructions.md` for latest features

## Key Conventions
- **Components:** Immutable props, callback pattern (`onSquareClick`), typed interfaces
- **Questions:** Edit `src/data/questions.ts` (auto-shuffled, 24 + free space)
- **Win Detection:** `checkBingo()` returns `BingoLine` (`row|column|diagonal` + index + squares)
- **Styling:** Pure Tailwind classes, no inline styles, Tailwind v4 `@theme` variables

## Design Guide: Cozy Coffee Shop Theme

### Visual Identity
The game features a warm, inviting café aesthetic designed to create an intimate atmosphere for social mixers.

**Color Palette** (defined in `src/index.css` as Tailwind @theme):
- **Coffee Bean** `#5C4033` – Deep brown for depth and grounding
- **Cream Foam** `#F5E6D3` – Warm cream for primary backgrounds
- **Wood Grain** `#8B6F47` – Medium brown for texture and structure
- **Espresso Dark** `#3E2723` – Almost-black for typography and contrast
- **Bingo Gold** `#D4AF37` – Warm gold for celebration and wins

**Typography** (Google Fonts):
- **Headers:** Playfair Display (elegant, café-menu aesthetic)
- **Body:** Open Sans (readable, friendly, approachable)

### Component Styling Strategy

**StartScreen.tsx**
- Animated coffee cup hero (☕) with bounce effect
- Warm gradient backgrounds (cream foam → wood grain)
- Coffee X (✕) bullets for personality
- "Welcome to our café" messaging in Playfair Display

**GameScreen.tsx**
- Chalkboard-style header with chalk texture lines (diagonal repeating gradients)
- Coffee cup icon in header
- Warm ambient background creating depth

**BingoBoard.tsx**
- Wood grain texture (double repeating gradients for authentic grain effect)
- Coffee ring stains (positioned radial gradients at corners)
- Napkin-spacing layout (`gap-2`) with rounded corners
- Deep shadows for table presence

**BingoSquare.tsx**
- Cream foam backgrounds for unmarked state
- Napkin texture overlay (45° diagonal repeating gradient at opacity-10)
- Coffee stain markers in corners when marked
- Coffee cup emoji (☕) in free space with dashed border
- Gradient transitions between states

**BingoModal.tsx**
- Backdrop blur effect for depth
- Cream foam gradients in modal body
- Coffee stain background effects
- Animated coffee cup (bounce effect)
- "You've earned a free espresso!" celebratory messaging

### Texture & Atmosphere Techniques
- **Repeating Gradients:** Used at 1-2px intervals for authentic wood/napkin textures without visual noise
- **Radial Gradients:** Positioned at specific corners to simulate coffee ring stains
- **Opacity Control:** Textures kept at 5-20% opacity for subtle atmosphere
- **Color Harmony:** All elements use warm earth tones for cohesion

### Design Principles
1. **Authenticity Over Generic:** Every design choice reinforces café identity, not AI-generated aesthetics
2. **Warmth First:** Cool colors avoided; warm palette creates inviting, intimate space
3. **Texture Depth:** Subtle layering creates dimension without overwhelming users
4. **Typography Hierarchy:** Playfair Display for elegance, Open Sans for accessibility
5. **Emotional Connection:** Design evokes coffee shop comfort—a space for meaningful social connection

### When Extending the Design
- Maintain warm color palette; avoid bright primaries or cool tones
- Use repeating gradients for texture consistency
- Keep animations subtle (bounce effects rather than jarring transitions)
- Prioritize readability—texture effects should never compromise text legibility
- Add coffee/café references contextually (coffee cups, napkins, wooden surfaces)

## Quickstart
`npm install && npm run dev` → pin `.lab/GUIDE.md` → review `.github/agents/` for workflows

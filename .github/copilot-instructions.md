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

## Quickstart
`npm install && npm run dev` → pin `.lab/GUIDE.md` → review `.github/agents/` for workflows

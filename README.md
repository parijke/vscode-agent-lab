# 🎲 Soc Ops

**A social bingo game that breaks the ice at mixers and events**

Find people who match the questions, mark your squares, and get 5 in a row to win! Built as a hands-on learning project for the [VS Code Agent Lab](https://github.com/microsoft/vscode-agent-lab-soc-ops) workshop.

---

## ✨ Features

- 🎯 **Interactive 5×5 Bingo Board** — Dynamic game board with 24 unique questions + free center space
- 💾 **Auto-Save Progress** — Game state persists in browser localStorage
- 🎨 **Modern Design** — Built with React 19 + Tailwind CSS v4 for a polished UI
- 📱 **Responsive Layout** — Works seamlessly on mobile and desktop
- 🚀 **Instant Deploy** — Auto-deploys to GitHub Pages on every commit

## 🎓 Learning Workshop

This project is part of the **VS Code Agent Lab** workshop, designed to teach:
- 🤖 **AI-first development** with GitHub Copilot agents
- 🛠️ **Context engineering** for codebases
- ⚡ **Agentic workflows** for rapid iteration
- 🎨 **Design-first frontend** development

👉 **[Follow the Lab Guide](.lab/GUIDE.md)** for the complete workshop experience!

## 🚀 Quick Start

### Prerequisites

- [Node.js 22+](https://nodejs.org/)

### Run Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to play the game!

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory. The project auto-deploys to GitHub Pages when you push to `main`.

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | Modern UI framework with latest features |
| **Vite** | Lightning-fast build tool and dev server |
| **Tailwind CSS v4** | Utility-first styling with CSS-first config |
| **TypeScript** | Type-safe development |
| **Vitest** | Fast unit testing framework |

## 🎮 How to Play

1. **Start the game** — Each player gets a unique 5×5 bingo board
2. **Meet people** — Find someone who matches each square's question
3. **Mark squares** — Tap squares to mark them when you find a match
4. **Get 5 in a row** — Complete a row, column, or diagonal to win!

## 🧩 Project Structure

```
src/
├── components/        # React components
│   ├── GameScreen.tsx
│   ├── StartScreen.tsx
│   ├── BingoBoard.tsx
│   ├── BingoSquare.tsx
│   └── BingoModal.tsx
├── hooks/            # Custom React hooks
│   └── useBingoGame.ts
├── utils/            # Game logic utilities
│   └── bingoLogic.ts
├── data/             # Questions data
│   └── questions.ts
└── types/            # TypeScript type definitions
    └── index.ts
```

## 🤝 Contributing

This is a learning project! Feel free to:
- 🎨 Redesign the UI with different themes
- ❓ Add new question sets for different audiences
- 🎯 Implement new game modes (scavenger hunt, card deck, etc.)
- 🐛 Fix bugs or improve code quality

See [CONTRIBUTING.md](CONTRIBUTING.md) for more details.

## 📝 License

MIT © Harald Kirschner

---

**Built with ❤️ using GitHub Copilot agents**

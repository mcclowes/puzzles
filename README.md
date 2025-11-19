<<<<<<< Updated upstream
# puzzles
=======
# mcclowes-puzzles
>>>>>>> Stashed changes

A modern landing page for a collection of daily word puzzle games. Built with Next.js, TypeScript, and Tailwind CSS.

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/mcclowes/puzzles)

## Overview

This is a landing page showcasing seven unique puzzle games:
- **Prefix** - Find words that share a common prefix (Medium difficulty)
- **Lynx Mini** - Connect words through clever associations (Easy difficulty)
- **Lynx** - The ultimate word connection challenge (Hard difficulty)
- **Minute Cryptic** - Solve today's cryptic crossword clue (Hard difficulty)
- **Landmarks** - Identify famous landmarks from around the world (Medium difficulty)
- **Ditloids** - Decode number-letter puzzles (Medium difficulty)
- **Fictionary** - Spot the real words and match them to definitions (Easy difficulty)

Each game is updated daily, providing fresh challenges for puzzle enthusiasts.

## Features

- 🎮 Interactive game cards with difficulty indicators
- 🌓 Dark mode support via theme provider
- 📱 Fully responsive design
- ⚡ Built with Next.js 16 for optimal performance
- 🎨 Modern UI using Radix UI components and Tailwind CSS
- ♿ Accessible components following best practices

## Tech Stack

- **Framework**: Next.js 16.0.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.1.9
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Theme**: next-themes
- **Form Handling**: React Hook Form + Zod
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd puzzles
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production application
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## Project Structure

```
puzzles/
├── app/                 # Next.js app directory
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/          # React components
│   ├── footer.tsx      # Footer component
│   ├── game-card.tsx   # Game card component
│   ├── game-grid.tsx   # Game grid layout
│   ├── header.tsx      # Header navigation
│   ├── hero.tsx        # Hero section
│   └── theme-provider.tsx # Theme context provider
├── lib/                # Utility functions
│   └── utils.ts        # Helper utilities
└── public/             # Static assets
```

## Components

- **Header** - Navigation bar with links to games, about, and contact
- **Hero** - Main landing section with title and description
- **GameGrid** - Displays all available puzzle games
- **GameCard** - Individual game card with title, description, difficulty, and link
- **Footer** - Site footer
- **ThemeProvider** - Handles dark/light mode theming

## Development

This project uses:
- TypeScript for type safety
- Tailwind CSS for styling
- Radix UI for accessible component primitives
- ESLint and Prettier for code quality

## Deployment

The project is automatically deployed on Vercel. Any pushes to the main branch will trigger a new deployment.

## License

Private project - All rights reserved.

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the production application
- `npm start` - Start production server
- `npm run lint` - Run ESLint for code quality checks
- `npm run format` - Format code with Prettier

## Project Architecture

This is a Next.js 15 application using the App Router architecture with TypeScript. The project structure follows Next.js conventions:

- `src/app/` - App Router pages and layouts using Next.js 15 App Directory
- `public/` - Static assets served from root
- TypeScript path alias `@/*` maps to `./src/*`

## Key Configuration

- **Next.js 15** with React 19 and Turbopack for fast development
- **TypeScript** with strict mode enabled
- **ESLint** with Next.js rules and custom React component patterns:
    - Enforces arrow functions for components
    - Self-closing components required
    - Object shorthand syntax required
- **Prettier** with organize imports and Tailwind plugins configured

## Code Style Requirements

Follow the ESLint configuration which enforces:

- Arrow function components (not function declarations)
- React fragments over div wrappers
- Self-closing components
- Object shorthand syntax
- Unused vars prefixed with underscore

## Git Commit Convention

Use Angular-style prefixes for all commits:

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Formatting changes
- `refactor:` - Code restructuring
- `perf:` - Performance improvements
- `test:` - Test additions/modifications
- `chore:` - Build/tooling changes

Keep commit messages under 50 characters including prefix, use imperative mood, and write in English.

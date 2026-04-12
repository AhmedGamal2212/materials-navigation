# AGENTS.md - Materials Navigation Project

## Project Overview

This is a React + Vite dashboard application for managing study materials. It fetches data from Google Sheets and displays categorized links.

## Build/Lint/Test Commands

```bash
# Development
npm run dev              # Start Vite dev server at http://localhost:5173

# Production
npm run build            # Build for production (outputs to dist/)
npm run preview          # Preview production build locally

# Linting
npm run lint             # Run ESLint with react-app config

# Deployment
npm run deploy           # Build and deploy to GitHub Pages
```

**Note:** This project does NOT have a test framework installed. Do not add test files or attempt to run tests.

## Code Style Guidelines

### General
- **Language:** JavaScript with JSX (no TypeScript)
- **Indentation:** 4 spaces (enforced by ESLint)
- **Line endings:** LF
- **Quoting:** Single quotes for strings in JS; double quotes for HTML attributes

### File Naming & Structure
```
src/
├── components/
│   ├── Button/           # Single component per folder (PascalCase)
│   │   ├── Button.jsx
│   │   └── Button.module.css
│   ├── Buttons/          # Collection component
│   │   ├── Buttons.jsx
│   │   └── Buttons.module.css
│   └── Navbar/
├── App.jsx
├── App.module.css        # CSS Module for component
├── main.jsx
├── data.js               # Constants and configuration
├── data.json             # Generated sheet data
└── index.css             # Global styles
```

### Component Patterns

**React Components:**
- Use `.jsx` extension
- Default export only (no named exports for components)
- Functional components with hooks
- Props destructured in function signature

```jsx
// Correct
const Button = ({ text, gid }) => {
    return <a href={gid}>{text}</a>;
};
export default Button;

// Incorrect - named export
export const Button = ({ text, gid }) => { ... };
```

**CSS Modules:**
- Co-locate `.module.css` files with components
- Use camelCase class names in CSS Module files
- Reference as `styles.className`

```jsx
import styles from './Button.module.css';
const Button = () => <button className={styles.primaryButton}>Click</button>;
```

### Naming Conventions
| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `Navbar.jsx`, `Categories.jsx` |
| Files (non-component) | camelCase | `data.js`, `update-sheets.cjs` |
| CSS Classes | camelCase (modules) | `gridContainer`, `navbarBrand` |
| Constants | SCREAMING_SNAKE_CASE | `BASE_URL`, `PRIORITY_LIST` |
| Variables/Functions | camelCase | `handleTheme`, `sortedCategories` |
| React Props | camelCase | `isDark`, `onThemeToggle` |

### Imports
- Order: React imports → external libs → internal components → internal utils/styles
- Include file extensions for clarity: `import Navbar from './Navbar/Navbar.jsx'`
- Named imports for constants: `import { BASE_URL } from '../../data.js'`

```jsx
import React from 'react';
import Button from '../Button/Button.jsx';
import { BASE_URL } from '../../data.js';
import styles from './Categories.module.css';
```

### JSX Formatting
- Self-close tags with space: `<Input />` not `<Input/>`
- Multi-line attributes on separate lines
- Always include `key` in mapped elements
- Use ternary for conditional classNames

```jsx
// Multi-line conditional className
<h2 className={`${styles.categoryHeader} 
    ${!isDark ? styles.categoryHeaderLight : styles.categoryHeaderDark}`}>
    Title
</h2>
```

### Error Handling
- No try/catch patterns currently in codebase
- Handle missing data with conditional rendering
- Use logical AND/OR for optional rendering

```jsx
{sheets.length === 0 && <p>No sheets found</p>}
{sheets.length > 0 && sheets.map(...)}
```

### React Patterns
- `useState` for local state (no Redux/Zustand)
- Event handlers named `handle*` (e.g., `handleTheme`, `handleMouseOver`)
- Toggle functions that invert boolean state

```jsx
const handleTheme = () => {
    setIsDark(!isDark);
};
```

## ESLint Configuration

The project uses `eslint-config-react-app` (extends `react-app`). Key rules:
- 4-space indentation
- No unused variables
- React Hooks rules enabled (`eslint-plugin-react-hooks`)
- `react-refresh` plugin for Vite HMR

## Git Workflow

```bash
# Before committing, always run:
npm run lint    # Must pass with no warnings

# Deploy creates a production build automatically via:
npm run deploy  # Runs build first, then gh-pages
```

## Common Tasks

**Adding a new category:**
1. Add entry to `PRIORITY_LIST` in `src/data.js` with priority number
2. Lower numbers = higher priority (appear first)
3. Update Google Sheet tabs to match category names

**Styling a component:**
1. Create/edit `ComponentName.module.css` in same folder
2. Import and use as `styles.className`
3. Avoid global CSS; prefer CSS Modules

# Forge

> Build open, reusable components for modern apps.

Forge is a free and open component system for **React** and **React Native**, built with **TypeScript**, **Tailwind CSS**, and **Next.js**. Instead of focusing only on isolated UI pieces, Forge is designed around composable component patterns that help developers build scalable applications faster across web, and later, mobile.

## Features

- React-first architecture
- TypeScript support
- Tailwind CSS styling
- Reusable component blocks
- Modular and extensible structure
- Open-source friendly
- Responsive by default
- Theme customization support
- Built for scalable app development
- Storybook-driven component development

---

## Project Structure

```text
.
└── forge/
    └── src/
        ├── app/
        │   ├── docs/            # Introduction, concepts, roadmap, and best practices
        │   ├── components/      # Component docs, examples, and API references
        │   ├── installation/    # Installation, setup, Tailwind config, and usage guides
        │   └── theming/         # Theme customization, design tokens, and brand styles
        └── components/          # Shared component library source
```

---

## Why Storybook

Storybook is one of the best tools for a component library like Forge because it lets you build and test components in isolation.

It helps you:

- develop components without running the full app
- view component states like default, loading, disabled, and error
- document usage for contributors and users
- catch visual bugs earlier
- keep design and implementation aligned

For Forge, Storybook makes sense because the project is focused on reusable UI and component blocks.

---

## Testing Recommendation

Forge should have a lightweight but useful testing setup.

### Recommended tools

- `Storybook` for visual development and documentation
- `React Testing Library` for component behavior tests
- `Vitest` for a fast test runner
- `Playwright` for end-to-end testing when the app grows

### Suggested approach

- Use `Storybook` to preview and document every major component
- Use `React Testing Library` for interaction and behavior checks
- Use `Vitest` for unit tests and fast feedback
- Add `Playwright` later for full user-flow testing

### Why not overbuild early

This stack is a good balance for an open-source component project.

- It is strong enough for production-quality components
- It is not too heavy for early development
- It scales well as Forge grows

---

## Documentation

The documentation is organized into four main sections:

### Docs

General project documentation including:

- Introduction
- Getting Started
- Core Concepts
- Best Practices
- Roadmap

### Components

Interactive documentation for all available blocks and components:

- Buttons
- Inputs
- Cards
- Forms
- Modals
- Navigation
- Layouts
- Data Display
- Application Blocks

### Installation

Setup and integration guides:

- Next.js Setup
- TypeScript Configuration
- Tailwind Configuration
- Storybook Setup
- Testing Setup
- Environment Setup
- Component Usage

### Theming

Customize the look and feel of your application:

- Color Palettes
- Typography
- Design Tokens
- Dark Mode
- Brand Customization

---

## Philosophy

Forge follows a **component-block architecture**.

Instead of building applications from tiny isolated pieces, developers compose larger reusable blocks:

```text
Button
Input
Card
        ↓

Form Block
Table Block
Filter Block
Auth Block
        ↓

Dashboard
Admin Panel
Inventory System
CMS
Internal Tools
```

Build once. Reuse everywhere.

---

## Tech Stack

- React
- React Native
- TypeScript
- Tailwind CSS
- Next.js
- Storybook
- React Testing Library
- Vitest
- Playwright
- MDX

---

## License

MIT License

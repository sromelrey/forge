# Forge Agent Standards

This file defines the shared rules for every AI agent working in the Forge repository.

## Core Goals

- Keep Forge focused on reusable components for React and React Native.
- Favor simple, maintainable solutions over overengineering.
- Keep documentation, testing, and UI work aligned.
- Treat this repo as an open-source component system, not a one-off app.

## General Rules

- Follow Conventional Commits for commit messages.
- Use clear branch names that match the task type, such as `feat/`, `docs/`, `fix/`, `chore/`, or `refactor/`.
- Keep changes scoped to the assigned task.
- Do not rewrite unrelated files.
- Prefer small, readable changes with a clear purpose.
- Keep component APIs simple and reusable.
- Update docs and tests when behavior changes.
- Maintain readable contrast and a clear visual hierarchy in UI work.
- Avoid washed-out text, over-dark hero cards, or competing focal points.

## Tech Stack Rules

- Use `Next.js` for the web app.
- Use `TypeScript` for type safety.
- Use `Tailwind CSS` for styling.
- Use `Storybook` for component development and documentation.
- Use `React Testing Library` for behavior tests.
- Use `Vitest` for unit and component tests.
- Use `Playwright` for end-to-end testing when needed.

## Documentation Rules

- Keep `README.md` high-level and user-facing.
- Use `AGENTS.md` for AI and workflow standards.
- Use the `agents/` folder for role-specific instructions.
- Add or update Storybook stories when a component is introduced or changed.
- Document component usage clearly and consistently.

## Testing Rules

- New components should have test coverage when practical.
- Prefer behavior-focused tests over implementation details.
- Keep tests fast and readable.
- Add end-to-end tests only for important user flows.

## Review Rules

- The review agent should check for consistency, clarity, and maintainability.
- Do not approve work that breaks naming, styling, or structure standards.
- If a feature touches multiple areas, make sure docs and tests are updated too.

## Handoff Rules

- After review, a final communication agent should prepare the Conventional Commit message and the GitHub PR description.
- PR descriptions should explain the change clearly, include context, and be easy for contributors to understand.

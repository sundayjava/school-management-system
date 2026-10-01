# School Result Portal — Base Template

An enterprise-ready Next.js foundation for a secondary school portal where
students (and parents/guardians) can check exam results, view announcements,
and reach the school office. This repo is designed to be **cloned per
school**: swap the brand config and colors, drop in the school's imagery,
and continue building from a consistent, production-grade base.

## Stack

- [Next.js 16](https://nextjs.org) — App Router, React 19
- TypeScript (strict mode)
- Tailwind CSS v4 (CSS-first theme, no `tailwind.config.js` needed)
- ESLint (`eslint-config-next`) + Prettier (`prettier-plugin-tailwindcss`)
- Husky + lint-staged pre-commit hooks
- Commitlint (Conventional Commits) on `commit-msg`
- `class-variance-authority`, `clsx`, `tailwind-merge` for variant-driven,
  composable components
- `lucide-react` for icons

## Getting started

```bash
nvm use            # Node version pinned in .nvmrc
npm install
cp .env.example .env.local
npm run dev
```

Visit http://localhost:3000.

## Project structure

```
src/
  app/                  # Routes (App Router)
    results/            # Student result check form
    faqs/ privacy/ terms/
  components/
    ui/                 # Low-level, reusable primitives (Button, Input, Accordion, ...)
    layout/             # App chrome (Navbar, Footer)
    sections/           # Page-level composed sections (Hero, About, Announcements)
  config/
    site.ts             # Single source of truth for school name, nav, copy, contact info
  lib/
    utils.ts            # cn() class-merging helper
public/
  images/                # School photography and logos go here
```

## Cloning for a new school

1. **Duplicate the repo** for the new school (new git remote, keep history if
   useful or start fresh with `git init`).
2. **Rebrand** — edit `src/config/site.ts` (name, tagline, nav links, contact
   info) and the brand color tokens in `src/app/globals.css`
   (`--color-brand-*`). Every component reads from these two places, so most
   of the visual identity change happens there.
3. **Wire the result check** — `src/app/results/page.tsx` is currently a
   presentational form only (marked with a `TODO`). Connect it to the
   school's student records system (an API route, or an external Student
   Information System integration).
4. **Add imagery** — drop the school's photos/logo into `public/images/`.
5. **Build out remaining features** (student portal login, class/subject
   breakdowns, result PDF export, admin dashboard for staff, etc.) using the
   existing `ui/` primitives so new pages stay visually and structurally
   consistent.

## Conventions

- All shared, low-level UI lives in `src/components/ui` and is built with
  `class-variance-authority` for variants (see `button.tsx`) — extend rather
  than one-off styling inline.
- Class name merging always goes through `cn()` (`src/lib/utils.ts`) to
  avoid Tailwind class conflicts.
- Commits follow [Conventional Commits](https://www.conventionalcommits.org/)
  (`feat:`, `fix:`, `chore:`, etc.) — enforced by commitlint.
- Pre-commit runs ESLint + Prettier on staged files automatically via
  lint-staged; nothing extra to run manually before committing.

## Scripts

| Script                 | Purpose                          |
| ---------------------- | -------------------------------- |
| `npm run dev`          | Start the dev server             |
| `npm run build`        | Production build                 |
| `npm run start`        | Serve the production build       |
| `npm run lint`         | Lint                             |
| `npm run lint:fix`     | Lint and auto-fix                |
| `npm run format`       | Format with Prettier             |
| `npm run format:check` | Check formatting without writing |
| `npm run typecheck`    | TypeScript check with no emit    |

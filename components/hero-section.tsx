const highlights = [
  "Open-source friendly",
  "React + React Native ready",
  "TypeScript + Tailwind",
];

export function HeroSection() {
  return (
    <section className="grid w-full gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
      <div className="flex flex-col justify-center">
        <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-[color:var(--accent)]" />
          Forge component system
        </div>

        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-[color:var(--foreground)] sm:text-5xl lg:text-6xl">
          Build open, reusable components for modern React apps.
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600 sm:text-xl">
          Forge is a clean, open-source friendly component system for teams who
          want to move fast without sacrificing consistency. It starts with
          React and TypeScript today, and is designed to grow with React Native
          tomorrow.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="#get-started"
            className="inline-flex h-12 items-center justify-center rounded-full bg-[color:var(--foreground)] px-6 text-sm font-semibold text-[color:var(--background)] transition-transform duration-200 hover:-translate-y-0.5 hover:opacity-95"
          >
            Get started
          </a>
          <a
            href="#learn-more"
            className="inline-flex h-12 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface-strong)] px-6 text-sm font-semibold text-[color:var(--foreground)] transition-colors duration-200 hover:bg-zinc-50/70"
          >
            Learn more
          </a>
        </div>

        <ul className="mt-8 flex flex-wrap gap-3">
          {highlights.map((item) => (
            <li
              key={item}
              className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-2 text-sm text-zinc-700 shadow-sm"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center">
        <div className="w-full rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
          <div className="flex items-center justify-between border-b border-[color:var(--border)] pb-4">
            <div>
              <p className="text-sm font-medium text-zinc-500">Forge preview</p>
              <p className="mt-1 text-lg font-semibold text-[color:var(--foreground)]">
                Hero section
              </p>
            </div>
            <div className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
              Ready
            </div>
          </div>

          <div className="grid gap-4 py-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-[color:var(--foreground)] p-5 text-[color:var(--background)]">
              <p className="text-sm text-zinc-400">Primary focus</p>
              <p className="mt-2 text-2xl font-semibold">Components</p>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                Reusable UI patterns built to scale across web and mobile.
              </p>
            </div>
            <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-strong)] p-5">
              <p className="text-sm text-zinc-500">Stack</p>
              <p className="mt-2 text-2xl font-semibold text-[color:var(--foreground)]">
                Next.js
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                TypeScript, Tailwind, Storybook, and testing as the project
                grows.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-dashed border-[color:var(--border)] bg-[color:var(--surface-strong)]/80 p-5">
            <p className="text-sm font-medium text-zinc-500">Example CTA</p>
            <div className="mt-3 flex flex-col gap-3 sm:flex-row">
              <button className="inline-flex h-11 items-center justify-center rounded-full bg-[color:var(--accent)] px-5 text-sm font-semibold text-[color:var(--accent-foreground)]">
                Start building
              </button>
              <button className="inline-flex h-11 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface-strong)] px-5 text-sm font-semibold text-[color:var(--foreground)]">
                View docs
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

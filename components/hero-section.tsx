const highlights = [
  "Open-source friendly",
  "React + React Native ready",
  "TypeScript + Tailwind",
];

const stats = [
  { label: "Focus", value: "Components" },
  { label: "Target", value: "React + RN" },
  { label: "Stack", value: "Next.js" },
];

export function HeroSection() {
  return (
    <section className="grid w-full gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
      <div className="flex flex-col justify-center lg:pr-2">
        <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[color:var(--border)] bg-white/70 px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-[color:var(--accent)]" />
          Forge component system
        </div>

        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl lg:leading-[1]">
          Build open, reusable components for modern React apps.
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-700 sm:text-xl">
          Forge is a clean, open-source friendly component system for teams who
          want to move fast without sacrificing consistency. It starts with
          React and TypeScript today, and is designed to grow with React Native
          tomorrow.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="#get-started"
            className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-950 px-6 text-sm font-semibold text-white transition-colors duration-200 hover:bg-zinc-800"
          >
            Get started
          </a>
          <a
            href="#learn-more"
            className="inline-flex h-12 items-center justify-center rounded-full border border-[color:var(--border)] bg-white px-6 text-sm font-semibold text-zinc-900 transition-colors duration-200 hover:border-zinc-300 hover:bg-zinc-50"
          >
            Learn more
          </a>
        </div>

        <ul className="mt-8 flex flex-wrap gap-3">
          {highlights.map((item) => (
            <li
              key={item}
              className="rounded-full border border-[color:var(--border)] bg-white px-4 py-2 text-sm text-zinc-700 shadow-sm"
            >
              {item}
            </li>
          ))}
        </ul>

        <dl className="mt-10 grid max-w-xl gap-3 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-[color:var(--border)] bg-white p-4 shadow-sm"
            >
              <dt className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-500">
                {stat.label}
              </dt>
              <dd className="mt-2 text-sm font-semibold text-zinc-950">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="flex items-center">
        <div className="w-full rounded-[24px] border border-[color:var(--border)] bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
          <div className="flex items-center justify-between border-b border-[color:var(--border)] pb-4">
            <div>
              <p className="text-sm font-medium text-zinc-500">Forge preview</p>
              <p className="mt-1 text-lg font-semibold text-zinc-950">
                Hero section
              </p>
            </div>
            <div className="rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700">
              Ready
            </div>
          </div>

          <div className="grid gap-4 py-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 bg-zinc-950 p-5 text-white">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">
                Primary
              </p>
              <p className="mt-3 text-2xl font-semibold">Components</p>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                Reusable building blocks that scale across apps without extra
                surface area.
              </p>
            </div>
            <div className="rounded-2xl border border-[color:var(--border)] bg-zinc-50 p-5">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
                Stack
              </p>
              <p className="mt-3 text-2xl font-semibold text-zinc-950">
                Next.js
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-700">
                TypeScript, Tailwind, Storybook, and testing form the base tool
                chain.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-dashed border-[color:var(--border)] bg-zinc-50 p-5">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
              Example CTA
            </p>
            <div className="mt-3 flex flex-col gap-3 sm:flex-row">
              <button className="inline-flex h-11 items-center justify-center rounded-full bg-[color:var(--accent)] px-5 text-sm font-semibold text-[color:var(--accent-foreground)]">
                Start building
              </button>
              <button className="inline-flex h-11 items-center justify-center rounded-full border border-[color:var(--border)] bg-white px-5 text-sm font-semibold text-zinc-950">
                View docs
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

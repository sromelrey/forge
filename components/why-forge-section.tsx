const reasons = [
  {
    title: "Reusable building blocks",
    description:
      "Design components once and use them across products without repeating layout logic.",
  },
  {
    title: "Open-source friendly",
    description:
      "Keep the system easy to understand, easy to contribute to, and simple to extend.",
  },
  {
    title: "React and React Native ready",
    description:
      "Start with the web today and keep the architecture flexible for mobile later.",
  },
];

export function WhyForgeSection() {
  return (
    <section
      id='why-forge'
      aria-labelledby='why-forge-heading'
      className='w-full border-t border-border bg-linear-to-b from-white/80 to-[#f5f1e8]'
    >
      <div className='mx-auto grid w-full max-w-6xl gap-8 px-6 py-20 sm:px-10 lg:px-12'>
        <div className='max-w-2xl'>
          <p className='font-mono text-xs uppercase tracking-[0.28em] text-zinc-500'>
            Why Forge
          </p>
          <h2
            id='why-forge-heading'
            className='mt-4 max-w-xl text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl'
          >
            A component system built for speed, reuse, and clarity.
          </h2>
          <p className='mt-4 max-w-xl text-base leading-7 text-zinc-700 sm:text-lg'>
            Forge is intentionally focused on the essentials: reusable
            components, consistent patterns, and a clear path for contributors
            to build and maintain the system over time.
          </p>
        </div>

        <div className='grid gap-4 md:grid-cols-3'>
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className='rounded-3xl border border-border bg-white/90 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)]'
            >
              <p className='font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-500'>
                {reason.title}
              </p>
              <p className='mt-4 text-sm leading-6 text-zinc-700'>
                {reason.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

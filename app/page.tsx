import { HeroSection } from "../components/hero-section";
import { WhyForgeSection } from "../components/why-forge-section";

export default function Home() {
  return (
    <main className='relative min-h-screen overflow-hidden bg-[#f8f6f1] text-zinc-950'>
      <div className='absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(234,88,12,0.12),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.08),transparent_28%)]' />
      <div className='mx-auto flex min-h-screen w-full max-w-6xl items-center px-6 py-20 sm:px-10 lg:px-12'>
        <div className="w-full">
          <HeroSection />
        </div>
      </div>
      <WhyForgeSection />
    </main>
  );
}

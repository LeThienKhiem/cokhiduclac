import Image from "next/image";

import FadeIn from "@/app/components/FadeIn";
import { siteData } from "@/constants/data";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={siteData.hero.backgroundImage}
          alt="Công trình cơ khí tại Kiên Giang"
          fill
          priority
          unoptimized
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0b1b3a]/80" />
      </div>
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-20 text-white sm:px-6 lg:py-28">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#ffb560]">
            Cơ khí &amp; kết cấu thép
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="max-w-3xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            {siteData.hero.title}
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
            {siteData.hero.subtitle}
          </p>
        </FadeIn>
        <FadeIn delay={0.3} className="flex flex-wrap gap-4">
          <a
            href="#portfolio"
            className="rounded-full bg-[#ff7a00] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:opacity-90"
          >
            {siteData.hero.primaryCta}
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            {siteData.hero.secondaryCta}
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

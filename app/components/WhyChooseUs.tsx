"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { Factory, ShieldCheck, Users } from "lucide-react";
import { useInView } from "framer-motion";

import FadeIn from "@/app/components/FadeIn";
import { siteData } from "@/constants/data";

type StatItem = {
  label: string;
  value: string;
};

type StatCardProps = {
  stat: StatItem;
  delay: number;
  icon: typeof ShieldCheck;
};

function StatCard({ stat, delay, icon: Icon }: StatCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.4 });
  const [displayValue, setDisplayValue] = useState(0);

  const { numberValue, suffix } = useMemo(() => {
    const match = stat.value.match(/\d+/);
    const numeric = match ? Number(match[0]) : 0;
    const remaining = match ? stat.value.replace(match[0], "") : "";
    return { numberValue: numeric, suffix: remaining };
  }, [stat.value]);

  useEffect(() => {
    if (!isInView) {
      return;
    }
    let animationFrame = 0;
    const duration = 1200;
    const startTime = performance.now();

    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const current = Math.round(progress * numberValue);
      setDisplayValue(current);
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, numberValue]);

  return (
    <FadeIn delay={delay}>
      <div
        ref={cardRef}
        className="rounded-2xl border border-slate-700/70 bg-white/5 p-6 text-center backdrop-blur"
      >
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 text-orange-500">
          <Icon className="h-5 w-5" />
        </div>
        <p className="mt-4 text-3xl font-bold text-orange-500 sm:text-4xl lg:text-5xl">
          {displayValue}
          {suffix}
        </p>
        <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
          {stat.label}
        </p>
      </div>
    </FadeIn>
  );
}

export default function WhyChooseUs() {
  return (
    <section
      id="trust"
      className="relative overflow-hidden bg-slate-900 py-16 sm:py-20"
    >
      <div className="absolute inset-0">
        <Image
          src={siteData.whyChooseUs.backgroundImage}
          alt="Xưởng cơ khí và kết cấu thép"
          fill
          unoptimized
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1b3a]/95 via-[#0b1b3a]/90 to-[#0b1b3a]/95" />
      </div>
      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <FadeIn>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
                {siteData.whyChooseUs.title}
              </p>
              <h2 className="mt-3 text-2xl font-bold uppercase text-white sm:text-3xl lg:text-4xl">
                Cam kết chất lượng &amp; an toàn cho từng công trình
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                {siteData.whyChooseUs.description}
              </p>
            </div>
          </FadeIn>
          <div className="grid gap-4 sm:grid-cols-3">
            {siteData.whyChooseUs.stats.map((stat, index) => {
              const icons = [ShieldCheck, Factory, Users];
              const Icon = icons[index % icons.length];
              return (
                <StatCard
                  key={stat.label}
                  stat={stat}
                  delay={index * 0.08}
                  icon={Icon}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

import { Cog, Factory, Ruler, Wrench } from "lucide-react";

import FadeIn from "@/app/components/FadeIn";
import { siteData } from "@/constants/data";

const iconMap = {
  Factory,
  Wrench,
  Cog,
  Ruler,
};

export default function ServicesSection() {
  return (
    <section id="services" className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            {siteData.services.title}
          </h2>
        </FadeIn>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {siteData.services.items.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <FadeIn key={service.title} delay={index * 0.05}>
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0b1b3a] text-white">
                    {Icon ? <Icon className="h-6 w-6" /> : null}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {service.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

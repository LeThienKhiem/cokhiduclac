"use client";

import Image from "next/image";

import FadeIn from "@/app/components/FadeIn";
import { siteData } from "@/constants/data";
import { projectCategories } from "@/constants/projects";

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-slate-900 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            {siteData.portfolio.title}
          </h2>
        </FadeIn>
        <div className="mt-10">
          {projectCategories.map((group, groupIndex) => (
            <div key={group.id} className="mb-12 last:mb-0 sm:mb-16">
              <FadeIn delay={groupIndex * 0.05}>
                <h3 className="text-xl font-semibold text-slate-200 sm:text-2xl">
                  {group.category}
                </h3>
              </FadeIn>
              <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
                {group.images.map((image, imageIndex) => (
                  <FadeIn key={`${group.id}-${imageIndex}`} delay={0.05}>
                    <div className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-800/40 shadow-sm">
                      <div className="relative aspect-[4/3] w-full bg-slate-800">
                        <Image
                          src={image}
                          alt={`${group.category} ${imageIndex + 1}`}
                          fill
                          sizes="(max-width: 768px) 50vw, 33vw"
                          className="object-cover transition duration-500 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

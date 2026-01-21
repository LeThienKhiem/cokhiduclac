"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import FadeIn from "@/app/components/FadeIn";
import { siteData } from "@/constants/data";
import { projectCategories } from "@/constants/projects";

export default function PortfolioSection() {
  const [activeCategoryId, setActiveCategoryId] = useState<number | null>(null);
  const activeCategory = projectCategories.find(
    (category) => category.id === activeCategoryId
  );

  return (
    <section id="portfolio" className="bg-slate-900 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            {siteData.portfolio.title}
          </h2>
        </FadeIn>
        <div className="mt-12 grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
          {projectCategories.map((group, groupIndex) => (
            <FadeIn key={group.id} delay={groupIndex * 0.05}>
              <button
                type="button"
                onClick={() => setActiveCategoryId(group.id)}
                className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60 text-left shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={group.images[0]}
                    alt={`Ảnh dự án ${group.category}`}
                    fill
                    unoptimized
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                </div>
                <div className="flex items-center justify-between p-5">
                  <h3 className="text-lg font-semibold text-white sm:text-xl">
                    {group.category}
                  </h3>
                  <ArrowRight className="h-5 w-5 text-orange-400 transition group-hover:translate-x-1" />
                </div>
              </button>
            </FadeIn>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {activeCategory ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/80 px-4 py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-full max-w-5xl rounded-2xl bg-slate-950 p-6 text-white shadow-2xl sm:p-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
                    Dự án nổi bật
                  </p>
                  <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                    {activeCategory.category}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveCategoryId(null)}
                  className="rounded-full border border-white/20 p-2 transition hover:bg-white/10"
                  aria-label="Đóng"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                {activeCategory.description}
              </p>
              <div className="mt-6 columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3">
                {activeCategory.images.map((image, index) => (
                  <div
                    key={`${activeCategory.id}-${index}`}
                    className="break-inside-avoid overflow-hidden rounded-lg border border-slate-800 bg-slate-900/60"
                  >
                    <Image
                      src={image}
                      alt={`${activeCategory.category} ${index + 1}`}
                      width={900}
                      height={650}
                      unoptimized
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="h-auto w-full rounded-lg object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="mt-8 text-xs uppercase tracking-[0.3em] text-slate-400">
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}

import { PhoneCall } from "lucide-react";

import { siteData } from "@/constants/data";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-lg font-semibold text-slate-900">
            <span className="rounded bg-[#0b1b3a] px-2 py-1 text-sm font-bold text-white">
              Đức Lạc
            </span>
            <span className="hidden text-sm text-slate-500 sm:inline">
              Cơ khí Kiên Giang
            </span>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
            {siteData.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-[#0b1b3a]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={`tel:${siteData.ctaPhone}`}
            className="inline-flex items-center gap-2 rounded-full bg-[#ff7a00] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
          >
            <PhoneCall className="h-4 w-4" />
            Gọi Ngay: {siteData.ctaPhone}
          </a>
        </div>
        <nav className="mt-3 flex flex-wrap items-center gap-4 text-sm font-medium text-slate-700 md:hidden">
          {siteData.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-[#0b1b3a]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

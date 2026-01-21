import { Facebook, MessageCircle } from "lucide-react";

import { siteData } from "@/constants/data";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0b1b3a] text-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <h3 className="text-xl font-semibold">{siteData.footer.companyName}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-200">
              {siteData.footer.address}
            </p>
            <p className="mt-2 text-sm text-slate-200">
              Hotline:{" "}
              <a
                href={`tel:${siteData.footer.phone}`}
                className="font-semibold text-white"
              >
                {siteData.footer.phone}
              </a>
            </p>
            <p className="mt-2 text-sm text-slate-200">
              Email:{" "}
              <a
                href={`mailto:${siteData.footer.email}`}
                className="font-semibold text-white"
              >
                {siteData.footer.email}
              </a>
            </p>
            <div className="mt-6 flex items-center gap-3 text-sm font-semibold">
              <a
                href={siteData.footer.socialLinks[0].href}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 transition hover:bg-white/20"
              >
                <MessageCircle className="h-4 w-4" />
                {siteData.footer.socialLinks[0].label}
              </a>
              <a
                href={siteData.footer.socialLinks[1].href}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 transition hover:bg-white/20"
              >
                <Facebook className="h-4 w-4" />
                {siteData.footer.socialLinks[1].label}
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <iframe
              title="Bản đồ Cơ khí Đức Lạc"
              src={siteData.footer.mapSrc}
              className="h-72 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <p className="mt-10 text-xs text-slate-300">
          © 2026 Cơ khí Đức Lạc Kiên Giang. Thi công nhà xưởng, cơ khí tại Kiên Giang.
        </p>
      </div>
    </footer>
  );
}

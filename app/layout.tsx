import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: "Cơ khí Đức Lạc Kiên Giang | Thi công nhà xưởng & cơ khí",
  description:
    "Cơ khí Đức Lạc Kiên Giang chuyên thi công nhà xưởng, kết cấu thép, gia công cơ khí tại Rạch Giá, Hà Tiên và toàn tỉnh Kiên Giang.",
  openGraph: {
    title: "Cơ khí Đức Lạc Kiên Giang",
    description:
      "Thi công nhà xưởng, cơ khí dân dụng & công nghiệp tại Kiên Giang.",
    type: "website",
    locale: "vi_VN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${inter.variable} bg-white text-slate-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}

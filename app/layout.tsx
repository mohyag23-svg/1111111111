import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "L'Aura Imperiale | Haute Parfumerie",
  description:
    "Experience the pinnacle of ultra-luxury fragrances. An exclusive haute parfumerie collection crafted between Grasse and Paris.",
  keywords: [
    "luxury perfume",
    "haute parfumerie",
    "L'Aura Imperiale",
    "Clive Christian",
    "Roja Parfums",
    "Bleu de Chanel Parfum",
    "niche fragrance",
  ],
  authors: [{ name: "L'Aura Imperiale" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} dark`}>
      <body className="antialiased font-sans bg-black selection:bg-amber-400 selection:text-black">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Bitter, Inter } from "next/font/google";
import "./globals.css";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

// Display = Bitter (warm slab serif — reads like milled timber/hardwood grain).
// Body = Inter (clean, cold-climate modern). CSS var names kept so globals.css
// and every component keep working unchanged.
const fraunces = Bitter({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const workSans = Inter({
  variable: "--font-work-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "JJ Fencing & Construction — The Fox Valley's Fence Crew, Since 2013",
  description:
    "Family-owned fence installation & repair serving Appleton, Neenah, Menasha, Kaukauna & the Fox Valley since 2013. Wood, aluminum, vinyl, chain link & ornamental fencing, set below the frost line to beat Wisconsin freeze-thaw. Free estimates.",
  openGraph: {
    title: "JJ Fencing & Construction — Built for Wisconsin. Built to last.",
    description:
      "13 years of fences done right across Appleton and the Fox Valley. Get a free estimate.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${workSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <SiteNav />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inknut_Antiqua } from "next/font/google";
import { CookieConsent } from "@/components/cookie-consent";
import "./globals.css";

const inknutAntiqua = Inknut_Antiqua({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "mcclowes puzzles",
  description:
    "Challenge your mind with daily word puzzles. Play Prefix, Lynx Mini, and Lynx - thoughtfully crafted word games designed to engage and entertain.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inknutAntiqua.className} antialiased`}
        suppressHydrationWarning
      >
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}

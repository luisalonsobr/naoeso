import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";
import ThemeSwitcher from "./components/ThemeSwitcher";

const merriweather = Merriweather({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "neverjust",
  description: "it's never just that simple",
  openGraph: {
    title: "neverjust",
    description:
      "A guide to better developer communication - it's never just that simple",
    url: "https://neverjust.net",
    siteName: "neverjust",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "neverjust - A guide to better developer communication",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "neverjust",
    description:
      "A guide to better developer communication - it's never just that simple",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`antialiased bg-neutral-50 dark:bg-neutral-900 min-h-screen text-neutral-900 dark:text-neutral-50 ${merriweather.className}`}
      >
        <div className="fixed top-4 right-4">
          <ThemeSwitcher />
        </div>
        <main className="prose prose-neutral dark:prose-invert mx-auto py-8 prose-lg max-w-3xl px-4 sm:px-6 lg:px-8">
          {children}
        </main>
      </body>
    </html>
  );
}

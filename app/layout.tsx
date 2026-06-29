import type { Metadata } from "next";
import "./globals.css";
import { pageDescription, pageTitle, SITE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "website",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <body>{children}</body>
    </html>
  );
}

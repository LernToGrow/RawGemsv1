import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = "https://rawgems.in";
const title = "RawGems — Product Engineering & AI Software Company";
const description =
  "RawGems transforms ideas into scalable digital products. We design, build, and launch AI-powered software, enterprise applications, SaaS platforms, and custom technology solutions that help businesses innovate and grow.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | RawGems",
  },
  description,
  keywords: [
    "product engineering",
    "AI software company",
    "custom software development",
    "SaaS product development",
    "enterprise application development",
    "AI agents",
    "RAG applications",
    "mobile app development",
    "MVP development",
  ],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "RawGems",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "RawGems",
  url: siteUrl,
  logo: `${siteUrl}/icon`,
  description,
  // TODO: replace with real social profile URLs
  sameAs: [] as string[],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-7709-985032",
    email: "rawgems.in@gamil.com",
    contactType: "sales",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `try {
              var t = localStorage.getItem("rawgems-theme");
              if (t) document.documentElement.setAttribute("data-theme", t);
            } catch (e) {}`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}

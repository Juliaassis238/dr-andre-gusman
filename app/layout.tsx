import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { clinic } from "@/lib/data";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl = "https://drandregusman.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${clinic.doctorName} — ${clinic.tagline} em ${clinic.city}`,
    template: `%s — ${clinic.doctorName}`,
  },
  description: clinic.about,
  keywords: [
    "dentista Sorocaba",
    "odontologia avançada",
    "Dr. André Gusman",
    "urgência odontológica 24 horas",
    "clareamento dental Sorocaba",
    "implante dentário Sorocaba",
  ],
  authors: [{ name: clinic.doctorName }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: clinic.clinicName,
    title: `${clinic.doctorName} — ${clinic.tagline}`,
    description: clinic.about,
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: `${clinic.doctorName} — ${clinic.tagline}`,
    description: clinic.about,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
};

const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var dark = stored ? stored === 'dark' : prefersDark;
    if (dark) document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${inter.variable} ${plexMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              name: clinic.clinicName,
              image: `${siteUrl}/og-image.jpg`,
              url: siteUrl,
              telephone: clinic.contact.whatsapp,
              email: clinic.contact.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: clinic.address.line1,
                addressLocality: clinic.city,
                addressRegion: clinic.state,
                postalCode: clinic.address.zip,
                addressCountry: "BR",
              },
              openingHours: ["Mo-Fr 07:00-18:30"],
              sameAs: [clinic.social.instagram.url, clinic.social.facebook.url],
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <SmoothScrollProvider>
          <Header />
          <main className="pt-20">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "Dawn Cleaners | Professional Cleaning Services",
    template: "%s | Dawn Cleaners",
  },
  description:
    "Professional cleaning services for homes, offices, BnBs, lodges and hotels. Reliable, detailed and convenient cleaning solutions from Dawn Cleaners.",
  openGraph: {
    title: "Dawn Cleaners | Professional Cleaning Services",
    description:
      "Professional cleaning services for homes, offices, BnBs, lodges and hotels.",
    type: "website",
  },
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Dawn Cleaners",
              url: "https://dawncleaners.com",
              email: "hello@dawncleaners.com",
              telephone: "+263772124480",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Harare",
                addressCountry: "ZW",
              },
              areaServed: "Zimbabwe",
              description:
                "Professional cleaning for homes, offices, BnBs, lodges and hotels.",
            }),
          }}
        />
      </body>
    </html>
  )
}

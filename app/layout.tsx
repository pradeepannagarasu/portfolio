import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pradeepan.dev"),
  title: {
    default: "Pradeepan Nagarasu, Founder and CEO of VoxyDocs",
    template: "%s | Pradeepan Nagarasu",
  },
  description:
    "Pradeepan Nagarasu is a London based Tamil healthtech founder and CEO of VoxyDocs, a live UK platform giving paramedics instant access to emergency medical profiles via QR code and NFC sticker. ICO registered, clinically endorsed, and built for UK care homes.",
  keywords: [
    "Pradeepan Nagarasu",
    "VoxyDocs",
    "healthtech founder London",
    "emergency medical records QR code",
    "care home technology UK",
    "GEN2Z Ltd",
    "Tamil founder London",
    "Pradeep's Path",
    "NFC emergency medical profile",
    "care home emergency information",
  ],
  alternates: {
    canonical: "https://pradeepan.dev",
  },
  authors: [{ name: "Pradeepan Nagarasu", url: "https://pradeepan.dev" }],
  creator: "Pradeepan Nagarasu",
  publisher: "Pradeepan Nagarasu",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Pradeepan Nagarasu, Founder and CEO of VoxyDocs",
    description:
      "London based healthtech founder building the emergency medical information layer for UK care homes.",
    url: "https://pradeepan.dev",
    siteName: "Pradeepan Nagarasu",
    type: "profile",
    locale: "en_GB",
    images: [
      {
        url: "/founder.jpeg",
        width: 1200,
        height: 1400,
        alt: "Pradeepan Nagarasu, Founder and CEO of VoxyDocs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pradeepan Nagarasu, Founder and CEO of VoxyDocs",
    description:
      "Founder of VoxyDocs, building instant emergency medical information access for UK care homes.",
    images: ["/founder.jpeg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}


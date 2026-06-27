import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pradeepan Nagarasu, Founder and CEO of VoxyDocs",
  description:
    "Pradeepan Nagarasu is a London based healthtech founder and CEO of VoxyDocs, a live UK platform giving paramedics instant access to emergency medical profiles via QR code and NFC sticker. ICO registered and clinically endorsed by The Royal Marsden NHS Trust.",
  keywords: [
    "Pradeepan Nagarasu",
    "VoxyDocs",
    "healthtech founder London",
    "emergency medical records QR code",
    "care home technology UK",
    "GEN2Z Ltd",
  ],
  openGraph: {
    title: "Pradeepan Nagarasu, Founder and CEO of VoxyDocs",
    description:
      "London based healthtech founder building the emergency medical information layer for UK care homes.",
    url: "https://pradeepan.dev",
    siteName: "Pradeepan Nagarasu",
    type: "profile",
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


import "@/styles/globals.css";

import { type Metadata } from "next";
import { Geist, VT323 } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "ChessHacks Waterloo",
  description: "Waterloo's first AI Chess Hackathon",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    type: "website",
    url: "https://chesshacks.dev/",
    title: "ChessHacks Waterloo",
    description: "Waterloo's first AI Chess Hackathon",
    images: [
      {
        url: "https://chesshacks.dev/og-image.png",
        width: 3417,
        height: 1815,
        alt: "ChessHacks Waterloo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ChessHacks Waterloo",
    description: "Waterloo's first AI Chess Hackathon",
    images: ["https://chesshacks.dev/og-image.png"],
  },
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const vt323 = VT323({
  variable: "--font-vt323",
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${vt323.variable} dark`}>
      <body>
        <TRPCReactProvider>
          {children}
          <Toaster />
        </TRPCReactProvider>
      </body>
    </html>
  );
}

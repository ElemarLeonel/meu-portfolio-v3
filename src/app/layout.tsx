import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import "remixicon/fonts/remixicon.css";
import "./globals.css";

const sg = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
  weight: ["400", "500", "700"],
});

const cs = localFont({
  src: [
    {
      path: "../../public/fonts/CircularStd-Book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/CircularStd-BookItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/CircularStd-Medium.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/CircularStd-MediumItalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/fonts/CircularStd-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/CircularStd-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-circular-std",
});

export const metadata: Metadata = {
  title: "%s | Elemar Leonel",
  description: "Meu portfólio como desenvolvedor",
  keywords: ["desenvolvedor", "frontend", "backend", "ui/ux", "portfolio"],
  authors: [{ name: "Elemar Leonel" }],
  creator: "Elemar Leonel",
  publisher: "Elemar Leonel",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${sg.variable} ${cs.variable}`}>{children}</body>
    </html>
  );
}

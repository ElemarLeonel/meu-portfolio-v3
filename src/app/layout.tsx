import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import "remixicon/fonts/remixicon.css";
import "./globals.css";

export const sg = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
  weight: ["400", "500", "700"],
});

export const cs = localFont({
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
  title: "Portfólio Elemar Leonel Desenvolvedor",
  description: "Meu portfólio como desenvolvedor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sg.variable} ${cs.variable}`}>{children}</body>
    </html>
  );
}

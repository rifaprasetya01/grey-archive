import type { Metadata } from "next";
import "./globals.css";
import { Crimson_Text, Instrument_Serif, Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const crimson_text = Crimson_Text({
  subsets: ["latin"],
  variable: "--font-crimson_text",
  weight: ["400", "600", "700"],
});

const instrument_serif = Instrument_Serif({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-instrument_serif",
});

export const metadata: Metadata = {
  title: "Arsip Abu",
  description: "Website dokumentasi dan penyimpanan arsip Rifa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={cn("h-full", "antialiased", crimson_text.variable, instrument_serif.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DC STEMNet Expo | Where Community Meets Innovation",
  description: "Empowering students, families, and communities through STEM, workforce development, and emerging technology. Free community event at UDC on February 28, 2026.",
  keywords: ["STEM", "education", "DC", "expo", "community", "technology", "workforce development", "UDC"],
  openGraph: {
    title: "DC STEMNet Expo | Where Community Meets Innovation",
    description: "Empowering students, families, and communities through STEM, workforce development, and emerging technology.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

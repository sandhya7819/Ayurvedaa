import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/chat/ChatWidget";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ayurveda Guide | Holistic Healing & Wellness",
  description: "Comprehensive guide to Ayurvedic herbs, conditions, and medicines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lato.variable}`}>
        <Header />
        <main style={{ minHeight: '80vh' }}>
          {children}
        </main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}

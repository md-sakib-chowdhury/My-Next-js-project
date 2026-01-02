import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Global Components
import Navber from "./Components/Navber/Navber";

// Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Website Metadata
export const metadata: Metadata = {
  title: "Depot",
  description: "Modern E-commerce Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ===== Global Navbar ===== */}
        <Navber />

        {/* ===== Page Content ===== */}
        {children}
      </body>
    </html>
  );
}


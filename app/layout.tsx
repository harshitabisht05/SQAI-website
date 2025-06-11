import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";


  // Load Geist fonts with custom CSS variables
  const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
  });

  const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
  });

  // Site metadata
  export const metadata: Metadata = {
    title: "Sentienta",
    description: "A clean and modern site inspired by Anduril",
  };

  // Root layout component
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
              <Header />
          <main className="pt-20">{children}</main>
        </body>
      </html>
    );
  }

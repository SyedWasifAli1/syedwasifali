// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Syed Wasif Ali - Portfolio",
  description:
    "Showcasing the projects and skills of Syed Wasif Ali, a creative Full-Stack developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ✅ ThemeProvider body ke andar hi hona chahiye */}
        {/* <ThemeProvider attribute="class" defaultTheme="light" enableSystem> */}
          {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}

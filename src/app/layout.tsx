import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EliteOps | Discover World-Class Opportunities",
  description:
    "Access a curated ecosystem of world-class scholarships, elite internships, and global fellowships designed for the ambitious student.",
  keywords: [
    "EliteOps",
    "scholarships",
    "internships",
    "fellowships",
    "opportunities",
    "students",
  ],
  authors: [{ name: "EliteOps" }],
  openGraph: {
    title: "EliteOps | Discover World-Class Opportunities",
    description:
      "Access a curated ecosystem of world-class scholarships, elite internships, and global fellowships.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sora.variable} ${dmSans.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

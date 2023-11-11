import "./globals.css";
import type { Metadata } from "next";
import { Ubuntu_Mono } from "next/font/google";

const inter = Ubuntu_Mono({
  style: "normal",
  weight: "700",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "tenc",
  description: "tenc lifestyles || fashion brand",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

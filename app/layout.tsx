import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToolboxNavigation } from "@/components/ToolboxNavigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brett's Web Toolbox",
  description: "A collection of simple tools all in one place. No accounts, no payments, just tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">      
      <body className={inter.className}>{children}</body>
    </html>
  );
}

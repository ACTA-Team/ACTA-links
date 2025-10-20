import type React from "react";
import { ThemeProvider } from "@/providers/theme-provider";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ACTA",
  description: "The new infrastructure for digital trust.",
  icons: { icon: "/black.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

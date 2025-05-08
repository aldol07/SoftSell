import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '@/components/ThemeProvider';
import { ThemeToggle } from '@/components/ThemeToggle';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SoftSell - Software License Resale Platform",
  description: "Sell your unused software licenses quickly and securely with SoftSell.",
  keywords: "software license, resale, unused licenses, software marketplace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <ThemeToggle />
          <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

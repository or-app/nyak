import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: '社甘 疒',
  description: 'ｳﾜ~!!!!',
}

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

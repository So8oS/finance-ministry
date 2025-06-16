/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "دليلي",
  description: "دليلك الشامل للإجراءات القانونية والحكومية في سوريا",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Readex+Pro:wght@160..700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body
        className={`readex-pro-custom antialiased`}
        cz-shortcut-listen="true"
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

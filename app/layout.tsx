/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import { Readex_Pro } from "next/font/google";
import "./globals.css";

const readexPro = Readex_Pro({
  variable: "--font-readex-pro",
  subsets: ["latin"],
});

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
          href="https://fonts.googleapis.com/css2?family=Cascadia+Code:ital,wght@0,200..700;1,200..700&display=swap"
          rel="stylesheet"
        />
        <style>
          {`
            .readex-pro-custom {
              font-family: "Readex Pro", sans-serif;
              font-optical-sizing: auto;
              font-weight: 400;
              font-style: normal;
              font-variation-settings: "HEXP" 0;
            }
          `}
        </style>
      </head>

      <body className={`readex-pro-custom ${readexPro.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

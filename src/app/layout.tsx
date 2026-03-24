import "./globals.css";
import localFont from "next/font/local";
import type { Metadata } from "next";
import SmoothScrollProvider from "../lib/SmoothScrollProvider";

// fonts
const poppins = localFont({
  src: "../../public/fonts/Poppins-Bold.ttf",
  variable: "--font-poppins-layout",
  display: "swap",
});

const Excon = localFont({
  src: "../../public/fonts/Excon-Black.otf",
  variable: "--font-Excon-layout",
  display: "swap",
});

const ppNeue = localFont({
  src: "../../public/fonts/ppneuemontreal-book.otf",
  variable: "--font-ppneue-layout",
  display: "swap",
});

const arrayFont = localFont({
  src: "../../public/fonts/Array-Bold.woff2",
  variable: "--font-array-layout",
  display: "swap",
});

const pottaOne = localFont({
  src: "../../public/fonts/PottaOne-Regular.ttf",
  variable: "--font-potta-layout",
  display: "swap",
});

const triptych = localFont({
  src: "../../public/fonts/Triptych Roman.woff",
  variable: "--font-triptych-layout",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mahesh Kumar | Portfolio",
  description: "Designer • Developer • Creator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${Excon.variable} ${ppNeue.variable} ${arrayFont.variable} ${pottaOne.variable} ${triptych.variable} antialiased scroll-smooth`}
    >
      <SmoothScrollProvider />
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}

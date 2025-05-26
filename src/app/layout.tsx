import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "T-shirt Mockup",
  description: "Custom Tshirt design mockup website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>{children}</body>
    </html>
  );
}

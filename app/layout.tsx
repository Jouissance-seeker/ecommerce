import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { PropsWithChildren } from "react";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "ecommerce",
};

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body className={barlow.className}>
        <Providers>{props.children}</Providers>
      </body>
    </html>
  );
}

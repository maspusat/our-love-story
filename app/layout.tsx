import type { Metadata } from "next";
import { Playfair_Display, Poppins, Geist } from "next/font/google";
import { Toaster } from "sonner";

import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Our Love Story",
  description: "Atalarik ❤️ Rina Eka",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body
        className={`${playfair.variable} ${poppins.variable} antialiased`}
      >
        {children}

        <Toaster
          position="top-right"
          richColors
          closeButton
          expand
          duration={3000}
        />
      </body>
    </html>
  );
}
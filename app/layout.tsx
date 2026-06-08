import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Voices United",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${inter.variable} bg-[#FAF8F5] text-zinc-900 overflow-hidden`}
      >
        <div className="bg-[#FAF8F5] text-zinc-900 overflow-hidden">
           <Header />
           <div className="h-24">
              </div>
        </div>
              
        {children}
        <div className="bg-[#FAF8F5] text-zinc-900 overflow-hidden">
          <Footer/>
        </div>
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/general/Footer";
import ScrollToTopButton from "@/components/general/ScrollToTopButton";
// import Navbar from "@/components/general/navbar/Navbar";
// import Footer from "@/components/general/Footer";
// import ScrollToTopButton from "@/components/general/ScrollToTopButton";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Huan's Portfolio Website",
  description: "Huan's Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className={`${poppins.className} antialiased bg-slate-950`}>
        {/* <Navbar /> */}
        {children}
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}

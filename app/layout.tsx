import type { Metadata } from "next";
import { Oswald, Rubik } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import ClientScripts from "../components/ClientScripts";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Aantara Steel Pvt Ltd - CONNECT | TRADE | GROW",
  description: "Aantara Steel: Exporting Excellence, Delivering Strength. Leading steel export company specializing in premium steel products worldwide.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${rubik.variable}`}>
        {children}
        <ClientScripts />
        <Script 
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" 
          type="module" 
        />
        <Script 
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" 
          noModule 
        />
        <Script src="https://unpkg.com/scrollreveal" />
      </body>
    </html>
  );
}

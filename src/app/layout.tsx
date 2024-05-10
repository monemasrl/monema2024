import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.scss";
import Navbar from "./components/navbar/navbar";
const inter = Heebo({
  weight: ["100", "200", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}

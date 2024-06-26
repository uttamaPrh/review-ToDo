import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Todolist from "@/components/todolist";
// import Headers from "@/components/header";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

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
        <div className="mx-20">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}

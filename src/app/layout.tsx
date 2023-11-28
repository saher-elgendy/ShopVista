import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShopVista",
  description: "Unleash your creativity with our vast library of high-quality digital assets. Explore a diverse range of stock photos, music, templates, and more to enhance your projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn("relative h-full font-sans antialiased", inter.className)}
      >
        <main className="relative flex flex-col min-h-screen">
          <div className=" py-5 flex-grow flex-1">{children}</div>
        </main>
      </body>
    </html>
  );
}

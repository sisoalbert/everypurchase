import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Every Purchase App",
  description: "A simple app to track your purchases",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <>
            <Header />
          </>
          <div
          // className="flex items-center justify-between p-4 bg-red-800 text-white "
          >
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}

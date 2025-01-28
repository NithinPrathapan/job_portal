import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Loading from "./loading";
import { Suspense } from "react";
import { ClerkProvider } from "@clerk/nextjs";
import CommonLayout from '@/components/common-layout/CommonLayout'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <Suspense  fallback={<Loading />}>
            <CommonLayout >
              {children}
            </CommonLayout>
          </Suspense>
        </body>
      </html>
    </ClerkProvider>
  );
}

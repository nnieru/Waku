import "~/styles/globals.css";

import { type Metadata } from "next";
import { Outfit } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "Waku",
  description: "Gen-Z Money Management",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

import { Header } from "~/components/layout/header";
import { Footer } from "~/components/layout/footer";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${outfit.variable}`}>
      <body className="flex flex-col min-h-screen">
        <TRPCReactProvider>
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </TRPCReactProvider>
      </body>
    </html>
  );
}

"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import { QueryClientProvider, QueryClient } from "react-query";

const inter = Inter({ subsets: ["latin"] });



const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <body className={inter.className} suppressHydrationWarning={true}>{children}</body>
      </QueryClientProvider>
    </html>
  );
}

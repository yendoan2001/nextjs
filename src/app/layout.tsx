"use client";
import "@/css/style.css";
import React, { useEffect, useState } from "react";
import Loader from "../components/loader";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);

  // const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html suppressHydrationWarning={true} lang="en">
      <body className={inter.className}>
        <div>{loading ? <Loader /> : children}</div>
      </body>
    </html>
  );
}

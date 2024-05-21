"use client";
import "@/css/style.css";
import React, { useEffect, useState } from "react";
import Loader from "../components/loader";

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
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div>{loading ? <Loader /> : children}</div>
      </body>
    </html>
  );
}

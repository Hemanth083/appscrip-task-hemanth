import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Discover Our Products",
  description: "Browse our curated collection of handcrafted premium products."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

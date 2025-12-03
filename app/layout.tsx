import "./globals.css";

export const metadata = {
  title: "Discover Our Products",
  description: "Browse our curated collection of handcrafted premium products."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

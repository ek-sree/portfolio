import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sreehari E K",
  description: "sreehari E K portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

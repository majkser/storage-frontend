import type { Metadata } from "next";
import { Tektur } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/authContext";
import FileProvider from "@/context/fileContext";

const tektur = Tektur({
  variable: "--font-tektur",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "126 storage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${tektur.className} antialiased bg-black`}>
        <AuthProvider>
          <FileProvider>{children}</FileProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

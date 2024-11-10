import type { Metadata } from "next";
import { ThemeProvider } from "@/providers/theme-provider";
import localFont from "next/font/local";
import { DM_Sans } from "next/font/google";
import "./globals.css";



const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Botles",
  description: "Automate your work with Botles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

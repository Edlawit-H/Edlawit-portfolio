import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Edlawit Huluwork Abebe | Full Stack Developer",
  description:
    "Portfolio of Edlawit Huluwork Abebe — Full Stack Developer and Software Engineering Student based in Addis Ababa, Ethiopia.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Node.js",
    "Next.js",
    "MongoDB",
    "Software Engineer",
    "Ethiopia",
  ],
  authors: [{ name: "Edlawit Huluwork Abebe" }],
  openGraph: {
    title: "Edlawit Huluwork Abebe | Full Stack Developer",
    description:
      "Portfolio of Edlawit Huluwork Abebe — Full Stack Developer and Software Engineering Student.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white font-sans antialiased transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { DotBackgroundDemo } from "@/components/DotBackground";
import { Poppins } from "next/font/google";

// Import Google Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500"],
});

// Import local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SNS Groups",
  description: "Sincerity, Nobility, Service",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <DotBackgroundDemo>
            <div className="relative w-full flex mx-auto items-center justify-between px-4">
              {/* Logo */}
              <div className="flex-shrink-0 sns">
                <img src="/images/sns-logo.png" alt="logo" className="w-16" />
              </div>

              {/* Navbar */}
              <div className="flex-grow flex items-center justify-center">
                <Navbar />
              </div>

              {/* Mode Toggle */}
              <div className="flex-shrink-0 mode-toggle-container">
                <ModeToggle />
              </div>
            </div>
            {children}
          </DotBackgroundDemo>
        </ThemeProvider>
      </body>
    </html>
  );
}

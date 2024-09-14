import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { DotBackgroundDemo } from "@/components/DotBackground";
import { Poppins } from "next/font/google";
import { PlaceholdersAndVanishInputDemo } from "@/components/Search";
import Image from "next/image"; // Import Next.js Image component

// Import Google Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500"],
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
            <div className="relative w-full flex mx-auto items-center justify-between px-1">
              {/* Logo */}
              <div className="flex-shrink-0 sns">
                <Image
                  src="/images/sns-logo.png"
                  alt="logo"
                  width={64} // 16 * 4 for 64px width (assuming w-16)
                  height={64} // Ensure the correct size is maintained
                />
              </div>

              {/* Navbar */}
              <div className="flex-grow flex">
                <Navbar />
              </div>

              <div className="flex-shrink-0 bar">
                <PlaceholdersAndVanishInputDemo />
              </div>

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

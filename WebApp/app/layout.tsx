import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Box, CssBaseline } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import Navigationbar from "@/components/Navigationbar/Navigationbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FG Geodesy"
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
           <AppRouterCacheProvider>
          <CssBaseline />
          <Box sx={{ display: "flex" }}>
            <Navigationbar />
            <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
              {children}
            </Box>
          </Box>
        </AppRouterCacheProvider>
        </body>
    </html>
  );
}

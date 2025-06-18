import type { Metadata } from "next";

import ThemeProvider from "@/components/custom/themeProvider";
import { Geist, Geist_Mono } from "next/font/google";

import Header from "@/components/custom/header";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "React Map GL Sample",
};

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang="ja" suppressHydrationWarning>
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
                    <div className="flex h-screen w-full flex-col items-center px-4">
                        <div className="flex h-full w-full max-w-240 flex-col gap-4">
                            <Header />
                            {children}
                        </div>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
};

export default RootLayout;

import type { Metadata } from "next";
import { Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";


const poppins = Poppins({
    subsets: ["latin"],
    variable: "--font-sans",
    display: "swap",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-heading",
    display: "swap",
});

export const metadata: Metadata = {
    title: "MeetUI - Modern Animated UI Components",
    description: "A modern open-source animated component library platform.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                suppressHydrationWarning
                className={`${poppins.variable} ${spaceGrotesk.variable} font-sans antialiased bg-background text-foreground selection:bg-primary/20`}
            >
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

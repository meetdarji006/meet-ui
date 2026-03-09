import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col relative min-h-screen overflow-x-clip">
            <Navbar />
            <main className="flex-1 w-full">{children}</main>
            <Footer />
        </div>
    );
}

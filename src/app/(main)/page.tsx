import { Hero } from "@/components/home/hero";
import { Features } from "@/components/home/features";
import { Showcase } from "@/components/home/showcase";
import { InstallBlock } from "@/components/home/install-block";

export default function Home() {
    return (
        <div className="flex flex-col gap-0">
            <Hero />
            <Showcase />
            <Features />
            <InstallBlock />
        </div>
    );
}

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Community from "@/components/Community";

export default function Home() {
    return (
        <main className="p-0 m-0">
            <Navbar/>
            <Hero/>
            <div>
                <Community/>
            </div>
        </main>
    );
}

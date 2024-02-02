import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Community from "@/components/Community";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import Hero2 from "@/components/Hero2";

export default function Home() {
    return (
        <main className="p-0 m-0">
            <Navbar/>
            <Hero/>
            <div>
                <Hero2/>
                <Community/>
            </div>
            <Gallery/>
            <Footer/>
        </main>
    );
}

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Community from "@/components/Community";
import Gallery from "@/components/Gallery/Gallery";
import Footer from "@/components/Footer";
import Hero2 from "@/components/Hero2";

export default function Home() {
    return (
        <main className="p-0 m-0">
            <Navbar/>
            <div className="absolute -z-10 -top-[800px] -left-[800px] h-[1600px] w-[1600px] bg-gradient-radial from-indigo-600 via-black to-black"></div>
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

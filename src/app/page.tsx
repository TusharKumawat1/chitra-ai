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
            <div className="absolute -z-10 -top-[800px] -left-[1000px] h-[1600px] w-[2000px] bg-gradient-radial from-indigo-600 via-black to-black"></div>
            <Hero/>
            <Hero2/>
            <div className="py-16" style={{
                backgroundImage: 'url("/bg-image.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                mask: 'linear-gradient(0deg, transparent 0%, white 20%, white 80%, transparent 100%)'
            }}>
                <Community/>
            </div>
            <Gallery/>
            <Footer/>
        </main>
    );
}

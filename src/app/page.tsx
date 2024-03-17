import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Community from "@/components/Community";
import Gallery from "@/components/Gallery/Gallery";
import Footer from "@/components/Footer";
import Hero2 from "@/components/Hero2";
import {SlideDown} from "@/animations/animations";

export default function Home() {
    return (
        <main className="p-0 m-0">
            <div className="h-full w-full bg-black fixed">
                <div
                    className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
                <div
                    className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(#4f4f4f_1px,transparent_1px)] [background-size:24px_24px] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_60%,transparent_100%)]"
                >
                </div>
            </div>
            <div className="hidden md:block">
                <SlideDown delay={1}>
                    <Navbar/>
                </SlideDown>
            </div>
            <div className="md:hidden"><Navbar/></div>
            <Hero/>
            <Hero2/>
            <div className="py-16">
                <Community/>
            </div>
            <Gallery/>
            <Footer/>
        </main>
    );
}

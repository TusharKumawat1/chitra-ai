import Link from "next/link";
// import { TfiLocationPin } from "react-icons/tfi";
import { TbPhoneFilled } from "react-icons/tb";
// import { TfiEmail } from "react-icons/tfi";
// import { TfiInstagram } from "react-icons/tfi";
import { SlideDown, SlideLeft, SlideRight, SlideUp } from "@/animations/animations";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";  
import { RiInstagramFill } from "react-icons/ri";


export default function Footer() {
    return (
        <footer className="w-full z-10">
            <div className="bg-[#19161C] text-white py-4 text-center">
                <div className="grid sm:grid-cols-2 mx-[5vw] xl:mx-[10vw] my-12 gap-10">
                    <div className="mx-auto">
                        <SlideRightSection delay={0}>
                            <h1 className="text-2xl font-medium mb-8">Chitra AI</h1>
                        </SlideRightSection>
                        <SlideDownSection delay={0.3}>
                            <p className="text-sm max-w-[400px] text-left">
                                Try our apps today and use in your Instagram, LinkedIn, Facebook, Blogs and Marketing
                                Campaign. Boost your social networking and media by AI generated beautiful photos.
                            </p>
                        </SlideDownSection>
                        <div>
                        </div>
                    </div>
                    <div className="mx-auto">
                        <SlideLeftSection delay={0}>
                            <h1 className="text-2xl font-medium mb-8">Contact Info</h1>
                        </SlideLeftSection>
                        <SlideDownSection delay={0.3}>
                            <div className="text-left cursor-pointer">
                                <div className="group flex gap-2 items-center h-6 mb-1">
                                    <IoLocationSharp className="group-hover:text-[#b048ff]" />
                                    <Link target="_blank" href="https://maps.app.goo.gl/z8ytwXyXQQTz3k5U7"><GradiantTextOnHover variant="dark" text="1st Block, Jayanagar, Bengaluru" /></Link>
                                </div>
                                <div className="group flex gap-2 items-center h-6 mb-1">
                                    <TbPhoneFilled className="group-hover:text-[#b048ff]" />
                                    <Link target="_blank" href={"tel:+91 7093003840"}><GradiantTextOnHover variant="dark" text="+91 7093003840" /></Link>
                                </div>
                                <div className="group flex gap-2 items-center h-6 mb-1">
                                    <IoMdMail className="group-hover:text-[#b048ff]" />
                                    <Link target="_blank" href={'mailto:connect@instaphotoai.com'}><GradiantTextOnHover variant="dark" text="connect@instaphotoai.com" /></Link>
                                </div>
                                <div className="group flex gap-2 items-center h-6">
                                    <RiInstagramFill className="group-hover:text-[#b048ff]" />
                                    <Link target="_blank" href={'https://www.instagram.com/chitra_ai/'}><GradiantTextOnHover variant="dark" text="@chitra_ai" /></Link>
                                </div>
                            </div>
                        </SlideDownSection>
                    </div>
                </div>
                <div className="container mx-auto">
                    <SlideUpSection delay={0.6}>
                        <p>&copy; {new Date().getFullYear()} Chitra AI. All Rights Reserved.</p>
                    </SlideUpSection>
                </div>
            </div>
        </footer>
    )
}

const GradiantTextOnHover = ({ text, variant }: { text: string, variant: string }) => {
    const variantDark = (
        <p className="group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.400),theme(colors.indigo.400),theme(colors.fuchsia.400),theme(colors.indigo.200),theme(colors.indigo.400),theme(colors.indigo.600))] group-hover:bg-[length:200%_auto] group-hover:animate-gradient">{text}</p>
    )
    const variantLight = (
        <p className="group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-[linear-gradient(to_right,theme(colors.green.200),theme(colors.green.100),theme(colors.red.200),theme(colors.fuchsia.200),theme(colors.red.200),theme(colors.green.100),theme(colors.green.200))] group-hover:bg-[length:200%_auto] group-hover:animate-gradient">{text}</p>
    )

    return variant === "light" ? variantLight : variant === "dark" ? variantDark : null;
}

const SlideLeftSection = ({ children, delay }: { children: JSX.Element, delay: number }) => {
    return (
        <div>
            <div className="hidden md:flex">
                <SlideLeft delay={delay}>
                    {children}
                </SlideLeft>
            </div>
            <div className="md:hidden">
                {children}
            </div>
        </div>
    )
}

const SlideRightSection = ({ children, delay }: { children: JSX.Element, delay: number }) => {
    return (
        <div>
            <div className="hidden md:flex">
                <SlideRight delay={delay}>
                    {children}
                </SlideRight>
            </div>
            <div className="md:hidden">
                {children}
            </div>
        </div>
    )
}

const SlideUpSection = ({ children, delay }: { children: JSX.Element, delay: number }) => {
    return (
        <div>
            <div className="hidden md:flex">
                <SlideUp delay={delay}>
                    {children}
                </SlideUp>
            </div>
            <div className="md:hidden">
                {children}
            </div>
        </div>
    )
}

const SlideDownSection = ({ children, delay }: { children: JSX.Element, delay: number }) => {
    return (
        <div>
            <div className="hidden md:flex">
                <SlideDown delay={delay}>
                    {children}
                </SlideDown>
            </div>
            <div className="md:hidden">
                {children}
            </div>
        </div>
    )
}
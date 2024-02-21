import {FadeIn, SlideLeft, SlideUp} from "@/animations/animations";
import React from "react";

export default function Community() {
    return (
        <div className="w-full md:my-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-32 max-w-screen-2xl mx-auto px-4 md:px-24 py-12">
                <div className="col-span-1 px-4 md:p-8 z-10">
                    <FadeInSection delay={0.25}>
                        <div>
                            <h1 className="text-white text-2xl md:text-4xl">Join a community</h1>
                            <h1 className="text-white text-2xl md:text-4xl">of millions.</h1>
                        </div>
                    </FadeInSection>
                    <SlideUpSection delay={0.5}>
                        <div className="bg-[#19161C] rounded-lg p-8 mt-8">
                            <h2 className="text-2xl font-light mb-2">Create stunning visual in seconds</h2>
                            <p className="font-extralight mb-4">
                                Embrace innovation with AI tools! Dive into uncharted territories, ignite your
                                creativity.
                            </p>
                            <p className="font-extralight mb-4">
                                Generating innovative ideas is a crucial aspect of any creator. Our AI tools can help
                                spark inspiration by providing pre-made prompts and styles
                            </p>
                            <div className="flex justify-between bg-[#0A0A0A] rounded-3xl">
                                <input type="text"
                                       className="bg-transparent py-4 px-8 w-full font-light text-sm focus:outline-none"
                                       placeholder="Write Prompt To Generate Image"/>
                                <button className="bg-[#D2FF3A] text-sm text-black py-2 px-4 m-1 rounded-3xl">Generate
                                </button>
                            </div>
                        </div>
                    </SlideUpSection>
                </div>
                <div className="col-span-1 p-8 mx-auto my-auto z-10">
                    <SlideLeftSection delay={0.75}>
                        <div>
                            <div className="mb-8">
                                <AnimatedGradiantText text="10,000+" variant="dark"/>
                                <p className="font-extralight text-sm">ACTIVE ACCOUNTS</p>
                            </div>
                            <div className="mb-8">
                                <AnimatedGradiantText text="50,000+" variant="dark"/>
                                <p className="font-extralight text-sm">IMAGES GENERATED</p>
                            </div>
                            <div>
                                <AnimatedGradiantText text="100+" variant="dark"/>
                                <p className="font-extralight text-sm">PRE-MADE STYLES</p>
                            </div>
                        </div>
                    </SlideLeftSection>
                </div>
            </div>
        </div>
    )
}

const AnimatedGradiantText = ({text, variant}: { text: string, variant: string }) => {
    const variantDark = (
        <p className="text-6xl md:text-7xl font-medium bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.600),theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.green.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient">{text}
        </p>
    )
    const variantLight = (
        <p className="text-xl lg:text-3xl font-semibold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.green.200),theme(colors.green.100),theme(colors.red.200),theme(colors.fuchsia.200),theme(colors.red.200),theme(colors.green.100),theme(colors.green.200))] bg-[length:200%_auto] animate-gradient">{text}</p>
    )

    return variant === "light" ? variantLight : variant === "dark" ? variantDark : null;
}

const SlideUpSection = ({children, delay}: { children: JSX.Element, delay: number }) => {
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

const SlideLeftSection = ({children, delay}: { children: JSX.Element, delay: number }) => {
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

const FadeInSection = ({children, delay}: { children: JSX.Element, delay: number }) => {
    return (
        <div>
            <div className="hidden md:flex">
                <FadeIn delay={delay}>
                    {children}
                </FadeIn>
            </div>
            <div className="md:hidden">
                {children}
            </div>
        </div>
    )
}

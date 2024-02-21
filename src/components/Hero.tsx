'use client';
import Image from "next/image";
import girl from "../../public/girl.png"
import frame from "../../public/frame.png"
import girlWithFrame from "../../public/girlWithFrame.png"
import girlWithFrameMobile2 from "../../public/girlWithFrameMobile2.png"
import React from "react";
import Stars from "@/components/Stars";
import {FadeIn, SlideLeft, SlideUp} from "@/animations/animations";
import Link from "next/link";

export default function Hero() {
    return (
        <div className="w-full">
            <div className="hidden md:inline-flex">
                <Stars/>
            </div>
            <div
                className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-screen-2xl mx-auto px-4 md:px-12 h-full xl:my-12">
                <Image className="md:hidden" src={girlWithFrameMobile2} alt={"image"} />
                <div className="col-span-1 md:col-span-1 z-10 md:py-8 flex flex-col justify-center">
                    <FadeInSection>
                        <div>
                            <div className="flex flex-col text-left mb-4 lg:mb-8 xl:mb-12">
                                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-medium">Simple, Freemium</h1>
                                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-medium">Image & Video
                                    Generation</h1>
                                <div className="flex gap-2 lg:gap-4">
                                    <h1 className="text-4xl lg:text-5xl xl:text-6xl font-medium">
                                        <AnimatedGradiantText variant="dark" text="within seconds"/>
                                    </h1>
                                </div>
                            </div>
                            <div className="mb-16 lg:mb-24 xl:mb-24">
                                <p className="text-white max-w-[80%] md:max-w-[60%] font-extralight text-sm lg:text-base">
                                    In the realm of creativity, technology has become a powerful ally for artists,
                                    writers, designers, and creators of all kinds. Artificially intelligent (AI) tools
                                    have emerged as valuable companions, assisting naturally creative humans in their
                                    creative processes.
                                </p>

                            </div>
                        </div>
                    </FadeInSection>
                    <SlideUpSection>
                        <div>
                            <div className="mb-2 lg:mb-8">
                                <AnimatedGradiantText variant="light" text="Create Your Photo with Chitra AI"/>
                                <AnimatedGradiantText variant="light" text="Always Free AI tools with 100% Privacy"/>
                            </div>
                            <div>
                                <Link href={"https://instaphotoai.com"} target="_blank">
                                    <button
                                        className="bg-[#D2FF3A] text-black lg:text-xl font-semibold px-8 py-4 rounded-xl">
                                        Try our latest app
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </SlideUpSection>
                </div>
                <SlideLeftSection>
                        <div className="hidden md:inline-flex col-span-1 md:col-span-1">
                            <div className="hidden md:inline-flex my-auto mx-auto">
                                <Box completeImage={true}/>
                            </div>
                        </div>
                </SlideLeftSection>
            </div>
        </div>
    );
}

const FadeInSection = ({children}: { children: JSX.Element }) => {
    return (
        <div>
            <div className="hidden md:flex">
                <FadeIn delay={0.2}>
                    {children}
                </FadeIn>
            </div>
            <div className="md:hidden">
                {children}
            </div>
        </div>
    )
};

const SlideUpSection = ({children}: { children: JSX.Element }) => {
    return (
        <div>
            <div className="hidden md:flex">
                <SlideUp delay={0.5}>
                    {children}
                </SlideUp>
            </div>
            <div className="md:hidden">
                {children}
            </div>
        </div>
    )
}

const SlideLeftSection = ({children}: { children: JSX.Element }) => {
    return (
        <div>
            <div className="hidden md:flex">
                <SlideLeft delay={0.8}>
                    {children}
                </SlideLeft>
            </div>
            <div className="md:hidden">
                {children}
            </div>
        </div>
    )
}

const AnimatedGradiantText = ({text, variant}: { text: string, variant: string }) => {
    const variantDark = (
        <p className="text-4xl lg:text-5xl xl:text-6xl font-medium bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.400),theme(colors.indigo.400),theme(colors.fuchsia.400),theme(colors.indigo.200),theme(colors.indigo.400),theme(colors.indigo.600))] bg-[length:200%_auto] animate-gradient">{text}</p>
    )
    const variantLight = (
        <p className="text-xl lg:text-3xl font-semibold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.green.200),theme(colors.green.100),theme(colors.red.200),theme(colors.fuchsia.200),theme(colors.red.200),theme(colors.green.100),theme(colors.green.200))] bg-[length:200%_auto] animate-gradient">{text}</p>
    )

    return variant === "light" ? variantLight : variant === "dark" ? variantDark : null;
}

const Box = ({completeImage}: { completeImage: Boolean }) => {
    const completeBox = (
        <Image className="scale-[1.30] lg:scale-[1.22] -ml-[6%]" src={girlWithFrame} alt={"girlWithFrame"}/>
    )

    const distributedBox = (
        <div className="pl-[50%] h-full">
            <Image className="z-0" src={frame} alt={"frame"}/>
            <Image className="z-10 -mt-[140%] -ml-[50%] scale-[2.26]" src={girl} alt={"girl"}/>
        </div>
    );

    return completeImage ? completeBox : distributedBox;
};

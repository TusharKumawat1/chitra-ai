'use client';
import Image from "next/image";
import girl from "../../public/girl.png"
import frame from "../../public/frame.png"
import girlWithFrame from "../../public/girlWithFrame.png"
import React from "react";
import Stars from "@/components/Stars";

export default function Hero() {
    return (
        <div className="w-full">
            <Stars />
            <div className="grid grid-cols-8 md:grid-cols-2 gap-4 max-w-screen-2xl mx-auto px-12 h-full xl:my-12">
                <div className="col-span-3 md:col-span-1 z-10 py-8 flex flex-col justify-center">
                    <div className="flex flex-col text-left mb-4 lg:mb-8 xl:mb-12">
                        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-medium">Studio Quality</h1>
                        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-medium">Photos, using AI</h1>
                        <div className="flex gap-2 lg:gap-4">
                            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-medium">within</h1>
                            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-medium">
                                <AnimatedGradiantText variant="dark" text="seconds"/>
                            </h1>
                        </div>
                    </div>
                    <div className="mb-16 lg:mb-24 xl:mb-24">
                        <p className="text-white max-w-screen-sm font-extralight text-sm lg:text-base">
                            In the realm of creativity, technology has become a
                        </p>
                        <p className="text-white max-w-screen-sm font-extralight text-sm lg:text-base">
                            powerful ally for artists, writers, designers, and creators of
                        </p>
                        <p className="text-white max-w-screen-sm font-extralight text-sm lg:text-base">
                            all kinds. Artificially intelligent (AI) tools have emerged as
                        </p>
                        <p className="text-white max-w-screen-sm font-extralight text-sm lg:text-base">
                            valuable companions, assisting naturally creative humans in
                        </p>
                        <p className="text-white max-w-screen-sm font-extralight text-sm lg:text-base">
                            their creative processes.
                        </p>
                    </div>
                    <div className="mb-2 lg:mb-8">
                        <AnimatedGradiantText variant="light" text="Create Your Photo with AI"/>
                        <AnimatedGradiantText variant="light" text="Generated Image or just a Selfie."/>
                    </div>
                    <div>
                        <button
                            className="bg-[#D2FF3A] text-black lg:text-xl font-semibold px-8 py-4 rounded-lg">Signup
                            and Get
                            10 free Photos
                        </button>
                    </div>
                </div>
                <div className="col-span-5 md:col-span-1">
                    <div className="hidden xl:inline-flex">
                        <Box completeImage={false}/>
                    </div>
                    <div className="xl:hidden my-auto">
                        <Box completeImage={true}/>
                    </div>
                </div>
            </div>
        </div>
    );
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
        <Image className="scale-[1.30] lg:scale-[1.22]" src={girlWithFrame} alt={"girlWithFrame"}/>
    )

    const distributedBox = (
        <div className="pl-[50%] h-full">
            <Image className="z-0" src={frame} alt={"frame"}/>
            <Image className="z-10 -mt-[140%] -ml-[50%] scale-[2.26]" src={girl} alt={"girl"}/>
        </div>
    );

    return completeImage ? completeBox : distributedBox;
};

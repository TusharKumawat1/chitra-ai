import Image from "next/image";
import Subtract from "../../public/Subtract.png";
import UsersAvatarPhoto from "../../public/UsersAvatarPhoto.png";
import bgImage from "../../public/bg-image2.png";
import { SlideDown, SlideLeft, SlideRight, SlideUp } from "@/animations/animations";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

export default function Hero2() {
    return (
        <div className="w-full my-16 xl:mt-40 cursor-default">
            <div className="max-w-screen-2xl mx-auto px-4 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    <div className="flex col-span-1 xl:col-span-2 z-10">
                        <div className="mr-4 hidden xl:inline-flex hover:scale-[1.05] z-10 ease-linear duration-300 cursor-pointer">
                            <SlideRightSection delay={0.2}>
                                <Image src={Subtract} objectFit="fit" alt="parrotEye" className="h-[320px] w-full" />
                            </SlideRightSection>
                        </div>
                        <div className="flex-col flex-auto">
                            <SlideDownSection delay={0.5}>
                                <div
                                    className="h-36 mb-4 pl-8 py-4 rounded-3xl text-5xl items-start flex bg-gradient-to-b from-[#D2FF3A] to-[#000000]">
                                    <div className="my-auto font-medium">
                                        <h1>300+</h1>
                                        <h1>Creators</h1>
                                    </div>
                                </div>
                            </SlideDownSection>
                            <div className="xl:-ml-[25%]">
                                <SlideUpSection delay={0.8}>
                                    <div className="h-40 z-10 bg-[#6843EC] p-4 rounded-3xl">
                                        <h1 className="text-2xl ml-4 mb-4 xl:w-full">We have the best AI Image generator</h1>
                                        <div className="flex items-center ml-4">
                                            <Image className="mr-4" src={UsersAvatarPhoto} alt="UserAvatar" />
                                            <div className="font-light text-sm">
                                                <p>Join our Community.</p>
                                                <p>We are waiting for you.</p>
                                            </div>
                                        </div>
                                    </div>
                                </SlideUpSection>
                            </div>
                        </div>
                    </div>
                    <div className="z-10">
                        <SlideLeftSection delay={1.1}>
                            <div className="h-56 mb-4 rounded-3xl hover:scale-[1.1] z-10 ease-linear duration-300 cursor-pointer">
                                <Image className="object-cover w-full h-full" src={bgImage} alt="parrotEye" />
                            </div>
                        </SlideLeftSection>
                        <SlideUpSection delay={1.4}>
                            <button className="h-20 text-black w-full text-3xl bg-[#D2FF3A] rounded-3xl hover:bg-[#bde04b]">
                                <div className="flex justify-center items-center font-[600]">
                                    Try Free
                                    <GoArrowUpRight />
                                </div>
                            </button>
                        </SlideUpSection>
                    </div>
                </div>
            </div>
        </div>
    )
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

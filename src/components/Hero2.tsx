import Image from "next/image";
import Subtract from "../../public/Subtract.png";

export default function Hero2() {
    return (
        <div className="w-full">
            <div className="max-w-screen-2xl mx-auto px-12">
                <div className="grid grid-cols-3 gap-4">
                    <div className="flex col-span-2">
                        <Image className="mr-4" src={Subtract} alt="parrotEye"/>
                        <div className="flex-col flex-auto">
                            <div className="h-36 bg-red-200 mb-4 p-8 rounded-3xl">
                                <h1>300+</h1>
                                <h1>Creators</h1>
                            </div>
                            <div className="h-40 z-10 bg-[#6843EC] p-8 rounded-3xl">
                                <h1>We have the best AI Image generator</h1>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="h-48 mb-4 bg-red-200 rounded-3xl"></div>
                        <div className="h-28 bg-red-200 rounded-3xl"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
import Link from "next/link";
import {TfiLocationPin} from "react-icons/tfi";
import {TbPhoneFilled} from "react-icons/tb";
import {TfiEmail} from "react-icons/tfi";
import {TfiInstagram} from "react-icons/tfi";

export default function Footer() {
    return (
        <footer className="w-full z-10">
            <div className="bg-[#19161C] text-white py-4 text-center">
                <div className="grid sm:grid-cols-2 mx-48 my-12">
                    <div className="mx-auto">
                        <h1 className="text-2xl font-medium mb-8">Chitra AI</h1>
                        <p className="text-sm max-w-[400px] text-left">
                            Try our apps today and use in your Instagram, LinkedIn, Facebook, Blogs and Marketing
                            Campaign. Boost your social networking and media by AI generated beautiful photos.
                        </p>
                        <div>

                        </div>
                    </div>
                    <div className="mx-auto">
                        <h1 className="text-2xl font-medium mb-8">Contact Info</h1>
                        <div className="text-left">
                            <div className="flex gap-2 items-center h-6 mb-1">
                                <TfiLocationPin/>
                                <h2>1st Block, Jayanagar, Bengaluru</h2>
                            </div>
                            <div className="flex gap-2 items-center h-6 mb-1">
                                <TbPhoneFilled/>
                                <h2>+91 7093003840</h2>
                            </div>
                            <div className="flex gap-2 items-center h-6 mb-1">
                                <TfiEmail/>
                                <Link href={'mailto:connect@instaphotoai.com'}>connect@instaphotoai.com</Link>
                            </div>
                            <div className="flex gap-2 items-center h-6">
                                <TfiInstagram/>
                                <Link target="_blank" href={'https://www.instagram.com/chitra_ai/'}>@chitra_ai</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto">
                    <p>&copy; 2024 Chitra AI. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}
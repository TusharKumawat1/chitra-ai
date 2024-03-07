import Link from "next/link";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

export default function Navbar() {
    return (
        <div className="w-full">
            <div className="max-w-screen-2xl mx-auto px-4 md:px-12 py-8">
                <nav className="flex justify-between items-center">
                    <div className="text-white text-xl md:text-4xl font-semibold">Chitra AI</div>
                    {/*<div className="hidden md:flex gap-12 text-base font-light lg:text-lg">*/}
                    {/*    <Link href={"/"}>Learn</Link>*/}
                    {/*    <Link href={"/"}>Build</Link>*/}
                    {/*    <Link href={"/"}>Products</Link>*/}
                    {/*    <Link href={"/"}>Community</Link>*/}
                    {/*</div>*/}
                    {/*<div className="md:hidden">*/}
                    {/*    <Sheet key="right">*/}
                    {/*        <SheetTrigger asChild>*/}
                    {/*            <button><HamburgerIcon /></button>*/}
                    {/*        </SheetTrigger>*/}
                    {/*        <SheetContent side="right" className="bg-[#181716] border-black">*/}
                    {/*            <SheetHeader>*/}
                    {/*                <SheetTitle>Useful Links</SheetTitle>*/}
                    {/*            </SheetHeader>*/}
                    {/*            <div className="grid gap-4 py-4">*/}
                    {/*                <Link href={"/"}>Learn</Link>*/}
                    {/*                <Link href={"/"}>Build</Link>*/}
                    {/*                <Link href={"/"}>Products</Link>*/}
                    {/*                <Link href={"/"}>Community</Link>*/}
                    {/*            </div>*/}
                    {/*        </SheetContent>*/}
                    {/*    </Sheet>*/}
                    {/*</div>*/}
                </nav>
            </div>
        </div>
    )
}

const HamburgerIcon = () => {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="7" y1="12" x2="21" y2="12"/>
            <line x1="11" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
        </svg>
    )
};

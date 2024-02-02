import Link from "next/link";

export default function Navbar() {
    return (
        <div className="w-full">
            <div className="max-w-screen-2xl mx-auto px-12 py-8">
                <nav className="flex justify-between items-center">
                    <div className="text-white text-4xl font-semibold">Insta Photo AI
                    </div>
                    <div className="flex gap-12 text-lg font-normal">
                        <Link href={"/"}>Learn</Link>
                        <Link href={"/"}>Build</Link>
                        <Link href={"/"}>Products</Link>
                        <Link href={"/"}>Community</Link>
                    </div>
                </nav>
            </div>
        </div>
    )
}
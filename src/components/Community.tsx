export default function Community() {
    return (
        <div className="w-full">
            <div className="grid grid-cols-2 gap-32 max-w-screen-2xl mx-auto px-24 py-12">
                <div className="col-span-1 p-8">
                    <h1 className="text-white text-4xl">Join a community of millions.</h1>
                    <div className="bg-[#19161C] rounded-lg p-8 mt-8">
                        <h2 className="text-2xl font-light mb-2">Create stunning visual in seconds</h2>
                        <p className="font-extralight mb-4">Generating innovative ideas is a crucial aspect of any
                            creative endeavor. AI tools can help spark inspiration by analyzing vast amounts of data</p>
                        <div className="flex justify-between bg-[#0A0A0A] rounded-3xl">
                            <input type="text"
                                   className="bg-transparent py-4 px-8 w-full font-light text-sm focus:outline-none"
                                   placeholder="Write Prompt To Generate Image"/>
                            <button className="bg-[#D2FF3A] text-sm text-black py-2 px-4 m-1 rounded-3xl">Generate
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 p-8 mx-auto my-auto">
                    <div className="mb-8">
                        <AnimatedGradiantText text="10.2M+" variant="dark"/>
                        <p className="font-extralight text-sm">ACTIVE ACCOUNTS</p>
                    </div>
                    <div className="mb-8">
                        <AnimatedGradiantText text="300+" variant="dark"/>
                        <p className="font-extralight text-sm">PROJECTS</p>
                    </div>
                    <div>
                        <AnimatedGradiantText text="1000+" variant="dark"/>
                        <p className="font-extralight text-sm">TOPICS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const AnimatedGradiantText = ({text, variant}: { text: string, variant: string }) => {
    const variantDark = (
        <p className="text-6xl md:text-7xl font-medium bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.600),theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.green.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient">{text}</p>
    )
    const variantLight = (
        <p className="text-xl lg:text-3xl font-semibold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.green.200),theme(colors.green.100),theme(colors.red.200),theme(colors.fuchsia.200),theme(colors.red.200),theme(colors.green.100),theme(colors.green.200))] bg-[length:200%_auto] animate-gradient">{text}</p>
    )

    return variant === "light" ? variantLight : variant === "dark" ? variantDark : null;
}
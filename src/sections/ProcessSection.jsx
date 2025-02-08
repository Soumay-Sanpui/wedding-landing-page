const ProcessSection = () => {
    return (
        <section className="py-8 md:py-16 lg:py-20 flex flex-col items-center justify-center border bg-black">
            <h2 className="text-center text-2xl lg:text-5xl font-bold uppercase mb-6 md:mb-10 text-white">The Process</h2>
            <div className={"flex items-center justify-center"}>
                <div className="flex flex-col items-start justify-center w-full px-4 md:px-8 lg:px-16">
                    <div className="my-2 md:my-4 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-5">
                        <h1 className="text-xl md:text-2xl font-bold rounded-md p-2 bg-neutral-100 text-black w-12 text-center">01</h1>
                        <p className="text-lg md:text-2xl text-white text-center">We understand your vision,
                            preferences, and budget</p>
                    </div>
                    <div className="my-2 md:my-4 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-5">
                        <h1 className="text-xl md:text-2xl font-bold rounded-md p-2 bg-neutral-100 text-black w-12 text-center">02</h1>
                        <p className="text-lg md:text-2xl text-white text-center">You choose a plan that works for
                            you</p>
                    </div>
                </div>
            </div>

            {/* Plan Section */}
            <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-center gap-6 md:gap-8 mt-8 px-4 md:px-8">
                {/* Plan A */}
                <div className="w-full md:w-[45vw] lg:w-[40vw] h-auto rounded-md bg-pink-500 text-black p-4 md:p-6 lg:p-8">
                    <div className="w-full mb-4">
                        <h3 className="font-bold text-xl md:text-2xl lg:text-3xl text-black text-center">Plan A - Assured Returns</h3>
                    </div>
                    <div className="w-full">
                        <ul className="list-disc space-y-4 md:space-y-6 text-base md:text-lg lg:text-xl ml-4 md:ml-6">
                            <li>50% guaranteed return on your wedding photography budget within 3 years.</li>
                            <li>Example: If your wedding photography costs ₹1 lakh, you'll receive ₹50,000 as an assured return.</li>
                            <li>This is a potentially high-return opportunity and is subject to the commercial success of our film projects.</li>
                        </ul>
                    </div>
                </div>

                {/* Plan B */}
                <div className="w-full md:w-[45vw] lg:w-[40vw] h-auto rounded-md bg-pink-500 text-black p-4 md:p-6 lg:p-8">
                    <div className="w-full mb-4">
                        <h3 className="font-bold text-xl md:text-2xl lg:text-3xl text-black text-center">Plan B - Investment Returns</h3>
                    </div>
                    <div className="w-full">
                        <ul className="list-disc space-y-4 md:space-y-6 text-base md:text-lg lg:text-xl ml-4 md:ml-6">
                            <li>200% return on your wedding photography budget within 3 years.</li>
                            <li>Example: If your wedding photography costs ₹1 lakh, you could receive ₹2 lakhs.</li>
                            <li>This is a potentially high-return opportunity and is subject to the commercial success of our film projects.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProcessSection;
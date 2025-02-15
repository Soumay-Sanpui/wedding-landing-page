const HeaderSection = () => {
    return (
        <header className="relative min-h-[60vh] md:min-h-[80vh] lg:min-h-[90vh] flex items-center">
            <div className="absolute inset-0 bg-black">
                <img loading={"lazy"} alt="Hero Image" className="w-full h-[125vh] object-cover" src="/053A4649.jpg"/>
            </div>
            {/* Introduction */}
            <div className="relative z-10 w-full flex flex-col justify-center items-center text-center">
                <div className="mb-4 md:mb-8 flex items-center justify-center">
                    <img loading={"lazy"} alt="Logo" className="w-2/3 md:w-1/2 lg:w-1/4 h-auto" src="/life_and_times(White Logo).png"/>
                </div>
                <div className={""}>
                    <p className={"text-white font-bold text-2xl"}>
                        We take amazing picture <br />
                        We make unforgettable wedding films <br />
                        We return your money, possibly double
                    </p>
                </div>
                <p className="mx-[15vw] px-4 sm:px-12 mt-6 text-base sm:text-lg text-white text-sm/8">In today's world, people are
                    becoming smarter about spending and investing their money. We figured out a way to turn your wedding
                    expenses into smart investments.</p>
                <p className="my-4 font-bold text-xl sm:text-xl text-pink-500">Sounds unbelievable?</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 w-full px-4">
                    <a className="w-full sm:w-auto px-6 py-3 bg-pink-500 text-white hover:bg-pink-600 transition-colors text-sm tracking-wider rounded-lg animate-pulse"
                       href="#portfolio">
                        CLAIM FREE SHOOT NOW
                    </a>
                    <a className="w-full sm:w-auto px-6 py-3 border border-pink-500 text-pink-500 hover:bg-pink-500/10 transition-colors text-sm tracking-wider rounded-lg"
                       href="#contact">
                        LEARN MORE
                    </a>
                </div>
            </div>
        </header>
    )
}

export default HeaderSection;
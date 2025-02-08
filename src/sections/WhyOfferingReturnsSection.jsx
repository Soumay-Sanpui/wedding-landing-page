const WhyOfferingReturnsSection = () => {
    return (
        <section className="w-full flex flex-col items-center justify-center gap-3 md:gap-5 py-8 md:py-16 lg:py-20 px-4">
            <h1 className="text-center text-xl md:text-2xl font-semibold uppercase">Why We Are Offering Returns?</h1>
            <div className="flex flex-col items-center justify-center text-base w-full md:w-[85%] lg:w-[70%] text-center">
                <p className="text-base md:text-lg">Storytelling is our core. When we are not shooting weddings, we are making movies, documentaries, and web series. Weddings help us generate capital for our film projects without giving up our company's equity to investors. We generate revenue from these movies since we align the distribution of our films in advance. Hence, we're able to offer not just incredible wedding memories but also an opportunity to earn from it.</p>
            </div>
            
            {/* Cards container */}
            <div className="my-6 md:my-8 lg:my-10 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 lg:gap-20 w-full px-4">
                {/* What you get card */}
                <div className="w-full md:w-[45vw] lg:w-[35vw] h-auto md:h-[50vh] p-4 md:p-6 lg:p-8 bg-pink-500 text-white rounded-md">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl text-center my-2 font-bold text-white uppercase">What You Get?</h2>
                    <hr className="my-3 md:my-4 mx-auto w-1/2" />
                    <ul className="flex flex-col items-start list-disc justify-center gap-2 md:gap-4 text-base md:text-lg px-4 md:px-6">
                        <li>Stunning wedding pictures and films</li>
                        <li>Beautifully designed wedding albums</li>
                        <li>Complimentary surprises along the way</li>
                        <li>A guaranteed return on your investment</li>
                        <li>Chance to support a new generation of filmmakers</li>
                    </ul>
                </div>
                
                {/* What we get card */}
                <div className="w-full md:w-[45vw] lg:w-[35vw] h-auto md:h-[50vh] p-4 md:p-6 lg:p-8 bg-pink-500 text-white rounded-md">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl text-center my-2 font-bold text-white uppercase">What We Get?</h2>
                    <hr className="my-3 md:my-4 mx-auto w-1/2" />
                    <ul className="flex flex-col items-start list-disc justify-center gap-2 md:gap-4 text-base md:text-lg px-4 md:px-6">
                        <li>Capital to fund our film projects</li>
                        <li>Ability to ignore traditional investors</li>
                        <li>Ability to retain ownership of our films</li>
                        <li>A great relationship with you</li>
                        <li>And eventually, a lot of movies made</li>
                    </ul>
                </div>
            </div>
            
            {/* Bottom text */}
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-black text-center px-4">
                Doesn't this sound like a <span className="italic font-bold text-pink-500">win-win</span> for both you and us!
            </h3>
        </section>
    )
}

export default WhyOfferingReturnsSection;
const WhoWeAreSection = () => {
    return(
        <section className={"w-screen h-screen bg-[url('/wwa.jpeg')] bg-cover bg-fit bg-no-repeat bg-fixed text-white p-4 flex flex-col gap-4 items-center justify-center relative"}>
            <div className="absolute inset-0 bg-black opacity-50"></div> {/* Black overlay */}
            {/* Section title */}
            <h1 className={"text-pink-500 font-bold text-xl relative"}>Who We Are</h1>
            {/* Section content */}
            <p className={"text-center mx-22 relative"}>Storytelling is our core. When we are not shooting weddings, we are making movies, documentaries, and web series. Weddings help us generate capital for our film projects without giving up our company's equity to investors. We generate revenue from these movies since we align the distribution of our films in advance. Hence, we're able to offer not just incredible wedding memories but also an opportunity to earn from it.</p>
        </section>
    )
}

export default WhoWeAreSection;
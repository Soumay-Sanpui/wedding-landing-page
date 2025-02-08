const WhyChooseUsSection = () => {
    return (
        <section className="py-24">
            <div className="container mx-auto px-6">
                <h2 className="text-center font-cormorant text-4xl mb-16 uppercase text-pink-500 font-bold">Why You Should Consider This?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="text-center py-8 px-4 border border-pink-500/30 hover:border-pink-500 transition-colors rounded-lg shadow-lg bg-white bg-opacity-10 backdrop-blur-md flex flex-col justify-between">
                        <h3 className="text-xl font-cormorant mb-2 text-pink-500">Wedding Services</h3>
                        <p className="text-gray-700 text-sm">100% services delivered for the amount you invest in your wedding photography.</p>
                    </div>
                    <div className="text-center py-8 px-4 border border-pink-500/30 hover:border-pink-500 transition-colors rounded-lg shadow-lg bg-white bg-opacity-10 backdrop-blur-md flex flex-col justify-between">
                        <h3 className="text-xl font-cormorant mb-2 text-pink-500">Quality Work</h3>
                        <p className="text-gray-700 text-sm">Our clients rave about how our work keeps their wedding experience refreshing for years.</p>
                    </div>
                    <div className="text-center py-8 px-4 border border-pink-500/30 hover:border-pink-500 transition-colors rounded-lg shadow-lg bg-white bg-opacity-10 backdrop-blur-md flex flex-col justify-between">
                        <h3 className="text-xl font-cormorant mb-2 text-pink-500">Timely Delivery</h3>
                        <p className="text-gray-700 text-sm">We guarantee prompt, professional delivery of your wedding pictures and films.</p>
                    </div>
                    <div className="text-center py-8 px-4 border border-pink-500/30 hover:border-pink-500 transition-colors rounded-lg shadow-lg bg-white bg-opacity-10 backdrop-blur-md flex flex-col justify-between">
                        <h3 className="text-xl font-cormorant mb-2 text-pink-500">No Risk, High Returns</h3>
                        <p className="text-gray-700 text-sm">Experience no risk while enjoying all the benefits.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUsSection;
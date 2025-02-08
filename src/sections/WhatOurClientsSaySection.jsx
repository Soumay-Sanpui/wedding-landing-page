const WhatOurClientsSaySection = () => {
    return (
        <section className="pb-12 md:pb-16 lg:pb-24 bg-neutral-800 py-8 md:py-12">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-center font-cormorant text-2xl md:text-3xl lg:text-4xl mb-8 md:mb-12 lg:mb-16 uppercase font-bold text-white">What Our Clients Say</h2>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
                    {/* Testimonial cards */}
                    <div className="w-full md:w-1/3 relative min-h-min rounded-xl p-6 md:p-8 border border-pink-500 hover:border-pink-500 transition-colors bg-black">
                        <p className="text-white mb-8 md:mb-12 text-sm md:text-base">"It was an amazing experience. The effort put in to make it the best shoot was evident!"</p>
                        <div className="flex items-center gap-4 absolute bottom-5 left-5">
                            <img alt="Client" className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover" src="https://th.bing.com/th?id=OIP.J4Rw7f_cPMYTz8D-Uj8RCwHaKb&w=210&h=296&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" />
                            <div>
                                <h4 className="font-medium text-sm md:text-base text-white">Richa Agarwal, Delhi</h4>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 relative min-h-min rounded-xl p-6 md:p-8 border border-pink-500 hover:border-pink-500 transition-colors bg-black">
                        <p className="text-white mb-8 md:mb-12 text-sm md:text-base">"Amazing work done for our pre-wedding. It's unique and different from the usual poses!"</p>
                        <div className="flex items-center gap-4 absolute bottom-5 left-5">
                            <img alt="Client" className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover" src="https://th.bing.com/th?id=OIP.J4Rw7f_cPMYTz8D-Uj8RCwHaKb&w=210&h=296&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" />
                            <div>
                                <h4 className="font-medium text-sm md:text-base text-white">Gurpreet Kaur, Delhi</h4>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 relative min-h-min rounded-xl p-6 md:p-8 border border-pink-500 hover:border-pink-500 transition-colors bg-black">
                        <p className="text-white mb-8 md:mb-12 text-sm md:text-base">"An amazing experience for my pre-wedding photoshoot. He is an excellent photographer!"</p>
                        <div className="flex items-center gap-4 absolute bottom-5 left-5">
                            <img alt="Client" className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover" src="https://th.bing.com/th?id=OIP.J4Rw7f_cPMYTz8D-Uj8RCwHaKb&w=210&h=296&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" />
                            <div>
                                <h4 className="font-medium text-sm md:text-base text-white">Pankaja Sharma</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhatOurClientsSaySection;
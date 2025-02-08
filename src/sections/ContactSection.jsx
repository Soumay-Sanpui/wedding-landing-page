const ContactSection = () => {
    return (
        <section className="py-8 md:py-16 lg:py-24 bg-neutral-900" id="contact">
            <h2 className="text-center text-xl md:text-2xl lg:text-3xl my-3 px-4 md:px-16 lg:px-28 text-white">Are you ready to turn your wedding photography budget into a smart investment?</h2>
            <div className="container mx-auto px-4">
                <p className="text-center text-white mb-8 md:mb-16 max-w-2xl mx-auto">Book your wedding photography with us and get a premium pre-wedding shoot worth ₹50,000 absolutely free!</p>
                <form className="max-w-2xl mx-auto space-y-4 md:space-y-6 lg:space-y-8 text-white">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                        <div>
                            <input className="bg-white/50 border border-pink-500/20 rounded-lg px-4 py-3 focus:outline-none focus:border-pink-500 w-full text-white" id="name" placeholder="Name" type="text" />
                        </div>
                        <div>
                            <input className="bg-white/50 border border-pink-500/20 rounded-lg px-4 py-3 focus:outline-none focus:border-pink-500 w-full text-white" id="email" placeholder="Email" type="email" />
                        </div>
                        <div>
                            <input className="bg-white/50 border border-pink-500/20 rounded-lg px-4 py-3 focus:outline-none focus:border-pink-500 w-full text-white" id="phone" placeholder="Phone" type="tel" />
                        </div>
                        <div>
                            <select className="bg-white/50 border border-pink-500/20 rounded-lg px-4 py-3 focus:outline-none focus:border-pink-500 w-full text-white" id="service">
                                <option value="">Select Service</option>
                                <option value="wedding">Wedding</option>
                                <option value="engagement">Engagement</option>
                                <option value="prewedding">Pre-Wedding</option>
                                <option value="reception">Reception</option>
                                <option value="entirewedding">Entire Wedding</option>
                            </select>
                        </div>
                        <div>
                            <input className="bg-white/50 border border-pink-500/20 rounded-lg px-4 py-3 focus:outline-none focus:border-pink-500 w-full text-white" id="event-date" placeholder="Event Date" type="date" />
                        </div>
                        <div>
                            <input className="bg-white/50 border border-pink-500/20 rounded-lg px-4 py-3 focus:outline-none focus:border-pink-500 w-full text-white" id="city" placeholder="City" type="text" />
                        </div>
                        <div>
                            <select className="bg-white/50 border border-pink-500/20 rounded-lg px-4 py-3 focus:outline-none focus:border-pink-500 w-full text-white" id="booking-for">
                                <option value="">Booking For</option>
                                <option value="bride">Bride</option>
                                <option value="groom">Groom</option>
                                <option value="both">Bride and Groom Both</option>
                            </select>
                        </div>
                        <div>
                            <input className="bg-white/50 border border-pink-500/20 rounded-lg px-4 py-3 focus:outline-none focus:border-pink-500 w-full text-white" id="budget" placeholder="Estimated Budget" type="text" />
                        </div>
                    </div>
                    <button className="bg-white/50 backdrop-blur-md border-t border-gray-200 py-4 px-6 rounded-lg text-sm font-medium hover:bg-neutral-100 transition-colors hover:text-black w-full tracking-wider animate-pulse" type="submit">
                        CLAIM YOUR FREE SHOOT NOW
                    </button>
                </form>
            </div>
        </section>
    )
}

export default ContactSection;
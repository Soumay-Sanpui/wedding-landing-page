const FixedSection = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-pink-500/20 backdrop-blur-md border-t border-pink-500/20 py-2 md:py-3 lg:py-4 px-4 z-50">
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
                <div className="flex items-center gap-2 md:gap-3 text-center sm:text-left">
                    <span className="text-xl md:text-2xl hidden sm:inline">🎁</span>
                    <p className="text-white text-xs sm:text-sm md:text-base">Limited Time Offer: Get your pre-wedding shoot worth ₹50,000 completely FREE!</p>
                </div>
                <div className="w-full sm:w-auto">
                    <a className="block w-full sm:w-auto px-4 md:px-6 py-2 md:py-3 bg-white/10 backdrop-blur-md border-t border-pink-500/20 rounded-lg text-xs sm:text-sm font-medium hover:bg-neutral-100 transition-colors hover:text-black text-center" href="#contact">
                        Claim Now
                    </a>
                </div>
            </div>
        </div>
    )
}

export default FixedSection;
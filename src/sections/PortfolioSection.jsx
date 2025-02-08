const PortfolioSection = () => {
    return (
        <div className="w-full py-6 px-8 relative bg-black text-white">
            <h1 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl my-4 md:my-6 lg:my-8 uppercase animate-fade-in">Portfolio</h1>
            <div className="columns-1 sm:columns-2 lg:columns-4 gap-3 mx-auto space-y-3 overflow-hidden">
                {[
                    "/01.jpg",
                    "/03.jpg",
                    "/Copy of 1.jpg",
                    "/Copy of 2.jpg",
                    "/Pujita Vidaai Pictures.jpg",
                    "/Copy of 7.jpg",
                    "/Copy of 3.jpg",
                    "/Copy of 6.jpg",
                    "/Copy of 5.jpg",
                    "/Copy of 4.jpg",
                    "/Copy of 12.jpg",
                    "/Copy of 8.jpg",
                    "/Copy of 9.jpg",
                    "/Copy of 10.jpg"
                ].map((src, index) => (
                    <div key={index} className="hover:scale-95 transition-all duration-500 cursor-pointer break-inside-avoid animate-slide-in" data-index={index}>
                        <img loading={"lazy"} alt={`portfolio-image-${index}`} src={src} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PortfolioSection;
const WeddingFilmsSection = () => {
    const videoLinks = [
        "https://www.youtube.com/embed/XH99TEOZKB4?si=ulWsOveqKWRZtqhM",
        "https://www.youtube.com/embed/8DMShUi6ZpE?si=MYJvtCtABdrzBvjS",
        "https://www.youtube.com/embed/RQf4IwI2QfI?si=J9mvFcEWse8uV4uT"
    ];

    return (
        <div className="w-full py-6 px-8 relative bg-black text-white">
            <h1 className="text-center font-bold text-3xl my-6 uppercase animate-fade-in">Wedding Films</h1>
            <div className="columns-3 gap-4 mx-auto space-y-4 overflow-hidden h-auto">
                {videoLinks.map((link, index) => (
                    <div key={index} className="hover:scale-95 transition-all duration-500 cursor-pointer break-inside-avoid animate-slide-in">
                        <iframe width="100%" height="315" src={link} title={`Wedding Film ${index + 1}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WeddingFilmsSection;
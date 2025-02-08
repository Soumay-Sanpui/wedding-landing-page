import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const WeddingFilmsSection = () => {
    const videoLinks = [
        "https://www.youtube.com/embed/XH99TEOZKB4?si=ulWsOveqKWRZtqhM",
        "https://www.youtube.com/embed/8DMShUi6ZpE?si=MYJvtCtABdrzBvjS",
        "https://www.youtube.com/embed/RQf4IwI2QfI?si=J9mvFcEWse8uV4uT"
    ];

    return (
        <div className="w-full py-6 relative bg-black text-white">
            <h1 className="text-center font-bold text-3xl my-6 uppercase animate-fade-in">Wedding Films</h1>
            <div className="max-w-4xl mx-auto"> {/* Added a max-width container for centering */}
                <Carousel showThumbs={false} infiniteLoop={true} useKeyboardArrows={true} className="mx-auto">
                    {videoLinks.map((link, index) => (
                        <div key={index} className="flex justify-center">
                            <iframe width="100%" height="315" src={link} title={`Wedding Film ${index + 1}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

export default WeddingFilmsSection;
import { useState } from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaQuoteLeft } from 'react-icons/fa';

const TestimonialsSection = () => {
    const testimonials = [
        {
            text: "At first, we were skeptical about the investment proposal, but the team explained everything clearly, and we decided to go ahead with them for our wedding. They truly care about what they're doing.",
            name: "Amit & Priya",
            location: "Mumbai, India",
            image: "/01.jpg"
        },
        {
            text: "We opted for the 200% ROI option, ensuring we received services equivalent to our investment. Their transparency throughout the process was commendable, and the quality of their work was incredible!",
            name: "Sneha & Karan",
            location: "Mumbai, India",
            image: "/03.jpg"
        },
        {
            text: "We chose them for their exceptional storytelling style—they capture emotions beautifully. The ROI plan was an added bonus, and we appreciated their honesty throughout.",
            name: "Riya & Arjun",
            location: "Delhi, India",
            image: "/Copy of 1.jpg"
        },
        {
            text: "Choosing this team for our pre-wedding shoot was the best decision we made. They truly exceeded our expectations!",
            name: "Anjali & Raj",
            location: "Mumbai, India",
            image: "/Copy of 2.jpg"
        },
        {
            text: "Every moment of our shoot was magical! The team's creativity and passion shone through in every shot.",
            name: "Sita & Mohan",
            location: "Bangalore, India",
            image: "/Copy of 3.jpg"
        },
        {
            text: "Once again, we were thrilled with our decision to work with this team for our pre-wedding shoot. They consistently exceed expectations!",
            name: "Neha & Vikram",
            location: "Delhi, India",
            image: "/Copy of 4.jpg"
        }
    ];

    return (
        <section className="py-8 md:py-20 bg-[#292929] mt-[30vh]" id="portfolio">
            <div className="container mx-auto px-4 max-w-5xl">
                <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-16">
                    What Our Clients Say
                </h2>

                <Carousel 
                    showArrows={true} 
                    autoPlay={true} 
                    interval={10000} 
                    infiniteLoop={true} 
                    showThumbs={false} 
                    showStatus={false}
                    className="max-w-4xl mx-auto testimonial-carousel"
                    renderArrowPrev={(clickHandler, hasPrev) =>
                        hasPrev && (
                            <button
                                onClick={clickHandler}
                                className="absolute left-0 z-10 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white hover:text-pink-500 transition-colors"
                            >
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                                </svg>
                            </button>
                        )
                    }
                    renderArrowNext={(clickHandler, hasNext) =>
                        hasNext && (
                            <button
                                onClick={clickHandler}
                                className="absolute right-0 z-10 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white hover:text-pink-500 transition-colors"
                            >
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
                                </svg>
                            </button>
                        )
                    }
                >
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card px-8 py-6 md:px-16 md:py-16">
                            <div className="max-w-3xl mx-auto">
                                <div className="flex justify-center mb-6">
                                    <FaQuoteLeft className="text-pink-500 text-4xl" />
                                </div>
                                <p className="text-white text-base md:text-lg italic mb-8 leading-relaxed px-4">
                                    {testimonial.text}
                                </p>
                                <div className="flex items-center justify-center gap-4 mt-8">
                                        <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center ring-2 ring-pink-500 ring-offset-2 ring-offset-[#292929]">
                                            <span className="text-pink-500 text-4xl"><img loading={"lazy"} src={testimonial.image} className="w-16 h-16 rounded-full object-cover" alt={testimonial.name} /></span>
                                        </div>
                                    </div>
                                <div className="text-center mt-4">
                                    <h4 className="font-semibold text-lg text-pink-500">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-sm text-gray-400">
                                        {testimonial.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </section>
    )
}

export default TestimonialsSection;
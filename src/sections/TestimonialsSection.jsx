import { useState, useCallback } from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaQuoteLeft } from 'react-icons/fa';
import { getOptimizedImageUrl } from '../utils/imageUtils';

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

    const renderTestimonialImage = useCallback(({ image, name }) => (
        <img 
            loading="lazy"
            decoding="async"
            src={getOptimizedImageUrl(image)} 
            className="w-16 h-16 rounded-full object-cover" 
            alt={`${name} testimonial photo`}
            width={64}
            height={64}
            fetchPriority="low"
        />
    ), []);

    return (
        <section 
            className="py-4 md:py-20 bg-[#292929] mt-[30vh]" 
            id="testimonials" 
            aria-label="Client Testimonials"
        >
            <div className="container mx-auto px-4 max-w-5xl">
                <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-10">
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
                                aria-label="Previous testimonial"
                            >
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
                                aria-label="Next testimonial"
                            >
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
                                </svg>
                            </button>
                        )
                    }
                    renderIndicator={(onClickHandler, isSelected, index) => (
                        <button
                            type="button"
                            onClick={onClickHandler}
                            className={`dot ${isSelected ? 'selected' : ''}`}
                            style={{ margin: '0 4px' }}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    )}
                >
                    {testimonials.map((testimonial, index) => (
                        <article 
                            key={index} 
                            className="testimonial-card px-8 py-8 md:px-16 md:py-10"
                            role="tabpanel"
                            aria-label={`Testimonial from ${testimonial.name}`}
                        >
                            <div className="max-w-3xl mx-auto">
                                <div className="flex justify-center mb-4" aria-hidden="true">
                                    <FaQuoteLeft className="text-pink-500 text-4xl" />
                                </div>
                                <blockquote className="text-white text-base md:text-lg italic mb-4 leading-relaxed px-4">
                                    {testimonial.text}
                                </blockquote>
                                <footer className="flex flex-col items-center justify-center gap-4 mt-4">
                                    <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center ring-2 ring-pink-500 ring-offset-2 ring-offset-[#292929]">
                                        {renderTestimonialImage(testimonial)}
                                    </div>
                                    <div className="text-center mt-2">
                                        <cite className="font-semibold text-lg text-pink-500 not-italic">
                                            {testimonial.name}
                                        </cite>
                                        <p className="text-sm text-gray-400">
                                            {testimonial.location}
                                        </p>
                                    </div>
                                </footer>
                            </div>
                        </article>
                    ))}
                </Carousel>
            </div>
        </section>
    );
};

export default TestimonialsSection;
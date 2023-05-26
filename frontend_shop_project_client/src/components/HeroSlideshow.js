import { sliderImages } from "../sliderImages";
import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const HeroSlideshow = ({slides}) => {

    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return ( 
        <section className="hero-slideshow">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />

            {sliderImages.map((slide, index) => {
                return (
                    <div className={ index === current ? 'slide active': 'slide'} key={index}>
                        {index === current && (
                            <img src={slide.image} alt="vehicle-image" className="slide-vehicle-image" />
                        )}
                    </div>
                )
            })}

        </section>
     );
}
 
export default HeroSlideshow;
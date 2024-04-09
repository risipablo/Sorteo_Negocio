// Carousel.js
import { useState,useRef } from 'react';
import '../estilos/carousel.css';

const images = [
"../src/imagenes/1.jpg",
    '../src/imagenes/2.jpg',
    '../src/imagenes/3.jpg'
];

    const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const touchStartX = useRef(null);

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };


    const handleTouchStart = (event) => {
        touchStartX.current = event.touches[0].clientX;
    };
    
    const handleTouchEnd = (event) => {
        const touchEndX = event.changedTouches[0].clientX;
        const deltaX = touchStartX.current - touchEndX;
    
        if (Math.abs(deltaX) > 50) {
        if (deltaX > 0) {
            goToNextSlide();
        } else {
            goToPrevSlide();
        }
        }
    };
    

    return (
        <div className="carousel"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}>
        <button className="prev" onClick={goToPrevSlide}>&#10094;</button>
        <button className="next" onClick={goToNextSlide}>&#10095;</button>
        {images.map((image, index) => (
            <div
            key={index}
            className={index === currentIndex ? 'slide active' : 'slide'}
            >
            <img src={image} alt={`Slide ${index + 1}`} />
            </div>
        ))}
        </div>
    );
};

export default Carousel;

import React, {useEffect, useState} from 'react';

const SliderImage = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(currentIndex => currentIndex + 1);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if(currentIndex >= slides.length){
            setCurrentIndex(0);
        }
    }, [currentIndex, slides.length]);

    return (
        <div className="slider">
            <div className="arrow-left" onClick={goToPrevious}>❮</div>
            <div className="arrow-right" onClick={goToNext}>❯</div>
            <img className="slide" src={slides[currentIndex]} alt="noImage"></img>
        </div>
    );
};

export default SliderImage;
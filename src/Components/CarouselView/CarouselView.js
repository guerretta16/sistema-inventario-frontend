import React, { useState } from "react";
import BtnSlider from "./BtnCarousel";
import './style.css';

const CarouselView = ({ images, filenames }) => {
  const [fileImg, setFileImg] = useState(JSON.parse(images));
  const [fileNames, setFileNames] = useState(JSON.parse(filenames));
  const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== fileImg.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === fileImg.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(fileImg.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className="container-slider">
            {fileImg.map((obj, index) => {
                return (
                    <div
                    key={index}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img 
                        src={`http://localhost:8000${obj}`} 
                        />
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {fileImg.map((item, index) => (
                    <div
                    key={index} 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
};

export default CarouselView;

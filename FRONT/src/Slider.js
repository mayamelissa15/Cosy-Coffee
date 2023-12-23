
import "./cosy.css"
import BtnSlider from "./BtnSlider"
import { useState } from 'react';

const Slider = ({props}) => {
    const [slideIndex, setSlideIndex] = useState(1);
    const cardsPerPage = 3; // Nombre d'images à afficher par page
  
    const nextSlide = () => {
      if (slideIndex !== Math.ceil(props.length / cardsPerPage)) {
        setSlideIndex(slideIndex + 1);
      } else {
        setSlideIndex(1);
      }
    };
  
    const prevSlide = () => {
      if (slideIndex !== 1) {
        setSlideIndex(slideIndex - 1);
      } else {
        setSlideIndex(Math.ceil(props.length / cardsPerPage));
      }
    };
  
    const startIndex = (slideIndex - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const visibleCards = props.slice(startIndex, endIndex);
  
    return (
      <div className="cosy-page">
        <div className="cosy-header">
          <div className="">
           <h1 className="text-2xl text-slate-800 font-semibold ">Our Falvors</h1>
            <p className="text-lg font-normal text-slate-800  py-2 ">  Our café offers a carefully curated selection of delightful and cosy treats</p>
          </div>
          <div className="slide ">
           <div className="bg-white rounded-full p-8 hover:bg-[#F5F5DC] hover:text-white duration-500"><BtnSlider moveSlide={prevSlide} direction="prev" ></BtnSlider></div> 
           <div className="bg-white rounded-full p-8 hover:bg-[#F5F5DC] hover:text-white duration-500" > <BtnSlider moveSlide={nextSlide} direction="next" ></BtnSlider></div>
          </div>
        </div>
  
        <div className="cosy-cards">
          {visibleCards.map((props, index) => {
            return (
              <div
                key={index}
                className={
                  slideIndex === Math.ceil(index / cardsPerPage) + 1
                    ? "cosy-card activ-dest"
                    : "cosy-card"
                }
              >
                <img src={props.cardImg} alt={props.title} />
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  
 
export default Slider;
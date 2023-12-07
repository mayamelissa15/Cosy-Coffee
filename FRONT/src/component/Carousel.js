import { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

export default function Carousel({ slides }) {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (<div className="overflow-hidden relative">
      <div
        className={`flex transition ease-out duration-40`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="text-center ">
            <img src={slide.image}  alt={slide.title} style={{
                width: "500px", // Changer la largeur ici
                height: "300px", // Changer la hauteur ici
              }} />
            <p>{slide.title}</p>
          </div>
        ))}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex px-1 text-xl">
        <button onClick={previousSlide} className="text-pink-500">
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide} className="text-pink-500">
          <BsFillArrowRightCircleFill />
        </button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-5 h-5 cursor-pointer  ${
                i == current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

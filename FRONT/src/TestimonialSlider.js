import React, { useState } from "react";
import "./style.css"; 
import john from "./Assets/637a6b7d8d9dda3835e69705_man_avatar.png";

const TestimonialSlider = () => {
    const testimonials = [
        { text: "Je viens au Coffee Haven depuis des années, et c'est mon endroit préféré pour prendre mon café du matin.", author: "John doe" , image:john },
        { text: "Je viens au Coffee Haven depuis des années, et c'est mon endroit préféré pour prendre mon café du matin.", author: "Sarah Miller" , image:john },
        { text: "Je viens au Coffee Haven depuis des années, et c'est mon endroit préféré pour prendre mon café du matin.", author: "Taylor smith" , image:john },
        { text: "Je viens au Coffee Haven depuis des années, et c'est mon endroit préféré pour prendre mon café du matin.", author: "Janett scott" , image:john },
        { text: "Je viens au Coffee Haven depuis des années, et c'est mon endroit préféré pour prendre mon café du matin.", author: "maria Gomez" , image:john },
        
      ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const perPage = 1;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + perPage);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => prevIndex - perPage);
  };

  const displayedTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + perPage
  );

  return (
   <div className="bg-slate-50 p-4">
     <div className="m-16  testimonial-slider shadow-md bg-white  p-8">

<h1 className="text-3xl  text-black font-medium text-center">What people say about us ! </h1>
<span className="text-center bg-black w-2 h-2"></span>
<p className="py-4 text-lg font-normal text-[#19182580] text-center p-2 m-2">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
<div className=" testimonial-list  grid grid-cols-1 md:grid-cols-3 gap-4 m-4 p-2
">
{displayedTestimonials.map((testimonials, index) => (
<div key={index} className=" testimonial p-4 bg-white rounded-3xl shadow-md hover:shadow-md hover:duration-500 h-64 text-pink-500">
<img src={testimonials.image} alt={testimonials.author} className="mt-[-40px] mb-4 h-16 w-16 object-cover rounded-full mx-auto" />
<p className="text-lg text-black font-medium text-center">{testimonials.author}</p>
<p className="text-md font-normal text-[#19182580] text-center p-6 ">{testimonials.text}</p>
</div>
))}
</div>
<div className="slider-controls mt-4 text-center">
<button
onClick={handlePrev}
disabled={currentIndex === 0}
className="btn btn-primary bg-[#7B3F00] text-white px-6 py-2 m-2 rounded-full hover:shadow-md  hover:bg-black duration-500"
>
↽
</button>
<button
onClick={handleNext}
disabled={currentIndex + perPage >= testimonials.length}
className="btn btn-primary bg-[#7B3F00] text-white px-6 py-2 m-2 rounded-full hover:shadow-md  hover:bg-black duration-500"
>
⇀
</button>
</div>
</div>
   </div>
  );
};
export default TestimonialSlider;

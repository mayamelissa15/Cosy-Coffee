import BasDePage from "./BasDePage";
import Formulaire from "./Formulaire";
import Menu from "./Menu";
import Navbar from "./Navbar";
import Services from "./Services";
import Slider from "./Slider";
import TestimonialSlider from "./TestimonialSlider";
import Xp from "./Xp";
import coffee1 from "./Assets/6385f858d5a2328664cd75e2_cup_of_coffee (1).png"
import coffee2 from "./Assets/6385f88f591f6fc670d5d76e_cup_of_coffee (3).png"
import coffee3 from "./Assets/6385f89b4157993b872fa1f6_cup_of_coffee (4).png"
import coffee4 from "./Assets/6385f8a7e12aa03b71fe68c3_cup_of_coffee (5).png"
import coffee5 from "./Assets/6385f8b5d5a2324a82cd7a03_cup_of_coffee (6).png"
import coffee6 from "./Assets/6385f8edd5a2324496cd7c19_cup_of_coffee (8).png"
import coffee7 from "./Assets/cafe6.png"
import pastry1 from "./Assets/p1.png"
import pastry2 from "./Assets/p2.png"
import pastry3 from "./Assets/p3.png"
import pastry4 from "./Assets/p4.png"
import pastry5 from "./Assets/p5.png"
import pastry6 from "./Assets/p6.png"
import UserMenu from "./UserMenu";
import Banniere from "./Banniere";
const HomePage = () => {
    let cards = [
        {cardImg : coffee1 },
        {cardImg : coffee2 },
        {cardImg : coffee3 },
        {cardImg : coffee4 },
        {cardImg : coffee5 },
        {cardImg : coffee6 },
        {cardImg : coffee7}
    ]
    let pics = [
      {cardImg : pastry1 },
      {cardImg : pastry2 },
      {cardImg : pastry3 },
      {cardImg : pastry4 },
      {cardImg : pastry5 },
      {cardImg : pastry6 }
    ]
    return (  <div className="scroll-smooth  bg-white">
    <Navbar></Navbar>
   
    <Menu></Menu>
    <Services></Services>
    <Slider props={pics} ></Slider>
    <Formulaire></Formulaire>
    <Xp></Xp>
    <Slider props={cards} ></Slider>
    <TestimonialSlider ></TestimonialSlider>
     <Banniere></Banniere>
     <BasDePage></BasDePage>
    {/* we gonna add here qlq marques nkhdmo m3ahom espressoo  */}
  </div> );
}
 
export default HomePage;
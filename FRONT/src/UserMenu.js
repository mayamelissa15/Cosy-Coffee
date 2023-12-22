import React from "react";
import Element from "./Element";
import Navigation from "./Navigation";
import coffee1 from "./Assets/6385f858d5a2328664cd75e2_cup_of_coffee (1).png"
import coffee2 from "./Assets/6385f88f591f6fc670d5d76e_cup_of_coffee (3).png"
import coffee3 from "./Assets/6385f89b4157993b872fa1f6_cup_of_coffee (4).png"
import coffee4 from "./Assets/6385f8a7e12aa03b71fe68c3_cup_of_coffee (5).png"
import coffee5 from "./Assets/6385f8b5d5a2324a82cd7a03_cup_of_coffee (6).png"
import coffee6 from "./Assets/6385f8edd5a2324496cd7c19_cup_of_coffee (8).png"
import coffee7 from "./Assets/cafe6.png"
import Navbar from "./Navbar";
import BasDePage from "./BasDePage";
const menuData = [
  {
    title: "Espresso",
    description: "A strong and concentrated coffee served in small amounts.",
    price: 5.99,
    img: coffee1,
  },
  {
    title: "Latte",
    description: "A coffee drink made with espresso and steamed milk.",
    price: 4.99,
    img: coffee2,
  },
  {
    title: "Cappuccino",
    description: "A coffee drink that combines espresso, steamed milk, and frothed milk.",
    price: 4.99,
    img: coffee4,
  },
  {
    title: "Americano",
    description: "A diluted espresso with hot water, similar to drip coffee.",
    price: 4.99,
    img: coffee3,
  },
  {
    title: "Macchiato",
    description: "An espresso with a small amount of frothed milk.",
    price: 4.99,
    img: coffee5,
  },
  {
    title: "Mocha",
    description: "A chocolate-flavored variant of a latte, often with whipped cream.",
    price: 4.99,
    img: coffee6,
  },
  {
    title: "Iced Coffee",
    description: "Chilled coffee served over ice, often sweetened and with milk.",
    price: 4.99,
    img: coffee7,
  },
];

const UserMenu = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Navigation />
      <div className="grid grid-cols-2 mx-12 ">
          {menuData.map((item, index) => (
        <div className="m-12 ">
            <Element
              key={index}
              title={item.title}
              description={item.description}
              price={item.price}
              img={item.img}
            />
        </div>
          ))}
      </div>
      <BasDePage></BasDePage>  
      
    </div>
  );
};

export default UserMenu;

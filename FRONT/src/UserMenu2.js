import React from "react";
import Element from "./Element";
import Navigation from "./Navigation";
import pastry1 from "./Assets/p1.png"
import pastry2 from "./Assets/p2.png"
import pastry3 from "./Assets/p3.png"
import pastry4 from "./Assets/p4.png"
import pastry5 from "./Assets/p5.png"
import pastry6 from "./Assets/p6.png"
import pastry7 from "./Assets/p7.png"
import pastry8 from "./Assets/p8.png"
import pastry9 from "./Assets/p9.png"
import pastry10 from "./Assets/p10.png"
import pastry11 from "./Assets/p11.png"
import Navbar from "./Navbar";
import BasDePage from "./BasDePage";
const menuData = [
    {
      title: "Croissant fruité",
      description: "A flaky and buttery French pastry.",
      price: 5.99,
      img: pastry1,
    },
    {
      title: "Danish",
      description: "A sweet and multilayered pastry filled with fruit, cream, or other ingredients.",
      price: 4.99,
      img: pastry2,
    },
    {
      title: "Croissant",
      description: "A rolled pastry filled with cinnamon and sugar, typically topped with icing.",
      price: 4.99,
      img: pastry4,
    },
    {
      title: "Palmier",
      description: "A palm-shaped pastry made of puff pastry, sugar, and sometimes cinnamon.",
      price: 5.99,
      img: pastry1,
    },
    {
      title: "Éclair",
      description: "A long, thin pastry filled with cream and topped with icing.",
      price: 4.99,
      img: pastry2,
    },
    {
      title: "Profiterole",
      description: "A small, round pastry filled with cream or custard, often served with chocolate sauce.",
      price: 4.99,
      img: pastry4,
    },
    {
      title: "Napoleon",
      description: "A layered pastry with flaky pastry, pastry cream, and icing.",
      price: 4.99,
      img: pastry3,
    },
    {
      title: "Macaron",
      description: "A sweet meringue-based pastry made with egg white, icing sugar, granulated sugar, almond meal, and food coloring.",
      price: 4.99,
      img: pastry5,
    },
    {
      title: "Chocolate Tart",
      description: "A tart filled with rich and decadent chocolate ganache.",
      price: 4.99,
      img: pastry6,
    },
    {
      title: "Iced Pastry",
      description: "Chilled pastry served over ice, often sweetened and with milk.",
      price: 4.99,
      img: pastry7,
    },
  ];
  

const UserMenu2 = () => {
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

export default UserMenu2;

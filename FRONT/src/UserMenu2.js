import React from "react";
import {Link} from 'react-router-dom'
import Element from "./Element";
import ElementGauche from "./ElementGauche"
import coffee1 from "./Assets/6385f858d5a2328664cd75e2_cup_of_coffee (1).png"
import coffee2 from "./Assets/6385f88f591f6fc670d5d76e_cup_of_coffee (3).png"
import coffee3 from "./Assets/6385f89b4157993b872fa1f6_cup_of_coffee (4).png"
import coffee4 from "./Assets/6385f8a7e12aa03b71fe68c3_cup_of_coffee (5).png"
import coffee5 from "./Assets/6385f8b5d5a2324a82cd7a03_cup_of_coffee (6).png"
import coffee6 from "./Assets/6385f8edd5a2324496cd7c19_cup_of_coffee (8).png"
import Navbar from "./Navbar";

const UserMenu = () => {
    
    return (<div className=" ">
        <Navbar></Navbar>
 {/* je dois faire une fonction qui va handle on click  */}
        <div className="flex flex-row justify-center m-16">
        <div>
        <p className="text-lg font-medium px-8 pt-4 text-[#7B3F00]">Pastry</p>
        <Link to="/UserMenu" ><div className="border-b h-4 border-[#7B3F00] w-32"></div></Link>
        </div>
        <div>
        <p className="text-lg font-medium px-8 pt-4 text-[#7B3F00]">Coffee</p>
        <Link to="/UserMenu2" ><div className="border-b h-4 border-[#7B3F00] w-32" ></div></Link>
        </div>
        </div>

       <div className="flex justify-around">
       <div className="my-12">
        <Element title="Cappucino" description="un leger Cappucino avec une pate feuilleté aerienne " price="150" img={coffee5} ></Element>
        <ElementGauche title="Espresso Laté" description="une Espresso Laté suculente saupoudrée de sucre glace fondant  " price="25" img={coffee1} ></ElementGauche>
        <Element title="Cappucino" description=" une Espresso Laté au chocolat suculente saupoudrée de sucre glace fondant" price="160" img={coffee2} ></Element>
        </div>     
        <div className="my-12">
        <Element title="Cappucino" description="un leger Cappucino avec une pate feuilleté aerienne " price="150" img={coffee3} ></Element>
        <ElementGauche title="Espresso Laté" description="une Espresso Laté suculente saupoudrée de sucre glace fondant  " price="25" img={coffee4} ></ElementGauche>
        <Element title="Cappucino" description=" une Espresso Laté au chocolat suculente saupoudrée de sucre glace fondant" price="160" img={coffee6} ></Element>
        </div>     
       </div>
    </div>  );
}
 
export default UserMenu;
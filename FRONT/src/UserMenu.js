import React from "react";
import {Link} from 'react-router-dom'
import Element from "./Element";
import ElementGauche from "./ElementGauche"
import pastry1 from "./Assets/6385d28a5061eebf3f8e4397_Bun (1).png"
import pastry2 from "./Assets/6385d2345061ee20188e3ef3_Bun (3).png"
import pastry3 from "./Assets/6385d27eecbbb40dc8b77816_Bun (4).png"
import pastry4 from "./Assets/6391e44823d64f1496e0d3ed_Bun (6).png"
import pastry5 from "./Assets/6385d24b2e29bd1c59e9c6fe_Croissant.png"
import pastry6 from "./Assets/6391e2ef0f48f9c3a8431336_Donut (1).png"
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
        <Element title="Croissant" description="un leger croissant avec une pate feuilleté aerienne " price="150" img={pastry5} ></Element>
        <ElementGauche title="Viennoiserie" description="une viennoiserie suculente saupoudrée de sucre glace fondant  " price="25" img={pastry1} ></ElementGauche>
        <Element title="Croissant" description=" une viennoiserie au chocolat suculente saupoudrée de sucre glace fondant" price="160" img={pastry2} ></Element>
        </div>     
        <div className="my-12">
        <Element title="Croissant" description="un leger croissant avec une pate feuilleté aerienne " price="150" img={pastry5} ></Element>
        <ElementGauche title="Viennoiserie" description="une viennoiserie suculente saupoudrée de sucre glace fondant  " price="25" img={pastry1} ></ElementGauche>
        <Element title="Croissant" description=" une viennoiserie au chocolat suculente saupoudrée de sucre glace fondant" price="160" img={pastry2} ></Element>
        </div>     
       </div>
    </div>  );
}
 
export default UserMenu;
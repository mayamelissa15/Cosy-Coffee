import React from 'react';
import {Link} from 'react-router-dom'
import './style.css'
import logo from './Assets/cosy_coffee-removebg-preview.png'
const Navbar = () => {
    return ( <div class=" shadow-md   ">
    <navbar class=" bg-white flex justify-between gap-2 text-md text-black font-medium   ">
     <logo className="p-6">
        CosyCoffe
    {/* <img src={logo} className='w-16 h-16' ></img> */}
     </logo>
 
 <div className='p-6 m-2' >
     <ul class="flex justify-evenly gap-12">
         <li ><Link to="/" class="nav-Links "  >Home</Link></li>
         <li ><Link to="/UserMenu" class="nav-Links "  >Menu</Link></li>
         <li ><Link to="/Formulaire" class="nav-Links "  >Reservation</Link></li> 
         {/* <!-- drop down here books/Tables --> */}
         <li ><Link to="/About" class="nav-Links "  >About us</Link></li>
         {/* <!-- Hostorique/produit/PageInstagram/Reseaux --> */}
     </ul>
 </div>
 <div class="flex justify-between gap-2 p-4">
 <Link to='/Registration'><button className="bg-[#7B3F00] text-white px-6 py-2 m-2 rounded-full hover:shadow-md  hover:bg-black duration-500 ">Sign up </button></Link>
 <Link to='/Login'>
 <button class=" px-6 py-2 m-2  rounded-full hover:shadow-md  duration-500 ">Login </button>
 </Link>
 
 </div>
    </navbar>
 </div> );
}
 
export default Navbar;
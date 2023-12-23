import profile from './Assets/account_circle.png'
import { Link } from 'react-router-dom';
const NavbarNoAction = () => {
    return ( <div>
        <div class=" shadow-md   ">
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
 
 <Link to='/AdminMenu'>
<div class="flex items-center my-8 gap-4 mx-4 ">
 <img src={profile} className=''></img>
 <p className='text-md text-black font-medium hover:font-semibold'>John doe </p>
</div>
 </Link>
 
    </navbar>
 </div>
    </div> );
}
 
export default NavbarNoAction;
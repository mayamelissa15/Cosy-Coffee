
import { Link } from "react-router-dom";
const Sidebar = () => {
    return ( <div>
        <div className="bg-[#F5F5DC] h-screen  text-[#7B3F00]"> 
<div className="py-6 px-4">
        <h1 className="text-2xl font-bold text-center">CoffeCosy Settings</h1>
      </div>
      <div className="">
        <h1 className="text-xl font-bold text-center">Admin Profil</h1>
      </div>
      
      <ul className="space-y-4 p-4">
        <li>
          <Link to="/AdminMenu" className="p-3 block hover:bg-[#FFF8DC] p-1 rounded">
            Admin information
          </Link></li>
        <li>
          <Link to="/AdminMenu/CoffeMenu" className="p-3 block hover:bg-[#FFF8DC] p-1 rounded">
            Coffe Menu
          </Link>    </li>
        <li>
          <Link to="/AdminMenu/PastryMenu" className="p-3 block hover:bg-[#F5FDC] p-1 rounded">
            Pastry Menu
          </Link>    </li>
        <li>
          <Link to="/AdminMenu/Reservation" className="p-3 block hover:bg-[#FFF8DC] p-1 rounded">
            Reservation
          </Link>  </li>
        <li>
          <Link to="/AdminMenu/Staff" className="p-3 block hover:bg-[#FFF8DC] p-1 rounded">
            Staff information
          </Link>    </li>
      </ul>
  </div>
    </div> );
}
 
export default Sidebar;
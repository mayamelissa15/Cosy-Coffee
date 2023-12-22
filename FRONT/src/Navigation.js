import {Link} from 'react-router-dom'
const Navigation = () => {
    return ( <div>
         <div className="flex flex-row justify-center m-16">
        <div>
        <p className="text-lg font-medium px-8 pt-4 text-[#7B3F00]">Pastry</p>
        <Link to="/UserMenu2" ><div className="border-b h-4 border-[#7B3F00] w-32"></div></Link>
        </div>
        <div>
        <p className="text-lg font-medium px-8 pt-4 text-[#7B3F00]">Coffee</p>
        <Link to="/UserMenu" ><div className="border-b h-4 border-[#7B3F00] w-32" ></div></Link>
        </div>
        </div>
    </div> );
}
 
export default Navigation;
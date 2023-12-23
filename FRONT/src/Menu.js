import coffee from './Assets/coffee.png';
import { Link } from 'react-router-dom';
const Menu = () => {
    return ( <div className='flex flex-row gap-4'>
        <div className="pl-32 py-32 ">
       <h1 className=" my-16 text-4xl font-bold  ">
     Where every <span className="text-[#7B3F00]" > coffee </span> has its own story
     </h1>
     <p className="my-6 text-lg font-normal text-slate-800">
     Welcome to the Cozy Literary Café, the perfect place for coffee and book enthusiasts.
     Our café offers a carefully curated selection of delightful beverages, fresh pastries, and a snug reading book.
     </p>
<Link to='/formulaire'>
     <div className="flex flex-row text-xs font-medium">
     <button type="submit" className="cursor-pointer bg-[#7B3F00] mx-auto text-white px-6 py-3 mx-2 rounded-full hover:shadow-md  hover:bg-[#F5F5DC] hover:text-[#7B3F00] duration-500 ">Command</button>
     </div></Link>
            </div>
<img src={coffee} className='w-full h-full py-2'></img>
        </div> );
}
 
export default Menu;
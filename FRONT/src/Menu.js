import coffee from './Assets/6378d1abab345038ecf839cb_coffee_cookies-p-800.png';
const Menu = () => {
    return ( <div className='flex flex-row gap-4'>
        <div className="pl-32 py-32 ">
       <h1 className=" my-16 text-4xl font-bold  ">
     Where every <span className="text-[#7B3F00]" > coffee </span> has its own story
     </h1>
     <p className="my-6 text-lg font-normal text-[#19182580]">
     Welcome to the Cozy Literary Café, the perfect place for coffee and book enthusiasts.
     Our café offers a carefully curated selection of delightful beverages, fresh pastries, and a snug reading book.
     </p>

     <div className="flex flex-row text-xs font-medium">
     <button type="submit" className="cursor-pointer bg-[#7B3F00] mx-auto text-white px-6 py-3 mx-2 rounded-full hover:shadow-md  hover:bg-black duration-500 ">Command</button>
     </div>
            </div>
<img src={coffee} className='w-[700px]'></img>
        </div> );
}
 
export default Menu;
import React from "react";
import Sidebar from "./Sidebar";


const PastryMenu = () => {
  return (
    
    <div className=" flex justify-between gap-2 ">
     <div className=" w-1/5"><Sidebar></Sidebar>
     </div> 
  <div className=" w-4/5 m-8">
  <div class=" ">
<div class="mt-4 flex flex-row-reverse">
    <button class="bg-slate-50 text-slate-700 px-6 py-2 mx-2 rounded-full hover:shadow-md  hover:bg-black duration-500 hover:text-white">add</button>
  </div>
<div class="max-w-7xl ">
  <table class="min-w-full bg-white  ">

    <thead>
      <tr>
        <th class="text-md text-slate-600 font-medium border-b py-4">Patisserie</th>
        <th class="text-md text-slate-600 font-medium border-b py-4">Description</th>
        <th class="text-md text-slate-600 font-medium border-b py-4">Prix</th>
        <th class="text-md text-slate-600 font-medium border-b py-4">Actions</th>
      </tr>
    </thead>
    <tbody>
      
      <tr className="hover:bg-slate-50 duration-500">
        <td class="text-md font-normal text-[#19182580]  py-3 border-b p-4">Patisserie A</td>
        <td class="text-md font-normal text-[#19182580]  py-3 border-b p-4">Description du la patisserie A</td>
        <td class="text-md font-normal text-[#19182580]  py-3 border-b p-4">$2.50</td>
        
        <td class="border-b py-4  ">
          
          <button class="mr-4 py-3 px-4 rounded-full border-0 text-md font-normal
    bg-slate-50 text-slate-700
      hover:bg-black hover:text-white  duration-500">modify</button>
          <button class="mr-4 py-3 px-4 rounded-full border-0 text-md font-normal
    bg-slate-50 text-slate-700
      hover:bg-black hover:text-white  duration-500">Delete</button>
          
        </td>
      </tr>
      
    </tbody>
  </table>
</div>

</div>



    </div>
    </div>
    
  );
} 
export default PastryMenu;

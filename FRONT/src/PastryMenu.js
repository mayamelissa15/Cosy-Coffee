import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";


const PastryMenu = () => {

    const [Pastry, setPastry] = useState([])
    useEffect(()=>{
        const fetchAllPastry = async ()=>{
            try{
                const res =await axios.get('http://localhost:3000/PastryMenu') 
                setPastry(res.data)
            }catch(err){
                console.log('erreur ',err)
            }
        } 
        fetchAllPastry()
    },[])

    const handleDelete = async (IdPatisserie)=>{
      try{
          await axios.delete("http://localhost:3000/PastryMenu/"+IdPatisserie)
          window.location.reload() 
      }catch(err){
          console.log('ERREUR AXIOS',err)
      }
  }  

  return (
    
    <div className=" flex justify-between gap-2 ">
<div className="h-screen w-1/5 text-white"> 
<Sidebar></Sidebar>
  </div>
  <div className=" w-4/5 m-8">
  <div class=" ">

<div class="max-w-7xl ">
  <table class="min-w-full bg-white  ">

    <thead>
      <tr>
      <th class="text-md text-slate-600 font-medium border-b py-4"></th>
        <th class="text-md text-slate-600 font-medium border-b py-4">Patisserie</th>
        <th class="text-md text-slate-600 font-medium border-b py-4">Description</th>
        <th class="text-md text-slate-600 font-medium border-b py-4">Prix</th>
        <th class="text-md text-slate-600 font-medium border-b py-4">Actions</th>
      </tr>
    </thead>
    <tbody>
      
      {Pastry.map((element)=>(
        <tr className="hover:bg-slate-50 duration-500">
        <td class="text-md font-normal text-[#19182580]  py-3 border-b p-4">{element.IdPatisserie}</td>
        <td class="text-md font-normal text-[#19182580]  py-3 border-b p-4">{element.Name}</td>
        <td class="text-md font-normal text-[#19182580]  py-3 border-b p-4">{element.Description}</td>
        <td class="text-md font-normal text-[#19182580]  py-3 border-b p-4">{element.PRICE}</td>
        <td class="border-b py-4  ">
          
        <button className="Update mr-4 py-3 px-4 rounded-full border-0 text-md font-normal
    bg-green-500 text-white
      hover:bg-green-400 hover:text-white  duration-500"><Link to={`/UpdatePastry/${element.IdPatisserie}`}>Update</Link></button>
          <button className="mr-4 py-3 px-4 rounded-full border-0 text-md font-normal
    bg-red-400 text-white
      hover:bg-red-500 hover:text-white  duration-500" onClick={()=>handleDelete(element.IdPatisserie)}>Delete</button>
          
        </td>
      
      </tr>





      ))}
      
    </tbody>
  </table>
  <div class="mt-4 flex flex-row-reverse">
   <Link to='/AddingPastry'> <button class="mr-4 py-3 px-4 rounded-full border-0 text-md font-normal
    bg-green-500 text-white
      hover:bg-green-400 hover:text-white  duration-500">add</button></Link>
  </div>
</div>

</div>



    </div>
    </div>
    
  );
} 
export default PastryMenu;

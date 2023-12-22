import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";


const CoffeMenu = () => {

    const [cafe, setcafe] = useState([])
    useEffect(()=>{
        const fetchAllcafe = async ()=>{
            try{
                const res =await axios.get('http://localhost:3000/CoffeMenu') 
                setcafe(res.data)
            }catch(err){
                console.log('erreur ',err)
            }
        } 
        fetchAllcafe()
    },[])

    const handleDelete = async (IdCafe)=>{
      try{
          await axios.delete("http://localhost:3000/CoffeMenu/"+IdCafe)
          window.location.reload() 
      }catch(err){
          console.log('ERREUR AXIOS',err)
      }
  }  

  return (
    
    <div className=" flex justify-between gap-2 ">
<div className="bg-gray-800 w-1/5 text-white"> 
<Sidebar></Sidebar>
  </div>
  <div className=" w-4/5 m-8">
  <div class=" ">

<div class="max-w-7xl ">
  <table class="min-w-full bg-white  ">

    <thead>
      <tr>
      <th class="text-md text-slate-600 font-medium border-b py-4"></th>
        <th class="text-md text-slate-600 font-medium border-b py-4">Nom du Café</th>
        <th class="text-md text-slate-600 font-medium border-b py-4">Description</th>
        <th class="text-md text-slate-600 font-medium border-b py-4">Prix</th>
        <th class="text-md text-slate-600 font-medium border-b py-4">Actions</th>
      </tr>
    </thead>
    <tbody>
      
      {cafe.map((element)=>(
        <tr className="hover:bg-slate-50 duration-500">
        <td class="text-md font-normal text-[#19182580]  py-3 border-b p-4">{element.IdCafe}</td>
        <td class="text-md font-normal text-[#19182580]  py-3 border-b p-4">{element.Name}</td>
        <td class="text-md font-normal text-[#19182580]  py-3 border-b p-4">{element.Description}</td>
        <td class="text-md font-normal text-[#19182580]  py-3 border-b p-4">{element.PRICE}</td>
        <td class="border-b py-4  ">
          
        <button className="Update mr-4 py-3 px-4 rounded-full border-0 text-md font-normal
    bg-slate-50 text-slate-700
      hover:bg-black hover:text-white  duration-500"><Link to={`/UpdateCafe/${element.IdCafe}`}>Update</Link></button>
          <button className="mr-4 py-3 px-4 rounded-full border-0 text-md font-normal
    bg-slate-50 text-slate-700
      hover:bg-black hover:text-white  duration-500" onClick={()=>handleDelete(element.IdCafe)}>Delete</button>
          
        </td>
      
      </tr>





      ))}
      
    </tbody>
  </table>
  <div class="mt-4 flex flex-row-reverse">
    <button class=" px-6 py-2 mx-2 rounded-full shadow-md  bg-black duration-500 text-white">add</button>
  </div>
</div>

</div>



    </div>
    </div>
    
  );
} 
export default CoffeMenu;

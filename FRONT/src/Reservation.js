import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";


const Reservation = () => {

    const [Reservation, setReservation] = useState([])
    useEffect(()=>{
        const fetchAllReservation = async ()=>{
            try{
                const res =await axios.get('http://localhost:3000/Reservation') 
                setReservation(res.data)
            }catch(err){
                console.log('erreur ',err)
            }
        } 
        fetchAllReservation()
    },[])

    

  return (
    
    <div className=" flex justify-between gap-2 ">
<div className="bg-gray-800 h-screen  text-white"> 
    <Sidebar></Sidebar>
  </div>
  <div className=" w-4/5 m-8">
  <div class=" ">

<div class="max-w-7xl ">
  <table class="min-w-full bg-white  ">

    <thead>
      <tr>
      <th class="text-md text-slate-600 font-medium border-b py-4"></th>
        <th class="text-md text-slate-600 font-medium border-b py-4">Name </th>
        <th class="text-md text-slate-600 font-medium border-b py-4">Surname</th>
        <th class="text-md text-slate-600 font-medium border-b py-4">Numero</th>
        <th class="text-md text-slate-600 font-medium border-b py-4">Table</th>
        <th class="text-md text-slate-600 font-medium border-b py-4">disponibilite</th>
        <th class="text-md text-slate-600 font-medium border-b py-4">jour</th>
        <th class="text-md text-slate-600 font-medium border-b py-4">Horaires</th>
      </tr>
    </thead>
    <tbody>
      
      {Reservation.map((person)=>(
        <tr className="hover:bg-slate-50 duration-500">
        <td class="text-md font-normal text-[#19182580]  py-3 border-b p-4">{person.IdComm}</td>
        <td class="text-md font-normal text-[#19182580]  py-3 border-b p-4">{person.Name}</td>
        <td class="text-md font-normal text-[#19182580]  py-3 border-b p-4">{person.Surname}</td>
        <td class="text-md font-normal text-[#19182580]  py-3 border-b p-4">{person.phoneNumber}</td>
        <td class="text-md font-normal text-[#19182580]  py-3 border-b p-4">{person.tableR}</td>
        <td class="text-md font-normal text-[#19182580]  py-3 border-b p-4">{person.libre}</td>
        <td class="text-md font-normal text-[#19182580]  py-3 border-b p-4">{person.jour}</td>
        <td class="text-md font-normal text-[#19182580]  py-3 border-b p-4">{person.Chreno}</td>
        <td class="border-b py-4  ">
          
        
          
        </td>
      
      </tr>





      ))}
      
    </tbody>
  </table>
  
</div>

</div>



    </div>
    </div>
    
  );
} 
export default Reservation;

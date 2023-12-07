import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios'
const Staff = () => {
    const [staff , setStaff] = useState([])
    useEffect(()=>{
        const fetchAllStaff = async ()=>{
            try{
                const res =await axios.get('http://localhost:3000/Staff') 
                setStaff(res.data)
            }catch(err){
                console.log('erreur ',err)
            }
        } 
        fetchAllStaff()
    },[])
    
const handleDelete = async (IdStaff)=>{
    try{
        await axios.delete("http://localhost:3000/Staff/"+IdStaff)
        window.location.reload()
        // hadi cets pour refresh l page 
    }catch(err){
        console.log('ERREUR AXIOS',err)
    }
}    



  return (
    
    <div className=" flex justify-between gap-2 ">
<div className="bg-gray-800  w-1/5 text-white"> 
<div className="py-6 px-4">
        <h1 className="text-2xl font-bold text-center">CoffeCosy Settings</h1>
      </div>
      <div className="">
        <h1 className="text-xl font-bold text-center">Admin Profil</h1>
      </div>
      
      <ul className="space-y-4 p-4">
        <li>
          <Link to="/AdminMenu" className="p-3 block hover:bg-gray-700 p-1 rounded">
            Admin information
          </Link></li>
        <li>
          <Link to="/AdminMenu/CoffeMenu" className="p-3 block hover:bg-gray-700 p-1 rounded">
            Coffe Menu
          </Link>    </li>
        <li>
          <Link to="/AdminMenu/PastryMenu" className="p-3 block hover:bg-gray-700 p-1 rounded">
            Pastry Menu
          </Link>    </li>
        <li>
          <Link to="/AdminMenu/Reservation" className="p-3 block hover:bg-gray-700 p-1 rounded">
            Reservation
          </Link>  </li>
        <li>
          <Link to="/AdminMenu/Staff" className="p-3 block bg-gray-700 p-1 rounded">
            Staff information
          </Link>    </li>
      </ul>
  </div>
  <div className=" w-4/5 m-8">
  <div className=" ">
<div className="max-w-7xl ">
<div>
    <table>
    <thead>
      <tr className="text-md font-medium text-slate-700 ">
        <th className="py-3 border-b p-4"></th>
        <th className="py-3 border-b p-4">Name</th>
        <th className="py-3 border-b p-4">Surname</th>
        <th className="py-3 border-b p-4">Age</th>
        <th className="py-3 border-b p-4">JOB</th>
        <th className="py-3 border-b p-4">Phone Number</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {staff.map((member) => (
        <tr key={member.IdStaff} className="hover:bg-slate-50 duration-500">
          <td className="text-md font-normal text-[#19182580] py-6 border-b p-6">{member.IdStaff}</td>
          <td className="text-md font-normal text-[#19182580] py-6 border-b p-6">{member.Name}</td>
          <td className="text-md font-normal text-[#19182580] py-6 border-b p-6">{member.Surname}</td>
          <td className="text-md font-normal text-[#19182580] py-6 border-b p-6">{member.Age}</td>
          <td className="text-md font-normal text-[#19182580] py-6 border-b p-6">{member.JOB}</td>
          <td className="text-md font-normal text-[#19182580] py-6 border-b p-6">{member.phoneNumber}</td>
         <td> <button className="Update mr-4 py-3 px-4 rounded-full border-0 text-md font-normal
    bg-slate-50 text-slate-700
      hover:bg-black hover:text-white  duration-500"><Link to={`/UpdateStaff/${member.IdStaff}`}>Update</Link></button></td>
          <td><button className="mr-4 py-3 px-4 rounded-full border-0 text-md font-normal
    bg-slate-50 text-slate-700
      hover:bg-black hover:text-white  duration-500" onClick={()=>handleDelete(member.IdStaff)}>Delete</button></td>
        </tr>
      ))}

    </tbody>
  </table>
  <div className="mt-4 flex flex-row-reverse">
    <button className=" px-6 py-2 mx-2 rounded-full shadow-md  bg-black duration-500 text-white">add</button>
  </div>
</div>
</div>
</div></div></div>
    
  );
} 
export default Staff;

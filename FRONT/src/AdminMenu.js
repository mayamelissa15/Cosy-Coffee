import React from "react";
import user from "./Assets/637a6b7d8d9dda3835e69705_man_avatar.png"
import { Link } from "react-router-dom";


const AdminMenu = () => {
  return (
    
    <div className=" flex justify-between gap-2 ">
<div className="bg-gray-800 h-screen w-1/5 text-white"> 
<div className="py-6 px-4">
        <h1 className="text-2xl font-bold text-center">CoffeCosy Settings</h1>
      </div>
      <div className="">
        <h1 className="text-xl font-bold text-center">Admin Profil</h1>
      </div>
      
      <ul className="space-y-4 p-4">
        <li>
          <Link to="/AdminMenu" className="p-3 block bg-gray-700 p-1 rounded">
            Admin information
          </Link></li>
        <li>
          <Link to="/AdminMenu/CoffeMenu" className="p-3 block hover:bg-gray-700 p-1 rounded">
            Coffe Menu
          </Link>   </li>
        <li>
          <Link to="/AdminMenu/PastryMenu" className="p-3 block hover:bg-gray-700 p-1 rounded">
            Pastry Menu
          </Link>   </li>
        <li>
          <Link to="/AdminMenu/Reservation" className="p-3 block hover:bg-gray-700 p-1 rounded">
            Reservation
          </Link>   </li>
        <li>
          <Link to="/AdminMenu/Staff" className="p-3 block hover:bg-gray-700 p-1 rounded">
            Staff information
          </Link>   </li>
      </ul>
  </div>
  <div className=" w-4/5 m-8">

       
<div className="mx-auto p-8">
      <img src={user} className="mb-6 mx-8 h-16 w-16 object-cover rounded-full "></img>
      <h1 className="text-lg text-black font-medium ">John Doe</h1>
      <p className="text-md font-normal text-[#19182580]  py-3 ">Admin CoffeeCosy Website</p>
    </div>

    <form action="/admin_update" method="post">
    <div className="grid grid-cols-2 gap-12">
    <div className="mx-8">
      <label for="name" className=" block text-sm font-medium text-slate-700 py-4 ">Nom complet</label>
      <input type="text" id="name" name="name" className="focus:outline-none mt-1 p-2 block w-full rounded-md  shadow-md disabled:text-slate-400 disabled:bg-slate-50 " value="John Doe" disabled></input>
    </div>
        {/* nombre de places  */}
    <div className="mx-8">
      <label for="email" className=" block text-sm font-medium text-slate-700 py-4 ">Adresse e-mail</label>
      <input type="email" id="email" name="email" className="focus:outline-none mt-1 p-2 block w-full rounded-md disabled:text-slate-400 disabled:bg-slate-50 shadow-md focus:border-none" Value="johndoe@example.com" disabled></input>
    </div>

    <div className="mx-8">
      <label for="date" className=" block text-sm font-medium text-slate-700 py-4 ">Date de Naissance</label>
      <input type="date" id="date" name="date" className="focus:outline-none mt-1 p-2 block w-full rounded-md disabled:text-slate-400 disabled:bg-slate-50 shadow-md focus:border-none" Value="2000-01-01" disabled></input>
    </div>
    <div className="mx-8">
      <label for="book" className=" block text-sm font-medium text-slate-700 py-4 ">Job</label>
      <input type="text" id="book" name="book" className="focus:outline-none mt-1 p-2 block w-full rounded-md disabled:text-slate-400 disabled:bg-slate-50 shadow-md focus:border-none"  Value="Administrateur Website" disabled></input>
    </div>
    
    </div>

  
    </form>

   </div>
    </div>
    
    
  );
} 
export default AdminMenu;

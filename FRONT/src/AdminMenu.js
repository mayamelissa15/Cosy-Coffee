import React from "react";
import user from "./Assets/637a6b7d8d9dda3835e69705_man_avatar.png"
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import NavbarNoAction from './NavbarNoAction'

const AdminMenu = () => {
  return (
    <div>
      <NavbarNoAction></NavbarNoAction>
    <div className=" flex justify-between gap-2 ">
<div className=" h-screen text-white"> 
<Sidebar></Sidebar>
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
    </div>
    
  );
} 
export default AdminMenu;

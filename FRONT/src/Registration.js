import { useState } from "react";
import Axios from "axios";
import cupOfCoffe from "./Assets/6378d1abab345038ecf839cb_coffee_cookies-p-800.png"
import { Link } from "react-router-dom";


const Registration = () => {
    const [usernameReg , setUsernameReg] = useState('')
    const [passwordReg , setPasswordReg] = useState('')

    //linking function

    const Registration = (e)=>
    {e.preventDefault(); 
        Axios.post('http://localhost:3000/Registration' , {username: usernameReg ,
    password : passwordReg}).then((response)=>{
     console.log(response)
        });

    }

    return ( <div className="bg-[#F5F5DC] mx-auto my-32 w-[960px] p-10 shadow-md ">
        
    <div className="py-2 ">
    <p className="text-md text-slate-400 font-medium  py-1">join our family and discover us </p>
        <h1 className="text-3xl text-black font-semibold py-2">Create a new account</h1> 
        <p className="text-sm text-black font-medium  py-2">Already a member ? <Link to='/Login' className="text-[#7B3F00]"> Join us</Link></p>

    </div>
    <div className="flex justify-around ">
        <img src={cupOfCoffe} className="h-[500px] w-[500px]"></img>
        <div ></div>
        <form >
    <div className=" mx-auto mb-4 w-96 py-8">
  <label for="name" className="block text-sm font-medium text-slate-700">UserName</label>

  <input type="text" id="name" name="username" onChange={(e)=>{
    setUsernameReg(e.target.value)
  }}
  className="bg-slate-50 focus:outline-none mt-2 p-2 block w-full rounded-md  shadow-md " placeholder="John Doe" required></input>
</div>

<div className=" mx-auto mb-4 w-96 py-2">
  <label for="password" className="block text-sm font-medium text-slate-700">Password</label>
  <input type="password" id="password" name="password"
  onChange={(e)=>{
    setPasswordReg(e.target.value)
  }}
  className="bg-slate-50  focus:outline-none mt-2 p-2 block w-full rounded-md    shadow-md focus:border-none"  required></input>
</div>

<div className=" flex justify-center p-8">
  <button  className=" bg-[#7B3F00] text-white px-6 py-2 mx-2 rounded-full hover:shadow-md  hover:bg-[#F5F5DC] hover:text-[#7B3F00] duration-500 " onClick={Registration}>Register</button>
</div>
    </form></div>
 </div>
 );
}
 
export default Registration;
import { useState } from "react";
import Axios from "axios";


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

    return ( <div className="bg-[#F5F5DC] mx-96 my-32 shadow-md ">
        
    <div className="py-2 text-center">
    <h1 className="text-3xl font-semibold  m-8 text-[#7B3F00]">Connect to your account</h1> 
 
    </div>
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
 
 );
}
 
export default Registration;
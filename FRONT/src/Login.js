import cupOfCoffe from "./Assets/6378d1abab345038ecf839cb_coffee_cookies-p-800.png"
import { Link, useNavigate, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";
import Axios from "axios";
const Login = () => {

  const location = useLocation() 
  const navigate = useNavigate() 

  const [username , setUsername] = useState('')
  const [password , setPassword] = useState('')
  const[loginStatus , setLoginStatus] = useState('')
  const Login = (e)=>
  {e.preventDefault(); 
    Axios.post('http://localhost:3000/Login' , {username: username ,
  password : password}).then((response)=>{
    if (response.data.message){
      setLoginStatus(response.data.message)
    } else{
      const { from } = location.state || { from: { pathname: "/AdminMenu" } };
        navigate(from.pathname);
    }
      });

  }
    return (<div className="">
      
    <div className="  bg-[#F5F5DC] m-32 p-16 shadow-md ">
        <div className="py-8">
        <p className="text-md text-slate-400 font-medium  py-1">join our family and discover us </p>
        <h1 className="text-3xl text-black font-semibold py-2">Create a new account</h1> 
        <p className="text-sm text-black font-medium  py-2">Already a member ? <Link to='/Registration' className="text-[#7B3F00]"> Join us</Link></p>
        </div>
        <div className="flex justify-around ">
        <img src={cupOfCoffe} className="h-[500px] w-[500px]"></img>
        <div >
            <form>
        <div className=" mb-4 w-96 py-8">
      <label htmlFor="name"
       className="block text-sm font-medium text-slate-700">UserName</label>
      <input type="text" id="name" name="name" 
      onChange={(e)=>{
        setUsername(e.target.value)
      }}
      className="bg-slate-50 focus:outline-none mt-2 p-2 block w-full rounded-md  shadow-md after:content-['*'] after:ml-0.5 after:text-red-500" placeholder="John Doe" required></input>
    </div>
    
    <div className=" mb-4 w-96 py-2">
      <label htmlFor="password" className="block text-sm font-medium text-slate-700">Password</label>
      <input type="password" id="password" name="password" 
       onChange={(e)=>{
        setPassword(e.target.value)
      }}
      className="bg-slate-50  focus:outline-none mt-2 p-2 block w-full rounded-md   after:content-['*'] after:ml-0.5 after:text-red-500 shadow-md focus:border-none"  required></input>
    </div>
    
    <div className="p-8">
      <button type="submit" className="bg-[#7B3F00] text-white px-6 py-2 mx-2 rounded-full hover:shadow-md  hover:bg-[#F5F5DC] hover:text-[#7B3F00] duration-500 " onClick={Login}>Login</button>
    </div>
    <h1 className="text-color-500 text-md font-medium">{loginStatus}</h1>
        </form></div>
        </div> </div>
    </div>  );
}
 
export default Login;
import Navbar from "./Navbar";

const Registration = () => {
    return ( <div className="bg-[#F5F5DC] mx-96 my-32 shadow-md ">
        
    <div className="py-2 text-center">
    <h1 className="text-3xl font-semibold  m-8 text-[#7B3F00]">Connect to your account</h1> 
 
    </div>
        <form >
    <div className=" mx-auto mb-4 w-96 py-8">
  <label for="name" className="block text-sm font-medium text-slate-700">UserName</label>
  <input type="text" id="name" name="name" className="bg-slate-50 focus:outline-none mt-2 p-2 block w-full rounded-md  shadow-md after:content-['*'] after:ml-0.5 after:text-red-500" placeholder="John Doe" required></input>
</div>
<div className=" mx-auto mb-4 w-96 py-2">
  <label for="email" className="block text-sm font-medium text-slate-700">Adresse e-mail</label>
  <input type="email" id="email" name="email" className="bg-slate-50  focus:outline-none mt-2 p-2 block w-full rounded-md   after:content-['*'] after:ml-0.5 after:text-red-500 shadow-md focus:border-none" placeholder="johndoe@example.com" required></input>
</div >
<div className=" mx-auto mb-4 w-96 py-2">
  <label for="password" className="block text-sm font-medium text-slate-700">Password</label>
  <input type="password" id="password" name="password" className="bg-slate-50  focus:outline-none mt-2 p-2 block w-full rounded-md   after:content-['*'] after:ml-0.5 after:text-red-500 shadow-md focus:border-none"  required></input>
</div>

<div className=" flex justify-center p-8">
  <button type="submit" className=" bg-[#7B3F00] text-white px-6 py-2 mx-2 rounded-full hover:shadow-md  hover:bg-black duration-500 ">Connection</button>
</div>
    </form></div>
 
 );
}
 
export default Registration;
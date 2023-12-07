import cupOfCoffe from "./Assets/6378d1abab345038ecf839cb_coffee_cookies-p-800.png"
const Login = () => {
    return (
    <div className="m-32 p-16 shadow-md ">
        <div className="py-2">
        <p className="text-md text-slate-400 font-medium  py-1">join our family and discover us </p>
        <h1 className="text-3xl text-black font-semibold py-2">Create a new account</h1> 
        <p className="text-sm text-black font-medium  py-2">Already a member ? <a href="#" className="text-[#7B3F00]"> Join us</a></p>
        </div>
        <div className="flex justify-around ">
        <img src={cupOfCoffe} className="h-[500px] w-[500px]"></img>
        <div >
            <form>
        <div className=" mb-4 w-96 py-8">
      <label for="name" className="block text-sm font-medium text-slate-700">UserName</label>
      <input type="text" id="name" name="name" className="bg-slate-50 focus:outline-none mt-2 p-2 block w-full rounded-md  shadow-md after:content-['*'] after:ml-0.5 after:text-red-500" placeholder="John Doe" required></input>
    </div>
    <div className=" mb-4 w-96 py-2">
      <label for="email" className="block text-sm font-medium text-slate-700">Adresse e-mail</label>
      <input type="email" id="email" name="email" className="bg-slate-50  focus:outline-none mt-2 p-2 block w-full rounded-md   after:content-['*'] after:ml-0.5 after:text-red-500 shadow-md focus:border-none" placeholder="johndoe@example.com" required></input>
    </div >
    <div className=" mb-4 w-96 py-2">
      <label for="password" className="block text-sm font-medium text-slate-700">Password</label>
      <input type="password" id="password" name="password" className="bg-slate-50  focus:outline-none mt-2 p-2 block w-full rounded-md   after:content-['*'] after:ml-0.5 after:text-red-500 shadow-md focus:border-none"  required></input>
    </div>
    <div className=" mb-4 w-96 py-2">
      <label for="password" className="block text-sm font-medium text-slate-700">Confirm Password</label>
      <input type="password" id="password" name="password" className=" bg-slate-50  focus:outline-none mt-2 p-2 block w-full rounded-md   after:content-['*'] after:ml-0.5 after:text-red-500 shadow-md focus:border-none"  required></input>
    </div>
    <div className="p-8">
      <button type="submit" className="bg-[#7B3F00] text-white px-6 py-2 mx-2 rounded-full hover:shadow-md  hover:bg-black duration-500 ">Subscribe</button>
    </div>
        </form></div>
        </div>
    </div>  );
}
 
export default Login;
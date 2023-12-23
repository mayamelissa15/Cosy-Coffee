import pastry from  './Assets/6378d1abb322094b02267f35_strawberry_cake-p-800.png'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
const Formulaire = () => {

  const [Reservation , setReservation] = useState({
    IdComm :null,
    Name:"",
    Surname:"",
    phoneNumber: null , 
    jour :null,
    tableR:null,
    Chreno:null
});
const navigate =useNavigate()

const handleChange = (e) =>{
    setReservation(prev=>({...prev,[e.target.name]: e.target.value}))
   
} 
const HandleClick = async e =>{
    e.preventDefault()
    //using axios to send data 
    try{await axios.post("http://localhost:3000/" , Reservation)
    navigate("/")
    }catch(err){
        console.log('ERREUR' ,err)
    }
}




    return ( 
  <div className="bg-[#F5F5DC] m-32 py-8 rounded-lg flex flex-col items-center shadow-xl">
  <h2 className="text-3xl font-semibold  mb-8 text-[#7B3F00]">Réservez une table</h2>
  <div className="flex justify-between p-4 ">
    <div><img src={pastry} className='h-96'></img></div>
   <div>

   <form className="flex flex-col w-[500px]" action='/' method='POST'>
   {/* <div className="mb-4">
      <label for="IdComm" className="block text-sm font-medium text-slate-700">id</label>
      <input type="number" id="IdComm" name="IdComm" className="focus:outline-none mt-1 p-2 block w-full rounded-md  shadow-md after:content-['*'] after:ml-0.5 after:text-red-500" onChange={handleChange} placeholder="John Doe" required></input>
    </div> */}
    <div className="mb-4">
      <label for="Name" className="block text-sm font-medium text-slate-700">Nom</label>
      <input type="text" id="Name" name="Name" className="focus:outline-none mt-1 p-2 block w-full rounded-md  shadow-md after:content-['*'] after:ml-0.5 after:text-red-500" onChange={handleChange} placeholder="John Doe" required></input>
    </div>
    

    <div className="mb-4">
      <label for="Surname" className="block text-sm font-medium text-slate-700">Prenom</label>
      <input type="text" id="Surname" name="Surname" className="focus:outline-none mt-1 p-2 block w-full rounded-md  shadow-md after:content-['*'] after:ml-0.5 after:text-red-500" onChange={handleChange} placeholder="John Doe" required></input>
    </div>
    <div className="mb-4">
      <label for="phoneNumber" className="block text-sm font-medium text-slate-700">Numero</label>
      <input type="tel" id="phoneNumber" name="phoneNumber" className="focus:outline-none mt-1 p-2 block w-full rounded-md  shadow-md after:content-['*'] after:ml-0.5 after:text-red-500" onChange={handleChange} placeholder="+213 555 666 777" required></input>
    </div>

    <div className="mb-4">
      <label for="date" className="block text-sm font-medium text-slate-700">Date de réservation</label>
      <input type="date" id="date" name="jour" className="focus:outline-none mt-1 p-2 block w-full rounded-md   after:content-['*'] after:ml-0.5 after:text-red-500 shadow-md focus:border-none" onChange={handleChange} required></input>
    </div>

   
    <div className="mb-4">
      <label for="table" className="block text-sm font-medium text-slate-700">Table a reserver</label>
      <input type="number" id="table" name="tableR" className="focus:outline-none mt-1 p-2 block w-full rounded-md   after:content-['*'] after:ml-0.5 after:text-red-500 shadow-md focus:border-none" onChange={handleChange}  placeholder="1-12"></input>
    </div>
    <div className="mb-4">
      <label for="time" className="block text-sm font-medium text-slate-700">Heure de réservation</label>
      <input type="time" id="time" name="Chreno" className="focus:outline-none mt-1 p-2 block w-full rounded-md after:content-['*'] after:ml-0.5 after:text-red-500 shadow-md focus:border-none" onChange={handleChange} required></input>
    </div>

    <div className="p-8">
      <button type="submit" className="bg-[#7B3F00] text-white px-6 py-2 mx-2 rounded-full hover:shadow-md  hover:bg-[#F5F5DC] hover:text-[#7B3F00] duration-500 "  onClick={HandleClick} >Réserver</button>
    </div>

  </form>
   </div>
  </div>
</div>

   );
}
 
export default Formulaire;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
 const AddingStaff = () => {
    const [staff , setStaff] = useState({
        IdCafe :null,
        Name:"",
        Description:"",
        PRICE: null , 
        
    });
    const navigate =useNavigate()

    const handleChange = (e) =>{
        setStaff(prev=>({...prev,[e.target.name]: e.target.value}))
       
    } 
    

    const HandleClick = async e =>{
        e.preventDefault()
        //using axios to send data 
        try{await axios.post("http://localhost:3000/AddingCafe" , staff)
        navigate("/CoffeMenu")
        }catch(err){
            console.log('ERREUR' ,err)
        }
    }

    return ( 
  <div className=" bg-[#fef5f1] py-8 rounded-lg flex flex-col items-center shadow-xl">
  <h2 className="text-3xl font-semibold  mb-8 text-[Black]">Add a new Cafe to the Menu </h2>
  
   <div>
   <form className="flex flex-col w-[500px] shadow-md bg-white p-16 rounded-xl">
   <div className="mb-4">
      <label for="id" className="block text-sm font-medium text-slate-700">Numero de cafe</label>
      <input type="number" id="id" onChange={handleChange}   name="idCafe" className="focus:outline-none mt-1 p-2 block w-full rounded-md  shadow-md "  required></input>
    </div>
    <div className="mb-4">
      <label for="name" className="block text-sm font-medium text-slate-700">Nom </label>
      <input type="text" id="name" onChange={handleChange} name="Name"   className="focus:outline-none mt-1 p-2 block w-full rounded-md  shadow-md "  required></input>
    </div>
    <div className="mb-4">
      <label for="description" className="block text-sm font-medium text-slate-700">Description</label>
      <input type="text" id="description"   onChange={handleChange}  name="Description" className="focus:outline-none mt-1 p-2 block w-full rounded-md  shadow-md "  required></input>
    </div>
        {/* nombre de places  */}
    <div className="mb-4">
      <label for="PRICE" className="block text-sm font-medium text-slate-700">Price</label>
      <input type="number" id="PRICE"  onChange={handleChange} name="PRICE" className="focus:outline-none mt-1 p-2 block w-full rounded-md    shadow-md focus:border-none"  required></input>
    </div>

    <div className="text-center p-16">
      <button type="submit" className="bg-[Black] text-white px-6 py-2 mx-2 rounded-full hover:shadow-md  hover:bg-white hover:text-black duration-500 " onClick={HandleClick}>Ajouter</button>
    </div>

  </form>
   </div>
  </div>


   );
}
 
export default AddingStaff;

 

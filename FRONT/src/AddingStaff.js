 import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
 const AddingStaff = () => {
    const [staff , setStaff] = useState({
        IdStaff :null,
        Name:"",
        Surname:"",
        age: null , 
        JOB :"",
        PhoneNumber:""
    });
    const navigate =useNavigate()

    const handleChange = (e) =>{
        setStaff(prev=>({...prev,[e.target.name]: e.target.value}))
       
    } 
    console.log(staff)

    const HandleClick = async e =>{
        e.preventDefault()
        //using axios to send data 
        try{await axios.post("http://localhost:3000/AddingStaff" , staff)
        navigate("/AdminMenu/staff")
        }catch(err){
            console.log('ERREUR' ,err)
        }
    }

    return ( 
  <div className=" bg-[#fef5f1] py-8 rounded-lg flex flex-col items-center shadow-xl">
  <h2 className="text-3xl font-semibold  mb-8 text-[Black]">Add a member</h2>
  
   <div>
   <form className="flex flex-col w-[500px] shadow-md bg-white p-16 rounded-xl">
   <div className="mb-4">
      <label for="id" className="block text-sm font-medium text-slate-700">Numero de serie</label>
      <input type="number" id="id" onChange={handleChange}   name="IdStaff" className="focus:outline-none mt-1 p-2 block w-full rounded-md  shadow-md " placeholder="John Doe" required></input>
    </div>
    <div className="mb-4">
      <label for="name" className="block text-sm font-medium text-slate-700">Nom </label>
      <input type="text" id="name" onChange={handleChange} name="Name"   className="focus:outline-none mt-1 p-2 block w-full rounded-md  shadow-md " placeholder="John Doe" required></input>
    </div>
    <div className="mb-4">
      <label for="surname" className="block text-sm font-medium text-slate-700">Prenom</label>
      <input type="text" id="surname"   onChange={handleChange}  name="Surname" className="focus:outline-none mt-1 p-2 block w-full rounded-md  shadow-md " placeholder="John Doe" required></input>
    </div>
        {/* nombre de places  */}
    <div className="mb-4">
      <label for="age" className="block text-sm font-medium text-slate-700">Age</label>
      <input type="number" id="age"  onChange={handleChange} name="age" className="focus:outline-none mt-1 p-2 block w-full rounded-md    shadow-md focus:border-none"  required></input>
    </div>

    <div className="mb-4">
      <label for="job" className="block text-sm font-medium text-slate-700">Job</label>
      <input type="text" id="job"  onChange={handleChange} name="JOB" className="focus:outline-none mt-1 p-2 block w-full rounded-md    shadow-md focus:border-none" required></input>
    </div>

    <div className="mb-4">
      <label for="number" className="block text-sm font-medium text-slate-700">Numero de telephone: </label>
      <input type="number" id="number"  onChange={handleChange} name="PhoneNumber" className="focus:outline-none mt-1 p-2 block w-full rounded-md  shadow-md focus:border-none" required></input>
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

 

import Cards from "./Cards";
import cup from "./Assets/coffee-cups.png"
import cup2 from "./Assets/coffee-cups (1).png"
import pastry from "./Assets/cup-cake.png"
import pastry2 from "./Assets/biscuit.png"

const Services = () => {
    return ( <div className="m-24" >
       
        <h1 className="text-3xl text-[#7B3F00] font-semibold text-center">Our delicious services</h1>
        <p className="text-xl font-normal text-slate-700 text-center py-4 ">Indulge in the perfect trio at our coffee haven – from rich brews and tempting pastries to grab-and-go convenience
        </p>
<div> 
    {/* hada yweli component pastry/coffee/books */}
   <div className=" flex justify-around gap-8 p-12 z-10">
    
    <Cards title='Types of coffee' text='some information about that' image={cup} ></Cards>
    <Cards title='Types of cupcakes' text='some information about that' image={pastry}></Cards>
    <Cards title='Pastry' text='some information about that' image={pastry2}></Cards>
    <Cards title='coffee to go ' text='some information about that' image={cup2}></Cards>
   </div>
   
</div>
    </div> );
}
 
export default Services;
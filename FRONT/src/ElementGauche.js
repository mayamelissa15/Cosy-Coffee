const Element = (props) => {
    return ( <div>

    <div className="flex flex-row gap-4 my-2 ">
   
    <div className="py-6 w-64 mx-4" >
    <div className="flex flex-row gap-4 ">
    <div className= "py-2 text-xl font-medium">{props.title}</div>
    <div className="py-3 text-sm  text-slate-600 font-medium">{props.price}$</div>
    </div>
    <div className="text-md text-slate-400">{props.description}</div>
    </div>
    <img src={props.img} className="h-32 my-8 "></img>
    </div>
    </div> );
}
 
export default Element;
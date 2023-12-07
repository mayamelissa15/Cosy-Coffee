const Cards = (props) => {
    return ( <div>
        <div className=" w-64 h-64 shadow-sm hover:shadow-xl rounded-3xl p-6  duration-500 transition ease-in-out transform hover:scale-110">
        <img src={props.image} className="text-black z-10 text-center text-xl w-24 h-24 p-6 mx-auto  " ></img>
        <h1 className="text-lg text-black font-medium text-center">{props.title}</h1>
        <p className="text-md font-normal text-[#19182580] text-center p-6 "> {props.text}
        </p>
    </div>
    </div> );
}
 
export default Cards;
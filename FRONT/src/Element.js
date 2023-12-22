import React from "react";

const Element = (props) => {
  return (
    <div>
      <div className="flex flex-row gap-12 m-2 ">
        <img src={props.img} alt={props.title} className="h-32 py-2"></img>
        <div className="py-6 w-64">
          <div className="flex flex-row gap-4">
            <div className="py-2 text-xl font-medium">{props.title}</div>
            <div className="py-3 text-sm text-slate-600 font-medium">
              {props.price}$
            </div>
          </div>
          <div className="text-md text-slate-400">{props.description}</div>
        </div>
      </div>
    </div>
  );
};

export default Element;

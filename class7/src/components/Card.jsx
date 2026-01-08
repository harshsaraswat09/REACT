import React from "react";

const Card = (props) => {
  return (
    <div
      
      className="w-[17vw] rounded p-4 px-8 flex items-center flex-col text-center h-80 bg-white text-black"
    >
      <img
        className="h-24 w-24 rounded-full object-cover object-center"
        src={props.elem.Imageurl}
        alt=""
      />
      <h1 className="text-2xl mt-2 font-semibold">{props.elem.name}</h1>
      <h5 className="text-lg text-blue-500 font-semibold my-3">{props.elem.Role}</h5>
      <p className="text-sm font-medium leading-tight">{props.elem.Description}</p>
      <button
        onClick={() => {
          props.deleteHandler(props.idx);
        }}
        className="text-xs mt-3 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 cursor-pointer active:scale-95"
      >
        Remove
      </button>
    </div>
  );
};

export default Card;

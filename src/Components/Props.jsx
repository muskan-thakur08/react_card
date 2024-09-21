import React from "react";

function Props({ values, index, handleClick }) {
    const { name, price, image, purchased } = values;
    return (
        <div className="w-60  bg-white rounded-md overflow-hidden">
            <div className="w-full h-60 bg-red-400">
                <img className="w-full h-full object-cover" src={image} alt="" />
            </div>
            <div className="w-full p-3">
                <h1 className="font-semibold ">{name}</h1>
                <p className="text-gray-500 text-xs font-semibold">{price}</p>
                <button onClick={() => handleClick(index)} className={`px-3 py-1 text-white ${purchased === false ? " bg-teal-600" : "bg-red-600"} ${purchased === false ? "hover:bg-teal-800" : "bg-red-600"} rounded-md text-sm font-semibold mt-4`}>{purchased === true ? "Purchased" : "Buy Now"}</button>
            </div>
        </div>
    )
}
export default Props;
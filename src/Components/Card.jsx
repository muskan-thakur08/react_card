import React from "react";

const data=[
    {song:"Kesariya",artist:"Arijit Singh",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, non"},
    {song:"O Sajni Re",artist:"Arijit Singh",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, non."},
    {song:"Satranga",artist:"Arijit Singh",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, non."}
];

const handleDwld=()=>{alert("Download Started");}

 function Card(){
    return (
        <div className="w-full h-screen bg-zinc-200 flex items-center justify-center flex-col gap-5">
            {data.map((elem,index)=>(
                <div key={index} className=" w-90  px-3 py-4 bg-zinc-100 rounded-[12px]">
                <h1 className="text-xl font-bold">{elem.song}</h1>
                <p className="mt-2 text-sm font-semibold">{elem.artist}</p>
                <p className="text-xs  mt-2 opacity-70">{elem.description}</p>
                <button onClick={handleDwld}  className=" px-2 py-1 mt-2 text-white bg-sky-600 rounded-full text-sm font-medium">Download Now</button>
            </div>
            ))}
        </div>
    )
 }
 export default Card;
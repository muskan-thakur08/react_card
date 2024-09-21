import React, { useState } from "react"
import { FaArrowRightLong } from "react-icons/fa6";

function Img(){
    const[val,setVal]=useState(false);

    return(
        <div className="w-full h-screen bg-zinc-400 flex justify-center items-center">
            <div className="w-60 h-40 relative bg-zinc-800 rounded-md flex overflow-hidden">
                <img className={`shrink-0 w-full h-full object-cover  transition-transform  ease-in-out duration-700 delay-200 ${val===false ? "-translate-x-[0%]" : "-translate-x-[100%]"}`} src="https://plus.unsplash.com/premium_photo-1724691156679-5e42bb8ead52?q=80&w=1434&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <img className={`shrink-0 w-full h-full object-cover transition-transform ease-in-out duration-700 delay-200  ${val===false ? "-translate-x-[0%]" : "-translate-x-[100%]"}`}src="https://images.unsplash.com/photo-1726512978390-fa15979cc530?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <span onClick={()=>setVal(()=>!val)} className="w-8 h-8 absolute bottom-1 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center rounded-full bg-[#dadada8d]">
                    <FaArrowRightLong size={".8em"}/>
                </span>
            </div>
        </div>
    )
}
export default Img;
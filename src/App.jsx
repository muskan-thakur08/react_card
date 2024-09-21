import React, { useState } from "react";
import Props from "./Components/Props";

function App() {
  const detail = [
    { name: "Pluto", price: "Rs.10,000", image: "https://plus.unsplash.com/premium_photo-1694819488591-a43907d1c5cc?q=80&w=1428&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", purchased: false },
    { name: "Tommy", price: "Rs.12,000", image: "https://plus.unsplash.com/premium_photo-1668208365386-4198381c6f6e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", purchased: false },
    { name: "Joya", price: "Rs.11,000", image: "https://images.unsplash.com/photo-1518288774672-b94e808873ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwxMzU1NzIxNXx8ZW58MHx8fHx8", purchased: false },
    { name: "Tom", price: "Rs.13,000", image: "https://images.unsplash.com/photo-1535914191444-2a3b177956c7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", purchased: false }
  ];
  const [data,setData]=useState(detail)
  const handleClick=(changingIndex)=>{
    setData((prev)=>{
      return prev.map((item,index)=>{
        if(index===changingIndex) return {...item,purchased:!item.purchased};
        return item;
      })
    })
  }
  return (
    <>
      <div className="w-full h-screen bg-zinc-300 flex items-center justify-center gap-10">
        {data.map((item, index) => (
          <Props key={index}  index={index} handleClick={handleClick} values={item} />
        ))}
      </div>
    </>
  )
}
export default App;
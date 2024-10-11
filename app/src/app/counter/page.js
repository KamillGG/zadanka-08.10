"use client"
import Even from "@/components/checkIfEven"
import { useState } from "react"
export default function Strona(){
    const [number, setNumber] = useState(0)
    const increaseNumber = ()=>{
        setNumber(number+1)
    }
    return(
        <div className="w-full h-screen flex items-center flex-col justify-center">
        <h1>Current number: {number}</h1>
        <button onClick={increaseNumber} className="border border-black">Increase by 1</button>
        <Even number={number}/>
        </div>
    )
  }
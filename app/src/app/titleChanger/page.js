"use client"
import { useState,useEffect } from "react"
export default function Strona(){
    const [input, setInput] = useState("")
    useEffect(()=>{
        document.title = input
    },[input])
    return(
        <div className="w-full h-screen flex items-center flex-col justify-center">
        <h1>change the title</h1>
        <input value={input} onChange={(val)=>setInput(val.target.value)} className="border border-black"/>
        </div>
    )
}
"use client"
import { useState,useEffect } from "react"
export default function Strona(){
    const [clicked, setClicked] = useState(false)
    const [input, setInput]= useState("")
    const [message, setMessage] = useState(null)
    useEffect(()=>{
        setMessage(null)
        const getData = async ()=>{
            try{
                const data = await fetch(`${input}`)
                setMessage(false)
            }
            catch(err){
                setMessage(err)
            }
        }
        if(clicked !==false){

            getData()
            setClicked(false)
        }
    },[clicked])
    return(
        <div className="w-full h-screen flex items-center flex-col justify-center gap-2">
        <input value={input} onChange={(e)=>setInput(e.target.value)} className="border border-black"/>
        {input==""?"":(<button onClick={()=>{setClicked(true)}}>Confirm</button>)}
        <h1> {message?(`Message: ${message.message}`):("")} {message===false?(`Message: Success`):("")}</h1>
        </div>
    )
}
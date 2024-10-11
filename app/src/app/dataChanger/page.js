"use client"
import { useState,useEffect } from "react"
export default function Strona(){
    const [user, setUser] = useState({
        firstName: 'Jan',
        lastName: 'Kowalski',
        email: 'jan.kowalski@example.com',
        phone: '123-456-789'
    })
    const [name,setName] = useState(user.firstName)
    const [surname, setSurname] = useState(user.lastName)
    const conf = ()=>{
        var updated ={
            ...user,
            firstName:name,
            lastName:surname
        }
        setUser(updated)
        console.log(user)
    }
    return(
        <div className="w-full h-screen flex items-center flex-col justify-center gap-2">
            <input value={name} onChange={(val)=>setName(val.target.value)} className="border border-black"/>
            <input value={surname} onChange={(val)=>setSurname(val.target.value)} className="border border-black"/>
            <button onClick={conf}>Confirm</button>
        </div>
    )
}
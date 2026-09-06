"use client";

import { useEffect, useState } from "react";


export default function SetupInfo(){

 const [setup,setSetup]=useState<any>(null);


 useEffect(()=>{

  fetch("/api/technology/setup")
  .then(r=>r.json())
  .then(setSetup);

 },[]);


 if(!setup)
 return <p>Loading system setup...</p>;


 return (

 <div className="grid grid-cols-3 gap-5">

 {
 Object.entries(setup).map(([key,value])=>(

  <div
   key={key}
   className="rounded-xl bg-zinc-900 p-5"
  >

   <p className="text-zinc-400 uppercase">
    {key}
   </p>

   <p className="text-xl font-bold">
    {String(value)}
   </p>

  </div>

 ))
 }

 </div>

 );

}

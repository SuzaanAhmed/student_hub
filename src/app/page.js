"use client"
import { useEffect, useState } from "react";
import { supabase } from "./lib/superbase";

export default function Home() {
  const [StudentCount, setStudentCount] = useState([]);
  useEffect(()=>{
    loadStudentList();
  },[]);

  async function loadStudentList() {
    const {data,error}=await supabase.from("student").select();
    if(error) alert(JSON.stringify(error))

    setStudentCount(data)
  }

  return (
    <div className="flex flex-col items-center min-h-screen p-2">
      {StudentCount.map((stud,index)=>{
        return (
          <div className="items-center justify-center content-center bg-gray-200 h-[150px] w-[400px] rounded m-2">
            <h1 key={index}>Name: {stud.name}</h1>
            <h1 key={stud.usn}>USN: {stud.usn}</h1>
            <h1>Contact Details: {stud.phone}</h1>
          </div>
        );
      })}
    </div>
    );
}

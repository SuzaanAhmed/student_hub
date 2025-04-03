"use client"
import { useEffect, useState } from "react";
import { supabase } from "./lib/superbase";

export default function Home() {
  const [StudentCount, setStudentCount] = useState([]);
  useEffect(() => {
    loadStudentList();
  }, []);

  async function loadStudentList() {
    const { data, error } = await supabase.from("student").select();
    if (error) alert(JSON.stringify(error))

    setStudentCount(data)
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-red-200 flex flex-col w-[500px] items-center p-4 rounded-lg shadow-lg">
        <strong className="text-lg text-gray-800 mb-3">Student Details</strong>
        <div className="flex flex-col gap-3 w-full items-center">
          {StudentCount.map((stud, index) => (
            <div
              key={index}
              className="bg-gray-100 shadow-md h-auto w-[90%] rounded-lg p-3 border border-gray-300 text-center"
            >
              <h1 className="text-lg font-semibold text-gray-700">Name: {stud.name}</h1>
              <h1 className="text-md text-gray-600">USN: {stud.usn}</h1>
              <h1 className="text-md text-gray-600">Contact: {stud.phone}</h1>
              <h1 className="text-md text-gray-600">Gender: {stud.gender}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>


  );
}

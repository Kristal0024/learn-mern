import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Trash,SquarePen } from 'lucide-react';
import { Link } from 'react-router';


const About = () => {
const [data,setData]=useState([])
const fetchUser=async()=>{
try {
    const res=await axios.get("http://localhost:8000/getusers")
setData(res.data.users)
} catch (error) {
    console.log(error)
}
}
const handleDelete=async(id)=>{
try {
  const res=await axios.delete(`http://localhost:8000/deleteuser/${id}`)
alert(res.data.message)
fetchUser()
} catch (error) {
  console.log(error)
}
}
useEffect(()=>{
fetchUser()
},[])
  return (
    <div>
<div className="w-full min-h-screen p-6 bg-gray-50">
<div className="w-full flex items-center justify-center ">
<h1 className='text-2xl font-semibold'>User</h1>
</div>
<div className="w-full flex justify-end">
<Link className='border flex-end my-5 px-3 py-2 rounded-sm cursor-pointer items-center' to="/createuser">
<button className='cursor-pointer'>create User</button>
</Link>
</div>
  <div className="w-full overflow-x-auto rounded-lg border border-gray-300 bg-white shadow-sm">

    <table className="w-full border-collapse text-left">

      <thead className="bg-gray-200">
        <tr className="[&>th]:border [&>th]:border-gray-300 [&>th]:px-6 [&>th]:py-4">
          <th>SN</th>
          <th>Name</th>
          <th>Email</th>
<th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {data.map((value, index) => (
          <tr
            key={value._id}
            className="hover:bg-gray-50 [&>td]:border [&>td]:border-gray-300 [&>td]:px-6 [&>td]:py-4"
          >
            <td>{index + 1}</td>
            <td>{`${value.firstName} ${value.lastName}`}</td>
            <td>{value.email}</td>
<td className='flex gap-5 justify-around'>
<button onClick={()=>handleDelete(value._id)} className='flex gap-2 cursor-pointer items-center text-red-600'>Delete <Trash size={18}/></button>
<Link to={`/update/${value._id}`}>
<button className='flex gap-2 cursor-pointer items-center text-green-600'>Edit <SquarePen size={18}/></button>
</Link>
</td>
          </tr>
        ))}
      </tbody>

    </table>
  </div>
</div>
    </div>
  )
}

export default About

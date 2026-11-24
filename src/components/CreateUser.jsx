import React from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod'; // or 'zod/v4'
import axios from 'axios';
import {useNavigate} from 'react-router'

const schema = z.object({
 firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Enter a valid email address")
});


const CreateUser = () => {
const [activeEdit,setactiveEdit]=useState(false)
const navigator=useNavigate()
 const {
    register,
reset,
    handleSubmit,
    formState: { errors },
  } = useForm({resolver: zodResolver(schema),});

const handleform=async(data)=>{
try {
  const res=await axios.post("http://localhost:8000/createuser",data)
alert(res.data.message||"User created successfully")
reset()
navigator("/about")
} catch (error) {
  console.log(error)
}
}
  return (
    <div>
      <div className="w-full h-screen">
<div className="w-full items-center justify-center flex py-8">
<h1 className='text-xl font-semibold'>Create User</h1>
</div>
<div className="w-full h-fit flex justify-center ">
<div className="max-w-150 w-140 h-150 border rounded-sm">
<form onSubmit={handleSubmit(handleform)} className='flex flex-col px-8 py-10 gap-5' >
<label htmlFor="name">FirstName</label>
<input {...register('firstName')}  id='name' className='border p-2 rounded-sm outline-none' type="text" placeholder='Enter your first name' />
{
errors.firstName?.message && (
<p className='text-sm text-red-600'>{errors.firstName?.message}</p>
)
}

<label htmlFor="">LastName</label>
<input {...register('lastName')}  className='border p-2 rounded-sm outline-none' type="text" placeholder='Enter your last name' />
{
errors.lastName?.message && (
<p className='text-sm text-red-600'>{errors.lastName?.message}</p>
)
}

<label htmlFor="email">Email</label>
<input {...register('email')}  className='border p-2 rounded-sm outline-none' type="email" placeholder='Enter your email' />
{
errors.email?.message && (
<p className='text-sm text-red-600'>{errors.email?.message}</p>
)
}

<div className="w-full flex items-center justify-center">
<button className='w-fit border px-5 py-2 rounded-sm cursor-pointer' type='submit'>Submit</button>
</div>
</form>
</div>
</div>
</div>
    </div>
  )
}

export default CreateUser

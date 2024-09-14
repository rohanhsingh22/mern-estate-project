import React from 'react'

export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4'>
        <input className='border p-3 rounded-lg' type='text' placeholder='username' id='username'/>
        <input className='border p-3 rounded-lg' type='text' placeholder='email' id='email'/>
        <input className='border p-3 rounded-lg' type='password' placeholder='password' id='password'/>
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>SIGN UP</button>
      </form>
    </div>
  )
}

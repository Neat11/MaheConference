import React from 'react'

export default function Nav() {
  return (
    <div className='w-[100%] absolute group hover:transition-colors hover:ease-linear hover:bg-black hover:bg-opacity-80 hover:duration-100'>
        <button className='flex flex-col text-white hover:animate-spin'>=</button>
        <div  className='hidden w-[100%] translate-y-[-10] group-hover:flex group-hover:flex-col group-hover:translate-y-2 group-hover:transition-transform '>
            <button className='text-white '>Home</button>
            <button className='text-white '>Home</button>
            <button className='text-white :'>Home</button>
        </div>
    </div>
  )
}

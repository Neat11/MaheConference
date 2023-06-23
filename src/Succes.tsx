import React from 'react'

export default function Succes() {
  return (
    <div className='h-screen w-screen bg-[#96EF1B] p-20 flex items-center'>
        <div className='flex flex-col items-center justify-between h-1/2 w-full'>
            <p className='text-black font-bold text-[400%]'>Success</p>
            <p className='text-black text-[100%] text-center'>You've successfully scanned the qr code and loremipsum happens now</p>
            <button onClick={()=>{window.location.href="/scanner"}} className='text-white border-white text-[70%] border-2 px-4 py-1 m-3 bg-black shadow-[-4px_4px_0_rgba(0,9,7,1)]'>Exit</button>   
        </div>
    </div>
  )
}

import React from 'react'
import { Link} from 'react-router-dom'
import bg from "../assets/bg.svg"
export default function Banner() {
  return (
    <div className=' m-[10%] h-max rounded-lg flex justify-center items-center'>
      <img className='' src={bg} alt='bg-logo' />
      <div className='flex justify-around w-[45%] h-[27%] flex-col items-center absolute'>
        <p className=' text-white font-bold text-[120%] align-middle'>MAHE - Bangaluru</p>
        <p className=' text-white text-[75%] max-w-xs text-center'>Welcomes all delegates to its
annual conference, where we
will discuss super important
stuff and be really cool about it</p>
      <Link className='text-white border-white text-[70%] border-2 px-4 py-1 bg-black shadow-[-4px_4px_0_rgba(150,239,27,1)]' to={'/login'}>Sign-in</Link>
      </div>
    </div>
  )
}

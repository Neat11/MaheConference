import React from 'react'
import image from '../assets/image.svg'
interface Props {
  name: string;
  desc: string;
  img: string;
}

export default function MenuItem({name,desc,img}: Props) {
  return (
    <div className='w-[35%] m-4 h-auto'>
      <div className='flex flex-col absolute'>
        {name}  
        {desc}
      </div>
      <img src={image} alt="image" className=' w-[100%] h-auto'/>
    </div>
  )
}

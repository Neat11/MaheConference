import { QrScanner } from '@yudiel/react-qr-scanner';
import React, { useState } from 'react'


export default function Scanner() {
    return (
      <div className='h-screen w-screen'>
      <div className='flex justify-center items-center'>
      <QrScanner containerStyle={{width: '100%',zIndex:0}}
      onDecode={(data) => console.log(data)}
      onError={(err) => console.error(err)}/>
      <div className=' h-1/2 w-full top-0  absolute border-black border-2'>
        <div className='bg-clip-content h-[60vw] top-1/2 shadow-[0px 0px 0px 1000px #00000080]
        ] w-[60vw] bg-[#ffffff00]  border-black border-2'></div></div>
      </div>
        {/* <div className='w-screen flex justify-center items-center h-[50%] bg-black'>
        </div> */}
      </div>  
      )}
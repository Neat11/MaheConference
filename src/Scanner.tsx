import { QrScanner } from '@yudiel/react-qr-scanner';
import React, { useState } from 'react'


export default function Scanner() {
    return (
      <div className='h-screen w-screen bg-[#212121] flex flex-col items-center p-20'>
        <div>
          <p className='text-white font-bold text-[150%]'>Scan The QR Code</p>
        </div>
        <div className='w-screen h-1/2 md:w-1/2 lg:w-1/4 flex justify-center items-center'>
          <div className='w-3/4 h-3/4 p-[5%] bg-slate-500 rounded-xl flex justify-center items-center'>
          <div className='h-full w-full overflow-hidden'>
            <QrScanner containerStyle={{width: "120vw", height: '120vw',left:"-30vw",top:"-25vw"}}
            scanDelay={2000}
            onDecode={(data) => (window.location.href="/success")}
            onError={(err) => console.error(err)}/>
          </div>
          </div>
        </div>
        <div>
          <p className='text-white font-bold text-[100%] text-center m-14'>Align Your Camera with the QR code to proceed</p>
        </div>
        <button onClick={()=>{window.location.href="/"}} className='text-white border-white text-[70%] border-2 px-4 py-1 m-3 bg-black shadow-[-4px_4px_0_rgba(150,239,27,1)]'>Log Out</button>   
      </div>  
      )}
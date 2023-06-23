import React, { useState } from 'react'

export default function Login() {
    const [user, setuser] = useState(false)
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [response,setresponse] = useState('')
    const [badresponse,setbadresponse] = useState(false)
   async function submit(){
        if (!user)
        {
           await fetch('https://manipal-blr-conference-backend-production.up.railway.app/signup', 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                    },
                body: JSON.stringify({
                    email:email,
                    password:password
                })
            }).then((response) => response.status !== 200? setbadresponse(true) : setbadresponse(false))
            
        }
        if (badresponse){
            alert("user already exists")
            setuser(true)
        }
        if (!badresponse){
            fetch('https://manipal-blr-conference-backend-production.up.railway.app/login',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                    },
                body: JSON.stringify({
                    email:email,
                    password:password
                })
            }).then((response) => response.json().then((data) => {
                alert(data.message)
                if (response.status === 200){
                    window.location.href = '/scanner'
                }
            }
            ))
        }}
    return (
        <div className='bg-[#212121] flex flex-col items-center justify-evenly h-[100vh] p-15'>
            <div className=' flex flex-col justify-center items-center align-middle h-[10%] mt-16'>
                <p className='text-white font-bold text-[150%]'>MAHE Bengaluru Conference</p>
                {user? <p className='text-white font-bold text-[130%]'>(Returning User)</p> : <p className='text-white font-bold text-[130%]'>(New User)</p>}
            </div>
            <div className='flex flex-col justify-center items-center align-middle w-full p-[4%] px-[10%] max-w-2xl'>
                <input name='email' className='bg-black border-2 w-full rounded-md p-2 m-2 text-white' type="text" placeholder='Email' value={email} onChange={(e)=>{setemail(e.target.value)}}/>
                <input name='password' className='bg-black border-2 w-full rounded-md p-2 m-2 text-white' type="password" placeholder='Password' value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
                <button onClick={submit} className='text-white border-white text-[70%] border-2 px-4 py-1 m-3 bg-black shadow-[-4px_4px_0_rgba(150,239,27,1)]'>{user? "Sign-in":"Sign-up"}</button>
            </div>
            {user? <p className='font-bold text-white'>Don't have an account? <button onClick={()=>{setuser(!user)}} className='text-[#96EF1B]'>Sign-up</button> here</p>:<p  className='font-bold text-white'>Already have an account? <button onClick={()=>{setuser(!user)}} className='text-[#96EF1B]'>Sign-in</button> here</p>}
        </div>
    )
}

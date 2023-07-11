import React, { useState } from "react";

export default function Signup() {
  const [user, setuser] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [response, setresponse] = useState("");
  const [badresponse, setbadresponse] = useState(false);
  
  async function submit() {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_BASE_URL}/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: 'include',
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      )
      const data = await response.json();
      const status = await response.status;
        if (status === 200) {
            alert("user created successfully")
            window.location.replace('/login')
        }else{
            setbadresponse(false)
            alert(data.message)
        }

    }

  return (
    <div className="bg-[#212121] flex flex-col items-center justify-evenly h-[100vh] p-15">
      <div className=" flex flex-col justify-center items-center align-middle h-[10%] mt-16">
        <p className="text-white font-bold text-[150%]">
          MAHE Bengaluru Conference
        </p>
          <p className="text-white font-bold text-[130%]">New User</p>
      </div>
      <div className="flex flex-col justify-center items-center align-middle w-full p-[4%] px-[10%] max-w-2xl">
        <input
          name="email"
          className="bg-black border-2 w-full rounded-md p-2 m-2 text-white"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <input
          name="password"
          className="bg-black border-2 w-full rounded-md p-2 m-2 text-white"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
        <button
          onClick={submit}
          className="text-white border-white text-[70%] border-2 px-4 py-1 m-3 bg-black shadow-[-4px_4px_0_rgba(150,239,27,1)]"
        >
         Sign-up
        </button>
      </div>
     
        <p className="font-bold text-white">
          Already have an account?{" "}
          <button
            onClick={() => {
                window.location.replace('/login')
            }}
            className="text-[#96EF1B]"
          >
            Sign-in
          </button>{" "}
          here
        </p>
    </div>
  );
}

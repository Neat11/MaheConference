import { QrScanner } from "@yudiel/react-qr-scanner";
import React, { useState } from "react";

export default function Scanner() {
  const getUser = async () => {
    console.log(process.env.REACT_APP_BACKEND_BASE_URL);
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/validate`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    const data = await response.json();
    const status = await response.status;
    console.log(data);
    console.log(status);
    if (status !== 200) {
      alert("Please Login");
      window.location.replace("/login");
    }
  };

  getUser();
  return (
    <div className="h-screen w-screen bg-[#212121] flex flex-col items-center p-20">
      <div>
        <p className="text-white font-bold text-[150%]">Scan The QR Code</p>
      </div>
      <div className="w-screen h-1/2 md:w-1/2 lg:w-1/4 flex justify-center items-center">
        <div className="w-3/4 h-3/4 p-[5%] bg-slate-500 rounded-xl flex justify-center items-center">
          <div className="h-full w-full overflow-hidden">
            <QrScanner
              containerStyle={{
                width: "120vw",
                height: "120vw",
                left: "-30vw",
                top: "-25vw",
              }}
              scanDelay={2000}
              onDecode={(data) => {
                var jsonData = JSON.parse(data);
                if (jsonData.JWT === "") {
                  alert("Invalid QR Code");
                } else {
                  fetch(
                    `${process.env.REACT_APP_BACKEND_BASE_URL}/markAttendance`,
                    {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      credentials: "include",
                      body: JSON.stringify({
                        JWT: jsonData.JWT,
                      }),
                    }
                  ).then((res) => {
                    if (res.status === 200) {
                      alert("Attendance Marked Successfully");
                    } else {
                      alert(
                        JSON.stringify(res.json().then((data) => data.message))
                      );
                    }
                  });
                }
              }}
              onError={(err) => console.error(err)}
            />
          </div>
        </div>
      </div>
      <div>
        <p className="text-white font-bold text-[100%] text-center m-14">
          Align Your Camera with the QR code to proceed
        </p>
      </div>
      <button
        onClick={() => {
          fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/logout`, {
            credentials: "include",
          })
            .then((response) => response.json())
            .then((data) => {
              window.location.replace("/login");
            });
        }}
        className="text-white border-white text-[70%] border-2 px-4 py-1 m-3 bg-black shadow-[-4px_4px_0_rgba(150,239,27,1)]"
      >
        Log Out
      </button>
    </div>
  );
}

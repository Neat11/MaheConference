import { QrScanner } from "@yudiel/react-qr-scanner";
import React, { useEffect, useRef, useState } from "react";

export default function Scanner() {
  const [attendances, setAttendances] = useState<any[]>([]);
  const [user, setUser] = useState<any>(null);
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
    setUser(data);
    console.log(status);
    if (status !== 200) {
      alert("Please Login");
      window.location.replace("/login");
    }
  };

  const getAttendances = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/getAttendance`,
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
    setAttendances(data["attendances"]);
    console.log(status);
    if (status !== 200) {
      alert("Oops! Something went wrong: " + JSON.stringify(data.message));
    }
  };

  useEffect(() => {
      getUser();
      getAttendances();
      //reload the page every 5 minutes
      setTimeout(() => {
        window.location.reload();
      }, 1000*60*5);
    }, []);

  const onScan = (data: string | null) => {
    console.log(data);
    var jsonData: any = {};
    if (data) {
      try {
        jsonData = JSON.parse(data);
      } catch (err) {
        alert("Invalid QR Code");
        return;
      }
      if (jsonData.JWT === "") {
        alert("Invalid QR Code");
      } else {
        fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/markAttendance`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            JWT: jsonData.JWT,
          }),
        }).then((res) => {
          if (res.status === 200) {
            alert("Attendance Marked Successfully");
          } else {
            alert("attendance already marked");
          }
        });
      }
    }
    window.location.replace("/");
    window.location.reload();
  };
  return (
    
    <div className="h-full w-screen bg-[#212121] flex flex-col items-center p-20">
      <div>
        <p className="text-white font-bold text-[150%]">Scan The QR Code</p>
        <p className="text-white">v1.0.0</p>
      </div>
      <div className="w-screen h-1/2 md:w-1/2 lg:w-1/4 flex justify-center items-center">
        <div className="w-3/4 h-3/4 p-[5%] bg-slate-500 rounded-xl flex justify-center items-center">
          <div className=" max-h-60  w-full overflow-hidden">
            <QrScanner
              containerStyle={{
                width: "120vw",
                height: "120vw",
                left: "-30vw",
                top: "-25vw",
              }}
              scanDelay={2000}
              onDecode={onScan}
              onError={(err) => console.error(err)}
              onResult={(result) => console.log(result)}
            />
          </div>
        </div>
      </div>
      <div>
        <p className="text-white font-bold text-[100%] text-center m-14">
          Align Your Camera with the QR code to proceed
        </p>
        <div className="flex justify-center items-center flex-col text-white">
          <h1 className="text-xl">{user?.user.email}</h1>
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
        <div>
          {attendances?.map((item: any) => {
            if (typeof item.created_at === "string")
              return (
                <div
                  className={`p-1 border-solid border-black border-2 justify-center items-center flex m-2 rounded text-center ${
                    item.is_food
                      ? `${
                          Date.now() - new Date(item.created_at).getTime() <
                          900000
                            ? "text-black bg-green-700"
                            : "text-black bg-gray-600"
                        }`
                      : "text-black bg-gray-600 "
                  }`}
                >
                  <p className="text-xl">{item.name}</p>
                </div>
              );
            return <p>{JSON.stringify(typeof item.created_at === "string")}</p>;
          })}
        </div>
      </div>
    </div>
  );
}

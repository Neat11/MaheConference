import React, { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import MenuItem from "./components/MenuItem";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Scanner from "./Scanner";
import Login from "./Login";
import Succes from "./Succes";
import Signup from "./signup";

function App() {
  // let items = [["Name","desc","./assets/image.svg"]
  // ,["Name","desc","./assets/image.svg"]]

  //   const [user, setUser] = useState<any>(null);

  //   if(!user){
  //     window.location.replace('/login')
  //   }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Scanner />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/success" element={<Succes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

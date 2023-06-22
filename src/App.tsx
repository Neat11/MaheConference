import React from 'react';
import './App.css';
import Banner from "./components/Banner";
import Nav from './components/Nav';
import MenuItem from './components/MenuItem';

function App() {

  let items = [["Name","desc","./assets/image.svg"]
  ,["Name","desc","./assets/image.svg"]]
  return (
    <div className="flex flex-col items-center bg-[#212121] h-full min-h-[100vh] w-full">
      <Nav/>
      <div className=" items-center justify-center flex-row flex-wrap ">
      <Banner/>
      <div className="flex flex-row flex-wrap items-center justify-center">
        {items.map((item) => {
          return <MenuItem name={item[0]} img={item[3]} desc={item[1]}/>})}
      </div>
      </div>
    </div>
  );
}

export default App;

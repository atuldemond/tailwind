import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "../components/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        className="   px-[1vw] py-[3vh] font-semibold bg-red-300
           md:bg-slate-400 rounded-md
             lg:bg-yellow-300 text-left"
      >
        <h2 className=" text-center text-4xl   md:text-left  lg:text-right">
          Atul Demond
        </h2>
      </div>
    </>
  );
}

export default App;

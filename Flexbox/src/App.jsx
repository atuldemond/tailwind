import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="main flex w-[80vw] h-screen m-auto py-[2vh] flex-wrap justify-center items-center bg-violet-200">
        <div className="item w-[20vw] h-[30vh] border-2 border-black mx-[2vw] my-[2vh] flex justify-center items-center font-extrabold text-6xl">
          1
        </div>
        <div className="item w-[20vw] h-[30vh] border-2 border-black mx-[2vw] my-[2vh] flex justify-center items-center font-extrabold text-6xl">
          2
        </div>
        <div className="item w-[20vw] h-[30vh] border-2 border-black mx-[2vw] my-[2vh] flex justify-center items-center font-extrabold text-6xl">
          3
        </div>
        <div className="item w-[20vw] h-[30vh] border-2 border-black mx-[2vw] my-[2vh] flex justify-center items-center font-extrabold text-6xl">
          4
        </div>
        <div className="item w-[20vw] h-[30vh] border-2 border-black mx-[2vw] my-[2vh] flex justify-center items-center font-extrabold text-6xl">
          5
        </div>
        <div className="item w-[20vw] h-[30vh] border-2 border-black mx-[2vw] my-[2vh] flex justify-center items-center font-extrabold text-6xl">
          6
        </div>
      </div>
    </>
  );
}

export default App;

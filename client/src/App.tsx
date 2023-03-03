import { useState } from "react";
import "./App.css";
import Logo from "./assets/memories.png";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";

function App() {
  const [currentId,setCurrentId] = useState<string>('')
  return (
    <>
      <nav className="flex max-h-20 items-center justify-center flex-wrap bg-teal-500">
        <ul className="flex justify-evenly">
          <li className="mx-10">
            <p className="font-mono font-bold text-5xl p-5">Memories</p>
          </li>
          <li className="mx-10">
            <img
              className="object-scale-down h-4/6 w-44 pt-3"
              src={Logo}
              alt="Header Logo"
            />
          </li>
        </ul>
      </nav>
      <div className="flex md:flex-row md:flex-nowrap sm:flex-wrap sm:flex-col-reverse justify-between mt-10">
        <div className="md:justify-start ml-2">
          <Posts setCurrentId = {setCurrentId}/>
        </div>
        <div className="md:justify-end sm:place-self-center md:mr-2 md:mt-5">
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        </div>
      </div>
    </>
  );
}

export default App;

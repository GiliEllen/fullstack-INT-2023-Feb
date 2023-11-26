import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const delay = 5;

function App() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("");
  const [show, setShow] = useState(false);

  //clg on every render
  console.log("rerender");
  useEffect(() => {
    document.title = `You clicked ${count} times`;
    console.log("rerender in effect");
  });

  // clg on mount - only once
  useEffect(() => {
    document.title = `gili`;
    console.log("once");
  }, []);

  //clg on mount and title change
  useEffect(() => {
    console.log("when title changes");
  }, [title]);

  const handleLog = () => {
    console.log("clicked on window from event listener");
  };

  useEffect(() => {
    window.addEventListener("click", handleLog);
    return () => window.removeEventListener("click", handleLog);
  });
  useEffect(() => {
    const timer1 = setTimeout(() => setShow(true), delay * 1000);
    return () => {
      clearTimeout(timer1);
    };
  });

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <input
          type="text"
          value={title}
          onInput={(ev) => {
            setTitle((ev.target as HTMLInputElement).value);
          }}
        />
        {show ? (
          <div>show is true, {delay}seconds passed</div>
        ) : (
          <div>show is false, wait {delay}seconds</div>
        )}
      </div>
    </>
  );
}

export default App;

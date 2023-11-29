import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [timeRemaining, setTimeRemaining] = useState(20);

  useEffect(() => {
    if (timeRemaining <= 0) {
      return;
    }

    const timerId = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [timeRemaining]);

  return (
    <>
      <p>Time Remaining: {timeRemaining}</p>
    </>
  );
}

export default App;

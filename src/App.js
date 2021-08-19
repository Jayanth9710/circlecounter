import logo from "./logo.svg";
import "./App.css";
import Circle from "./counterCircle";
import { useState } from "react";

function App() {
  let [count, setCount] = useState([
    {
      id: "blue",
      count: 0,
      factor: 1,
    },
    {
      id: "yellow",
      count: 0,
      factor: 2,
    },
    {
      id: "green",
      count: 0,
      factor: 3,
    },
  ]);

  let increment = (id) => {
    let countIndex = count.findIndex((obj) => obj.id == id);
    count[countIndex].count++;
    //  factor = count[countIndex].count * count[countIndex].factor;
    // console.log(factor);
    setCount([...count]);
  };

  let reset = () => {
    count.map(obj => obj.count = 0);
    setCount([...count]);
  };

  return (
    <div>
      <div className="resetbtn">
      <button onClick={reset} className="btn btn-danger ">Reset</button>
      </div>
      
      {count.map((obj) => {
        return <Circle data={obj} handleCount={increment}  />;
      })}
    </div>
  );
}

export default App;

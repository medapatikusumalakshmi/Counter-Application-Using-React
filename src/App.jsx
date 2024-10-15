import React, { useReducer } from "react";


export default function App() {
  function reducer(state, action) {
    switch (action) {
      case "inc":
        return state + 1;
      case "dec":
        return state - 1;
      case "res":
        return 0;
      default:
        return state;
    }
  }

  let [count, dispatch] = useReducer(reducer, 0);

  return (
    <div className="container">
      <div className="counter"><h1>{count}</h1></div>
      <button onClick={() => dispatch("inc")}>Increment</button>
      <button onClick={() => dispatch("dec")}>Decrement</button>
      <button onClick={() => dispatch("res")}>Reset</button>
    </div>
  );
}

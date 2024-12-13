import { useContext, useState } from "react";
import "./App.css";
import { CountContext } from "./context/count";

function App() {
  const { state, dispatch } = useContext(CountContext);
  // const {todolist, } = useContext(dsad)

  return (
    <>
      <div>
        <h2>Tasbeh</h2>
        <h2>{state.count}</h2>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
        <button onClick={() => dispatch({ type: "RESET" })}>RESET</button>
      </div>

      <div
        style={{
          marginTop: "50px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
          }}
        >
          To do list
        </h1>

        <input type="text" placeholder="Type something here" />
        <button>Add</button>
      </div>
    </>
  );
}

export default App;

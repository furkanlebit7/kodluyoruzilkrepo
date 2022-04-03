import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  IncrementByAmount,
} from "../redux/counter/counterSlice";

function Counter() {
  const dispatch = useDispatch();
  const countValue = useSelector((state) => state.counter.value);

  const [amount, setAmount] = useState(0);

  return (
    <div>
      <h1>{countValue}</h1>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <br />
      <br />

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={() => dispatch(IncrementByAmount(amount))}>
        Increment By Amount
      </button>
    </div>
  );
}

export default Counter;

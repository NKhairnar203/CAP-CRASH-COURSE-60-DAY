import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="main">
        <h1>count : {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button disabled={count <= 0} onClick={() => setCount(count - 1)}>
          Decrement
        </button>

        <button disabled={count===0} onClick={() => setCount(0)}>Reset</button>
      </div>
    </>
  );
}

export default App;

import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Incrementar
      </button>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount((prev) => prev - 1);
        }}
      >
        Decrementar
      </button>
    </div>
  );
}

export default App;

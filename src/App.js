import { useMemo, useState } from "react";
import { initialItems } from "./utils/InitialItems";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  const selectedItem = useMemo(
    () => items.find((item) => item.isSelected),
    [items]
  );
  return (
    <div className="App">
      <h1>UseMemo Hook</h1>
      <h2>Count:{count}</h2>
      <h2>Selected Item: {selectedItem?.id}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;

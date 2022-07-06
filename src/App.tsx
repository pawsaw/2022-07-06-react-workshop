import { useCallback, useEffect, useState } from 'react';
import './App.css';
import { Counter, OnValueChanged } from './components/Counter';

function App() {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   const int = setInterval(() => {
  //     setCount((count) => count + 1);
  //     console.log({ count });
  //   }, 1000);

  //   return () => clearInterval(int);
  // }, [count]);

  const onCounterValueChanged: OnValueChanged = useCallback(
    (newValue: number) => setCount(newValue),
    [],
  );

  return (
    <div className="App">
      Count: {count}
      <Counter onValueChanged={onCounterValueChanged} value={count} />
    </div>
  );
}

export default App;

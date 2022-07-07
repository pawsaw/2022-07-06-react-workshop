import React from 'react';
import { useCounter } from './CounterContext';

export const Counter2: React.FC = () => {
  const counter = useCounter();

  function increment() {
    counter.increment();
  }

  return <button onClick={increment}>{counter.count}</button>;
};

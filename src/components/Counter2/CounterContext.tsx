import React, { useContext } from 'react';
import { noop } from '../../utils/noop';
import { Counter } from './Counter';

const CounterContext = React.createContext<Counter>({
  count: 0,
  increment: noop,
  decrement: noop,
});

export interface CounterContextProviderProps {
  counter: Counter;
  children: React.ReactNode;
}

export const CounterContextProvider: React.FC<CounterContextProviderProps> = ({
  counter,
  children,
}) => {
  return (
    <CounterContext.Provider value={counter}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => useContext(CounterContext);

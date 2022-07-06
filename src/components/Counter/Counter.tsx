import React from 'react';
import { noop } from '../../utils/noop';

export interface OnValueChanged {
  (currentValue: number): void;
}

export interface CounterProps {
  value?: number;
  onValueChanged?: OnValueChanged;
}

export const Counter: React.FC<CounterProps> = ({
  value = 0,
  onValueChanged = noop,
}) => {
  function increment() {
    onValueChanged(value + 1);
  }

  return <button onClick={increment}>{value}</button>;
};

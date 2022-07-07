import React, { useContext } from 'react';

const ContextApi = React.createContext('http://localhost:4730');

export interface ContextApiProviderProps {
  baseUrl: string;
  children: React.ReactNode;
}

export const ContextApiProvider: React.FC<ContextApiProviderProps> = ({
  baseUrl,
  children,
}) => {
  return <ContextApi.Provider value={baseUrl}>{children}</ContextApi.Provider>;
};

export const useBaseUrl = () => useContext(ContextApi);

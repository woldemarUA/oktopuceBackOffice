import React, { createContext, useState, useContext, useEffect } from 'react';

const ClientsContext = createContext();

export const useClients = () => useContext(ClientsContext);

const apiUrl = process.env.EXPO_PUBLIC_API_LINK;

const ClientsProvider = ({ children }) => {
  const [clients, setClients] = useState(null);
  const [errClients, setErr] = useState(null);

  useEffect(() => {
    fetch(`${apiUrl}clients`)
      .then((res) => res.json())
      .then((data) => {
        if (data.msg === 'ok') {
          setClients(data.data);
        } else {
          setErr(data);
        }
      });
  }, []);
  return (
    <ClientsContext.Provider value={{ clients, errClients }}>
      {children}
    </ClientsContext.Provider>
  );
};

export default ClientsProvider;

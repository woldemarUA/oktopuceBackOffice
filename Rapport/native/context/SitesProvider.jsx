import React, { createContext, useState, useContext, useEffect } from 'react';

const SitesContext = createContext();

export const useSites = () => useContext(SitesContext);
const apiUrl = process.env.EXPO_PUBLIC_API_LINK;

const SitesProvider = ({ children }) => {
  const [sites, setSites] = useState(null);
  const [sitesErr, setSitesErr] = useState(null);

  useEffect(() => {
    fetch(`${apiUrl}sites`)
      .then((res) => res.json())
      .then((data) => {
        if (data.msg === 'ok') {
          setSites(data.data);
        } else {
          setSitesErr(data);
        }
      });
  }, []);

  return (
    <SitesContext.Provider value={{ sites, sitesErr }}>
      {children}
    </SitesContext.Provider>
  );
};

export default SitesProvider;

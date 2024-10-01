import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const EquipmentContext = createContext();

export const useEquipment = () => useContext(EquipmentContext);

const apiUrl = process.env.EXPO_PUBLIC_API_LINK;

const EquipmentProvider = ({ children }) => {
  const [equipments, setEquipments] = useState(null);
  const [equipmentsErr, setEquipmentsErr] = useState(null);

  const fetchEquipmentBySiteId = async (id) => {
    const res = await axios(`${apiUrl}equipments/site-id/${id}`);
    if (res.data.msg === 'ok') {
      return res.data.data;
    } else {
      setEquipmentsErr(res.data);
      return equipmentsErr;
    }
  };

  useEffect(() => {
    fetch(`${apiUrl}equipments`)
      .then((res) => res.json())
      .then((data) => {
        if (data.msg === 'ok') {
          setEquipments(data.data);
        } else {
          setEquipmentsErr(data);
        }
      });
  }, []);
  return (
    <EquipmentContext.Provider
      value={{ equipments, equipmentsErr, fetchEquipmentBySiteId }}>
      {children}
    </EquipmentContext.Provider>
  );
};

export default EquipmentProvider;

import React, { createContext, useState, useContext, useEffect } from 'react';

import axios from 'axios';

const InterventionsContext = createContext();

export const useInterventions = () => useContext(InterventionsContext);

const apiUrl = process.env.EXPO_PUBLIC_API_LINK;

const InterventionsProvider = ({ children }) => {
  const [interventions, setInterventions] = useState(null);
  const [interventionsErr, setInterventionsErr] = useState(null);

  const fetchAllInterventions = async () => {
    const res = await axios(`${apiUrl}interventions`);
    if (res.data.msg === 'ok') {
      return res.data.data;
    } else {
      setEquipmentsErr(res.data);
      return equipmentsErr;
    }
  };

  const fetchInterventionByEqId = async (id) => {
    const res = await axios(`${apiUrl}interventions/eq-id/${id}`);
    if (res.data.msg === 'ok') {
      return res.data.data;
    } else {
      setEquipmentsErr(res.data);
      return equipmentsErr;
    }
  };

  const fetchQuestionsByInterventionId = async (id) => {
    const res = await axios(`${apiUrl}interventions/question-id/${id}`);
    if (res.data.msg === 'ok') {
      return res.data.data;
    } else {
      setEquipmentsErr(res.data);
      return equipmentsErr;
    }
  };

  useEffect(() => {
    fetch(`${apiUrl}interventions`)
      .then((res) => res.json())
      .then((data) => {
        if (data.msg === 'ok') {
          setInterventions(data.data);
        } else {
          setInterventionsErr(data);
        }
      });
  }, []);
  return (
    <InterventionsContext.Provider
      value={{
        interventions,
        interventionsErr,
        fetchAllInterventions,
        fetchInterventionByEqId,
        fetchQuestionsByInterventionId,
      }}>
      {children}
    </InterventionsContext.Provider>
  );
};

export default InterventionsProvider;

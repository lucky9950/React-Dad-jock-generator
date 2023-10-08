import React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const apiKey = "VYPB/QhaA2KOj9cybIztSA==fxZiJcI7jI4ZTtv8";

  const option = {
    method: "GET",
    headers: {
      "X-Api-Key": apiKey,
    },
  };

  const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

  async function getJoke() {
    try {
      setLoading(true);
      const responce = await axios.get(apiURL, option);
      console.log(responce);
      setData(responce.data[0]);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getJoke()
     // eslint-disable-next-line
  },[]);

  return (
    <AppContext.Provider value={{ data, loading, getJoke }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobleContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

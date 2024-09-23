import React, { useState, useContext, createContext, useEffect } from "react";
export const bulletinContext = createContext({ bulletinData: [] });
export const useBulletinContext = () => useContext(bulletinContext);

export function BulletinContext(props) {
  const [loading, setLoading] = useState(true);
  const [bulletinData, setBulletinData] = useState([]);

  useEffect(() => {
    const handleFetchBulletin = () => {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      fetch("https://nesine-case-study.onrender.com/bets", options)
        .then((response) => response.json())
        .then((data) => {
          setBulletinData(data);
          setLoading(false);
        })
        .catch((error) => console.error(error));
    };
    handleFetchBulletin();
  }, []);

  const contextValue = {
    bulletinData,
    loading,
  };

  return (
    <bulletinContext.Provider value={contextValue}>
      {props.children}
    </bulletinContext.Provider>
  );
}

import React, { useState, useEffect, createContext } from 'react'


export const DegreeContext = createContext();

export const DegreeProvider = props => {
  const url = 'https://catalog.prd1.env.opendev.edu.au/v3/degree/CUR-LIB-DEG-2019';
  const [degree, setDegree] = useState({})

  const fetchDegree = async () => {
    try {
      let response = await fetch(url);
      let data = await response.json();
      setDegree(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDegree();
  }, []);

  return (
    <DegreeContext.Provider value={[degree, setDegree]}>
      {props.children}
    </DegreeContext.Provider>
  )
}

import React, { createContext, useState } from "react";

export const UserContext = createContext();

// This context provider is passed to any component requiring the context
export const UserProvider = ({ children }) => {
  const [name, setName] = useState("Manash");
  const [profession, setProfession] = useState("Sr. Software Engineer");

  return (
    <UserContext.Provider value={{name, profession, setName, setProfession}}>
        {children}
    </UserContext.Provider>
  );
};
import React from "react";
import { useState } from "react";

const DataContext = React.createContext("");

const DataProvider = ({ children }) => {
  const [user, setUser] = useState({
    userID: "",
    userPW: "",
    userName: "",
    userBirth: "",
    userGender: "",
    userEmail: "",
    userAddress: "",
    userPhone: "",
    login: false,
  });

  const value = {
    state: { user },
    action: { setUser },
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export { DataProvider };
export default DataContext;

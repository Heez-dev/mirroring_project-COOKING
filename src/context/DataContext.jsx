import React from "react";
import { useState } from "react";

const DataContext = React.createContext("");

const DataProvider = ({ children }) => {
  // User
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
    scraplist: [],
    likelist: [],
    writelist:[]
  });

  const value = {
    userstate: { user },
    useraction: { setUser },
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export { DataProvider };
export default DataContext;

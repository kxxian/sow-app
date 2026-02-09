import { createContext, useEffect, useState } from "react";
import api from "../axios/axios";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  // useEffect(() => {
  //   const getLangFromDB = async () => {
  //     try {
  //       const { data } = await api.get("/api/login/lang");
  //
  //       setLanguage(data.langDB);
  //     } catch (error) {
  //       console.log(`Error: ${error}`);
  //     }
  //   };
  //
  //   getLangFromDB();
  // }, []);
  //
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;

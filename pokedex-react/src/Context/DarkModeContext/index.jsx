import { createContext, useContext, useState } from "react";

export const DarkModeContext = createContext("");

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  function onClickDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <DarkModeContext.Provider value={{ onClickDarkMode, darkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  const context = useContext(DarkModeContext);

  return context;
}

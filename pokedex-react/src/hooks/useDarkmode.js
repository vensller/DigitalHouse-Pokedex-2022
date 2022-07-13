import { useContext } from "react";
import { DarkModeContext } from "../Context/DarkModeContext";

export function useDarkMode() {
  const context = useContext(DarkModeContext);

  return context;
}

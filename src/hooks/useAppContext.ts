import { useContext } from "react";
import { AppContext } from "../Context/AppContextValue";
import type { AppContextType } from "../Types/context";

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

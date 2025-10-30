import { createContext } from "react";
import type { AppContextType } from "../Types/context";

export const AppContext = createContext<AppContextType | undefined>(undefined);

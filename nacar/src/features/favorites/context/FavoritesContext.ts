import { createContext } from "react";
import type { FavoritesContextType } from "../types/Favorites";

export const FavoritesContext = createContext<FavoritesContextType | null>(null);

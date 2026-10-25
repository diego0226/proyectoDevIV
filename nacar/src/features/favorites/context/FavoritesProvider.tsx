import { FavoritesContext } from "./FavoritesContext";
import type { FavoritesProviderProps } from "../types/Favorites";

const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
  return (
    <FavoritesContext.Provider value={null}>{children}</FavoritesContext.Provider>
  );
};

export default FavoritesProvider;

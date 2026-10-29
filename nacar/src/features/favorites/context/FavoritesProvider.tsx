import { useEffect, useState } from "react";
import { FavoritesContext } from "./FavoritesContext";
import type { FavoritesProviderProps } from "../types/Favorites";

const STORAGE_KEY = "nacar-favorites";

// Lee los favoritos guardados; si no hay datos o están dañados se empieza con una lista vacía
function readFavorites(): number[] {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");

    if (Array.isArray(saved) && saved.every((id) => typeof id === "number")) {
      return saved;
    }
  } catch {
    // JSON inválido, se ignora y se usa la lista vacía
  }

  return [];
}

const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
  
  // La función se pasa sin ejecutar para que localStorage se lea solo una vez
  const [favorites, setFavorites] = useState<number[]>(readFavorites);

  // Cada cambio se guarda para que los favoritos sigan ahí al recargar
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  // FavoriteButton solo llama a addFavorite cuando el apartamento aún no está guardado
  const addFavorite = (id: number) => {
    setFavorites([...favorites, id]);
  };

  const removeFavorite = (id: number) => {
    setFavorites(favorites.filter((favoriteId) => favoriteId !== id));
  };

  const isFavorite = (id: number) => favorites.includes(id);

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;

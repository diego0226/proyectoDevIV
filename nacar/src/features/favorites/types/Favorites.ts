import type { ReactNode } from "react";

export interface FavoritesContextType {
  favorites: number[];
  addFavorite: (id: number) => void;
  removeFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

export interface FavoritesProviderProps {
  children: ReactNode;
}

export interface FavoriteButtonProps {
  apartmentId: number;
  apartmentName: string;
  
  variant?: "icon" | "full";
}

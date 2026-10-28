import { useFavorites } from "../context/useFavorites";
import type { FavoriteButtonProps } from "../types/Favorites";
import "./FavoriteButton.css";

const FavoriteButton = ({
  apartmentId,
  apartmentName,
  variant = "icon",
}: FavoriteButtonProps) => {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
  const favorite = isFavorite(apartmentId);

  const handleClick = () => {
    if (favorite) {
      removeFavorite(apartmentId);
    } else {
      addFavorite(apartmentId);
    }
  };

  const className =
    variant === "icon"
      ? "favorite-button favorite-button--icon"
      : "btn btn--outline favorite-button favorite-button--full";

  return (
    <button
      type="button"
      className={className}
      aria-pressed={favorite}
      
      
      aria-label={
        variant === "icon"
          ? `${favorite ? "Quitar" : "Guardar"} ${apartmentName} ${favorite ? "de" : "en"} favoritos`
          : undefined
      }
      onClick={handleClick}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>

      {variant === "full" &&
        (favorite ? "Guardado en favoritos" : "Guardar en favoritos")}
    </button>
  );
};

export default FavoriteButton;

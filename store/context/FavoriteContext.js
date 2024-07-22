import { createContext, useState } from "react";

export const FavoriteContext = createContext({
  ids: [],
  addToFavorite: (mealId) => {},
  removeFromFavorite: (mealId) => {},
});

export default function FavoriteContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);
  const addToFavorite = (mealId) => {
    setFavoriteMealIds((currentIds) => [...currentIds, mealId]);
  };

  const removeFromFavorite = (mealId) => {
    setFavoriteMealIds((currentIds) =>
      currentIds.filter((id) => id !== mealId)
    );
  };
  const value = {
    ids: favoriteMealIds,
    addToFavorite: addToFavorite,
    removeFromFavorite: removeFromFavorite,
  };
  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
}

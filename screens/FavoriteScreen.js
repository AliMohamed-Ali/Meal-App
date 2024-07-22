import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { FavoriteContext } from "../store/context/FavoriteContext";
import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealOverView/MealList";

const FavoriteScreen = () => {
  const favoriteCtx = useContext(FavoriteContext);
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteCtx.ids.includes(meal.id)
  );
  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          No favorite meals found. Start adding some!
        </Text>
      </View>
    );
  }
  return <MealList items={favoriteMeals} />;
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

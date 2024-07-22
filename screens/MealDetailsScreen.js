import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React, { useContext, useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetails/Subtitle";
import List from "../components/MealDetails/List";
import IconButton from "../components/IconButton";
import { FavoriteContext } from "../store/context/FavoriteContext";

const MealDetailsScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;
  const mealCtx = useContext(FavoriteContext);
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const mealIsFavorite = mealCtx.ids.includes(mealId);
  function headerButtonHandler() {
    if (mealIsFavorite) {
      mealCtx.removeFromFavorite(mealId);
    } else {
      mealCtx.addToFavorite(mealId);
    }
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? "star" : "star-outline"}
            color="white"
            onPress={headerButtonHandler}
          />
        );
      },
    });
  }, [navigation, headerButtonHandler]);
  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        textStyle={styles.textStyle}
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      />
      <View style={styles.outterContainer}>
        <View style={styles.innerContainer}>
          <Subtitle text={"Ingredients"} />
          <List list={selectedMeal.ingredients} />
          <Subtitle text={"Steps"} />
          <List list={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
    marginBottom: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    marginVertical: 8,
    textAlign: "center",
    color: "white",
  },

  textStyle: {
    color: "white",
  },
  innerContainer: {
    width: "80%",
  },
  outterContainer: {
    alignItems: "center",
  },
});

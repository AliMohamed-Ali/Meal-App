import React, { useLayoutEffect } from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealList from "../components/MealOverView/MealList";
const MealOverViewScreen = ({ navigation, route }) => {
  const { categoryId } = route.params;
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;
    navigation.setOptions({ title: categoryTitle });
  }, [categoryId, navigation]);

  const meals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));
  return <MealList items={meals} />;
};

export default MealOverViewScreen;

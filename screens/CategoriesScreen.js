import { FlatList } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import GridItemTitle from "../components/GridItemTitle";

const CategoriesScreen = ({ navigation }) => {
  const renderGridItem = (itemData) => {
    return (
      <GridItemTitle
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={() =>
          navigation.navigate("MealOverViewScreen", {
            categoryId: itemData.item.id,
          })
        }
      />
    );
  };
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;

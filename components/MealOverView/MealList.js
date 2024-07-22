import { StyleSheet, View, FlatList } from "react-native";
import React from "react";
import MealItem from "./MealItem";

const MealList = ({ items }) => {
  const renderItem = (itemData) => {
    return <MealItem item={itemData.item} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default MealList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

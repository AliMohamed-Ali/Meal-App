import { StyleSheet, Text, View } from "react-native";
import React from "react";

const List = ({ list }) => {
  return list.map((item) => {
    return (
      <View key={item} style={styles.listItem}>
        <Text style={styles.textStyle}>{item}</Text>
      </View>
    );
  });
};

export default List;

const styles = StyleSheet.create({
  listItem: {
    marginVertical: 5,
    marginHorizontal: 20,
    borderColor: "#e2b497",
    borderWidth: 1,
    padding: 6,
    borderRadius: 5,
    backgroundColor: "#e2b497",
  },
  textStyle: {
    color: "#3f2f25",
    textAlign: "center",
  },
});

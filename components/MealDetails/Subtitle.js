import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Subtitle = ({ text }) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subTitle}>{text}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#e2b497",
    textAlign: "center",
  },
  subtitleContainer: {
    padding: 6,
    marginVertical: 4,
    marginHorizontal: 24,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
});

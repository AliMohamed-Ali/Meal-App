import { Pressable, StyleSheet, Text, View, Platform } from "react-native";
import React from "react";

const GridItemTitle = ({ title, color, onPress }) => {
  return (
    <View style={[styles.gridItem]}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [styles.button, pressed && { opacity: 0.5 }]}
        android_ripple={{ color: "#ccc" }}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default GridItemTitle;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    overflow: Platform.select({ android: "hidden" }),
    backgroundColor: "#fff",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  button: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

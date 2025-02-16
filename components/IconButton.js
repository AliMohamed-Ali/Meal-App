import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ onPress, icon, color }) => {
  return (
    <Pressable>
      <Ionicons
        name={icon}
        size={24}
        color={color}
        onPress={onPress}
        style={({ pressed }) => pressed && styles.press}
      />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  press: {
    opacity: 0.7,
  },
});

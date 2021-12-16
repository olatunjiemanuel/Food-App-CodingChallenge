import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";

const BackButton = () => {
  return (
    <View style={styles.buttoncontainer}>
      <Ionicons name="chevron-back-outline" size={24} color="#fff" />
    </View>
  );
};

const styles = StyleSheet.create({
  buttoncontainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 24,
  },
});

export default BackButton;

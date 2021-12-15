import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const GreenButton = (props) => {
  const { text } = props;
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1FCC79",
    width: 68,
    height: 48,
    borderRadius: 32,
  },
  text: {
    color: "#fff",
    fontWeight: "500",
    lineHeight: 25,
    fontSize: 15,
  },
});

export default GreenButton;

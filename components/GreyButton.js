import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const GreyButton = (props) => {
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
    backgroundColor: "#F4F5F7",
    width: 86,
    height: 47,
    borderRadius: 32,
  },
  text: {
    color: "#9FA5C0",
    fontWeight: "500",
    lineHeight: 25,
    fontSize: 15,
  },
});

export default GreyButton;

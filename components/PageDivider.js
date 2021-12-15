import React from "react";
import { StyleSheet, View } from "react-native";

const PageDivider = () => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F4F5F7",
    width: 375,
    height: 8,
  },
});

export default PageDivider;

import React from "react";
import { StyleSheet, View } from "react-native";

function ModalPageDivider(props) {
  return (
    <View style={[styles.divider, { backgroundColor: props.color }]}></View>
  );
}

const styles = StyleSheet.create({
  divider: {
    width: 40,
    height: 5,
    borderRadius: 100,
  },
});

export default ModalPageDivider;

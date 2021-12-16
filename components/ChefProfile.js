import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const ChefProfile = (props) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image style={styles.image} source={props.image} />
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#2E3E5C",
    marginLeft: 8,
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 25,
  },
  image: {
    width: 32,
    height: 32,
  },
});

export default ChefProfile;

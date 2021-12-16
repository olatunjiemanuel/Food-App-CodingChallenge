import React from "react";
import { StyleSheet, Text, View } from "react-native";

import HeartIcon from "../assets/SVG icons/HeartIcon";

function Ratings() {
  return (
    <View style={styles.ratingsContainer}>
      <View style={styles.likesContainer}>
        <HeartIcon color="rgba(255,255,255,0.5)" />
      </View>
      <View>
        <Text style={styles.text}>273 Likes</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  likesContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#1FCC79",
  },
  ratingsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    marginLeft: 8,
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 25,
  },
});

export default Ratings;

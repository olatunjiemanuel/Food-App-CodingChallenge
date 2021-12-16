import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MealDescription = () => {
  return (
    <View>
      <Text style={styles.Title}>Description</Text>
      <Text style={styles.Description}>
        Your recipe has been uploaded, you can see it on your profile. Your
        recipe has been uploaded, you can see it on your
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Title: {
    fontWeight: "700",
    fontSize: 17,
    lineHeight: 27,
    width: 102,
    height: 27,
    color: "#3E5481",
  },
  Description: {
    fontWeight: "500",
    fontSize: 17,
    lineHeight: 25,
    width: 327,
    height: 75,
    color: "#9FA5C0",
  },
});

export default MealDescription;

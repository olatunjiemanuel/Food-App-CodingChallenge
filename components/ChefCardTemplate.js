import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const ChefCardTemplate = (props) => {
  const { mealName, mealImage, profilePic, ChefName } = props;
  return (
    <View style={styles.container}>
      <View style={styles.profilecontainer}>
        <View>
          <Image style={styles.image} source={profilePic} />
        </View>
        <View style={{ marginLeft: 8 }}>
          <Text style={{ color: "#2E3E5C" }}>{ChefName}</Text>
        </View>
      </View>
      <View style={{ marginTop: 16 }}>
        <Image source={mealImage} />
      </View>
      <View style={styles.heartcontainer}>
        <Feather name="heart" size={24} color="#FFFFFF" />
      </View>
      <View
        style={{
          marginTop: 16,
        }}
      >
        <Text
          style={{
            color: "#3E5481",
            fontSize: 17,
            fontWeight: "700",
            lineHeight: 27,
          }}
        >
          {mealName}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: 110,
          height: 15,
          marginTop: 8,
        }}
      >
        <Text style={{ color: "#9FA5C0" }}>Food</Text>
        <Entypo name="dot-single" size={10} color="#9FA5C0" />
        <Text style={{ color: "#9FA5C0" }}> {">"} 60 mins </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profilecontainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  heartcontainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    marginTop: 69,
    marginLeft: 109,
    borderRadius: 8,
    width: 32,
    height: 32,
  },
});

export default ChefCardTemplate;

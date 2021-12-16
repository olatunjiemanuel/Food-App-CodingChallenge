import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { AntDesign } from "@expo/vector-icons";

function Ingredients() {
  return (
    <View>
      <View>
        <Text
          style={{
            color: "#3E5481",
            fontSize: 17,
            fontWeight: "700",
            lineHeight: 27,
          }}
        >
          Ingredients
        </Text>
      </View>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 16 }}
      >
        <View
          style={{
            backgroundColor: "#1FCC79",
            width: 24,
            height: 24,
            borderRadius: 12,
          }}
        >
          <AntDesign name="checkcircle" size={24} color="#E3FFF8" />
        </View>
        <View style={{ marginLeft: 8 }}>
          <Text style={styles.ingredientsText}>4 Eggs</Text>
        </View>
      </View>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 16 }}
      >
        <View
          style={{
            backgroundColor: "#1FCC79",
            width: 24,
            height: 24,
            borderRadius: 12,
          }}
        >
          <AntDesign name="checkcircle" size={24} color="#E3FFF8" />
        </View>
        <View style={{ marginLeft: 8 }}>
          <Text style={styles.ingredientsText}>1/2 Butter</Text>
        </View>
      </View>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 16 }}
      >
        <View
          style={{
            backgroundColor: "#1FCC79",
            width: 24,
            height: 24,
            borderRadius: 12,
          }}
        >
          <AntDesign name="checkcircle" size={24} color="#E3FFF8" />
        </View>
        <View style={{ marginLeft: 8 }}>
          <Text style={styles.ingredientsText}>1/2 Butter</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ingredientsText: {
    fontWeight: "500",
    color: "#2E3E5C",
    fontSize: 15,
    lineHeight: 25,
  },
});

export default Ingredients;

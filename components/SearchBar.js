import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

//icon imports
import { Feather } from "@expo/vector-icons";

const SeacrhBar = (props) => {
  const { placeholder } = props;
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Feather name="search" size={18} color="#3E5481" />
        <TextInput style={styles.TextInput} placeholder={placeholder} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  TextInput: {
    marginLeft: 8,
    width: 51,
    height: 18,
    fontWeight: "500",
    fontSize: 15,
  },
  container: {
    backgroundColor: "#F4F5F7",
    borderRadius: 32,
    marginHorizontal: 24,
  },
  container2: {
    marginLeft: 24,
    flexDirection: "row",
    width: 327,
    height: 56,
    alignItems: "center",
  },
});

export default SeacrhBar;

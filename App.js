import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

//component imports
import SearchBar from "./components/SearchBar";
import GreyButton from "./components/GreyButton";
import GreenButton from "./components/GreenButton";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <SearchBar placeholder="Search" />
      </View>
      <View>
        <Text style={styles.text}>Category</Text>
      </View>
      <View style={styles.buttoncontainer}>
        <View>
          <GreenButton text="All" />
        </View>
        <View>
          <GreyButton text="Food" />
        </View>
        <View>
          <GreyButton text="Drink" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
  },
  text: {
    width: 82,
    height: 27,
    fontWeight: "700",
    fontSize: 17,
    lineHeight: 27,
    color: "#3E5481",
    marginHorizontal: 24,
  },
  buttoncontainer: {
    flexDirection: "row",
  },
});

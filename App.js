import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

//component imports
import SearchBar from "./components/SearchBar";
import Buttons from "./components/Buttons";
import PageDivider from "./components/PageDivider.js";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <SearchBar placeholder="Search" />
      </View>
      <View>
        <Text style={styles.text}>Category</Text>
      </View>
      <View>
        <Buttons />
      </View>
      <View>
        <PageDivider />
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
});

import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";

//component imports
import SearchBar from "./components/SearchBar";
import Buttons from "./components/Buttons";
import PageDivider from "./components/PageDivider.js";
import PageNavigator from "./components/PageNavigator";
import ChefCardTemplate from "./components/ChefCardTemplate";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <SearchBar placeholder="Search" />
      </View>
      <View style={{ marginTop: 24 }}>
        <Text style={styles.text}>Category</Text>
      </View>
      <View style={{ marginTop: 16 }}>
        <Buttons />
      </View>
      <View style={{ marginTop: 23 }}>
        <PageDivider />
      </View>
      <View style={{ marginTop: 24 }}>
        <PageNavigator />
      </View>
      <ScrollView>
        <View
          style={{ flexDirection: "row", marginTop: 24, marginHorizontal: 24 }}
        >
          <View>
            <ChefCardTemplate
              profilePic={require("./assets/Images/ElifSonas.png")}
              mealImage={require("./assets/Images/Salad.png")}
              mealName="Pancake"
              ChefName="Calem Lewis"
            />
          </View>
          <View style={{ marginLeft: 25 }}>
            <ChefCardTemplate
              profilePic={require("./assets/Images/ElifSonas.png")}
              mealImage={require("./assets/Images/Salad.png")}
              mealName="Salad"
              ChefName="Elif Sonas"
            />
          </View>
        </View>
        <View
          style={{ flexDirection: "row", marginTop: 24, marginHorizontal: 24 }}
        >
          <TouchableOpacity>
            <ChefCardTemplate
              profilePic={require("./assets/Images/ElenaShelby.png")}
              mealImage={require("./assets/Images/Pancakes.png")}
              mealName="Pancake"
              ChefName="Elena Shelby"
            />
          </TouchableOpacity>
          <View style={{ marginLeft: 25 }}>
            <ChefCardTemplate
              profilePic={require("./assets/Images/JohnPriyadi.png")}
              mealImage={require("./assets/Images/coffee.png")}
              mealName="Salad"
              ChefName="John Priyadi"
            />
          </View>
        </View>
      </ScrollView>
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

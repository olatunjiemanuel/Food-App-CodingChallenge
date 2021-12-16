import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Modal,
  Image,
  Pressable,
} from "react-native";

//component imports
import SearchBar from "./components/SearchBar";
import Buttons from "./components/Buttons";
import PageDivider from "./components/PageDivider.js";
import PageNavigator from "./components/PageNavigator";
import ChefCardTemplate from "./components/ChefCardTemplate";
import BottomNavigator from "./components/BottomNavigator";
import BackButton from "./components/BackButton";
import ModalPageDivider from "./components/ModalPageDivider";
import ChefProfile from "./components/ChefProfile";
import Ratings from "./components/Ratings";
import Line from "./components/Line";
import MealDescription from "./components/MealDescription";
import Ingredients from "./components/Ingredients";

// expo imports
import { Entypo } from "@expo/vector-icons";

export default function App() {
  const [modalOpen, setmodalOpen] = useState(false);

  const onPressHandler = () => {
    setmodalOpen(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <View style={styles.modalContainer}>
          <View>
            <Image
              style={styles.modalImage}
              source={require("./assets/Images/FoodPicture.png")}
            />
          </View>
          <Pressable
            style={{ marginTop: 60 }}
            onPress={() => setmodalOpen(false)}
          >
            <BackButton />
          </Pressable>
          <View style={styles.modalMealContainer}>
            <View style={{ marginHorizontal: 24 }}>
              <View style={{ marginTop: 16, marginLeft: 144 }}>
                <ModalPageDivider color="#D0DBEA" />
              </View>
              <View style={{ marginTop: 23 }}>
                <Text
                  style={{
                    color: "#3E5481",
                    fontSize: 17,
                    fontWeight: "700",
                    lineHeight: 27,
                  }}
                >
                  Pancakes
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
                <Text
                  style={{
                    color: "#9FA5C0",
                    fontSize: 15,
                    fontWeight: "500",
                    lineHeight: 25,
                  }}
                >
                  Food
                </Text>
                <Entypo name="dot-single" size={20} color="#9FA5C0" />
                <Text
                  style={{
                    color: "#9FA5C0",
                    fontSize: 15,
                    fontWeight: "500",
                    lineHeight: 25,
                  }}
                >
                  60 mins
                </Text>
              </View>

              <View style={styles.Modalprofilecontainer}>
                <ChefProfile
                  image={require("./assets/Images/ElenaShelby.png")}
                  text="Elena Shelby"
                />
                <View>
                  <Ratings />
                </View>
              </View>
              <View style={{ marginTop: 16 }}>
                <Line />
              </View>
              <View style={{ marginTop: 16 }}>
                <MealDescription />
              </View>
              <View>
                <Line />
              </View>
              <View style={{ marginTop: 16 }}>
                <Ingredients />
              </View>
            </View>
          </View>
        </View>
      </Modal>

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
      <ScrollView showsVerticalScrollIndicator={false}>
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
          <TouchableOpacity onPress={onPressHandler}>
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
      <View>
        <BottomNavigator />
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
    fontSize: 20,
    lineHeight: 27,
    color: "#3E5481",
    marginHorizontal: 24,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  modalImage: {
    position: "absolute",
  },
  modalMealContainer: {
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    marginTop: 193,
    backgroundColor: "#fff",
  },
  Modalprofilecontainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 16,
  },
});

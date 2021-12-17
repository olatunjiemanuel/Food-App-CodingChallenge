import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Buttons = () => {
  const [click, setClick] = useState(1);

  return (
    <View style={styles.Buttoncontainer}>
      <TouchableOpacity
        onPress={() => setClick(1)}
        style={[
          styles.container,
          click === 1 ? styles.containerHighlight : null,
          { marginLeft: 24, width: 68, height: 48 },
        ]}
      >
        <Text style={[styles.text, click === 1 ? styles.textHighlight : null]}>
          All
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setClick(2)}
        style={[
          styles.container,
          click === 2 ? styles.containerHighlight : null,
          { marginLeft: 16 },
        ]}
      >
        <Text style={[styles.text, click === 2 ? styles.textHighlight : null]}>
          Food
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setClick(3)}
        style={[
          styles.container,
          click === 3 ? styles.containerHighlight : null,
          { marginLeft: 16 },
        ]}
      >
        <Text style={[styles.text, click === 3 ? styles.textHighlight : null]}>
          Drink
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F4F5F7",
    width: 86,
    height: 47,
    borderRadius: 32,
  },
  text: {
    color: "#9FA5C0",
    fontWeight: "500",
    lineHeight: 25,
    fontSize: 15,
  },
  textHighlight: {
    color: "#fff",
  },
  containerHighlight: {
    backgroundColor: "#1FCC79",
  },
  Buttoncontainer: {
    flexDirection: "row",
  },
});

export default Buttons;

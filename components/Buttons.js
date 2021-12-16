import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Buttons = () => {
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);
  const [click1, setClick1] = useState(true);

  const OnPressHandler1 = () => {
    setClick1(false);
    setClick3(false);
    setClick2(true);
  };

  const OnPressHandler2 = () => {
    setClick1(false);
    setClick2(false);
    setClick3(true);
  };
  const onPressHandler3 = () => {
    setClick2(false);
    setClick3(false);
    setClick1(true);
  };

  return (
    <View style={styles.Buttoncontainer}>
      <TouchableOpacity
        onPress={onPressHandler3}
        style={[
          styles.container,
          click1 ? styles.containerHighlight : null,
          { marginLeft: 24, width: 68, height: 48 },
        ]}
      >
        <Text style={[styles.text, click1 ? styles.textHighlight : null]}>
          All
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={OnPressHandler1}
        style={[
          styles.container,
          click2 ? styles.containerHighlight : null,
          { marginLeft: 16 },
        ]}
      >
        <Text style={[styles.text, click2 ? styles.textHighlight : null]}>
          Food
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={OnPressHandler2}
        style={[
          styles.container,
          click3 ? styles.containerHighlight : null,
          { marginLeft: 16 },
        ]}
      >
        <Text style={[styles.text, click3 ? styles.textHighlight : null]}>
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

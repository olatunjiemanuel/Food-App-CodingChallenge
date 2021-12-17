import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Buttons = ({ id, type, title, isActive }) => {
  const [click, setClick] = useState(false);

  return (
    <View style={styles.Buttoncontainer}>
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.container,
          click ? styles.containerHighlight : null,
          { marginLeft: 16 },
          isActive ? styles.containerHighlight : null
        ]}
      >
        <Text
          key={id}
          style={[styles.text, click ? styles.textHighlight : null]}
        >
          {title}
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

import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

function PageNavigator() {
  const [button1, setbutton1] = useState(true);
  const [button2, setbutton2] = useState(false);

  const onPressHandler1 = () => {
    setbutton2(false);
    setbutton1(true);
  };
  const onPressHandler2 = () => {
    setbutton1(false);
    setbutton2(true);
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "column" }}>
        <TouchableOpacity
          onPress={onPressHandler1}
          style={[
            styles.leftbuttoncontainer,
            button1 ? styles.highlight : null,
          ]}
        >
          <Text
            style={[styles.lefttext, button1 ? { color: "#3E5481" } : null]}
          >
            Left
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "column" }}>
        <TouchableOpacity
          onPress={onPressHandler2}
          style={[
            styles.rightbuttoncontainer,
            button2 ? styles.highlight : null,
          ]}
        >
          <Text
            style={[styles.righttext, button2 ? { color: "#3E5481" } : null]}
          >
            Right
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  leftbuttoncontainer: {
    height: 37,
    width: 187,
    borderBottomWidth: 2,
    borderBottomColor: "#F4F5F7",
  },
  rightbuttoncontainer: {
    height: 37,
    width: 187,
    borderBottomWidth: 2,
    borderBottomColor: "#F4F5F7",
  },
  lefttext: {
    textAlign: "center",
    color: "#9FA5C0",
    fontWeight: "600",
    fontSize: 15,
    lineHeight: 18.15,
  },
  righttext: {
    textAlign: "center",
    color: "#9FA5C0",
    fontWeight: "600",
    fontSize: 15,
    lineHeight: 18.15,
  },
  highlight: {
    borderBottomWidth: 4,
    borderBottomColor: "#1FCC79",
  },
});

export default PageNavigator;

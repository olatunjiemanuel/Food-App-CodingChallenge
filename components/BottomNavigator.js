import React from "react";
import { StyleSheet, Text, View } from "react-native";

import HomeIcon from "../assets/SVG icons/HomeIcon";
import UploadIcon from "../assets/SVG icons/UploadIcon";
import ScanIcon from "../assets/SVG icons/ScanIcon";
import NotificationIcon from "../assets/SVG icons/NotificationIcon";
import ProfileIcon from "../assets/SVG icons/ProfileIcon";

const BottomNavigator = () => {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", marginLeft: 27 }}>
        <HomeIcon color="#9FA5C0" />
        <Text style={styles.text}>Home</Text>
      </View>
      <View style={{ alignItems: "center", marginLeft: 46 }}>
        <UploadIcon color="#9FA5C0" />
        <Text style={styles.text}>Upload</Text>
      </View>
      <View
        style={{
          position: "absolute",
          alignItems: "center",
          height: 116,
          flexDirection: "column",
          marginBottom: 60,
          marginLeft: 160,
        }}
      >
        <View
          style={{
            width: 56,
            height: 56,
            borderRadius: 28,
            backgroundColor: "#1FCC79",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ScanIcon color="#fff" />
        </View>
        <View>
          <Text style={{ color: "#9FA5C0", marginTop: 5, textAlign: "center" }}>
            Scan
          </Text>
        </View>
      </View>
      <View style={{ alignItems: "center", marginLeft: 100 }}>
        <NotificationIcon color="#9FA5C0" />
        <Text style={styles.text}>Notifcation</Text>
      </View>
      <View style={{ alignItems: "center", marginLeft: 30 }}>
        <ProfileIcon color="#9FA5C0" />
        <Text style={styles.text}>Profile</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    width: 375,
    height: 95,
  },
  text: {
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 14.52,
    textAlign: "center",
    color: "#9FA5C0",
  },
});

export default BottomNavigator;

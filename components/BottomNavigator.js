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
      <View>
        <HomeIcon color="#9FA5C0" />
        <Text style={{ color: "#9FA5C0" }}>Home</Text>
      </View>
      <View>
        <UploadIcon color="#9FA5C0" />
        <Text style={{ color: "#9FA5C0" }}>Upload</Text>
      </View>
      <View>
        <ScanIcon color="black" />
        <Text style={{ color: "#9FA5C0" }}>Scan</Text>
      </View>
      <View>
        <NotificationIcon color="#9FA5C0" />
        <Text>Notifcation</Text>
      </View>
      <View>
        <ProfileIcon color="#9FA5C0" />
        <Text>Profile</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: 375,
    height: 95,
  },
});

export default BottomNavigator;

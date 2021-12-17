import React, { useState } from "react";
import { StyleSheet, Text, Pressable, View } from "react-native";

import HomeIcon from "../assets/SVG icons/HomeIcon";
import UploadIcon from "../assets/SVG icons/UploadIcon";
import ScanIcon from "../assets/SVG icons/ScanIcon";
import NotificationIcon from "../assets/SVG icons/NotificationIcon";
import ProfileIcon from "../assets/SVG icons/ProfileIcon";

const BottomNavigator = () => {
  const [homebuttonpress, sethomebuttonpress] = useState(true);
  const [uploadbuttonpress, setuploadbuttonpress] = useState(false);
  const [notificationbuttonpress, setnotificationbuttonpress] = useState(false);
  const [profilebuttonpress, setprofilebuttonpress] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          sethomebuttonpress(true);
          setuploadbuttonpress(false);
          setnotificationbuttonpress(false);
          setprofilebuttonpress(false);
        }}
        style={{ alignItems: "center", marginLeft: 27 }}
      >
        <HomeIcon color={homebuttonpress ? "#1FCC79" : "#9FA5C0"} />
        <Text
          style={[
            styles.text,
            { color: homebuttonpress ? "#1FCC79" : "#9FA5C0" },
          ]}
        >
          Home
        </Text>
      </Pressable>
      <Pressable
        onPress={() => {
          setuploadbuttonpress(true);
          sethomebuttonpress(false);
          setnotificationbuttonpress(false);
          setprofilebuttonpress(false);
        }}
        style={{ alignItems: "center", marginLeft: 46 }}
      >
        <UploadIcon color={uploadbuttonpress ? "#1FCC79" : "#9FA5C0"} />
        <Text
          style={[
            styles.text,
            { color: uploadbuttonpress ? "#1FCC79" : "#9FA5C0" },
          ]}
        >
          Upload
        </Text>
      </Pressable>
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
        <View style={{ marginTop: 8 }}>
          <Text style={styles.text}>Scan</Text>
        </View>
      </View>
      <Pressable
        onPress={() => {
          setnotificationbuttonpress(true);
          setuploadbuttonpress(false);
          sethomebuttonpress(false);
          setprofilebuttonpress(false);
        }}
        style={{ alignItems: "center", marginLeft: 100 }}
      >
        <NotificationIcon
          color={notificationbuttonpress ? "#1FCC79" : "#9FA5C0"}
        />
        <Text
          style={[
            styles.text,
            { color: notificationbuttonpress ? "#1FCC79" : "#9FA5C0" },
          ]}
        >
          Notifcation
        </Text>
      </Pressable>
      <Pressable
        onPress={() => {
          setprofilebuttonpress(true);
          setnotificationbuttonpress(false);
          setuploadbuttonpress(false);
          sethomebuttonpress(false);
        }}
        style={{ alignItems: "center", marginLeft: 30 }}
      >
        <ProfileIcon color={profilebuttonpress ? "#1FCC79" : "#9FA5C0"} />
        <Text
          style={[
            styles.text,
            { color: profilebuttonpress ? "#1FCC79" : "#9FA5C0" },
          ]}
        >
          Profile
        </Text>
      </Pressable>
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

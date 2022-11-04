import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { StyleSheet, Text, View } from "react-native";
import Buttons from "./components/Buttons.js";
import HUD from "./components/HUD.js";
import Pet from "./components/Pet.js";
import Test from "./components/TestNav.js";

//App
export default function App() {
  return (
    <View style={styles.container}>
      <HUD />
      <Pet />
      <Buttons />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

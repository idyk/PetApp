import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Buttons from "./components/Buttons.js";
import HUD from "./components/HUD.js";

export default function App() {
  return (
    <View style={styles.container}>
      <HUD />
      <Buttons />
      <StatusBar style="auto" />
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

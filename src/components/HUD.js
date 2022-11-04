import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  NativeAppEventEmitter,
} from "react-native";

const HUD = () => {
  return (
    <View style={styles.container}>
      <View style={styles.progressBarOne}>
        <Text>Hunger Bar</Text>
      </View>
      <View style={styles.coins}>
        <Text>Coins</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    position: "absolute",
    top: 0,
    paddingTop: 50,
  },

  progressBarOne: {
    backgroundColor: "#f1f185",
    flex: 1,
    margin: 5,
    width: 200,
  },

  coins: {
    backgroundColor: "#2ec45c",
    flex: 1,
    margin: 5,
  },
});

export default HUD;

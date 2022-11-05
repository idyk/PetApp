import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const HUD = () => {
  const [getCoins, setCoins] = useState(1);

  const getValueFunction = () => {
    try {
      AsyncStorage.getItem("coins").then((value) => setCoins(value));
      alert("HUD coins: " + getCoins);
    } catch (e) {}
  };

  useEffect(() => {
    getValueFunction();
  });

  return (
    <View style={styles.container}>
      <View style={styles.progressBarOne}>
        <Text>Hunger Bar</Text>
      </View>
      <View style={styles.coins}>
        <Text>{"Coins:" + getCoins}</Text>
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

import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const HUD = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.fullnessBox}>
        <Text style={styles.fullnessText}>{"FULLNESS"}</Text>
        <hr style={styles.headerRule} />
        <Text style={styles.fullnessValue}>{props.getFullness}</Text>
      </View>
      <View style={styles.coinsBox}>
        <Text style={styles.fullnessText}>{"COINS"}</Text>
        <hr style={styles.headerRule} />
        <Text style={styles.fullnessValue}>{props.getCoins}</Text>
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

  imageIcons: {
    width: 50,
    height: 50,
  },

  headerRule: {
    height: 1,
    width: 110,
    backgroundColor: "black",
  },

  fullnessBox: {
    borderRadius: 15,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    backgroundColor: "#f1f185",
    flex: 1,
    margin: 5,
    width: 100,
  },

  fullnessText: {
    marginTop: 8,
    fontFamily: "Cochin",
    textAlign: "center",
  },

  fullnessValue: {
    fontWeight: "bold",
    textAlign: "center",
  },

  coinsBox: {
    borderRadius: 15,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    flex: 1,
    margin: 5,
    width: 150,
    backgroundColor: "#2ec45c",
    flex: 1,
    margin: 5,
  },
});

export default HUD;

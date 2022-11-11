import React from "react";
import {
  StyleSheet,
  Button,
  Text,
  View,
  Alert,
  TouchableOpacity,
} from "react-native";

//Nothing fancy here. Just some text to explain the app in the app.
const Settings = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>About CrApp</Text>
        <Text>
          <Text style={styles.bold}>GOAL:</Text> The goal of this game is to
          keep your pet Crap from starving! {"\n"}
          <Text style={styles.bold}>HOW TO PLAY:</Text> Keep tapping the Crap!
          (you do NOT need to wash your hands after!) As you tap (or pet your
          Crap), your Crap's hunger might deplete. It's stressful to be Crap!{" "}
          {"\n"}
          If the <Text style={styles.bold}>FULLNESS</Text> amount reaches 0, you
          lose! {"\n"}To fight the hunger, you can{" "}
          <Text style={styles.bold}>FEED</Text> your Crap using{" "}
          <Text style={styles.bold}>COINS</Text> you earn from petting your
          Crap! Keeping feeding and petting your Crap, and you just might win!
          {"\n"}For further fun, you can also customize your Crap!
        </Text>
        <Text style={styles.endText}>Now THAT's CrAppy!</Text>
        <Text style={styles.credits}>
          Made by Ian Dykas for CSI3150: Phase 2.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "600",
  },
  bold: {
    fontWeight: "bold",
  },
  endText: {
    fontSize: 25,
    textAlign: "center",
  },
  credits: {
    textAlign: "center",
    textDecorationLine: "underline",
    marginTop: 45,
  },
});

export default Settings;

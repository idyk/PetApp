import React from "react";
import {
  StyleSheet,
  Button,
  Text,
  View,
  Alert,
  TouchableOpacity,
} from "react-native";
import {
  useNavigation,
  NavigationContainer,
  useIsFocused,
} from "@react-navigation/native";

import { Audio } from "expo-av";

//Nothing fancy here. Just some text to explain the app in the app.
const Splash = () => {
  const navigation = useNavigation();

  const backgroundMusic = new Audio.Sound();

  backgroundMusic.loadAsync(require("../assets/sound/test2.wav"));

  function playSound() {
    try {
      backgroundMusic.playAsync();
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to CrApp!</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Your Crap's Home");
          playSound();
        }}
      >
        <Text style={styles.startButton}>TAP TO PLAY!</Text>
      </TouchableOpacity>
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
  startButton: {
    flex: 1,
    backgroundColor: "#DAF7A6",
    width: "auto",
    height: "auto",
    borderRadius: 5,
    margin: 5,
    padding: 5,
    fontSize: 25,
  },
});

export default Splash;

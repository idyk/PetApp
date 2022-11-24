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

  let backgroundMusic;

  try {
    backgroundMusic = new Audio.Sound();
    backgroundMusic.loadAsync(require("../assets/sound/thisSongIsSoGood.wav"));
  } catch (e) {
    console.log("BGM Error 1: " + e);
  }

  function playSound() {
    try {
      backgroundMusic.playAsync();
      backgroundMusic.setIsLoopingAsync(true);
    } catch (e) {
      console.log("BGM Error 2: " + e);
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
    paddingTop: 250,
  },
  startButton: {
    backgroundColor: "#DAF7A6",
    width: 200,
    height: 150,
    borderRadius: 25,
    margin: 25,
    fontSize: 25,
    textAlign: "center",
    paddingTop: 55,
  },
});

export default Splash;

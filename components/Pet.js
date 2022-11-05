import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Button,
  Text,
  View,
  Alert,
  TouchableOpacity,
  Image,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Stack all needed pet elements on each other using zIndex.
// You can also pet your crap for money.
//Parent of customize?

function Pet() {
  const [getEyeIndex, setGetEyeIndex] = useState("Sad");

  useEffect(() => {
    getValueFunction();
  });

  const getValueFunction = () => {
    //function to get the value from AsyncStorage
    AsyncStorage.getItem("any_key_here").then(
      (eyeInputValue) =>
        //AsyncStorage returns a promise so adding a callback to get the value
        setGetEyeIndex(eyeInputValue)
      //Setting the value in Text
    );
  };

  return (
    <View style={styles.container}>
      <Text>{"Current eye index: " + getEyeIndex}</Text>
      <View
        style={{
          position: "absolute",
          zIndex: 0,
        }}
      >
        <Image
          style={styles.imageSize}
          source={require("../assets/crapBase.png")}
        />
      </View>
      <View
        style={{
          position: "absolute",
          zIndex: 1,
        }}
      >
        <Image
          style={styles.imageSize}
          source={require("../assets/eyes" + getEyeIndex + ".png")}
        />
      </View>
      {/* <View
        style={{
          position: "absolute",
          zIndex: 2,
        }}
      >
        <Image
          style={styles.imageSize}
          source={require("../assets/mouth" + mouthArray[mouthIndex] + ".png")}
        />
      </View> */}
    </View>
  );
}

function setEyesIndex({ value }) {
  eyesIndex = 2;
}

const readData = async () => {
  try {
    const value = await AsyncStorage.getItem(STORAGE_KEY);

    if (value !== null) {
      setEyesIndex(value);
    }
  } catch (e) {
    alert("Failed to fetch the input from storage");
  }
};

const saveData = async () => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, eye);
    alert("Data successfully saved");
  } catch (e) {
    alert("Failed to save the data to the storage");
  }
};

const styles = StyleSheet.create({
  container: {
    marginTop: 150,
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  imageSize: {
    width: 250,
    height: 250,
  },
});

export default Pet;

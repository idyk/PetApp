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
import { CrapFacials } from "./ImageExport.js";

// Stack all needed pet elements on each other using zIndex.
// You can also pet your crap for money.

function Pet() {
  const [getEyeIndex, setGetEyeIndex] = useState("Sad");
  const [getMouthIndex, setGetMouthIndex] = useState("Sad");

  useEffect(() => {
    getValueFunction();
  });

  const getValueFunction = () => {
    try {
      AsyncStorage.getItem("eyeIndex").then((eyeInputValue) =>
        setGetEyeIndex(eyeInputValue)
      );
    } catch (e) {}
    try {
      AsyncStorage.getItem("mouthIndex").then((mouthInputValue) =>
        setGetMouthIndex(mouthInputValue)
      );
    } catch (e) {}
  };

  let imgSource = null;
  if (getEyeIndex == "Angry") {
    imgSource = CrapFacials.eyesAngry.uri;
  } else if (getEyeIndex == "Neutral") {
    imgSource = CrapFacials.eyesNeutral.uri;
  } else {
    imgSource = CrapFacials.eyesSad.uri;
  }

  let imgSourceMouth = null;
  if (getMouthIndex == "Happy") {
    imgSourceMouth = CrapFacials.mouthHappy.uri;
  } else if (getMouthIndex == "Neutral") {
    imgSourceMouth = CrapFacials.mouthNeutral.uri;
  } else {
    imgSourceMouth = CrapFacials.mouthSad.uri;
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          position: "absolute",
          zIndex: 0,
        }}
      >
        <Image style={styles.imageSize} source={CrapFacials.crapBase.uri} />
      </View>
      <View
        style={{
          position: "absolute",
          zIndex: 1,
        }}
      >
        <Image style={styles.imageSize} source={imgSource} />
      </View>
      <View
        style={{
          position: "absolute",
          zIndex: 2,
        }}
      >
        <Image style={styles.imageSize} source={imgSourceMouth} />
      </View>
    </View>
  );
}

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

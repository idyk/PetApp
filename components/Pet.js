import React, { useCallback, useEffect, useState } from "react";
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
import { NavigationContainer, useIsFocused } from "@react-navigation/native";

// Stack all needed pet elements on each other using zIndex.
// You can also pet your crap for money.

function Pet(props) {
  const [getEyeIndex, setGetEyeIndex] = useState("Sad");
  const [getMouthIndex, setGetMouthIndex] = useState("Sad");
  const [getCoins, setCoins] = useState(1);
  const [getFullness, setFullness] = useState(100);
  useEffect(() => {
    getCoinFunction();
    getFullnessFunction();
  }, []);

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

  const getCoinFunction = async () => {
    try {
      const awaitSync = await AsyncStorage.getItem("coins");
      const value = parseInt(awaitSync);
      value ? setCoins(value) : setCoins(0);
    } catch (e) {
      alert(e);
    }
  };

  const getFullnessFunction = async () => {
    try {
      const awaitFull = await AsyncStorage.getItem("fullness");
      const valueFull = parseFloat(awaitFull);
      valueFull ? setFullness(valueFull) : setFullness(100);
    } catch (e) {
      alert(e);
    }
  };

  const saveValueFunction = async () => {
    if (true) {
      let newVal = props.getCoins + 1;
      let fullVal = props.getFullness - Math.floor(Math.random() * 4.5);
      console.log("fullVal: " + fullVal);
      if (newVal.toString() == "NaN") {
        newVal = 1;
      }
      if (fullVal <= 0) {
        alert("LOSE");
        newVal = 0;
        fullVal = 0;
        await AsyncStorage.setItem("coins", newVal.toString());
        await AsyncStorage.setItem("fullness", fullVal.toString());
      } else {
        await AsyncStorage.setItem("coins", newVal.toString());
        await AsyncStorage.setItem("fullness", fullVal.toString());
      }
    }
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
    <TouchableOpacity
      onPress={() => {
        saveValueFunction();
        props.reGet();
        props.reGetFullness();
        props.reSaveFullness();
      }}
    >
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
    </TouchableOpacity>
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

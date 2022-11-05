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

  useEffect(() => {
    getCoinFunction();
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
      // AsyncStorage.getItem("coins").then((value) => parseInt(setCoins(value)));
    } catch (e) {
      alert(e);
    }
  };

  const saveValueFunction = () => {
    if (getCoins) {
      AsyncStorage.setItem("coins", getCoins.toString());
    } else {
      alert("No data saved.");
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
        if (getCoins == null) {
          setCoins(1);
        } else {
          setCoins(parseInt(getCoins) + 1);
        }
        saveValueFunction();
        props.reGet();
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

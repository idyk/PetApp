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
import { CrapFacials } from "./Images.js";
import { Audio } from "expo-av";

// Stack all needed pet elements on each other using zIndex.
// You can also pet your crap for money.

//This was messy to work with, therefore it's most likely unoptimized.
//The Pet is the base of the game, where it is to be clicked upon, and then
//be able to save/load upon every click, while also updating the HUD.
function Pet(props) {
  const [getEyeIndex, setGetEyeIndex] = useState("Sad");
  const [getMouthIndex, setGetMouthIndex] = useState("Sad");
  const [getCoins, setCoins] = useState(1);
  const [getFullness, setFullness] = useState(100);

  //We want this to only run once on load, because otherwise it will
  //keep pulling old values that don't even exist in storage.
  useEffect(() => {
    getCoinsFunction();
    getFullnessFunction();
  }, []);

  useEffect(() => {
    getFaceFunction();
  });

  //Getting the facial features from storage.
  const getFaceFunction = () => {
    try {
      AsyncStorage.getItem("eyeIndex").then((eyeInputValue) =>
        setGetEyeIndex(eyeInputValue)
      );
    } catch (e) {
      console.log(e);
    }
    try {
      AsyncStorage.getItem("mouthIndex").then((mouthInputValue) =>
        setGetMouthIndex(mouthInputValue)
      );
    } catch (e) {
      console.log(e);
    }
  };

  //Getting the coin amount from storage.
  const getCoinsFunction = async () => {
    try {
      const awaitCoins = await AsyncStorage.getItem("coins");
      const value = parseInt(awaitCoins);
      value ? setCoins(value) : setCoins(0);
    } catch (e) {
      console.log(e);
    }
  };

  //Getting the fullness amount from storage.
  const getFullnessFunction = async () => {
    try {
      const awaitFull = await AsyncStorage.getItem("fullness");
      const valueFull = parseFloat(awaitFull);
      valueFull ? setFullness(valueFull) : setFullness(100);
    } catch (e) {
      console.log(e);
    }
  };

  //Saving the game values "fullness" and "coins" to storage. This also checks whether the user
  //loses or not, and also determines how fullness functions.
  const saveGameValuesFunction = async () => {
    if (true) {
      {
        /* Working with the props by using it, and then adding to it with another variable. */
      }
      let newVal = props.getCoins + 1;

      {
        /* Determines the fullness decrease per tap. */
      }
      let fullVal = Math.floor(
        props.getFullness - Math.floor(Math.random() * 2)
      );
      console.log("fullVal: " + fullVal);
      if (newVal.toString() == "NaN") {
        newVal = 1;
      }
      {
        /*The lose condition.*/
      }
      if (fullVal <= 0) {
        alert("You lose! Resetting coins and fullness.");
        newVal = 0;
        fullVal = 0;
        await AsyncStorage.setItem("coins", newVal.toString());
        await AsyncStorage.setItem("fullness", fullVal.toString());
      } else if (fullVal >= 250) {
        newVal = 99999;
        fullVal = 99999;
        await AsyncStorage.setItem("coins", "999999");
        await AsyncStorage.setItem("fullness", "999999");
        alert("CONGRATS, YOU WON!");
      } else {
        await AsyncStorage.setItem("coins", newVal.toString());
        await AsyncStorage.setItem("fullness", fullVal.toString());
      }
    }
  };

  //Sets the Pet's eyes as per chosen in Customize.
  let imgSource = null;
  if (getEyeIndex == "Angry") {
    imgSource = CrapFacials.eyesAngry.uri;
  } else if (getEyeIndex == "Neutral") {
    imgSource = CrapFacials.eyesNeutral.uri;
  } else {
    imgSource = CrapFacials.eyesSad.uri;
  }

  //Sets the Pet's mouth as per chosen in Customize.
  let imgSourceMouth = null;
  if (getMouthIndex == "Happy") {
    imgSourceMouth = CrapFacials.mouthHappy.uri;
  } else if (getMouthIndex == "Neutral") {
    imgSourceMouth = CrapFacials.mouthNeutral.uri;
  } else {
    imgSourceMouth = CrapFacials.mouthSad.uri;
  }

  return (
    //Every time you pet the Pet, it will have to save and get to update
    //the HUD to be in line with what the user is doing.
    <TouchableOpacity
      onPress={() => {
        saveGameValuesFunction();
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

import React, { createContext, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Button,
  Text,
  View,
  Alert,
  TouchableOpacity,
} from "react-native";
import Pet from "./Pet.js";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Customize() {
  const [eyeInputValue, setEyeInputValue] = useState("Sad");
  const [mouthInputValue, setMouthInputValue] = useState("Sad");

  const saveValueFunction = () => {
    alert(eyeInputValue);
    alert(mouthInputValue);
    if (eyeInputValue && mouthInputValue) {
      AsyncStorage.setItem("eyeIndex", eyeInputValue);
      AsyncStorage.setItem("mouthIndex", mouthInputValue);
      alert("Data saved!");
    } else {
      alert("No data saved.");
    }
  };

  const getValueFunction = () => {
    //function to get the value from AsyncStorage
    try {
      AsyncStorage.getItem("eyeIndex").then((value) => setEyeInputValue(value));
    } catch (e) {
      // setEyeInputValue("Sad");
    }
    try {
      AsyncStorage.getItem("mouthIndex").then((value) =>
        setMouthInputValue(value)
      );
    } catch (e) {
      //setMouthInputValue("Sad");
    }
  };

  //getValueFunction();

  return (
    <View>
      {/* <Text>Eyes index: {eyeInputValue}</Text>
      <Text>Mouth index: {mouthInputValue}</Text> */}
      {/* <Text>Mouth index: {mouthIndex}</Text> */}
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            setEyeInputValue("Sad");
          }}
          style={styles.eyeStylesButton}
        >
          <Text style={styles.buttonText}>Eye 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setEyeInputValue("Angry");
          }}
          style={styles.eyeStylesButton}
        >
          <Text style={styles.buttonText}>Eye 2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setEyeInputValue("Neutral");
          }}
          style={styles.eyeStylesButton}
        >
          <Text style={styles.buttonText}>Eye 3</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => setMouthInputValue("Sad")}
          style={styles.mouthStylesButton}
        >
          <Text style={styles.buttonText}>Sad</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setMouthInputValue("Happy")}
          style={styles.mouthStylesButton}
        >
          <Text style={styles.buttonText}>Happy</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setMouthInputValue("Neutral")}
          style={styles.mouthStylesButton}
        >
          <Text style={styles.buttonText}>Neutral</Text>
        </TouchableOpacity>
      </View>
      <Button title="Submit" onPress={saveValueFunction} color="green" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
  },
  eyeStylesButton: {
    flex: 1,
    backgroundColor: "red",
    width: 100,
    height: 100,
    borderRadius: 5,
    margin: 5,
    padding: 5,
  },
  mouthStylesButton: {
    flex: 1,
    backgroundColor: "blue",
    width: 100,
    height: 100,
    borderRadius: 5,
    margin: 5,
    padding: 5,
  },
  buttonText: {
    textAlign: "center",
  },
});

export default Customize;

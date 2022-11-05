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

// const StartScreen = () => {
//   const [eyeIndex, setEyeIndex] = useState(0);
//   const navigation = useNavigation();
//   const goToStartScreen = () => {
//     navigation.navigate("Start", {
//       eyeIndex,
//     });
//   };
// };

//i literally just want to pass the index over to Pet and keep it.

const Customize = () => {
  // readData();
  const [eyeInputValue, setEyeInputValue] = useState("Sad");

  // const save = (word) => {
  //   saveValueFunction();
  // };

  const saveValueFunction = () => {
    alert(eyeInputValue);
    //function to save the value in AsyncStorage
    if (eyeInputValue) {
      //To check the input not empty
      AsyncStorage.setItem("any_key_here", eyeInputValue);
      //Setting a data to a AsyncStorage with respect to a key
      alert("Data Saved");
      //alert to confirm
    } else {
      alert("Please fill data");
      //alert for the empty InputText
    }
  };

  const getValueFunction = () => {
    //function to get the value from AsyncStorage
    AsyncStorage.getItem("any_key_here").then(
      (value) =>
        //AsyncStorage returns a promise so adding a callback to get the value
        setGetValue(value)
      //Setting the value in Text
    );
  };
  return (
    <View>
      <Text>Eyes index: {eyeInputValue}</Text>
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
      {/* <View style={styles.container}>
        <TouchableOpacity
          onPress={() => setMouthIndex(0)}
          style={styles.mouthStylesButton}
        >
          <Text style={styles.buttonText}>Mouth 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setMouthIndex(1)}
          style={styles.mouthStylesButton}
        >
          <Text style={styles.buttonText}>Mouth 2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setMouthIndex(2)}
          style={styles.mouthStylesButton}
        >
          <Text style={styles.buttonText}>Mouth 3</Text>
        </TouchableOpacity>
      </View> */}
      {/* <Pet /> */}
      <Button title="Submit" onPress={saveValueFunction} color="green" />
    </View>
  );
};

// const readData = async () => {
//   try {
//     const value = await AsyncStorage.getItem(STORAGE_KEY);

//     if (value !== null) {
//       setEyesIndex(value);
//     }
//   } catch (e) {
//     alert("Failed to fetch the input from storage");
//   }
// };

// const saveData = async () => {
//   try {
//     AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(eye));
//     alert("Data successfully saved");
//   } catch (e) {
//     alert("Failed to save the data to the storage");
//   }
// };

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

import React, { props, useEffect, useState } from "react";
import { NavigationContainer, useIsFocused } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
//import Buttons from "./components/Buttons.js";
import HUD from "./components/HUD.js";
import Pet from "./components/Pet.js";
import Customize from "./components/Customize.js";
import Settings from "./components/About.js";
import AsyncStorage from "@react-native-async-storage/async-storage";

function CustomizeScreen() {
  return (
    <View>
      <Customize />
    </View>
  );
}

function SettingsScreen() {
  return (
    <View>
      <Settings />
    </View>
  );
}

function StartScreen({ navigation }) {
  const isFocused = useIsFocused();

  const [getCoins, setCoins] = useState(0);
  const [getFullness, setFullness] = useState(100);

  useEffect(() => {
    getValueFunction();
  });

  useEffect(() => {
    getFullnessFunction();
  });

  const getValueFunction = async () => {
    try {
      const awaitSync = await AsyncStorage.getItem("coins");
      const value = parseInt(awaitSync);
      if (value.toString() == "NaN") {
        setCoins(0);
      } else {
        value ? setCoins(value) : setCoins();
      }
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

  const saveValueFunction = async (value) => {
    let newVal = parseInt(getCoins - value);
    //alert("saving with " + newVal);
    await AsyncStorage.setItem("coins", newVal.toString());
    //alert("Data saved!");
  };

  const saveFullness = async (value) => {
    let newVal = parseFloat(getFullness + value);
    await AsyncStorage.setItem("fullness", newVal.toString());
  };

  return (
    <View style={styles.container}>
      <HUD
        getCoins={parseInt(getCoins)}
        getFullness={parseFloat(getFullness)}
        setFullness={setFullness}
      />
      <Pet
        getCoins={parseInt(getCoins)}
        setCoins={setCoins}
        reGet={() => getValueFunction()}
        reSave={() => saveValueFunction()}
        getFullness={parseFloat(getFullness)}
        reGetFullness={() => getFullnessFunction}
        reSaveFullness={() => saveFullness}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonFeed}
          onPress={() => {
            let subtractVal = 0;
            let addVal = 0;
            if (getCoins >= 10 && getFullness > 0) {
              subtractVal = 10;
              addVal = 10;
              //("getFullness after feeding crap: " + getFullness);
            } else {
              //alert("not enough coins!");
            }
            saveFullness(addVal);
            saveValueFunction(subtractVal);
            getValueFunction(subtractVal);
          }}
        >
          <Text style={styles.buttonText}>FEED CRAP </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Customize Your Crap")}
          style={styles.buttonCustomize}
        >
          <Text style={styles.buttonText}>CUSTOMIZE</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("About Page")}
          style={styles.buttonAbout}
        >
          <Text style={styles.buttonText}>HELP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Your Crap's Home" component={StartScreen} />
        <Stack.Screen name="Customize Your Crap" component={CustomizeScreen} />
        <Stack.Screen name="About Page" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    //fontFamily: "sans",
    margin: 12,
    fontSize: 12,
    textAlign: "center",
  },

  buttonCustomize: {
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    backgroundColor: "#66dfd4",
    elevation: 10,
    borderRadius: 3,
    flex: 1,
    height: 45,
    width: 110,
    margin: 1,
  },

  buttonFeed: {
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    backgroundColor: "#FFA500",
    elevation: 10,
    borderRadius: 3,
    flex: 1,
    height: 45,
    width: 110,
    margin: 1,
  },

  buttonAbout: {
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    backgroundColor: "#aacbd5",
    elevation: 10,
    borderRadius: 3,
    flex: 1,
    height: "auto",
    margin: 1,
  },

  buttonContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    paddingBottom: 30,
  },
});

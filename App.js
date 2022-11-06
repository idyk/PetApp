import React, { props, useEffect, useState } from "react";
import { NavigationContainer, useIsFocused } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
//import Buttons from "./components/Buttons.js";
import HUD from "./components/HUD.js";
import Pet from "./components/Pet.js";
import Inventory from "./components/Inventory.js";
import Shop from "./components/Shop.js";
import Customize from "./components/Customize.js";
import Settings from "./components/Settings.js";
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
    timeDown();
  });

  useEffect(() => {
    getFullnessFunction();
  }, []);

  const getValueFunction = async () => {
    try {
      const awaitSync = await AsyncStorage.getItem("coins");
      const value = parseInt(awaitSync);
      value ? setCoins(value) : setCoins();
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
    alert("saving with " + newVal);
    await AsyncStorage.setItem("coins", newVal.toString());
    alert("Data saved!");
  };

  const saveFullness = async (value) => {
    console.log("value: " + value);
    if (value >= 10) {
      console.log("IT'S IN!");
    }
    console.log("getFullness: " + getFullness);
    let newVal = parseFloat(getFullness + value);
    console.log("newVal: " + newVal);
    setFullness(newVal);
    console.log("getFullness again: " + getFullness);
    await AsyncStorage.setItem("fullness", newVal.toString());
  };

  function timeDown() {
    setTimeout(() => {
      console.log("1 sec delay");
      saveFullness(-10);
    }, 2000);
    if (getFullness == 0) {
      alert("You lose!");
    }
  }

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
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonSettings}
          onPress={() => {
            let subtractVal = 0;
            let addVal = 0;
            if (getCoins >= 10) {
              subtractVal = 10;
              addVal = 10;
              alert("getFullness after feeding crap: " + getFullness);
            } else {
              alert("not enough coins!");
            }
            saveFullness(addVal);
            saveValueFunction(subtractVal);
            getValueFunction(subtractVal);
          }}
        >
          <Text>Feed crap </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Customize")}
          style={styles.buttonCustomize}
        >
          <Text style={styles.buttonText}>Customize</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Settings")}
          style={styles.buttonSettings}
        >
          <Text style={styles.buttonText}>Settings</Text>
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
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Customize" component={CustomizeScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
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
    fontSize: 20,
    textAlign: "center",
  },

  buttonInv: {
    backgroundColor: "#f4cf46",
    elevation: 10,
    borderRadius: 3,
    flex: 1,
    height: "auto",
    margin: 1,
  },

  buttonShop: {
    backgroundColor: "#73f07d",
    elevation: 10,
    borderRadius: 3,
    flex: 1,
    height: "auto",
    margin: 1,
  },

  buttonCustomize: {
    backgroundColor: "#66dfd4",
    elevation: 10,
    borderRadius: 3,
    flex: 1,
    height: "auto",
    margin: 1,
  },

  buttonSettings: {
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

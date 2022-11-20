import React, { props, useEffect, useState } from "react";
import {
  useNavigation,
  NavigationContainer,
  useIsFocused,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import HUD from "./components/HUD.js";
import Pet from "./components/Pet.js";
import Customize from "./components/Customize.js";
import About from "./components/About.js";
import Splash from "./components/Splash.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useBackHandler } from "@react-native-community/hooks";

//Define our navigation stack.
const navStack = createNativeStackNavigator();

//Return the entire function of the app. I included the three screens for the navigation.
export default function App() {
  return (
    <NavigationContainer>
      <navStack.Navigator>
        <navStack.Screen
          name="Splash Screen"
          component={SplashScreen}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
        <navStack.Screen
          name="Your Crap's Home"
          component={StartScreen}
          options={{
            gestureEnabled: false,
            headerShown: true,
            headerLeft: () => <></>,
          }}
        />
        <navStack.Screen
          name="Customize Your Crap"
          component={CustomizeScreen}
        />
        <navStack.Screen name="About Page" component={AboutScreen} />
      </navStack.Navigator>
    </NavigationContainer>
  );
}

function SplashScreen() {
  return (
    <View>
      <Splash />
    </View>
  );
}

//Return for the customize screen.
function CustomizeScreen() {
  return (
    <View>
      <Customize />
    </View>
  );
}

//Return for the setting screen.
function AboutScreen() {
  return (
    <View>
      <About />
    </View>
  );
}

//Start screen return. It needed a lot more inner functions since it has more going on.
function StartScreen({ navigation }) {
  //Helps rerender the screen on focus.
  const isFocused = useIsFocused();

  const [getCoins, setCoins] = useState(0);
  const [getFullness, setFullness] = useState(100);

  //By picking a screen that isn't within the Start Screen, we can make the back button not let
  //the user go back to the splash screen! What a strange prevention method...
  const goNowhere = () => {
    navigation.navigate("Customize Your Crap");
  };

  //Run these every time the screen has any change.
  useEffect(() => {
    getCoinsFunction();
    getFullnessFunction();
  });

  useBackHandler(() => {
    console.log("BACK");
    goNowhere();
  });

  //Obtaining the coins from storage function. It looks for it in the
  //Async storage and uses setCoins to set the value.
  const getCoinsFunction = async () => {
    try {
      const awaitCoins = await AsyncStorage.getItem("coins");
      const value = parseInt(awaitCoins);
      if (value.toString() == "NaN") {
        setCoins(0);
      } else {
        value ? setCoins(value) : setCoins();
      }
    } catch (e) {
      alert(e);
    }
  };

  //Obtaining the fullness from storage function. It looks for it in the
  //Async storage and uses setFullness to set the value.
  const getFullnessFunction = async () => {
    try {
      const awaitFull = await AsyncStorage.getItem("fullness");
      const valueFull = parseFloat(awaitFull);
      valueFull ? setFullness(valueFull) : setFullness(100);
    } catch (e) {
      alert(e);
    }
  };

  //This saves the amount of coins obtained into storage.
  const saveCoinsFunction = async (value) => {
    let newVal = parseInt(getCoins - value);
    if (value == -1) {
      newVal = 0;
    } else {
      newVal = parseInt(getCoins - value);
    }
    //alert("saving with " + newVal);
    await AsyncStorage.setItem("coins", newVal.toString());
    //alert("Data saved!");
  };

  //This saves the fullness amount to storage.
  const saveFullness = async (value) => {
    let newVal = parseFloat(getFullness + value);
    if (value == -1) {
      newVal = parseFloat(100);
    } else {
      newVal = parseFloat(getFullness + value);
    }
    await AsyncStorage.setItem("fullness", newVal.toString());
  };

  //A lot of props were needed to have a somewhat consistent interaction across
  //all components.
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
        reGet={() => getCoinsFunction()}
        reSave={() => saveCoinsFunction()}
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
            saveCoinsFunction(subtractVal);
            getCoinsFunction(subtractVal);
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

        <TouchableOpacity
          onPress={() => {
            let fullVal = -1;
            let newVal = -1;
            saveFullness(fullVal);
            getFullnessFunction();
            saveCoinsFunction(newVal);
            getCoinsFunction(newVal);
          }}
          style={styles.buttonReset}
        >
          <Text style={styles.buttonText}>RESET</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
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
    width: 140,
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

  buttonReset: {
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    backgroundColor: "#FF2E2E",
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

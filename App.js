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

function InventoryScreen() {
  return (
    <View>
      <Inventory />
    </View>
  );
}

function ShopScreen() {
  return (
    <View>
      <Shop />
    </View>
  );
}

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

  const [getCoins, setCoins] = useState(1);

  useEffect(() => {
    getValueFunction();
  });

  const getValueFunction = () => {
    try {
      AsyncStorage.getItem("coins").then((value) => parseInt(setCoins(value)));
    } catch (e) {
      alert(e);
    }
  };

  return (
    <View style={styles.container}>
      <HUD getCoins={parseInt(getCoins)} />
      <Pet reGet={() => getValueFunction()} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Inventory")}
          style={styles.buttonInv}
        >
          <Text style={styles.buttonText}>Inventory</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Shop")}
          style={styles.buttonShop}
        >
          <Text style={styles.buttonText}>Shop</Text>
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
        <Stack.Screen name="Inventory" component={InventoryScreen} />
        <Stack.Screen name="Shop" component={ShopScreen} />
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

//App
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <HUD />
//       <Pet />
//       <Buttons />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

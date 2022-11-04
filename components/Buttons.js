import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Button,
  Text,
  View,
  Alert,
  TouchableOpacity,
} from "react-native";

//The set of buttons to represent the inventory, shop, shower, and settings.
const Buttons = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => Alert.alert("Inventory clicked")}
        style={styles.buttonInv}
      >
        <Text style={styles.buttonText}>Inventory</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => Alert.alert("Shop clicked")}
        style={styles.buttonShop}
      >
        <Text style={styles.buttonText}>Shop</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => Alert.alert("Customize clicked")}
        style={styles.buttonCustomize}
      >
        <Text style={styles.buttonText}>Customize</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => Alert.alert("Settings clicked")}
        style={styles.buttonSettings}
      >
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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

  container: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    paddingBottom: 30,
  },
});

export default Buttons;

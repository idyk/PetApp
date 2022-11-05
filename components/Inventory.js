import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Inventory = (props) => {
  const [getFood, setFood] = useState(0);

  return (
    <View>
      <Text>View your amount of food for your crap here!</Text>
      <TouchableOpacity style={styles.inventoryItem}>
        <Text>FOOD ITEM </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inventoryItem: {
    border: 5,
    backgroundColor: "yellow",
    borderStyle: "solid",
  },
});

export default Inventory;

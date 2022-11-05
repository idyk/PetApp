import React, { props, useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer, useIsFocused } from "@react-navigation/native";

const Shop = (props) => {
  const isFocused = useIsFocused();
  const [getFood, setFood] = useState(1);
  const [getCoins, setCoins] = useState(0);

  useEffect(() => {
    getValueFunction();
  }, []);

  useEffect(() => {
    getFoodFunction();
  });

  const saveValueFunction = () => {
    alert("saving");
    if (getFood != null && props.getCoins != null) {
      AsyncStorage.setItem("foodAmt", getFood.toString());
      AsyncStorage.setItem("coins", getCoins.toString());
    } else {
      AsyncStorage.setItem("foodAmt", "1");
      AsyncStorage.setItem("coins", "1");
    }
    alert("Data saved!");
  };

  const getValueFunction = async () => {
    try {
      await AsyncStorage.getItem("coins").then((value) =>
        parseInt(setCoins(value))
      );
    } catch (e) {
      alert(e);
    }
  };

  const getFoodFunction = async () => {
    try {
      await AsyncStorage.getItem("foodAmt").then((value) =>
        parseInt(setFood(value))
      );
    } catch (e) {
      alert(e);
    }
  };

  return (
    <View>
      <Text>View your amount of food for your crap here!</Text>
      <Text>Coins: {props.getCoins}</Text>
      <TouchableOpacity
        style={styles.shopItem}
        onPress={() => {
          if (props.getCoins >= 10) {
            alert("enough coins to buy!");
            // if (getFood == null) {
            //   alert("NULL");
            //   setFood(1);
            //   setCoins(parseInt(getCoins) - 10);
            // } else {
            setFood(parseInt(getFood) + 1);
            setCoins(parseInt(props.getCoins - 10));

            props.subTen(props.getCoins);

            alert("props coins:" + props.getCoins);
          }

          // } else {
          //   alert("not enough coins!");
          // }
          saveValueFunction();
        }}
      >
        <Text>Buy food </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  shopItem: {
    border: 5,
    backgroundColor: "yellow",
    borderStyle: "solid",
  },
});

export default Shop;

import React from "react";
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

const eyesArray = new Array("Sad", "Angry", "Neutral");
const mouthArray = new Array("Sad", "Angry", "Neutral");

var eyesIndex = 0;
var mouthIndex = 0;

// Stack all needed pet elements on each other using zIndex.
// You can also pet your crap for money.
const Pet = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          position: "absolute",
          zIndex: 0,
        }}
      >
        <Image
          style={styles.imageSize}
          source={require("../assets/crapBase.png")}
        />
      </View>
      <View
        style={{
          position: "absolute",
          zIndex: 1,
        }}
      >
        <Image
          style={styles.imageSize}
          source={require("../assets/eyes" + eyesArray[eyesIndex] + ".png")}
        />
      </View>
      <View
        style={{
          position: "absolute",
          zIndex: 2,
        }}
      >
        <Image
          style={styles.imageSize}
          source={require("../assets/mouth" + mouthArray[mouthIndex] + ".png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
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

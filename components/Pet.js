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
  ImageBackground,
} from "react-native";

// Stack all needed pet elements on each other using zIndex.
// These will be able to be modified by user.
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
          source={require("../assets/eyesSad.png")}
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
          source={require("../assets/mouthNeutral.png")}
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

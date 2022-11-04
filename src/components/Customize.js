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
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function Customize() {
  const [eyesIndex, setEyesIndex] = useState(0);
  const [mouthIndex, setMouthIndex] = useState(0);
  return (
    <View>
      <Text>Eyes index: {eyesIndex}</Text>
      <Text>Mouth index: {mouthIndex}</Text>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => setEyesIndex(0)}
          style={styles.eyeStylesButton}
        >
          <Text style={styles.buttonText}>Eye 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setEyesIndex(1)}
          style={styles.eyeStylesButton}
        >
          <Text style={styles.buttonText}>Eye 2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setEyesIndex(2)}
          style={styles.eyeStylesButton}
        >
          <Text style={styles.buttonText}>Eye 3</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
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
      </View>
      <Pet eye={eyesIndex} />
    </View>
  );
}

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

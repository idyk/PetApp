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

const Customize = () => {
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => Alert.alert("Eye Style 1")}
          style={styles.eyeStylesButton}
        >
          <Text style={styles.buttonText}>Eye 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Alert.alert("Eye Style 2")}
          style={styles.eyeStylesButton}
        >
          <Text style={styles.buttonText}>Eye 2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Alert.alert("Eye Style 3")}
          style={styles.eyeStylesButton}
        >
          <Text style={styles.buttonText}>Eye 3</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => Alert.alert("Mouth Style 1")}
          style={styles.mouthStylesButton}
        >
          <Text style={styles.buttonText}>Mouth 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Alert.alert("Mouth Style 2")}
          style={styles.mouthStylesButton}
        >
          <Text style={styles.buttonText}>Mouth 2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Alert.alert("Mouth Style 3")}
          style={styles.mouthStylesButton}
        >
          <Text style={styles.buttonText}>Mouth 3</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

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

import React from "react";
import {
  StyleSheet,
  Button,
  Text,
  View,
  Alert,
  TouchableOpacity,
} from "react-native";

const Settings = () => {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          onPress={() => Alert.alert("background color change clicked")}
          style={styles.settingsButton}
        >
          <Text style={styles.buttonText}>Change background color</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => Alert.alert("Pet change clicked")}
          style={styles.settingsButton}
        >
          <Text style={styles.buttonText}>Default pet customization</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => Alert.alert("3????")}
          style={styles.settingsButton}
        >
          <Text style={styles.buttonText}>Something 3</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => Alert.alert("4????")}
          style={styles.settingsButton}
        >
          <Text style={styles.buttonText}>Something 4</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 20,
    textAlign: "center",
  },

  settingsButton: {
    backgroundColor: "#aacbd5",
    elevation: 10,
    borderRadius: 3,
    flex: 1,
    height: "auto",
    marginTop: 50,
    width: 500,
  },

  container: {
    alignItems: "center",
  },
});

export default Settings;

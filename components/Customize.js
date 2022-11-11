import React, { useState } from "react";
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

import AsyncStorage from "@react-native-async-storage/async-storage";

//Used for any facial images in the app.
import { CrapFacials } from "./Images.js";

function Customize() {
  const [eyeInputValue, setEyeInputValue] = useState("Sad");
  const [mouthInputValue, setMouthInputValue] = useState("Sad");

  //Saving the face to be used on the pet.
  const saveFaceFunction = () => {
    //alert(eyeInputValue);
    // alert(mouthInputValue);
    if (eyeInputValue && mouthInputValue) {
      AsyncStorage.setItem("eyeIndex", eyeInputValue);
      AsyncStorage.setItem("mouthIndex", mouthInputValue);
      //alert("Data saved!");
    } else {
      // alert("No data saved.");
    }
  };

  return (
    <View>
      <View style={styles.container}>
        {/*Each TouchableOpacity contains a certain face feature to be selected.
        It will set the face feature(s) and keep it when the user selects the save button. */}
        <TouchableOpacity
          onPress={() => {
            setEyeInputValue("Sad");
          }}
          style={styles.eyeStylesButton}
        >
          <Text style={styles.buttonText}>Eye Style: Sad</Text>
          <Image style={styles.imageSize} source={CrapFacials.eyesSad.uri} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setEyeInputValue("Angry");
          }}
          style={styles.eyeStylesButton}
        >
          <Text style={styles.buttonText}>Eye Style: Angry</Text>
          <Image style={styles.imageSize} source={CrapFacials.eyesAngry.uri} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setEyeInputValue("Neutral");
          }}
          style={styles.eyeStylesButton}
        >
          <Text style={styles.buttonText}>Eye Style: Neutral</Text>
          <Image
            style={styles.imageSize}
            source={CrapFacials.eyesNeutral.uri}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => setMouthInputValue("Sad")}
          style={styles.mouthStylesButton}
        >
          <View style={styles.centerView}>
            <Text style={styles.buttonText}>Mouth Style: Sad</Text>
            <Image style={styles.imageSize} source={CrapFacials.mouthSad.uri} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setMouthInputValue("Happy")}
          style={styles.mouthStylesButton}
        >
          <Text style={styles.buttonText}>Mouth Style: Happy</Text>
          <Image style={styles.imageSize} source={CrapFacials.mouthHappy.uri} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setMouthInputValue("Neutral")}
          style={styles.mouthStylesButton}
        >
          <Text style={styles.buttonText}>Mouth Style: Neutral</Text>
          <Image
            style={styles.imageSize}
            source={CrapFacials.mouthNeutral.uri}
          />
        </TouchableOpacity>
      </View>
      <Button
        title="Save Customization"
        onPress={saveFaceFunction}
        color="#b8e567"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  eyeStylesButton: {
    flex: 1,
    backgroundColor: "#F88379",
    width: "auto",
    height: "auto",
    borderRadius: 5,
    margin: 5,
    padding: 5,
    textAlign: "center",
  },
  mouthStylesButton: {
    flex: 1,
    backgroundColor: "#DAF7A6",
    width: "auto",
    height: "auto",
    borderRadius: 5,
    margin: 5,
    padding: 5,
  },
  buttonText: {
    fontSize: 10,
    textAlign: "center",
  },
  imageSize: {
    width: 150,
    height: 150,
  },
  centerView: {
    justifyContent: "center",
  },
});

export default Customize;

import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  StatusBar,
} from "react-native";
const App = () => {
  const Toast = (message) => {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      250
    );
  };
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const _onPress = () => {
    if (number1 === "" || number2 === "") Toast("Both numbers are required");
    else if (isNaN(number1) || isNaN(number2)) Toast("Both must be numbers.");
    else {
      let ans = Number(number1) + Number(number2);
      Toast(ans.toString());
    }
  };
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <SafeAreaView style={styles.container}>
        <View style={styles.inputHolder}>
          <TextInput
            keyboardType="numeric"
            onChangeText={(num) => setNumber1(num)}
            placeholder="Number 1"
            onEndEditing={() => {
              this.number2.focus();
            }}
            style={styles.text}
          />
        </View>
        <View style={styles.inputHolder}>
          <TextInput
            keyboardType="numeric"
            onChangeText={(num) => setNumber2(num)}
            placeholder="Number 2"
            ref={(input) => (this.number2 = input)}
            style={styles.text}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={_onPress}>
          <Text style={[styles.buttonText, styles.text]}>Add</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    backgroundColor: "#61c0ff",
  },
  buttonText: {
    color: "white",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  inputHolder: {
    width: "60%",
    marginBottom: 30,
    borderWidth: 2,
    borderColor: "black",
  },
  text: {
    fontSize: 24,
  },
});

export default App;

import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  StatusBar,
} from "react-native";

const App = () => {
  const [celsius, setCelsius] = useState("0");
  const [fahrenheit, setFahrenheit] = useState("32");
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Temperature converter</Text>
        <View style={styles.itemContainer}>
          <View style={styles.titleContainer}>
            <View style={styles.item}>
              <Text style={styles.titleText}>Degrees</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputText}
                value={celsius}
                keyboardType="decimal-pad"
                onChangeText={(text) => {
                  setCelsius(text);
                  setFahrenheit(
                    (Number(text) * 1.8 + 32).toFixed(2).toString()
                  );
                }}
              />
            </View>
          </View>
          <View style={styles.typeContainer}>
            <View style={styles.item}>
              <Text style={styles.titleText}>Type</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.inputText}>Celsius</Text>
            </View>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.titleContainer}>
            <View style={styles.item}>
              <Text style={styles.titleText}>Degrees</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputText}
                value={fahrenheit}
                keyboardType="decimal-pad"
                onChangeText={(text) => {
                  setFahrenheit(text);
                  setCelsius(
                    (((Number(text) - 32) * 5) / 9).toFixed(2).toString()
                  );
                }}
              />
            </View>
          </View>
          <View style={styles.typeContainer}>
            <View style={styles.item}>
              <Text style={styles.titleText}>Type</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.inputText}>Fahrenheit</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  header: {
    alignSelf: "center",
    marginTop: 10,
    fontSize: 28,
  },
  item: {
    flex: 1,
  },
  itemContainer: {
    alignSelf: "center",
    flexDirection: "row",
    width: 350,
    height: 90,
    marginTop: 20,
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderColor: "#939393",
    flex: 1,
  },
  inputText: {
    color: "black",
    fontSize: 23,
  },
  titleContainer: {
    flex: 1,
    marginEnd: 15,
  },
  titleText: {
    color: "#939393",
    fontSize: 20,
  },
  typeContainer: {
    alignItems: "center",
    flex: 1,
  },
});

export default App;

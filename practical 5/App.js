import React, { useState } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  StatusBar,
} from "react-native";

const App = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState();
  const [tries, setTries] = useState(3);
  const _onPressLogin = () => {
    if (name.length == 0 || password.length == 0) {
      setError("Name and Passwords are required.");
    } else if (tries <= 0) {
      setError("Try limit over.");
    } else if (password == "123456") {
      setName("");
      setPassword("");
      setError("");
      setSuccess("Login success.");
    } else {
      setError("Password does not match");
      setTries(tries - 1);
    }
  };
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Hello User</Text>
        <View style={styles.itemContainer}>
          <View style={styles.titleContainer}>
            <View style={styles.item}>
              <Text style={styles.titleText}>Name</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputText}
                value={name}
                onChangeText={(text) => setName(text)}
                textContentType="name"
                onSubmitEditing={() => this.password.focus()}
              />
            </View>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.titleContainer}>
            <View style={styles.item}>
              <Text style={styles.titleText}>Password</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputText}
                value={password}
                onChangeText={(text) => setPassword(text)}
                textContentType="password"
                ref={(ref) => (this.password = ref)}
                secureTextEntry
              />
            </View>
          </View>
        </View>
        <View style={styles.button}>
          <Button title="Login" onPress={_onPressLogin} />
        </View>
        {error.length > 0 && (
          <Text
            style={[styles.inputText, { color: "red", alignSelf: "center" }]}
          >
            {error}
          </Text>
        )}
        {success && (
          <Text
            style={[styles.inputText, { color: "green", alignSelf: "center" }]}
          >
            {success}
          </Text>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 80,
    marginBottom: 20,
    marginTop: 50,
    width: 300,
    alignSelf: "center",
  },
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  header: {
    alignSelf: "center",
    marginTop: 10,
    fontSize: 28,
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
    flex: 2,
  },
  titleText: {
    color: "black",
    fontSize: 20,
  },
});

export default App;

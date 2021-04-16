import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const App = () => {
  useEffect(() => {
    setInterval(() => Toast("Hello"), 20000);
  }, []);
  const Toast = (message) => {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      250
    );
  };
  const [dateOne, setDateOne] = useState();
  const [dateTwo, setDateTwo] = useState();
  const [date, setDate] = useState();
  const [mode, setMode] = useState(0);
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [diffrence, setDiffrence] = useState("");
  const _onPressDateOne = () => {
    setMode(1);
    setShow(true);
    if (typeof dateOne == "undefined") setDate(new Date());
    else setDate(new Date(dateOne));
  };
  const _onPressDateTwo = () => {
    setMode(2);
    setShow(true);
    if (typeof dateTwo == "undefined") setDate(new Date());
    else setDate(new Date(dateTwo));
  };
  const _onChange = (event, selectedDate) => {
    if (typeof selectedDate !== "undefined") {
      if (mode == 1) setDateOne(selectedDate.toDateString());
      else setDateTwo(selectedDate.toDateString());
    }
    setShow(false);
  };
  const _onPressDiffrence = () => {
    if (typeof dateOne == "undefined" || typeof dateTwo == "undefined") {
      setError("Both dates are required");
    } else {
      let date1 = new Date(dateOne);
      let date2 = new Date(dateTwo);
      let diffTime = Math.abs(date2 - date1);
      let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setDiffrence(diffDays.toString());
    }
  };
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <SafeAreaView style={styles.container}>
        {dateOne && <Text style={styles.text}>{dateOne}</Text>}
        <TouchableOpacity style={styles.button} onPress={_onPressDateOne}>
          <Text style={[styles.buttonText, styles.text]}>Date one</Text>
        </TouchableOpacity>
        {dateTwo && <Text style={styles.text}>{dateTwo}</Text>}
        <TouchableOpacity style={styles.button} onPress={_onPressDateTwo}>
          <Text style={[styles.buttonText, styles.text]}>Date two</Text>
        </TouchableOpacity>
        {diffrence.length > 0 && (
          <Text style={styles.text}>{diffrence + " Days"}</Text>
        )}
        <TouchableOpacity style={styles.button} onPress={_onPressDiffrence}>
          <Text style={[styles.buttonText, styles.text]}>Diffrence</Text>
        </TouchableOpacity>
        <Text style={[styles.errorText, styles.text]}>{error}</Text>
        {show && (
          <DateTimePicker
            mode={"Date"}
            display="default"
            value={date}
            onChange={_onChange}
          />
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
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
  errorText: {
    color: "red",
  },
  text: {
    fontSize: 24,
  },
});

export default App;

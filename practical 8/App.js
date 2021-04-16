import * as React from "react";
import { Button, View } from "react-native";
import { Appbar } from "react-native-paper";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Appbar
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
        }}
      >
        <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
        <Appbar.Content title="Home" />
        <Appbar.Action icon="cog" onPress={() => navigation.push("Setting")} />
      </Appbar>
      <Button
        onPress={() => navigation.navigate("Notifications")}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Appbar
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
        }}
      >
        <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
        <Appbar.Content title="Notifications" />
      </Appbar>
      <Button
        onPress={() => navigation.goBack()}
        title="Go back home from Notification"
      />
    </View>
  );
}

function SettingScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Appbar
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
        }}
      >
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Settings" />
      </Appbar>
      <Button
        onPress={() => navigation.goBack()}
        title="Go back home from Setting"
      />
    </View>
  );
}

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

function DrawerComponent() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Drawer"
      >
        <Stack.Screen name="Drawer" component={DrawerComponent} />
        <Stack.Screen name="Setting" component={SettingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

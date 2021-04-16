import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";
import { WebView } from "react-native-webview";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "88694a0f-3da1-471f-bd96-145571e29d72",
    title: "Fourth Item",
  },
  {
    id: "58948a0f-3da1-471f-bd96-145571e29d72",
    title: "Fifth Item",
  },
  {
    id: "sc1ds5cd-s5dc-s4ds-ds5c-45sdcs5c1sd5",
    title: "Sixth Item",
  },
  {
    id: "dsds5d1s-3da1-471f-bd96-145571e29d72",
    title: "Seventh Item",
  },
  {
    id: "5sds12sd-3da1-471f-bd96-145571e29d72",
    title: "Eighth Item",
  },
  {
    id: "sd45s1ds-3da1-471f-bd96-145571e29d72",
    title: "Nineth Item",
  },
  {
    id: "ds51ds52-3da1-471f-bd96-145571e29d72",
    title: "Tenth Item",
  },
];

const Tab = createMaterialTopTabNavigator();

const CardItem = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const GridItem = ({ title }) => (
  <View style={styles.gridItem}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Card = () => {
  const renderItem = ({ item }) => <CardItem title={item.title} />;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const Grid = () => {
  const renderItem = ({ item }) => <GridItem title={item.title} />;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

const Web = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{
          uri: "https://github.com/facebook/react-native",
        }}
      />
    </SafeAreaView>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Card" component={Card} />
        <Tab.Screen name="Grid" component={Grid} />
        <Tab.Screen name="Web" component={Web} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  gridItem: {
    flex: 1,
    backgroundColor: "#f9c2ff",
    padding: 20,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
  },
});

export default App;

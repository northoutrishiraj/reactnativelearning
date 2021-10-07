import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import FlatListBasics from "./FlatList";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import ListView from "./ListView";
import Accessibility from "./Accessibility";
import Fetchfile from "./Fetchfile"; 
import AnimationScreen from "./AnimationScreen";

// const Stack = createNativeStackNavigator();

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 20, color: "green", fontWeight: "bold" }}>
          Hello Moto!
        </Text>
        <Text style={styles.text}>Welcome to Jumanji!!</Text>
        <View style={styles.buttonclick}>
          <Button
            title="Go to List"
            onPress={() => this.props.navigation.navigate("FlatListBasics")}
          />
        </View>
        <View style={styles.buttonclick}>
          <Button
            title="Go to ListView"
            onPress={() => this.props.navigation.navigate("ListView")}
          />
        </View>
        <View style={styles.buttonclick}>
          <Button
            title="Go to Fetchfile"
            onPress={() => this.props.navigation.navigate("Fetchfile")}
          />
        </View>
        <View style={styles.buttonclick}>
          <Button
            title="Go to Accessibility"
            onPress={() => this.props.navigation.navigate("Accessibility")}
          />
        </View>
        <View style={styles.buttonclick}>
          <Button
            title="Go to AnimationScreen"
            onPress={() => this.props.navigation.navigate("AnimationScreen")}
          />
        </View>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    FlatListBasics: FlatListBasics,
    ListView: ListView,
    Accessibility: Accessibility,
    Fetchfile: Fetchfile,
    AnimationScreen: AnimationScreen
  },
  {
    initialRouteName: "Home",
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "brown",
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    marginTop: 30,
    width: 260,
    alignItems: "center",
    backgroundColor: "#2196F3",
  },
  buttonclick: {
    marginTop: 10,
  },
  buttonText: {
    textAlign: "center",
    padding: 20,
    color: "white",
  },
});

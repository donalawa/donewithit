import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  Switch,
  Button,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import { useEffect, useState } from "react";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import Imageinput from "./app/components/Imageinput";
import ImageInputList from "./app/components/ImageInputList";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";



const Stack = createNativeStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Tweets" 
  screenOptions={{
    headerStyle: { backgroundColor: 'brown'}
  }}
  >
    <Stack.Screen 
    name="TweetDetails" 
    component={TweetDetails} 
    options={{
      headerStyle: { backgroundColor: 'tomato'},
      headerTintColor: 'white',
      headerShown: false
    }}
    />
    <Stack.Screen name="Tweets" component={Tweets} />
  </Stack.Navigator>
)

const Account = () => <Screen><Text>Account</Text></Screen>

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
    <Tab.Navigator 
    screenOptions={{
      tabBarActiveBackgroundColor: 'tomato',
      tabBarActiveTintColor: 'white',
      tabBarInactiveBackgroundColor: '#eee',
      tabBarInactiveTintColor: 'black'
    }}
    >
      <Tab.Screen 
      name="Tweets" 
      component={Tweets}
      options={{
        tabBarIcon: ({ size, color}) => <MaterialCommunityIcons name="home" color={color} size={size}/>
      }}
      />
      <Tab.Screen name="Accounts" component={Account}/>
    </Tab.Navigator>
);
export default function App() {

  
  return (
    <>
    <OfflineNotice />
    <NavigationContainer theme={navigationTheme}>
        {/* <StackNavigator /> */}
        <AuthNavigator />
        {/* <AppNavigator /> */}
    </NavigationContainer>
    </>
  );
}

const Tweets = ({ navigation }) => {
  return (
    <Screen>
      <Text>Tweets</Text>
      <Button
      title="View Tweet"
      onPress={() => navigation.navigate("TweetDetails", {id: 'working'})}
       />
       {/* <Link /> */}
    </Screen>
  )
}

const Link = () => {
  const navigation = useNavigation();
  return (
    <Button title="Link" onPress={() =>  navigation.navigate('TweetDetails')}/>
  )
}

const TweetDetails = ({ route }) => {
  return (
    <Screen>
      <Text>Tweet Details { route.params.id}</Text>
    </Screen>
  )
}

const styles = StyleSheet.create({});

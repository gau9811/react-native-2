import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  * as firebase from 'firebase'
import {createAppContainer,createStackNavigator} from 'react-navigation'



// import all screens
import HomeScreen from './screens/HomeScreen'
import LoadScreen from './screens/LoadingScreen'
import signinScreen from './screens/SignIn'
import signupScreen from './screens/Signup'

const AppNavigator = createStackNavigator(
 {
  Home: {
    screen: HomeScreen
  },
  Load:{
    screen: LoadScreen
  },
  Signin:{
    screen:signinScreen
  },
  signup:{
    screen:signupScreen
  },
  

},{
  // launcher screen  
  initialRouteName:"Load"
});

export default createAppContainer(AppNavigator); 


var firebaseConfig = {
  apiKey: "AIzaSyC7KoWcGMdGg-RPovt5w8aBmT_1Z0GefoE",
  authDomain: "reactfirebase-260dc.firebaseapp.com",
  databaseURL: "https://reactfirebase-260dc.firebaseio.com",
  projectId: "reactfirebase-260dc",
  storageBucket: "",
  messagingSenderId: "596239657942",
  appId: "1:596239657942:web:0653fd8dea66cf1d"
};

firebase.initializeApp(firebaseConfig)








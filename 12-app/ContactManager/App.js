import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


//import screens 
import HomeScreen from "./Screens/HomeScreen"
import addNewContactScreen from "./Screens/addNewScreen"
import editContactScreen from "./Screens/editContactScreen"
import viewScreen from "./Screens/viewScreen"

//import react navigation
import {createAppContainer,createStackNavigator} from 'react-navigation'


const AppNavigator = createStackNavigator({
  
  
    Home: {screen: HomeScreen},
    Add: {screen: addNewContactScreen},   
    edit: {screen:editContactScreen },
    view:{screen:viewScreen}

    //***************************************************//


},{
 defaultNavigationOptions:{
   headerTintColor:"#fff",
    headerStyle:{
      backgroundColor:"#0A79DF"
    },
   headerTitleStyle:{
    color:"#fff" 
  }
 }
});

export default createAppContainer(AppNavigator);

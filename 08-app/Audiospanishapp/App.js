import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image,ScrollView } from 'react-native';

import{ Audio } from 'expo-av';

const listBackgroundColors = {
  1:"#487EB0",
  2:"#30336B",
  3:"#487EB0",
  4:"#30336B",
  5:"#487EB0",
  6:"#30336B",
  7:"#487EB0",
  8:"#30336B",
  9:"#487EB0",
  10:"#30336B",
  
}

const soundlist ={
  one:require('./assets/one.wav'),
  two:require('./assets/two.wav'),
  three:require('./assets/three.wav'),
  four:require('./assets/four.wav'),
  five:require('./assets/five.wav'),
  six:require('./assets/six.wav'),
  seven:require('./assets/seven.wav'),
  eight:require('./assets/eight.wav'),
  nine:require('./assets/nine.wav'),
  ten:require('./assets/ten.wav'),

}

export default class App extends React.Component {
 
  playSound =async number => {
    const soundObject = new Audio.Sound();
    try {
      let path = soundlist[number]
      await soundObject.loadAsync(path)
      await soundObject
      .playAsync()
      .then(async playbackStatus =>{
         setTimeout (() =>{ 
           soundObject.unloadAsync();
      },playbackStatus.playableDurationMillis)
    })
    .catch(error =>{
       console.log(error)
    })
    }catch (error) {
      console.log(error)
    }
  }
  render(){ 
  return (
<ScrollView>
<View style={styles.container}>
  <View style={styles.gridcontainer}>
    <Image style={styles.logo} source={require('./assets/logo.png')}/>
      <View style={styles.rowcontainer}>
           <TouchableOpacity style={[{backgroundColor:listBackgroundColors[1]},styles.item]} onPress={()=>{this.playSound("one")}}>
                 <Text style={styles.txt}>One</Text>
           </TouchableOpacity>
           
      </View>
      <View >
           <TouchableOpacity style={[{backgroundColor:listBackgroundColors[2]},styles.item]} onPress={()=>{this.playSound("two")}}>
                 <Text style={styles.txt}>two</Text>
           </TouchableOpacity>
           
      </View>
    </View>
    <View >
           <TouchableOpacity style={[{backgroundColor:listBackgroundColors[3]},styles.item]} onPress={()=>{this.playSound("three")}}>
                 <Text style={styles.txt}>three</Text>
           </TouchableOpacity>
           
      </View>
      <View>
           <TouchableOpacity style={[{backgroundColor:listBackgroundColors[4]},styles.item]} onPress={()=>{this.playSound("four")}}>
                 <Text style={styles.txt}>four</Text>
           </TouchableOpacity>
           
      </View>
      <View >
           <TouchableOpacity style={[{backgroundColor:listBackgroundColors[5]},styles.item]} onPress={()=>{this.playSound("five")}}>
                 <Text style={styles.txt}>five</Text>
           </TouchableOpacity>
           
      </View>
      <View >
           <TouchableOpacity style={[{backgroundColor:listBackgroundColors[6]},styles.item]} onPress={()=>{this.playSound("six")}}>
                 <Text style={styles.txt}>six</Text>
           </TouchableOpacity>
           
      </View>
      <View >
           <TouchableOpacity style={[{backgroundColor:listBackgroundColors[7]},styles.item]} onPress={()=>{this.playSound("seven")}}>
                 <Text style={styles.txt}>seven</Text>
           </TouchableOpacity>
           
      </View>
      <View >
           <TouchableOpacity style={[{backgroundColor:listBackgroundColors[8]},styles.item]} onPress={()=>{this.playSound("eight")}}>
                 <Text style={styles.txt}>eight</Text>
           </TouchableOpacity>
           
      </View>
      <View >
           <TouchableOpacity style={[{backgroundColor:listBackgroundColors[9]},styles.item]} onPress={()=>{this.playSound("nine")}}>
                 <Text style={styles.txt}>nine</Text>
           </TouchableOpacity>
           
      </View>
      <View >
           <TouchableOpacity style={[{backgroundColor:listBackgroundColors[10]},styles.item]} onPress={()=>{this.playSound("ten")}}>
                 <Text style={styles.txt}>ten</Text>
           </TouchableOpacity>
           
      </View>

    </View>
    </ScrollView>
  );
 }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  grid:{
    flex:1,
    margin:5,
  },
  logo:{
    alignSelf:"center",
    marginTop:15,
  },
  rowcontainer:{
    flexDirection:"row"
  },
  item:{
    flex:1,
    height:80,
    alignItems:"center",
    justifyContent:"center",
    margin:2
  },
  Txt:{
    color:"#fff",
    fontSize:20
  }

});

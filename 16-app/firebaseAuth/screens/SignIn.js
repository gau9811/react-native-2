import React from 'react';
import { StyleSheet, Text, View,KeyboardAvoidingView,ScrollView,Image,TouchableOpacity } from 'react-native';
import * as firebase from 'firebase'
import {Form,Item,Input,Label,Button} from 'native-base'


export default class signinScreen extends React.Component {

 constructor(props){
     super(props)
     this.State={
         email:"",
         password:""
     }
 }

   




    static navigationOptions={
        title:"SignIn",
        header:null
    }


signInUser = (email,password) =>{
    firebase
    .auth()
    .signInWithEmailAndPassword(email,password)
    .then(()=>{
        this.props.navigation.replace("Home")
    })
    .catch(err => console.log(err))
}


  render(){
    return (
 
    <KeyboardAvoidingView 
    styles={styles.container}
     behavior="position" enabled
    >
        <View style={styles.logoContainer}>
          <Image source={require("../assets/logo.png")}/>
          <Text>lco.in</Text>
        </View>
      <Form  style={styles.form}>  
        <Item floatingLabel>
              <Label>Email</Label>

              <Input
               autoCorrect={false}
               autoCapitalize="none"
               keyboardType="default"
               onChangeText={email =>this.setState({email})}
              />
          </Item>
        <Item floatingLabel>
              <Label>Password</Label>

              <Input
              secureTextEntry={true}
               autoCorrect={false}
               autoCapitalize="none"
               keyboardType="default"
               onChangeText={password =>this.setState({password})}
              />
          </Item>
       
      </Form>
     
    <Button styles={styles.button}
          full
          rounded
          onPress={()=>{
             this.signInUser(this.state.email,this.state.password)
          }}
          >
           <Text style={styles.buttonText}>Sign in</Text>
          </Button> 
   
   
    <View style={styles.footer}>
        <Text>OR</Text>
      <TouchableOpacity onPress={() => {
               this.props.navigation.navigate("signup")
      }} >
      <Text>Create a new account</Text>
    </TouchableOpacity>  
    </View>
    
    </KeyboardAvoidingView>

  );
}
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff"
    },
    logoContainer: {
      alignItems: "center",
      marginTop: 100,
      marginBottom: 100
    },
    form: {
      padding: 20,
      width: "100%",
      marginBottom: 30
    },
    button: {
      marginTop: 10
    },
    buttonText: {
      color: "#fff"
    },
    footer: {
      alignItems: "center",
      marginTop:15
    },
   
  });
  
  

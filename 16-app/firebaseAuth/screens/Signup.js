import React from 'react';
import { StyleSheet, Text, View ,Image,TouchableOpacity,KeyboardAvoidingView} from 'react-native';
import  * as firebase from 'firebase'
import {Form ,Item,Input,Label,Button} from 'native-base'
import { onDidFailWithError } from 'expo/build/AR';






export default class signupScreen extends React.Component {
    constructor(props){
        super(props)
        this.State={
            email:"",
            password:"",
            name:""
        }
    }
   

       static navigationOptions={
           title:"SignUp",
           header:null
       }
   

       signupUser =(name,email,password) =>{
           firebase
           .auth()
           .createUserWithEmailAndPassword(email,password)
           .then(authenticate => {
               return authenticate.user
               .updateProfile({
                   displayName:name
               })
               .then(()=>{
                   this.props.navigation.replace("Home")
               })
           }).catch(err => {
               alert(err.message);
             })
  
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
                  <Label>Name</Label>
    
                  <Input
                   autoCorrect={false}
                   autoCapitalize="none"
                   keyboardType="default"
                   onChangeText={name =>this.setState({name})}
                  />
              </Item>
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
       <TouchableOpacity>
        <Button styles={styles.button}
              full
              rounded
              onPress={()=>{
                  this.signupUser(
                      this.state.name,
                      this.state.email,
                      this.state.password
                  )
              }}
              >
               <Text style={styles.buttonText}>Sign Up</Text>
              </Button> 
       
      </TouchableOpacity>  
        <View style={styles.footer}>
            <Text style={styles.tt}>OR</Text>
       <TouchableOpacity>
        <Button onPress={()=> this.props.navigation.navigate("Signin")}
          rounded
          primary
           style={styles.btn}
           > 
          <Text style={styles.txt}>Already having an account</Text>
          </Button>
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
      width: "100%"
    },
    button: {
      marginTop: 20
    },
    buttonText: {
      color: "#fff"
    },
    footer: {
      alignItems: "center"
    },
    btn:{
     padding:10,
     
    },
    txt:{
        color:"#fff",
        
    },
    tt:{
        margin:5,
        
    }
  });
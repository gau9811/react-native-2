import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Dimensions } from 'react-native';
import{Button} from 'native-base';
import{FontAwesome} from "@expo/vector-icons"

 //get array of length 25
let itemArray = new Array(25).fill("empty");


export default class App extends React.Component {
 constructor(props){
  super(props)
   this.state ={
     randomNumber:""
   }
 } 

   
   componentDidMount = () =>{
     this.setState({randomNumber:this.generateRandomNumber()})
   }

   generateRandomNumber = () => {
       //TODO: generate a random number
       let randomNumber = Math.floor(Math.random() * 25) 
       this.setState({randomNumber:randomNumber , isScractched:true})
       return randomNumber
      };

   scrachItem = (itemNumber) => {
     if(this.state.randomNumber === itemNumber) {
       itemArray[itemNumber] = "lucky"
     }else{
       itemArray[itemNumber] = "unlucky"
     }
     this.forceUpdate();
   };

   scratchItemIcon = (itemNumber) =>{
    //TODO:find right color
    if(itemArray[itemNumber]  === "lucky"){
      return "dollar"
    }else if(itemArray[itemNumber] === "unlucky"){
      return "frown-o"
    }
    return "circle"
   };

  scrachItemColor = (itemNumber) =>{
    if(itemArray[itemNumber]  === "lucky"){
      return "green"
    }else if(itemArray[itemNumber] === "unlucky"){
      return "red"
    }
    return "black"
   }
   
   showAllitem = () =>{
   //TODO :Button
   itemArray.fill("unlucky");
   itemArray[this.state.random] = "lucky"
   this.forceUpdate();
  }

  resetGame =()=>{
    this.setState({randomNumber:this.generateRandomNumber()},
    () =>{
      itemArray.fill("empty");
      this.forceUpdate()
    }
    )
  }

render(){ 
  

return (
    <View style={styles.container}>
     <View style={styles.topbar}>
        <Text style={styles.toptxt}>Scratch and Win Game</Text>
     </View>
     <View style={styles.grid}>
       <View style={styles.itemrow}>
         <TouchableOpacity style={styles.item} onPress={()=>{this.scrachItem(0)}}>
           <FontAwesome
             name={this.scratchItemIcon(0)}
             size={50}
             color={this.scrachItemColor(0)}

           />
         </TouchableOpacity>
         <TouchableOpacity style={styles.item} onPress={()=>{this.scrachItem(1)}}>
           <FontAwesome
             name={this.scratchItemIcon(1)}
             size={50}
             color={this.scrachItemColor(1)}

           />
         </TouchableOpacity>
         <TouchableOpacity style={styles.item} onPress={()=>{this.scrachItem(2)}}>
           <FontAwesome
             name={this.scratchItemIcon(2)}
             size={50}
             color={this.scrachItemColor(2)}

           />
         </TouchableOpacity>
         <TouchableOpacity style={styles.item} onPress={()=>{this.scrachItem(3)}}>
           <FontAwesome
             name={this.scratchItemIcon(3)}
             size={50}
             color={this.scrachItemColor(3)}

           />
         </TouchableOpacity>
         <TouchableOpacity style={styles.item} onPress={()=>{this.scrachItem(4)}}>
           <FontAwesome
             name={this.scratchItemIcon(4)}
             size={50}
             color={this.scrachItemColor(4)}

           />
         </TouchableOpacity>
       </View>
       <View style={styles.itemrow}>
         <TouchableOpacity style={styles.item} onPress={()=>{this.scrachItem(5)}}>
           <FontAwesome
             name={this.scratchItemIcon(5)}
             size={50}
             color={this.scrachItemColor(5)}

           />
         </TouchableOpacity>
         <TouchableOpacity style={styles.item} onPress={()=>{this.scrachItem(6)}}>
           <FontAwesome
             name={this.scratchItemIcon(6)}
             size={50}
             color={this.scrachItemColor(6)}

           />
         </TouchableOpacity>
         <TouchableOpacity style={styles.item} onPress={()=>{this.scrachItem(7)}}>
           <FontAwesome
             name={this.scratchItemIcon(7)}
             size={50}
             color={this.scrachItemColor(7)}

           />
         </TouchableOpacity>
         <TouchableOpacity style={styles.item} onPress={()=>{this.scrachItem(8)}}>
           <FontAwesome
             name={this.scratchItemIcon(8)}
             size={50}
             color={this.scrachItemColor(8)}

           />
         </TouchableOpacity>
         <TouchableOpacity style={styles.item} onPress={()=>{this.scrachItem(9)}}>
           <FontAwesome
             name={this.scratchItemIcon(9)}
             size={50}
             color={this.scrachItemColor(9)}

           />
         </TouchableOpacity>
       </View>
       <View style={styles.itemrow}>
         <TouchableOpacity style={styles.item} onPress={()=>{this.scrachItem(10)}}>
           <FontAwesome
             name={this.scratchItemIcon(10)}
             size={50}
             color={this.scrachItemColor(10)}

           />
         </TouchableOpacity>
         <TouchableOpacity style={styles.item} onPress={()=>{this.scrachItem(11)}}>
           <FontAwesome
             name={this.scratchItemIcon(11)}
             size={50}
             color={this.scrachItemColor(11)}

           />
         </TouchableOpacity>
         <TouchableOpacity style={styles.item} onPress={()=>{this.scrachItem(12)}}>
           <FontAwesome
             name={this.scratchItemIcon(12)}
             size={50}
             color={this.scrachItemColor(12)}

           />
         </TouchableOpacity>
         <TouchableOpacity style={styles.item} onPress={()=>{this.scrachItem(13)}}>
           <FontAwesome
             name={this.scratchItemIcon(13)}
             size={50}
             color={this.scrachItemColor(13)}

           />
         </TouchableOpacity>
         <TouchableOpacity style={styles.item} onPress={()=>{this.scrachItem(14)}}>
           <FontAwesome
             name={this.scratchItemIcon(14)}
             size={50}
             color={this.scrachItemColor(14)}

           />
         </TouchableOpacity>
       </View>
       <View style={styles.itemrow}>
         <TouchableOpacity style={styles.item} onPress={()=>{this.scrachItem(15)}}>
           <FontAwesome
             name={this.scratchItemIcon(15)}
             size={50}
             color={this.scrachItemColor(15)}

           />
         </TouchableOpacity>
         <TouchableOpacity style={styles.item} onPress={()=>{this.scrachItem(15)}}>
           <FontAwesome
             name={this.scratchItemIcon(15)}
             size={50}
             color={this.scrachItemColor(15)}

           />
         </TouchableOpacity>
         <TouchableOpacity style={styles.item} onPress={()=>{this.scrachItem(16)}}>
           <FontAwesome
             name={this.scratchItemIcon(16)}
             size={50}
             color={this.scrachItemColor(16)}

           />
         </TouchableOpacity>
         <TouchableOpacity style={styles.item} onPress={()=>{this.scrachItem(16)}}>
           <FontAwesome
             name={this.scratchItemIcon(16)}
             size={50}
             color={this.scrachItemColor(16)}

           />
         </TouchableOpacity>
         <TouchableOpacity style={styles.item} onPress={()=>{this.scrachItem(17)}}>
           <FontAwesome
             name={this.scratchItemIcon(17)}
             size={50}
             color={this.scrachItemColor(17)}

           />
         </TouchableOpacity>
       </View>
       <View style={styles.itemrow}>
         <TouchableOpacity style={styles.item} onPress={()=>{this.scrachItem(18)}}>
           <FontAwesome
             name={this.scratchItemIcon(18)}
             size={50}
             color={this.scrachItemColor(18)}

           />
         </TouchableOpacity>
         <TouchableOpacity style={styles.item} onPress={()=>{this.scrachItem(19)}}>
           <FontAwesome
             name={this.scratchItemIcon(19)}
             size={50}
             color={this.scrachItemColor(19)}

           />
         </TouchableOpacity>
         <TouchableOpacity style={styles.item} onPress={()=>{this.scrachItem(20)}}>
           <FontAwesome
             name={this.scratchItemIcon(20)}
             size={50}
             color={this.scrachItemColor(20)}

           />
         </TouchableOpacity>
         <TouchableOpacity style={styles.item} onPress={()=>{this.scrachItem(21)}}>
           <FontAwesome
             name={this.scratchItemIcon(21)}
             size={50}
             color={this.scrachItemColor(21)}

           />
         </TouchableOpacity>
         <TouchableOpacity style={styles.item} onPress={()=>{this.scrachItem(22)}}>
           <FontAwesome
             name={this.scratchItemIcon(22)}
             size={50}
             color={this.scrachItemColor(22)}

           />
         </TouchableOpacity>
       </View>
    
    </View>
     <Button onPress={()=>{this.showAllitem()}}
      full primary style={styles.button}>
       <Text style={styles.btntxt}> Show all coupons</Text>
     </Button>
     <Button onPress ={()=>this.resetGame()}
     full success style={styles.button}>
       <Text style={styles.btntxt}>Reset the game</Text>
     </Button>
    </View>
  );
 }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grid:{
    
  },
  itemrow:{
   flexDirection:"row"
  },
  item:{
    alignItems:"center",
    padding:10,
    borderWidth:2,
    borderColor:"#000",
    minWidth:70
  },
  button:{
    marginVertical:15
  
  },
  btntxt:{
    color:"#ffffff",
    fontSize:18
  },
  topbar:{
  backgroundColor:"#8b78f6",
  height:50,
  justifyContent:"center",
  width:Dimensions.get('window').width,
  marginVertical:20  
},
  toptxt:{
   color:"#FFF",
   textAlign:"center",

  }


});

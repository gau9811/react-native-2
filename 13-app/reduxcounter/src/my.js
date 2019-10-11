import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux'


class Myapp extends React.Component {
 render(){
    return (
    <View style={styles.container}>
     <View style={{flexDirection:"row",justifyContent:"space-around"}}>
     <TouchableOpacity 
      onPress={()=>
       this.props.incCounter()
      }
     >
       <Text>INCREASE</Text>
     </TouchableOpacity>
     <TouchableOpacity>
       <Text style={styles.fm}>{this.props.myCounter}</Text>
     </TouchableOpacity>
     <TouchableOpacity 
      onPress={()=>this.props.decCounter()}
     >
       <Text>DECREASE</Text>
     </TouchableOpacity>
    </View>
    </View> 
  );
 }
}
function mapStateToProps(state){
  return {
    myCounter :state.myCounter
  }
}

function mapDispatchToProps(dispatch){
  return{
    incCounter : () => dispatch({
      type:'INC_COUNTER',


    }),
    decCounter: () => dispatch({
      type:'DEC_COUNTER'
    })
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Myapp)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fm:{
     fontSize:30
  }
});

import React from 'react';
import { StyleSheet, Text, View ,FlatList,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux'
import { Card , Icon } from 'native-base';

function mapStateToProps(state){
   return{
       data:state
   }
}

function   mapDispatchToProps(dispatch){
return {
    goodperformance: id =>dispatch({
       type:"Good_Performance",
       id :id
    }),
    badperformance: id => dispatch ({
        type:"Bad_Performance",
        id: id
    })
  }
}

class EMPL extends React.Component {
render(){
    return (
   <FlatList data={Object.values(this.props.data)}
    renderItem={ ( {item} )=>(
     <Card style ={styles.container}>
     <View style={styles.idcontainer}>
         <Text style={styles.idText}>{item.empid}</Text>
     </View>
      <View style={styles.nameAndSalaryContainer}>
      <Text style={styles.idText}>
          name : {item.empName}
      </Text>
      <Text style={styles.idText}>
          salary : {item.empSalary.toFixed()}
      </Text>
      </View>
     <View style={styles.performanceIconContainer}>
    <TouchableOpacity 
    onPress = {()=>{
        this.props.badperformance(item.empid)
    }}
    >
       <Icon 
        ios="ios-thumbs-down"
        android="md-thumbs-down"
        style={styles.badPerformance}

       />
         </TouchableOpacity>
         <TouchableOpacity 
    onPress = {()=>{
        this.props.goodperformance(item.empid)
    }}
    >
       <Icon 
        ios="ios-thumbs-up"
        android="md-thumbs-up"
        style={styles.goodPerformance}

       />
         </TouchableOpacity>
    
     </View>
     
     </Card>
    )}
   keyExtractor = { item => item.empid.toString()}
   >
   
   </FlatList>
   
  );
 }
}


export default connect(mapStateToProps,mapDispatchToProps)(EMPL)
const styles = StyleSheet.create({
    //list card view container
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row"
    },
    // no. of employee container
    idContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20
    },
    // no. of employee text
    idText: {
      fontSize: 18,
      color: "#000"
    },
    // name and salary text container
    nameAndSalaryContainer: {
      flex: 4,
      padding: 20
    },
    // employee name text
    nameText: {
      fontSize: 16,
      color: "#000"
    },
    // employee salary text
    salaryText: {
      fontSize: 16,
      color: "#000"
    },
    // like dislike icon container
    performanceIconContainer: {
      flex: 2,
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center"
    },
    //like icon
    goodPerformance: {
      color: "green"
    },
    // dislike icon
    badPerformance: {
      color: "red"
    }
  });
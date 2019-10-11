import React from 'react';
import { createStore } from "redux"
import{ Provider }from 'react-redux'
import EMPL from './src/EMP'

const initState = {
  1:{
    empid:1,
    empName:"Employee 1",
    empSalary:500000,

  },
  2:{
    empid:2,
    empName:"Employee 2",
    empSalary:50000,

  },
  3:{
    empid:3,
    empName:"Employee 3",
    empSalary:30000,

  },
  4:{
    empid:4,
    empName:"Employee4",
    empSalary:200000,

  },
  5:{
    empid:5,
    empName:"Employee5",
    empSalary:1000000,

  },
 
}

const reducer = (state = initState,action) => {

let initsalary;
let increament;
let newsalary;
let employeeobj;

if(action.id){
  initsalary = state[action.id].empSalary
  increament = (initsalary/100) * 20
}

 switch (action.type) {
   case "Good_Performance": 
     newsalary = initsalary + increament;
     employeeobj = state[action.id]
     employeeobj.empSalary = newsalary
     // return new state
    return Object.assign({},state)
    
    case "Bad_Performance": 
    newsalary = initsalary - increament;
    employeeobj = state[action.id]
    employeeobj.empSalary = newsalary
    // return new state
   return Object.assign({},state)
 
  
 }
return state;

}

const store = createStore(reducer)


export default class App extends React.Component {
 render(){
  return (
    <Provider store={store}>
      <EMPL>

      </EMPL>
    </Provider>
  );
 }
}


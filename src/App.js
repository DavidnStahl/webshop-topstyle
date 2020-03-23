import React, {useEffect, useState} from 'react';


import './App.css';


function App() {
 //const [Description, setDescription] = useState([])
  //funkar//
  /*useEffect(() => {
    fetch("http://localhost:8080/getCustomers").then(res => res.json()).then((data) => {
      console.log(data)})
  })*()*/
  

  //funkar//
  /*useEffect(() => {
    fetch("http://localhost:8080/getProducts").then(res => res.json()).then((data) => {
      console.log(data)
      let x = <img src={data[0].picture} alt="e"/>
      setDescription([
        x
      ])
      /*let arr = data[0].description.split("|")
      let x = arr.map(text => {

        return <li>{text}</li>
      })
      setDescription([
        x
      ])
    })
      
  }, [])*/
  
  
  ///funkar/////
   /* useEffect(() => {
      fetch("http://localhost:8080/addCustomer", {
          mode: 'cors',
          method: 'POST',
          header : {
            'Accept': 'application/json',
            'Content-type': 'application/json'},
          body: JSON.stringify({
            username:"david",
             password:"hej"})

      })
  }, []);*/
  ///funkar/////
  /* useEffect(() => {
      fetch("http://localhost:8080/addOrder", {
          mode: 'cors',
          method: 'POST',
          header : {
            'Accept': 'application/json',
            'Content-type': 'application/json'},
          body: JSON.stringify({
            customerID: 1,
            totalpayment: 400,
            produktID: [1,1]})
      })
  }, []);*/
  
  return (
    
    <div>
      {/*Description*/}
    </div>
  )
}

export default App

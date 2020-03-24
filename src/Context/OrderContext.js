import React, {createContext,useState} from 'react';

export const OrderContext = createContext();


const OrderContextProvider = (props) => {
    const [OrderStatus,setOrderStatus] = useState([]);      
    const SendOrder = () => {
        let order = JSON.parse(localStorage.getItem("customerbasket"));
        let payment = localStorage.getItem("totalprice");
        let customer = localStorage.getItem("loggedinuser")
        let produktIDArray = order.map((item) =>{
            return item.produktID
        })
        fetch("http://localhost:8080/addOrder", {
            mode: 'cors',
            method: 'POST',
            header : {
              'Accept': 'application/json',
              'Content-type': 'application/json'},
            body: JSON.stringify({
              customerID: customer,
              totalpayment: payment,
              produktID: produktIDArray})
              
        });
        console.log("Ordersend")                
    }
     return (
          <OrderContext.Provider value={[OrderStatus,setOrderStatus,SendOrder]}>
            {props.children}
          </OrderContext.Provider>
  )   
}

export default OrderContextProvider
import React,{useState,useEffect} from 'react'
import './LoginRegisterItems.css'


const CustomerBasketItems = () => {
  const [Basket, setBasket] = useState([""]);
  

  useEffect(() =>{
    if(JSON.parse(localStorage.getItem("customerbasket")) === null || JSON.parse(localStorage.getItem("customerbasket")).length === 0){
      setBasket([{
        name: "empty!!"
      }])
    }else{
      setBasket(JSON.parse(localStorage.getItem("customerbasket")))
    }
    
  },[setBasket])

  const removeItemFromCustomerBasket = (id) =>{
    console.log(id)
    let newBasket = Basket.filter(item => Basket.indexOf(item) !== id)
    localStorage.setItem("customerbasket",JSON.stringify(newBasket))
    let totalprice = 0;
    newBasket.forEach(element => {
         totalprice += element.price
     });
     localStorage.setItem("totalprice",totalprice)
     setBasket(newBasket)
   }

    return (<React.Fragment>

        <div className="wrapper fadeInDown">
          <div id="formContent">
        
          <div className="fadeIn first">
          <img src="https://www.vippng.com/png/detail/159-1591420_order-online-icon-clique.png" id="icon" alt="User Icon" />
            </div>
        
            <form>
            {Basket.map((item,index) =>{

              return (<React.Fragment><span>{item.name}</span> <button onClick={() => removeItemFromCustomerBasket(index)}>Delete</button><br/></React.Fragment>)
            })}<br/>
            <span>Total: {localStorage.getItem("totalprice")} kr</span><br/>
              <input type="submit" className="fadeIn fourth" value="Order now" />
            </form>
        
          </div>
        </div>
        
            </React.Fragment>)
}

export default CustomerBasketItems

import React from 'react'
import './LoginRegisterItems.css'

const CustomerBasketItems = () => {
    return (<React.Fragment>

        <div className="wrapper fadeInDown">
          <div id="formContent">
        
          <div className="fadeIn first">
          <img src="https://www.vippng.com/png/detail/159-1591420_order-online-icon-clique.png" id="icon" alt="User Icon" />
            </div>
        
            <form>
              <label type="text" id="login" className="fadeIn second" name="login" placeholder="Iphone X">Iphone X</label><br/>
              <label type="text" id="password" className="fadeIn third" name="login" >6900 kr</label><br/>
              <input type="submit" className="fadeIn fourth" value="Order now" />
            </form>
        
          </div>
        </div>
        
            </React.Fragment>)
}

export default CustomerBasketItems

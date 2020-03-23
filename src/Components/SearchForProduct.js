import React, {useContext,useState,memo} from 'react'
import './LoginRegisterItems.css'
import {SearchContext} from '../Context/SearchContext';


const SearchForProduct = () => {
    const [Products,setProducts] = useContext(SearchContext);
    const [InputText,setInputText] = useState("");

    const handleInputText = (e) =>{
      setInputText(e.target.value)
      setProducts("hej då")
      memo(SearchContext);
    }
    
    const getData = () =>{
      getApiData();
      console.log(InputText);
      
    }
    function getApiData(){
        fetch(`http://localhost:8080/getProduct?name=${InputText}`).then(res => res.json()).then((data) => {
      console.log(data[0])
      console.log(Products)
            
      })       
    }
    return (<React.Fragment>

        <div className="wrapper fadeInDown">
          <div id="formContent">
        
          <div className="fadeIn first">
          <img src="https://i.ya-webdesign.com/images/search-png-3.png" id="icon" alt="User Icon" />
            </div>

            <input type="text" id="login" className="fadeIn second" name="product" placeholder="search for products" value={InputText}  onChange={handleInputText} /><br/><br/>
            <button className="fadeIn fourth btn btn-primary" onClick={getData} >Search</button><br/><br/>
          </div>
        </div>        
            </React.Fragment>)
}

export default SearchForProduct

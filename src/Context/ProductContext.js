import React, {createContext,useState} from 'react';
import ProductList from '../Components/ProductList';

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
    const [ProductInfo, setProductInfo] = useState( () =>{
        return <ProductList/>
    });

  const setCustomerBasket = (item) => {
      console.log(item.produktID)
   let storage = localStorage.getItem("customerbasket")
   if(storage=== null || storage.length === 0){
    let arr = []
    let totalprice = item.price;
    localStorage.setItem("totalprice",totalprice)
    arr.push(item)
    localStorage.setItem("customerbasket",JSON.stringify(arr))
   }else {
     let parseditem =  JSON.parse(storage);
     let totalprice = 0;
     parseditem.forEach(element => {
         totalprice += element.price
     });
     localStorage.setItem("totalprice",totalprice)
     parseditem.push(item)
    localStorage.setItem("customerbasket",JSON.stringify(parseditem))
    console.log(parseditem)
   }
   
  }   
    const DetailView = (product) =>{
        product.description = product.description.split("|")
            setProductInfo(() =>{
                return (
                <div className="wrapper fadeInDown">               
                <img src={product.picture} alt="pic"></img>
                <button className="btn btn-warning" onClick={() => setCustomerBasket(product)}>Add to basket</button>
                <h3>Name: {product.name}</h3>
                <h3>Price: {product.price} kr</h3>
                <br/>
                <h3>Description</h3><br/>
                {product.description.map((text) =>{
                    return <p>{text}</p>
                })}
               </div>)
            })
    }
     return (
          <ProductContext.Provider value={[ProductInfo, setProductInfo,DetailView]}>
            {props.children}
          </ProductContext.Provider>
  )   
}

export default ProductContextProvider
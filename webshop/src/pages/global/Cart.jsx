import React, { useState } from 'react'
import productsFromFile from "../../data/products.json"

function Cart() {
  const [cart, updateCart] = useState(productsFromFile);

  const deleteFromCart =(index) => {
    cart.splice(index, 1);
    updateCart(cart.slice());
   }
   
   const addToCart= (newProduct) => {
     cart.push(newProduct);
     updateCart(cart.slice());
   }
   
   const calculateTotal = () => {
     let amount = 0;
     cart.forEach(product => amount = amount + product.price);
     return amount;
   }

  return (
    <div>
        {cart.length === 0 && <div>Your shopping cart is currently empty</div>}
        {cart.length === 0 && <img src="/empty.svg" alt="" />}
        <div>Total cost: {calculateTotal()}€</div>
  
      {cart.length > 0 &&
      <div>
        <div>You have {cart.length} items in your cart</div>
        <button onClick={() => updateCart([])}>Empty the shopping cart</button>
      </div>}

        {cart.map((product, index) => 
          <div key={index}>
            {index}.
            <img style={{width: "50px"}} src={product.image} alt="" />
            {product.title} - {product.price} €
            <button onClick={() => deleteFromCart(index)}>Delete</button> 
            <button onClick={() => addToCart(product)}>Add one to the end</button> 
          </div> )}
    </div>
  )
}

export default Cart
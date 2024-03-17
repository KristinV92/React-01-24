import React, { useState } from 'react'
import productsFromFile from "../../data/products.json";
import { Link } from 'react-router-dom';

function HomePage() {
    const [products, setProducts] = useState(productsFromFile);

    const addCart = (product) => {
      productsFromFile.push(product);
    }

  return (
    <div>
      {products.map((product, index) =>
          <div key={product.id}>
              <img style={{width: "100px"}} src="{product.image}" alt="" />
              <div>{product.title}</div>
              <div>{product.price}€</div>

            <Link to={"/product/" + index}>
              <button>View details</button>
            </Link>
              <button onClick={() => addCart(product)}>Add to cart</button>
          </div>
          )}
    </div>
  )
}
export default HomePage
import React from 'react'
import { useParams } from 'react-router'
// components 
import ProductDetails from '../components/productDetails';

function ProductPage() {
    let { productId } = useParams();
    // const getProduct = () => {
    //     fetch("http://localhost:5000/api/products/"+productId)
    //     .then(response => response.text())
    //     .then(result => {
    //         product = JSON.parse(result)
    //         console.log(typeof product)
    //     })
    //     .catch(error => console.log('error', error));
    // }
    return (
      <div className="productPage">

        <ProductDetails productId={productId}/>
      </div>
    );
  }
export default ProductPage;
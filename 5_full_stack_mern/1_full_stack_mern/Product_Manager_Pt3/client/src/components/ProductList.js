import React from 'react';
import { Link } from '@reach/router';
import axios from 'axios';

const ProductList = (props) => {
    const { removeProduct } = props;
        const deleteProduct = (productId) => {
            axios.delete('http://localhost:8000/api/products/' + productId + '/delete')
            .then(res => {
                console.log(res)
                removeProduct(productId)
                // alert("Product was deleted. Click 'ok' to proceed to Products List Page.");
            })
        }

    return(
        <div>
            <h2>Products Catalogue:</h2>
            {props.products.map((product, index) => {
                return(
                    <h4 key={index}> 
                        <Link to={`/products/${product._id}/details`}>   {/* //underscore is necessary if not there, will say "undefined"*/}
                            {product.title}
                        </Link>  &nbsp;

                        <button 
                            style={{backgroundColor: "midnightblue", color: "white"}}>
                            <Link style={{textDecoration: "none", color: "white"}} to={`/products/${product._id}/edit`}>
                                Edit
                            </Link></button> &nbsp;
                        
                        <button 
                            style={{backgroundColor: "darkred", color: "white"}} 
                            onClick={(e) => {deleteProduct(product._id)}}>
                                Delete
                        </button>
                    </h4>
                )
            })}

        </div>
    )
}

export default ProductList;

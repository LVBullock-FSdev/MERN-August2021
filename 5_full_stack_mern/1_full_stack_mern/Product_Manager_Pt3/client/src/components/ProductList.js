import React from 'react';
import { Link } from '@reach/router';

const ProductList = (props) => {
    return(
        <div>
            <h2>All Products:</h2>
            {props.products.map((product, index) =>
                <Link to={`/products/${product._id}`} //underscore is necessary if not there, will say "undefined" 
                key={index}> 
                <h4>{product.title}</h4></Link>)
            }
        </div>
    )
}

export default ProductList;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductDetail = (props) => {

    const [product, setProduct] = useState({})

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res => {
                console.log(res.data);
                setProduct(res.data)
            })
            .catch(err => console.log(err))  
    }, [props.id])  //*****If I do not add props.id, get error: Line 15:8:  React Hook useEffect has a missing dependency: 'props.id'. Either include it or remove the dependency array  react-hooks/exhaustive-deps

    return (
        
        <div>
            <h1>Product Details</h1>
            <p><strong>Title:  </strong> { product.title }</p>
            <p><strong>Price:  </strong>${ product.price }</p>
            <p><strong>Description:  </strong>{ product.description }</p>
        </div>
    )
}
export default ProductDetail;
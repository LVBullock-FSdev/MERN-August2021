import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const ProductDetail = (props) => {

    const [product, setProduct] = useState({})

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props.id + "/details")
            .then(res => {
                console.log(res.data);
                setProduct(res.data)
            })
            .catch(err => console.log(err))  
    }, [props.id])  //*****If I do not add props.id, get error: Line 15:8:  React Hook useEffect has a missing dependency: 'props.id'. Either include it or remove the dependency array  react-hooks/exhaustive-deps

    const deleteProduct = (e) => {
        axios.delete("http://localhost:8000/api/products/" + product._id + "/delete")
            .then( res => {
                console.log(res)
                // alert("Product was deleted. Click 'ok' to proceed to Products List Page.")
                navigate("/");
        })
    }

    const productList = (e) => {
        axios.get("http://localhost:8000/api/products/")
            .then( res => {
                console.log(res)
                navigate("/");
        })
    }

    return (
        
        <div>
            <h1>Product Details</h1>
            <p><strong>Title:  </strong> { product.title }</p>
            <p><strong>Price:  </strong>${ product.price }</p>
            <p><strong>Description:  </strong>{ product.description }</p>

            <button 
                style={{backgroundColor: "midnightblue", color: "white"}}>
                <Link style={{textDecoration: "none", color: "white"}} to={`/products/${product._id}/edit`}>
                    Edit
                </Link></button> &nbsp;

            <button 
                style={{backgroundColor: "darkred", color: "white"}}
                onClick={deleteProduct}>
                    Delete
            </button> &nbsp;


            <button 
                style={{backgroundColor: "#A95C03", color: "white"}}
                onClick={productList}>
                    Products Catalogue
            </button>
        </div>
    )
}
export default ProductDetail;
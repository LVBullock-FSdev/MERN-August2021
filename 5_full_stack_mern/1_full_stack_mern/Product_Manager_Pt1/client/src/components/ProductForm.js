import React, { useState } from 'react'
import axios from 'axios';


const ProductForm = () => {
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of clearing by default
        e.preventDefault();


        //make a post request to create a new product
        axios.post('http://localhost:8000/api/products/create', {
            title,  //this is shortcut syntax for title: title,
            price,
            description
        })

            .then(res => console.log(res))
            .catch(err => console.log(err))
            setTitle("");
            setPrice(0);
            setDescription("");
    }

    //onChange to update product, price, and description
    return(
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Product:  </label><br/>
                <input type="text" onChange = {(e) => setTitle(e.target.value)}/>
            </p>

            <p>
                <label>Price:  </label><br/>
                <input type="number" step="0.01" onChange = {(e) => setPrice(e.target.value)}/>
            </p>

            <p>
                <label>Description:  </label><br/>
                <input type="text" onChange = {(e) => setDescription(e.target.value)}/>
            </p>

            <input type="submit"/>
        </form>
    )
}

export default ProductForm;
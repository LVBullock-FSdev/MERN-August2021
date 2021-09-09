import React, { useState } from 'react'
import axios from 'axios';


const ProductForm = (props) => {
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const {products, setProducts} = props;

    //handler when the form is submitted
    const onSubmitHandler = (e) => {
        //prevent default behavior of clearing by default
        e.preventDefault();

        //make a post request to create a new product
        axios.post('http://localhost:8000/api/products', {
            title,  //this is shortcut syntax for title: title,
            price,
            description
        })

            .then(res => {
                console.log(res)
                console.log(res.data)

                setProducts([...products, res.data]);
                setTitle("");
                setPrice(0);
                setDescription("");

            })

            .catch(err => console.log(err))
    }

    //onChange to update product, price, and description
    return(
        <form onSubmit={onSubmitHandler}>
            <p>
                <label><strong>Title: </strong></label>
                <input 
                    type="text" 
                    value={title} 
                    placeholder="Enter a product" 
                    onChange={(e)=>setTitle(e.target.value)}
                />
            </p>

            <p>
                <label><strong>Price: </strong> </label>
                {/* step="0.01" is the float, accepts 2 decimal points; step="any" allows more*/}
                <input 
                    type="number" 
                    value={price} 
                    step="0.01" 
                    onChange={(e)=> setPrice(e.target.value)}
                />  
            </p>

            <p>
                <label><strong>Description:  </strong></label>
                <input 
                    type="text" 
                    value={description} 
                    placeholder="Enter the product description" 
                    onChange={(e)=>setDescription(e.target.value)}
                />
            </p>

            <input 
                style={{backgroundColor: "#004B00", color: "white", marginBottom: "5px"}}
                type="submit" 
                value="Add Product"
            />
        </form>
    )
}

export default ProductForm;
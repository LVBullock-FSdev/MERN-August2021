import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';


const UpdateProduct = (props) => {
    // const { id } = props;
    //keep tract of what is being typed via useState hook
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();

    useEffect(() => {
        //Make a request to the server to get the person with id equal to the one in the URL.
        axios.get('http://localhost:8000/api/products/' + props.id + '/details')
            .then(res => {
                console.log(res.data)
                //When request resolves, set the state to the response
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
    }, [props.id]) //*****If I do not add props.id, get error: Line 15:8:  React Hook useEffect has a missing dependency: 'props.id'. Either include it or remove the dependency array  react-hooks/exhaustive-deps

        //define updatedProduct method
        const updateProduct = (e) => {
            //prevent default behavior of the submit
            e.preventDefault();
            //make a put request to update a product
            axios.put('http://localhost:8000/api/products/' + props.id + '/edit', {
                title,  //this is shortcut syntax for title: title,
                price, //this is shortcut syntax for price: price,
                description //this is shortcut syntax for description: description,
            })
    
                .then(res => {
                    console.log(res)
                    // alert("Product was updated. Click 'ok' to proceed to Products List Page.");
                    navigate("/");
                })
        }

        const cancelUpdate = (e) => {
            axios.get("http://localhost:8000/api/products/")
                .then( res => {
                    console.log(res)
                    navigate("/");  //alert from above still shows if I do not comment it out???????
            })
        }

    //onChange to update product, price, and description
    return(
        <div>
            <h1>Update this Product</h1>

            <form onSubmit={updateProduct}>
                <p>
                    <label><strong>Title: </strong></label>
                    <input 
                        type="text"
                        name="title" 
                        value={title} 
                        onChange={(e)=> { setTitle(e.target.value) }}
                    />
                </p>

                <p>
                    <label><strong>Price: </strong> </label>
                    {/* step="0.01" is the float, accepts 2 decimal points; step="any" allows more*/}
                    <input 
                        type="number"
                        name="price" 
                        value={price} 
                        step="0.01" 
                        onChange={(e)=> { setPrice(e.target.value) }}
                    />
                </p> 

                <p>
                    <label><strong>Description:  </strong></label>
                    <input 
                        type="text"
                        name="description" 
                        value={description} 
                        onChange={(e)=> { setDescription(e.target.value) }}
                    />
                </p>

                <input
                    style={{backgroundColor: "#004B00", color: "white"}} 
                    type="submit" 
                    value="Update Product"
                /> &nbsp;

                <input
                    style={{backgroundColor: "#A95C03", color: "white"}} 
                    type="submit" 
                    value="Cancel Update"
                    onclick={cancelUpdate}
                />
            </form>
        </div>
    )
}

export default UpdateProduct;

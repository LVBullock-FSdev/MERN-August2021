import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

const Main = () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                console.log(res.data);
                setProducts(res.data);
                setLoaded(true); 
            })
            .catch((err) => console.log(err))
    }, [])

    const removeProduct = productId => {
        setProducts(products.filter(product => product._id !== productId));
    }

    return(
        <div>
                <h1>Product Manager Pt 3</h1>
                <h3>August 2021 Cohort Edition, v1</h3>
                <hr style={{border: "5px solid grey", borderRadius: "5px"}}/>

            <ProductForm
            //passing state down via props - pulling from productForm
            products={products}
            setProducts={setProducts}
            />

                <hr style={{border: "5px solid grey", borderRadius: "5px"}}/>
                
            { loaded && <ProductList products={products} removeProduct={removeProduct}/> }
        </div>
    )
}

export default Main;
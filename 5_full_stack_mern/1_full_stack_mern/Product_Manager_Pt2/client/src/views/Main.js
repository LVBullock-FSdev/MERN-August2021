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
                setProducts(res.data);
                setLoaded(true); 
            })
            .catch(err => console.log(err))

    }, [products])

    return(
        <div>
                <h1>Product Manager Pt 2</h1>
                <h3>August 2021 Cohort Edition, v1</h3>
                <hr/>

            <ProductForm/>
                <hr/><hr/>
                
            { loaded && <ProductList products={products}/> }
        </div>
    )
}

export default Main;
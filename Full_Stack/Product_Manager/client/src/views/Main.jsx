import React from 'react'
import ProductForm from '../components/ProductForm'
import {useState, useEffect} from 'react'
import axios from 'axios'
import ProductList from '../components/ProductList'


const Main = props =>{
    const [products, setProducts] = useState([])
    const [lodaed, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then( res =>{ setProducts(res.data); setLoaded(true);})
        .catch( err => console.log(err));
    },[products]);

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId));
    }
    return(
        <div>
            <ProductForm />
            {lodaed && <ProductList products={products}  removeFromDom={removeFromDom}/>}
        </div>
        
    )
}

export default Main;
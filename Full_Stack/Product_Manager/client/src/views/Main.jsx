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
    const createProduct = product => {
        axios.post("http://localhost:8000/api/products/new", product)
        .then( res => console.log(res))
        .catch( err => console.log(err));
    }
    return(
        <div>
            <ProductForm onSubmit={createProduct} 
            title= "" 
            price = ''
            desc=""
            type="Create"
            />
            {lodaed && <ProductList products={products}  removeFromDom={removeFromDom}/>}
        </div>
        
    )
}

export default Main;
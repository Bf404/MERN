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
    },[])
    return(
        <div>
            
            <ProductForm />
            {lodaed && <ProductList products={products} />}
        </div>
        
    )
}

export default Main;
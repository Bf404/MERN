import React, {useState, useEffect} from 'react'
import {Link, navigate} from '@reach/router'
import AuthorForm from '../components/AuthorForm'
import axios from 'axios'


const Update = props =>{

    const [name, setName] = useState('');
    const [lodaed, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors/" + props.id)
        .then( res => {
            setName(res.data.name);
            setLoaded(true)
        })
        .catch( err => console.log(err));
    },[props.id]);

    const updateHandler = author => {
        console.log(author)
        axios.put('http://localhost:8000/api/authors/update/' + props.id, author)
        .then(res => navigate('/'))
        .catch(err => { 
            const errRes = err.response.data.errors;
            const errArr = [];
            for (const key of Object.keys(errRes)){
                errArr.push(errRes[key].message);
            }
            setErrors(errArr);
        })
    }

    return(
        <div>
            <Link to='/'>Home</Link>
            <p>Edit this author:</p>
            { 
                lodaed && 
                <AuthorForm onSubmit={updateHandler} name = {name}/>
            }
            {errors.map((err, idx) => {
                return(
                    <p key={idx} style={{color: 'red'}}>{err}</p>
                )
            })}
        </div>
    )
}

export default Update;
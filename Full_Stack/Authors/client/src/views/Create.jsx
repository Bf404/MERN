import React, {useState} from 'react'
import {Link} from '@reach/router'
import AuthorForm from '../components/AuthorForm';
import axios from 'axios'
import {navigate} from '@reach/router'


const Create = props =>{
    const [errors, setErrors] = useState([]);

    const addHandler = author =>
    {
        axios.post('http://localhost:8000/api/authors/new', author)
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
            <p>Add a new author:</p>
            <AuthorForm onSubmit={addHandler} name=""/>
            {errors.map((err, idx) => {
                return(
                    <p key={idx} style={{color: 'red'}}>{err}</p>
                )
            })}
        </div>
    )
}

export default Create;
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import AuthorList from '../components/AuthorList';


const Main = props =>{
    const [authors, setAuthors] = useState([]);
    const [lodaed, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/')
        .then(res => {setAuthors(res.data); setLoaded(true);})
        .catch(err => console.log(err))
    },[authors])

    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId));
    }
    return(
        <div>
            <h1>Favorite Authors</h1>
            { lodaed &&
                <AuthorList authors={authors} removeFromDom={removeFromDom}/>
            }

        </div>
    )
}

export default Main;
import React, {useState} from 'react'
import {navigate}  from '@reach/router'

const SearchBar = props =>{
    const [type, setType] = useState('people');
    const [id, setId] = useState(0);

    const selectHandel = e =>{
        setType(e.target.value)
    }
    const idHandel = e =>{
        setId(e.target.value)
    }

    const searchHandel = e =>{
        e.preventDefault();
        navigate(`/${type}/${id}`);
    }
    return(
        <div>
            <form onSubmit={searchHandel}>
                <p> Search For: </p>
                <select name="type" id="types"  onChange={selectHandel}>
                    <option value="people" > People </option>
                    <option value="planets" > Planets</option>
                </select>
                <label>ID:</label>
                <input type="text" onChange={idHandel}></input>
                <button>Search</button>
            </form>
        </div>
    );
}

export default SearchBar;
import React, {useState} from 'react'
import {Link} from '@reach/router'
import axios from 'axios'
import {navigate} from '@reach/router'
import PlayerForm from '../components/PlayerForm'


const Create = props =>{
    const [errors, setErrors] = useState([]);

    const addHandler = player =>
    {
        axios.post('http://localhost:8000/api/players/new', player)
        .then(res => navigate('/players/list'))
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
        <div style={{border: '2px solid black', margin: 5}} >
            <h6><Link to="/players/list" >List</Link> | <Link to="/player/new" style={{fontWeight: 'bold'}}>Add Player</Link></h6>
            <div style= {{border: '2px solid black', margin: 5}}>
        
                <p style={{fontWeight: 'bold'}}>Add a new Player:</p>
                <PlayerForm onSubmit={addHandler} name="" prefPos=""/>
                {errors.map((err, idx) => {
                    return(
                        <p key={idx} style={{color: 'red'}}>{err}</p>
                    )
                })}
            </div>
        </div>
    )
}

export default Create;
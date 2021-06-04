import React, {useState, useEffect} from 'react'
import axios from "axios"

const People = props =>{
    const id = props.id;
    const [error, setError] = useState(false)
    const [person, setPerson] = useState({
        name: "",
        height: "",
        mass: "",
        hair_color: "",
        skin_color: ""
    })
    useEffect(() => {
        axios.get("https://swapi.dev/api/people/" + id)
        .then( res => setPerson(res.data),
        error? setError(false) : "")
        .catch( err => setError(true))

    }, [id]);
    return(
        <div>
            {error?
            <div>
                <img src="https://tvline.com/wp-content/uploads/2019/08/ewan-mcgregor-star-wars-series.jpg"></img>
                <p>These aren't the droids you're looking for</p>
            </div>
            : 
            <div>
                <h1>{person.name} </h1>
                <h4>Height: {person.height}</h4>
                <h4>Mass: {person.mass}</h4>
                <h4>Hair Color: {person.hair_color}</h4>
                <h4>Skin Color: {person.skin_color}</h4>
            </div>
            }
            
        </div>
    );
}

export default People;
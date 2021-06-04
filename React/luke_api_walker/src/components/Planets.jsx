import React, {useState, useEffect} from 'react'
import axios from "axios"


const Planets = props =>{
    const id = props.id;
    const [error, setError] = useState(false)
    const [planet, setPlanet] = useState({
        name: "",
        climate: "",
        terrain: "",
        surface_water: "",
        population: ""
    })
    useEffect(() => {
        axios.get("https://swapi.dev/api/planets/"  + id)
        .then( res => setPlanet(res.data), error? setError(false) : "")
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
                <h1>{planet.name} </h1>
                <h4>Climate: {planet.climate}</h4>
                <h4>Terrain: {planet.terrain}</h4>
                <h4>Surface Water: {planet.surface_water}</h4>
                <h4>Population: {planet.population}</h4>
            </div>
            }
            
        </div>
        
    );
}

export default Planets;
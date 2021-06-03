import axios from 'axios';
import React, {useState} from 'react'

const DisplayPokemon = props =>{
    const [pokeList, setPokeList] = useState([]);
    const fetchHandler = (e) =>{
        e.preventDefault();
            axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(res => {setPokeList(res.data.results);})
            .catch( err =>{console.log(err)});
    };

    return (
        <div>
            <button onClick={fetchHandler}> Fetch Pokemon</button>
            {pokeList.map((poke, idx) => {
                return(
                    <div>
                        <ul>
                            <li key = {idx} > {poke.name} </li>
                    </ul>
                    </div>
                
                )
            })}
            {pokeList.length}
        </div>
    )
};

export default DisplayPokemon;
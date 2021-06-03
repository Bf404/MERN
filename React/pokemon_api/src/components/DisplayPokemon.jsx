import React, {useState, useEffect} from 'react'

const DisplayPokemon = props =>{
    const [pokeList, setPokeList] = useState([]);
    const fetchHandler = (e) =>{
        e.preventDefault();
            fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(res => res.json())
            .then(res => setPokeList(res.results))
            .catch( error => console.log(error));
    }

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
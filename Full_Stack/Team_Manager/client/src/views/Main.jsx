import React, {useState, useEffect} from 'react'
import axios from 'axios'
import PlayerList from '../components/PlayerList';
import { Link } from '@reach/router';


const Main = props =>{
    const [players, setPlayers] = useState([]);
    const [lodaed, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/players/')
        .then(res => {setPlayers(res.data); setLoaded(true);})
        .catch(err => console.log(err))
    },[players])

    const removeFromDom = playerId => {
        setPlayers(players.filter(player => player._id !== playerId));
    }
    return(
        <div style={{border: '2px solid black', margin: 5}}>
            <h6><Link to="/players/list" style={{fontWeight: 'bold'}}>List</Link> | <Link to="/player/new">Add Player</Link></h6>
            { lodaed &&
                <PlayerList players={players} removeFromDom={removeFromDom}/>
            }

        </div>
    )
}

export default Main;
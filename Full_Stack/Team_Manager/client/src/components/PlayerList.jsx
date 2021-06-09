
import {Table, Button} from 'react-bootstrap'
import DeleteButton from './DeleteButton'
import { Link } from '@reach/router';


const PlayerList = ({players, removeFromDom}) =>{

    return(
        <div style={{border: '2px solid black', margin: 5}}>
            {/* <h6><Link to="/players/list" style={{fontWeight: 'bold'}}>List</Link> | <Link to="/player/new">Add Player</Link></h6> */}
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>Player Name</th>
                    <th>Preffered Postion</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            players.map((player, idx) => {
                                return( 
                                    <tr key={idx}>
                                        <td> {player.name}</td>
                                        <td> {player.prefPos}</td>
                                        <td>  <DeleteButton playerId={player._id} successCallback={() => removeFromDom(player._id)} />
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    
                </tbody>
            </Table>
        </div>
    )
}

export default PlayerList;
import React from 'react'
import axios from 'axios';
import {Button} from 'react-bootstrap'


const DeleteButton = props =>{
    const {playerId, successCallback} = props;

    const deletePlayer = e  =>
    {
        axios.delete('http://localhost:8000/api/players/delete/' + playerId)
        .then(res => successCallback());

    }

    return <Button variant="danger" onClick={deletePlayer}> Delete </Button>
    

}

export default DeleteButton;
import React from 'react'
import axios from 'axios';
import {Button} from 'react-bootstrap'


const DeleteButton = props =>{
    const {authorId, successCallback} = props;

    const deleteAuthor = e  =>
    {
        axios.delete('http://localhost:8000/api/authors/delete/' + authorId)
        .then(res => successCallback());

    }

    return <Button variant="danger" onClick={deleteAuthor}> Delete </Button>
    

}

export default DeleteButton;
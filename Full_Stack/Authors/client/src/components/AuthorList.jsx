import React, {useState, UseEffect} from 'react'
import {Link} from '@reach/router'
import {Table, Button} from 'react-bootstrap'
import DeleteButton from './DeleteButton'


const AuthorList = ({authors, removeFromDom}) =>{

    return(
        <div>
            <Link to="/new">Add an author</Link>
            <p>We have quotes by: </p>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>Author</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            authors.map((author, idx) => {
                                return( 
                                    <tr key={idx}>
                                        <td> {author.name}</td>
                                        <td> <Button variant="primary" > <Link style={{textDecoration: 'none', color: 'white'}} to={`/edit/${author._id}`}>Edit </Link> </Button> | 
                                        <DeleteButton authorId={author._id} successCallback={() => removeFromDom(author._id)} />
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

export default AuthorList;
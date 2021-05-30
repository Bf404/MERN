import React, {useState} from 'react'

const UserForm = (props) => {
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const[conPassword, setConpassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, password};

    };

    return (
        <div>
            <form onSubmit = {createUser}>
            <div >
                <label>First Name:</label>
                <input type="text" onChange={e => setFirstname(e.target.value)}></input>
            </div>
            <div>
                <label> Last Name:</label>
                <input type="text" onChange = {e => setLastname(e.target.value)}></input>
            </div>
            <div>
                <label>Email:</label>
                <input type= "email" onChange= {e => setEmail(e.target.value)}></input>
            </div>
            <div>
                <label>Psssword:</label>
                <input type= "password" onChange= {e => setPassword(e.target.value)}></input>
            </div>

            <div>
                <label>Confirm Psssword:</label>
                <input type= "password" onChange= {e => setConpassword(e.target.value)}></input>
            </div>
        </form><br></br>
        <h1>Your Data: </h1>
        <p> First Name: {firstName}</p>
        <p> Last Name: {lastName}</p>
        <p>Email: {email}</p>
        <p> Password: {password}</p>
        <p>Confirm Password:{conPassword}</p>
        </div>
        

    );


};

export default UserForm;
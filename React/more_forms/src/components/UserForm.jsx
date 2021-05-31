import React, {useState} from 'react'

const UserForm = p => {
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const[conPassword, setConpassword] = useState("");

    const [fnError, setFnError] = useState('');
    const [lnError, setlnError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passError, setPassError] = useState('');
    const [conpassError, setConpassError] = useState('');

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, password};

    };
    const fnameValidator = e =>{
        setFirstname(e.target.value);
        if(e.target.value.length < 2 )
        {
            setFnError("First Name must be at least 2 characters!");
        }
        else{
            setFnError('');
        }
    };
    const lnameValidator = e =>{
        setLastname(e.target.value);
        if(e.target.value.length < 2 )
        {
            setlnError("Last Name must be at least 2 characters!");
        }
        else{
            setlnError('');
        }
    };

    const emailValidator = e =>{
        setEmail(e.target.value);
        if(e.target.value.length < 5 )
        {
            setEmailError("Email must be at lease 5 characters!");
        }
        else{
            setEmailError('');
        }
    };

    const passValidator = e =>{
        setPassword(e.target.value);
        if(e.target.value.length < 8 )
        {
            setPassError("Password must be at lease 8 characters!");
        }
        else{
            setPassError('');
        }
    };
    const conpassValidator = e =>{
        setConpassword(e.target.value);
        if(e.target.value !== password )
        {
            setConpassError("Password must match!");
        }
        else{
            setConpassError('');
        }
    };



    return (
        <div>
            <form onSubmit = {createUser}>
            <div >
                <label>First Name:</label>
                <input type="text" onChange={ fnameValidator }></input>
                <p style = {{color: 'red'}}>{fnError}</p>
            </div>
            <div>
                <label> Last Name:</label>
                <input type="text" onChange = {lnameValidator}></input>
                <p style = {{color: "red"}}>{lnError}</p>

            </div>
            <div>
                <label>Email:</label>
                <input type= "email" onChange= {emailValidator}></input>
                
                <p style = {{color: "red"}}>{emailError}</p>

            </div> 
            <div>
                <label>Psssword:</label>
                <input type= "password" onChange= {passValidator}></input>
                <p style = {{color: "red"}}>{passError}</p>

            </div>

            <div>
                <label>Confirm Psssword:</label>
                <input type= "password" onChange= {conpassValidator}></input>
                <p style = {{color: "red"}}>{conpassError}</p>

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
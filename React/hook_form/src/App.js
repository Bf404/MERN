import React, {useState} from 'react';
import './App.css';
import UserForm from './components/UserForm';

function App() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    conPassword: ""
  });

  return (
    <div className="App">
      <UserForm inputs = {state} setInputs = {setState}/>
      {/* <Results data = {state}/> */}
    </div>
  );
}

export default App;

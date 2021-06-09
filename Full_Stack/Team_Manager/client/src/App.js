import React from 'react'
import './App.css';
import {Router, Link} from '@reach/router'
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './views/Main';
import Create from './views/Create';


function App() {
  return (
    <div className="App">
        <h6><Link to="/players/list" style={{fontWeight: 'bold'}}>Manage Players</Link> | <Link to="">Manage Players Status</Link></h6>
        <Router>
        <Main path="/players/list"/>
        <Create path="player/new"/>
      
      </Router>
    </div>
  );
}

export default App;

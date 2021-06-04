
import './App.css';
import {Router}  from '@reach/router'
import SearchBar from './components/SearchBar';
import People from './components/People';
import Planets from './components/Planets';


function App() {
  return (
    <div className="App">
      <SearchBar />
      <Router>
        <People path="/people/:id" />
        <Planets path="/planets/:id" />
      </Router>
    </div>
  );
}

export default App;

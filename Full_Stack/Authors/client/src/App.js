import {Router} from '@reach/router'
import './App.css';
import Create from './views/Create';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './views/Main';
import Update from './views/Update';


function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <Create path="/new"/>
        <Update path="/edit/:id"/>
      </Router>
    </div>
  );
}

export default App;

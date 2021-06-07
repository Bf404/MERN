
import './App.css';
import Main from './views/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router} from '@reach/router'
import ProductDetails from './components/ProductDetails';
import Update from './views/Update';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <ProductDetails  path="/:id" />
        <Update path="products/:id/edit"/>
      </Router>
      
    </div>
  );
}

export default App;

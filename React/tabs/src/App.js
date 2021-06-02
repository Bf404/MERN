
import './App.css';
import Tabs from './components/tabs';

function App() {
  return (
    <div className="App">
      <Tabs items = {[
        {lable: 'Tab1', content: 'Tab1 content'},
        {lable: 'Tab2', content: 'Tab2 content'},
        {lable: 'Tab3', content: 'Tab3 content'},
      ]}/>
    </div>
  );
}

export default App;

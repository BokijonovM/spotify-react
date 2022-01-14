import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import MyMain from './components/MyMain';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyMain/>
        </div>
     
    
    </BrowserRouter>
    
  );
}

export default App;

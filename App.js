import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom';
import Signin from './components/Signin';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
        <Route path='/signup' element={<Register/>}></Route>
      </Route>
    </Routes>

      
    </div>
  );
}

export default App;

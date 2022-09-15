import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import LogIn from './pages/Login';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route index path='auth' element={<LogIn/>}/>
      <Route index path='register' element={<Register/>}/>    
    </Routes>
  );
}

export default App;


import './App.css';
import RegistrationForm from './pages/Register';

function App() {
  return (
    <div className="App">
  <RegistrationForm/>
    </div>
  );
}

import { Routes, Route } from 'react-router-dom';
import ButtonAppBar from "./pages/Home";
import SignInSide from "./pages/Login";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path='/' element={<ButtonAppBar/>}/>
      <Route index path='auth' element={<SignInSide/>}/>    
    </Routes>
)}


export default App;

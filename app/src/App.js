import RegistrationForm from './pages/Register';
import SignInSide from './pages/Login';
import { Routes, Route } from 'react-router-dom';
import ButtonAppBar from './pages/Home'

function App() {
  return (
    <Routes>
      <Route path='/' element={<ButtonAppBar/>}/>
      <Route index path='auth' element={<SignInSide/>}/>    
      <Route index path='register' element={<RegistrationForm/>}/>    
    </Routes>
)}


export default App;

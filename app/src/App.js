import RegistrationForm from './pages/Register';
import SignInSide from './pages/Login';
import { Routes, Route } from 'react-router-dom';
import ButtonAppBar from './pages/Home'
import HomePage from './pages/HomepAge';

function App() {
  return (
    <Routes>
      <Route path='/' element={<ButtonAppBar/>}>
        <Route index path='/' element={<HomePage/>}/>    
        <Route index path='auth' element={<SignInSide/>}/>    
        <Route index path='register' element={<RegistrationForm/>}/>    
      </Route>
    </Routes>
)}


export default App;

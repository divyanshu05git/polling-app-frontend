import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signin from './pages/SignIn';
import Signup from './pages/SignUp';
import LandingPage from './pages/Landing';
import { Events } from './pages/Events';



function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={< LandingPage/>} />
      <Route path="/signin" element={ <Signin/>} />
      <Route path="/signup" element={ <Signup/>} />
      <Route path="/events" element={<Events/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App

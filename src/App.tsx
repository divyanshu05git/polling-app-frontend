import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signin from './pages/SignIn';
import Signup from './pages/SignUp';



function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/signin" element={ <Signin/>} />
      <Route path="/signup" element={ <Signup/>} />

    </Routes>
    </BrowserRouter>
  )
}

export default App

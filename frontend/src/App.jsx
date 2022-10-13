import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import { Routes,Route } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import React, { useEffect } from 'react'
import Register from "./pages/register/Register";
import Login from "./pages/login/Login"
import Admin from "./pages/admin/Admin"
import Quizz from "./pages/quizz/Quizz";
import CreateQuizz from "./pages/createQuizz/CreateQuizz";
import PlayQuizz from "./pages/playQuizz/PlayQuizz";
import Result from "./pages/result/Result";

function App() {
  return (
    <>
   <Navbar />
   <Routes>
   <Route exact path="/" element={<Home />}/>
   <Route  path="/register" element={<Register />}/>
   <Route  path="/login" element={<Login />}/>
   <Route  path="/admin" element={<Admin />}/>
   <Route path="/quizz/:id" element={<Quizz/>}/>
   <Route path="/createQuizz" element={<CreateQuizz/>}/>
   <Route path="/playQuizz/:id" element={<PlayQuizz/>}/>
   <Route path="/result" element={<Result/>}/>

   </Routes>
   <Footer />
   
   </>

  )
}

export default App

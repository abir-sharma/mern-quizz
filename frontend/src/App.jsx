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
import Crousel from "./components/Crousel";
import Album from "./components/Album";
import { Text } from "./components/Text";
import TrendingStore from "./components/TrendingStore";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import About from "./components/About";

function App() {
  
  return (
    <>
   <Navbar />
   {/* <Crousel />
   <Album />
   <TrendingStore/>
   <Text /> */}
   {/* <Routes>
   <Route exact path="/" element={<Home />}/>
   <Route path="/register" element={<Register />}/>
   <Route path="/login" element={<Login />}/>
   <Route path="/admin" element={<Admin />}/>
   <Route path="/:id" element={<Quizz/>}/>
   <Route path="/createQuizz" element={<CreateQuizz/>}/>
   <Route path="/playQuizz/:id" element={<PlayQuizz/>}/>
   <Route path="/result" element={<Result/>}/>

   </Routes> */}
   <Routes>
   <Route exact path="/" element={<Crousel />}/>
   {/* <Route exact path="/" element={<Album />}/>
   <Route exact path="/" element={<TrendingStore />}/>
   <Route  path="/" element={<Text />}/> */}
   {/* <Route exact path="/" element={<Home />}/> */}
   <Route exact path="/features" element={<Features />}/>
   <Route exact path="/pricing" element={<Pricing />}/>
   <Route exact path="/about" element={<About />}/>
   <Route path="register" element={<Register />}/>
   <Route path="/login" element={<Login />}/>
   <Route path="/admin" element={<Admin />}/>
   <Route path="/:id" element={<Quizz/>}/>
   <Route path="/createQuizz" element={<CreateQuizz/>}/>
   <Route path="/playQuizz/:id" element={<PlayQuizz/>}/>
   <Route path="/result" element={<Result/>}/>

   </Routes>

   <Footer />
   
   </>

  )
}

export default App

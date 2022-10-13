import axios from 'axios'

export const register=(data)=>axios.post("/register",data)
export const login=(data)=>axios.post("/login",data)
export const logout=()=>axios.get("/logout")
export const createQuizz=(data)=>axios.post("/createQuizz",data)
export const getQuizz=()=>axios.get("/getQuizzes")
export const getQuizzDetails=(id)=>axios.get(`/quizz/${id}`)






import axios from 'axios'

// export const register=(data)=>axios.post("/api/v1/register",data)
// export const login=(data)=>axios.post("/api/v1/login",data)
// export const logout=()=>axios.get("/api/v1/logout")
// export const createQuizz=(data)=>axios.post("/api/v1/createQuizz",data)
// export const getQuizz=()=>axios.get("/api/v1/getQuizzes")
// export const getQuizzDetails=(id)=>axios.get(`/api/v1/quizz/${id}`)





export const register=(data)=>axios.post("https://mern-api-v0yi.onrender.com/api/v1/register",data)
export const login=(data)=>axios.post("https://mern-api-v0yi.onrender.com/api/v1/login",data)
export const logout=()=>axios.get("https://mern-api-v0yi.onrender.com/api/v1/logout")
export const createQuizz=(data)=>axios.post("https://mern-api-v0yi.onrender.com/api/v1/createQuizz",data)
export const getQuizz=()=>axios.get("https://mern-api-v0yi.onrender.com/api/v1/getQuizzes")
export const getQuizzDetails=(id)=>axios.get(`https://mern-api-v0yi.onrender.com/api/v1/quizz/${id}`)
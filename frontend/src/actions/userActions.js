import * as api from '../api/index'

export const registerUser=(userInfo)=>async(dispatch)=>{
    try {
        const {data}=await api.register(userInfo)
        console.log(data)
        dispatch({
            type:"registerUser",
            payload:data
        })
    } catch (error) {
        dispatch({
            type: "registerUser",
            payload: error.response.data,
          });
    }
}

export const loginUser=(userInfo)=>async(dispatch)=>{
    try {
        const {data}=await api.login(userInfo)
        dispatch({
            type:"loginUser",
            payload:data
        })
    } catch (error) {
        dispatch({
            type: "loginUser",
            payload: error.response.data,
          });
    }
}

export const logoutUser=(id)=>async(dispatch)=>{
    try {
        const {data}=await api.logout(id)
        dispatch({
            type:"logoutUser",
            payload:data
        })
    } catch (error) {
        dispatch({
            type: "logoutUser",
            payload: error.response.data,
          });
    }
}
export const createquizz=(quizData)=>async(dispatch)=>{
    try {
        const {data}=await api.createQuizz(quizData)
        dispatch({
            type:"createQuizz",
            payload:data
        })
    } catch (error) {
        console.log(error.message)
    }
}

export const getquizzes=()=>async(dispatch)=>{
    try {
        const {data}=await api.getQuizz()
        dispatch({
            type:"getQuizzes",
            payload:data
        })
    } catch (error) {
        console.log(error.message)
    }
}

export const getQuizzD=(id)=>async(dispatch)=>{
    try {
        const {data}=await api.getQuizzDetails(id)
        dispatch({
            type:"getQuizzD",
            payload:data
        })
    } catch (error) {
        console.log(error.message)
    }
}

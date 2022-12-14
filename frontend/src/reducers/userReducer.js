import { createReducer } from "@reduxjs/toolkit";


export const appReducer=createReducer({createQuizz:{},quizzes:[],quizzDetails:{},register:{},login:{},logout:{},isLoggedIn:false},{
    registerUser:(state,action)=>{
        state.register=action.payload
    },
    loginUser:(state,action)=>{
        state.login=action.payload
        state.isLoggedIn=true
    },
    logoutUser:(state,action)=>{
        state.logout=action.payload
        state.isLoggedIn=false
    },
    getQuizzes:(state,action)=>{
        state.quizzes=action.payload
    },
    createQuizz:(state,action)=>{
        state.createQuizz=action.payload
    },
    getQuizzD:(state,action)=>{
        state.quizzDetails=action.payload
    }
})
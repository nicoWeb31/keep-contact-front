import React, { useReducer } from 'react';
import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken'

import authContext from './authContext';
import authReducer from './authReducer';
import {
    REGISTER_FAIL,
    REGISTER_SUCCES,
    USER_LOADED,
    AUTH_ERR,
    LOGIN_SUCCESS,
    LOGOUT,
    LOGIN_FAIL,
    CLEAR_ERR

} from '../types'

const AuthState = props =>{
    const initialState = {
        token:localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        error: null
    };

    const[state, dispatch] =useReducer(authReducer,initialState);

    //Load user
    //add token in global header for futer request

    const loadUser = async()=>{
        //@todo load token into global header
        if(localStorage.token){
            setAuthToken(localStorage.token)
        }

        try {
            const response  = await axios.get('http://localhost:5000/api/auth')
            dispatch({
                type: USER_LOADED,
                payload:response.data
            })
        } catch (error) {
            dispatch({
                type:AUTH_ERR
            })
        }
    }

    //Register user
    const register = async(data) =>{
        const config ={
            headers:{
                'Content-Type': 'application/json'
                // 'Access-Control-Allow-Origin': '*'
            }
        }
        try{
            const res = await axios.post('http://localhost:5000/api/users',data,config)

            dispatch({
                type:REGISTER_SUCCES,
                payload: res.data
            });

            //load user
            loadUser()

        }catch(err){
            dispatch({
                type:REGISTER_FAIL,
                payload: err.response.data.message
            })
        }
    }

    //Login
    const login = ()=>{
        console.log('login ......')
    }

    //Logout
    const logOut = ()=>{
        console.log('logout ......')
    }

    //Clear Errors
    const clearErrors = ()=>{
        dispatch({
            type: CLEAR_ERR
        })
    }


    return (

        <authContext.Provider
        value={{
            token: state.token,
            isAuthenticated: state.isAuthenticated,
            user: state.user,
            loading: state.loading,
            error: state.error,
            register,
            loadUser,
            login,
            logOut,
            clearErrors
            
        }}
        >
            {props.children}
        </authContext.Provider>
    )
    
}

export default AuthState;
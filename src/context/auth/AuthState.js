import React, { useReducer } from 'react';

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

    //Register user

    //Login

    //Logout

    //Clear Errors


    return (

        <authContext.Provider
        value={{
            token: state.token,
            isAuthenticated: state.isAuthenticated,
            user: state.user,
            loading: state.loading,
            error: state.error
        }}
        >
            {props.children}
        </authContext.Provider>
    )
    
}

export default AuthState;
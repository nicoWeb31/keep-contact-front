import React, { useReducer } from 'react';

import alertContext from './alertContext';
import alertReducer from './alertReducer';
import {v4 as uuid} from "uuid";


import {

    SET_ALERT,
    REMOVE_ALERT
} from '../types'

const AuthState = props => {
    const initialState = [];

    const [state, dispatch] = useReducer(alertReducer, initialState);

    //set Alert 

    const setAlert = (message,type,timeout=5000)=>{
        const id = uuid();
        dispatch({
            type:SET_ALERT,
            payload: {message,type,id}
        });

        setTimeout(()=>dispatch({type:REMOVE_ALERT,payload:id }),timeout)
    }



    return (

        <alertContext.Provider
            value={{
                alert: state,
                setAlert
            }}
        >
            {props.children}
        </alertContext.Provider>
    )

}

export default AuthState;
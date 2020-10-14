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


export default (state, action) => {
    switch (action.type) {

        case LOGOUT :
            return{
                ...state,
                token: null,
                isAuthenticated: false,
                user: null
                
            }

        case REGISTER_SUCCES:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false
            }

        case REGISTER_FAIL:
            localStorage.removeItem('token')
            console.log(action.payload)
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                user: null,
                error: action.payload
            }

        case CLEAR_ERR:
            return {
                ...state,
                error: null
            }

        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: action.payload
            }

        case AUTH_ERR:
            localStorage.removeItem('token')
            console.log(action.payload)
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                user: null,
                error: action.payload
            }

        case LOGIN_SUCCESS :
            
            localStorage.setItem('token', action.payload.token)
            return{
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false
            }
        
        case LOGIN_FAIL:
            localStorage.removeItem('token')
            console.log(action.payload)
            return{
                ...state,
                token: null,
                isAuthenticated: false,
                user: null,
                error: action.payload
            }    

        default:
            return state
    }
}
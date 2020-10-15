
import {
    ADD_CONTACT,
    DEELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACT,
    CLEAR_FILTER,
    CONTACT_ERR
} from '../types';


export default (state, action) => {
    switch (action.type) {

        case ADD_CONTACT:
            return {
                ...state,
                contacts: [...state.contacts, action.payload]         ////add 
            }

        case DEELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload) ///delete
            }

        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            }

        case  CLEAR_CURRENT:
            return {
                ...state,
                current: null
            }
        
        case  UPDATE_CONTACT:
            return{
                ...state,
                contacts: state.contacts.map(contact => contact.id === action.payload.id ? action.payload : contact)  ////edit 
            }
        
        case  FILTER_CONTACT:
            return{
                ...state,
                filtered: state.contacts.filter(contact =>{
                    const regex = RegExp(`${action.payload}`, 'gi');
                    return contact.name.match(regex) || contact.email.match(regex);         //filter
                })
            }
        
        case  CLEAR_FILTER: 
            return{
                ...state,
                filtered: null
            }

        case CONTACT_ERR:
            return{
                ...state,
                error: action.payload
            }



        default:
            return state
    }
}
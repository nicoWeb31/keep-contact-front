
import {
    ADD_CONTACT,
    DEELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACT,
    CLEAR_FILTER
} from '../types';


export default(state, action)=>{
    switch(action.type){

        case ADD_CONTACT :
            return{
                ...state,
                contacts : [...state.contacts,action.payload]         ////add 
            }

        case DEELETE_CONTACT: 
            return {
                ...state,
                contacts: state.contacts.filter(contact=> contact.id !== action.payload) ///delete
            }


        default:
        return state
    }
}
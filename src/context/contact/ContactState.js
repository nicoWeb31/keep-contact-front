import React, { useReducer } from 'react';
// import {v4 as uuid} from "uuid"; 
import ContactContext from './ContactContext';
import ContactReducer from './ContactReducer';
import axios from 'axios';


import {
    ADD_CONTACT,
    DEELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACT,
    CLEAR_FILTER,
    CONTACT_ERR
} from '../types'

const ContactState = props =>{
    const initialState = {
        contacts:[],
        current: null,
        filtered: null,
        error: null
    };

    const[state, dispatch] =useReducer(ContactReducer,initialState);

    //add contact
    const addContact = async contact =>{
        // contact.id = uuid();
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {

            const response = await axios.post('http://localhost:5000/api/contacts',contact,config);
            dispatch({type : ADD_CONTACT, payload:response.data})

        } catch (error) {
            dispatch({type: CONTACT_ERR, payload: error.response.message})
        }
            

        
    }

    //delete contact
    const deleteContact = id =>{
        dispatch({type : DEELETE_CONTACT, payload:id})

    }

    //set Current contact
    const setCurrentContact = contact =>{
        dispatch({type : SET_CURRENT,payload:contact})

    }

    //clear Current contact
    const clearCurrentContact = () =>{
        dispatch({type : CLEAR_CURRENT})

    }

    //update contact

    const UpdateContact = contact =>{
        dispatch({type : UPDATE_CONTACT,payload:contact})

    }

    //filter contacts
    const filteredContact = txt =>{
        dispatch({type:FILTER_CONTACT, payload:txt })
    }

    //clear Filter
    const clearFilteredContact =()=>{
        dispatch({type:CLEAR_FILTER })
    }


    return (

        <ContactContext.Provider
        value={{
            contacts: state.contacts,
            current: state.current,
            filtered:state.filtered,
            contactError: state.error,
            addContact,
            deleteContact,
            setCurrentContact,
            clearCurrentContact,
            UpdateContact,
            filteredContact,
            clearFilteredContact
        }}
        >
            {props.children}
        </ContactContext.Provider>
    )
    
}

export default ContactState;
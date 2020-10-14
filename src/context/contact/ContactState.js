import React, { useReducer } from 'react';
import {v4 as uuid} from "uuid"; 
import ContactContext from './ContactContext';
import ContactReducer from './ContactReducer';
import {
    ADD_CONTACT,
    DEELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACT,
    CLEAR_FILTER
} from '../types'

const ContactState = props =>{
    const initialState = {
        contacts:[
            {
                "id":1,
                "name":'Jill',
                "email": 'jill@free.fr',
                "phone":'234234234234',
                "type":'personal'
            },
            {
                "id":2,
                "name":'Jilghl',
                "email": 'jilghfghl@free.fr',
                "phone":'234234234234',
                "type":'personal'
            },
            {
                "id":3,
                "name":'Jihhhll',
                "email": 'jilfhgfhgl@free.fr',
                "phone":'234234234234',
                "type":'personal'
            },
        ],
        current: null,
        filtered: null
    };

    const[state, dispatch] =useReducer(ContactReducer,initialState);

    //add contact
    const addContact = contact =>{
        contact.id = uuid()
        dispatch({type : ADD_CONTACT, payload:contact})
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
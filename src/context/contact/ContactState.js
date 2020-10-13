import React, { useReducer } from 'react';
import uuid from 'uuid';
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
        ]
    };

    const[state, dispatch] =useReducer(ContactReducer,initialState);

    //add contact

    //delete contact

    //set Current contact

    //clear Current contact

    //update contact

    //filter contacts

    //clear Filter


    return (

        <ContactContext.Provider
        value={{
            contacts: state.contacts
        }}
        >
            {props.children}
        </ContactContext.Provider>
    )
    
}

export default ContactState;
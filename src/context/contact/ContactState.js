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
    CONTACT_ERR,
    GET_CONTACT,
    CLEAR_CONTACT
} from '../types'

const ContactState = props =>{
    const initialState = {
        contacts:null,
        current: null,
        filtered: null,
        error: null
    };

    const[state, dispatch] =useReducer(ContactReducer,initialState);



    //get Contacts

    const getContact = async()=>{

        try {

            const response = await axios.get('http://localhost:5000/api/contacts');
            dispatch({type:GET_CONTACT, payload:response.data})

        } catch (error) {
            dispatch({type: CONTACT_ERR, payload: error.response.message})
        }
    }


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
    const deleteContact = async id =>{

        try {

            await axios.delete(`http://localhost:5000/api/contacts/${id}`);
            dispatch({type : DEELETE_CONTACT, payload:id})
        

        } catch (error) {
            dispatch({type: CONTACT_ERR, payload: error.response.message})
        }



    }

    //clear Contact

    const clearContact = ()=>{
        dispatch({type:CLEAR_CONTACT})
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
            clearFilteredContact,
            getContact,
            clearContact
        }}
        >
            {props.children}
        </ContactContext.Provider>
    )
    
}

export default ContactState;
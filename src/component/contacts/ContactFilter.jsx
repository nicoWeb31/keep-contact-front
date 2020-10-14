import React, { useContext, useRef, useEffect } from 'react';
import ContactContext from '../../context/contact/ContactContext';


const ContactFilter = () => {

    const contactContex = useContext(ContactContext);
    const text = useRef('');

    useEffect(() => {
        if (contactContex.filtered === null) {
            text.current.value = ''
        }
    })

    const onInputChange = e => {
        if (text.current.value !== '') {
            contactContex.filteredContact(e.target.value)
            console.log(e.target.value)
            console.log(contactContex.filtered)
        } else {
            contactContex.clearFilteredContact();
        }
    }


    return (
        <form>
            <input type="text" ref={text} placeholder="filter contact...." onChange={onInputChange} />

        </form>
    );
}

export default ContactFilter;
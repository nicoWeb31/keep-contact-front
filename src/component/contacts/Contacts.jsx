import React,{useContext} from 'react';
import ContactContext from '../../context/contact/ContactContext';
import ContactItem from './ContactItem'


const Contacts = () => {

    const contactContext = useContext(ContactContext)

    const {contacts} = contactContext;

    return (
        <React.Fragment>

            {contacts.map(contact=>{
                return (
                    <ContactItem contact={contact} key={contact.id}/>
                )
            })}
        </React.Fragment>
    );
}

export default Contacts;
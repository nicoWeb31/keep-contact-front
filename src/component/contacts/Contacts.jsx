import React,{useContext} from 'react';
import ContactContext from '../../context/contact/ContactContext';
import ContactItem from './ContactItem'


const Contacts = () => {

    const contactContext = useContext(ContactContext)

    const {contacts,filtered} = contactContext;

    if(contacts.length === 0 ){
        return <h4>Please add a contact</h4>
    }

    return (
        <React.Fragment>

            {filtered !== null  ? filtered.map(contact=><ContactItem contact={contact} key={contact.id}/>) :
            contacts.map(contact=><ContactItem contact={contact} key={contact.id}/>)
            }

        </React.Fragment>
    );
}

export default Contacts;
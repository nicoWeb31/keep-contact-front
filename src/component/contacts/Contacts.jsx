import React, { useContext,useEffect } from 'react';
import ContactContext from '../../context/contact/ContactContext';
import ContactItem from './ContactItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group'


const Contacts = () => {

    const contactContext = useContext(ContactContext)

    const { contacts, filtered,getContact,loading } = contactContext;

    useEffect(()=>{
        getContact();
        //eslint-disable-next-line
    },[])


    if (contacts.length === 0) {
        return <h4>Please add a contact</h4>
    }

    return (
        <React.Fragment>
            <TransitionGroup>

                {filtered !== null ? filtered.map(contact =>
                    <CSSTransition key={contact._id} timeout={500} classNames="item">
                        <ContactItem contact={contact}  />
                    </CSSTransition>
                ) :


                contacts.map(contact =>
                    <CSSTransition key={contact._id} timeout={500} classNames="item">
                        <ContactItem contact={contact}  />
                    </CSSTransition>
                )

                }

            </TransitionGroup>


        </React.Fragment>
    );
}

export default Contacts;
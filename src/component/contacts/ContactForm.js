import React, { useState,useContext} from 'react';
import ContactContext from '../../context/contact/ContactContext'



const ContactForm = () => {

    const contactContext = useContext(ContactContext)


    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'personal'

    })

    const { name, email, phone, type } = contact;

    const onInputChange =(e)=>{
        setContact({...contact,[e.target.name]:e.target.value})
    }

    const onformSubmit =e=>{
        e.preventDefault();
        contactContext.addContact(contact)
        setContact({
            name: '',
            email: '',
            phone: '',
            type: 'personal'
        })
    }

    return (
        <form onSubmit={onformSubmit}>
            <h2 className="text-primary">Add Contact</h2>
            <input type="text"
                name="name"
                placeholder='name'
                value={name}
                onChange={onInputChange}
            />

            <input type="text"
                name="email"
                placeholder='email'
                value={email}
                onChange={onInputChange}
            />

            <input type="text"
                name="phone"
                placeholder='phone'
                value={phone}
                onChange={onInputChange}
            />


            <h5> Contact Type</h5>
            <input type="radio" name='type' value='personal' checked={type === 'personal'} onChange={onInputChange}/> Personal{' '}

            <input type="radio" name='type' value='professional' checked={type === 'professional'} onChange={onInputChange}/> Professional{' '}

            <div>
                <input type="submit" value="Add Contact" className='btn btn-primary btn-block'/>
            </div>

        </form>
    );
}

export default ContactForm;
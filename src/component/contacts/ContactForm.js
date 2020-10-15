import React, { useState,useContext, useEffect} from 'react';
import ContactContext from '../../context/contact/ContactContext'



const ContactForm = () => {

    const contactContext = useContext(ContactContext)

    //from context
    const {addContact, current, clearCurrentContact,UpdateContact} = contactContext;

    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'personal'

    })
    const { name, email, phone, type } = contact;


    useEffect(()=>{
        if(current !== null){
            setContact(current)
        }else{
            setContact({
                name: '',
                email: '',
                phone: '',
                type: 'personal'
            })
        }
    },[contactContext, current])



    const onInputChange =(e)=>{
        setContact({...contact,[e.target.name]:e.target.value})
    }

    const onformSubmit =e=>{
        e.preventDefault();
        

        if(!current){
            addContact(contact)
        }else{
            UpdateContact(contact);
        }
        
        clearAll();
        
        setContact({

            name: '',
            email: '',
            phone: '',
            type: 'personal'
        })
    }

    const clearAll = () =>{
        clearCurrentContact()
    }

    return (
        <form onSubmit={onformSubmit}>
            <h2 className="text-primary">{current ? 'Edit conatct ' : 'Add contact'}</h2>
            
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
                <input type="submit" value={current ? 'Edit conatct ' : 'Add contact'} className='btn btn-primary btn-block'/>
            </div>
            {
                current && (
                    <div>
                        <button className='btn btn-light btn-block' onClick={clearAll}>
                            clear
                        </button>
                    </div>
                )
            }

        </form>
    );
}

export default ContactForm;
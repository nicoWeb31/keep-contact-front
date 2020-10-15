import React,{useContext} from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/ContactContext'



const ContactItem = ({contact}) => {

    const contactContext = useContext(ContactContext)


    const {_id, name,email,phone, type} = contact;

    const onDeleteClick =()=>{
        
        contactContext.deleteContact(_id)
        contactContext.clearCurrentContact()
    }

    return (
        <div className='card bg-light'>
            <h3 className="text-primary text-left">
                {name}
            </h3>
                <span style={{ float: "right"}}className={`badge ${type === 'professional' ? 'badge-success' : 'badge-primary'}`}>{type}</span>

            <ul className="list">
                {email && (
                    <li>
                        <i className="fas fa-envelope-open"></i> {email}
                    </li>
                )}
                {phone && (
                    <li>
                        <i className="fas fa-phone"></i> {phone}
                    </li>
                )}
            </ul>
            <p>
            <button className='btn btn-dark btn-sm' onClick={()=>contactContext.setCurrentContact(contact)} >Edit</button>
            <button className='btn btn-danger btn-sm' onClick={onDeleteClick}>Delete</button>


            </p>
        </div>
    );
}

ContactItem.propTypes = {
    contact: PropTypes.object.isRequired
}

export default ContactItem;
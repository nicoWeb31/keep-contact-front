import React,{useContext} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import toto from '../../context/auth/authContext'


const NavBar = ({title, icon}) => {


    const authContext = useContext(toto)
    const {isAuthenticated,logOut,user} = authContext


    const onLogout =()=>{
        logOut();
    }

    const authLinks = (
        <>
        <li>Hello {user && user.name}</li>
        <li>
            <a href="#!" onClick={onLogout}>
                <i className='fas fa-sign-out-alt'> <span className='hide-sm'>Logout</span></i>
            </a>
        </li>

        </>
    )


    const guestLinks = (
        <>
                <li>
                    <Link to='/register'>Register</Link>
                </li>
                <li>
                    <Link to='/login'>Login</Link>
                </li>

        </>
    )


    return (
        <div className="navbar bg-primary">
            <h1>
                <i className={icon}/>
                {title}
            </h1>
            <ul>
                {/* <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li> */}

                {isAuthenticated ? authLinks : guestLinks}


            </ul>
        </div>
    );
}

NavBar.propTypes = {
    title : PropTypes.string.isRequired,
    icon: PropTypes.string
}

NavBar.defaultProps ={
    title : 'Contact Keeper',
    icon : 'fas fa-id-card-alt'
}

export default NavBar;
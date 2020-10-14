import React, { useContext, useState } from 'react';
import AlertContext from '../../context/alert/alertContext'


const Register = () => {

    const alertContext = useContext(AlertContext);
    const {setAlert} = alertContext; 

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const { name, email, password, password2 } = user

    const onInputChange = e =>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const onFormSubmit = e =>{
        e.preventDefault();
        if(name === '' || email ==='' || password === ''){
            setAlert('Please enter all field', 'danger')
        }else if(password2 !== password){
            setAlert('Password do not match', 'danger')
        }else{
            console.log(user)
        }

    }

    return (

        <div className="form-container">
        <h1>Account <span className='text-primary'>Register</span></h1>

            <form onSubmit={onFormSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' value={name} onChange={onInputChange}/>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email Adress</label>
                    <input type="email" name='email' value={email} onChange={onInputChange}/>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' value={password} onChange={onInputChange}/>
                </div>

                <div className="form-group">
                    <label htmlFor="password2">Confirm Password</label>
                    <input type="password" name='password2' value={password2} onChange={onInputChange}/>
                </div>

                <input type="submit" value='Register' className="btn btn-primary btn-block "/>

            </form>

        </div>
    );
}

export default Register;
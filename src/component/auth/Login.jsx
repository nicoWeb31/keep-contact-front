import React, { useContext, useState, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext'
import AlertContext from '../../context/alert/alertContext'


const Login = (props) => {


    const authContext = useContext(AuthContext)
    const alertContext = useContext(AlertContext)

    const {setAlert} = alertContext;
    const {login, error, clearErrors, isAuthenticated} = authContext;



    useEffect(()=>{

        if(isAuthenticated){
            props.history.push('/')
        }

        if(error === 'Request failed with status code 400'){
            setAlert(error, 'danger');
            clearErrors();
        }
        //eslint-disable-next-line
    },[error, isAuthenticated,props.history]);


    const [user, setUser] = useState({
        
        email: '',
        password: ''

    })

    const { email, password} = user

    const onInputChange = e =>{
        setUser({...user,[e.target.name]:e.target.value})
    }


    //------------------login-----------------------------
    const onFormSubmit = e =>{
        e.preventDefault();
        if(email ==='' || password ===''){
            setAlert('Please fill in all fields','danger')
        }else{

            login({
                email,
                password
            })
            setAlert('User log with success', 'success');
            
        }

    }

    return (

        <div className="form-container">
        <h1>Account <span className='text-primary'>Login</span></h1>

            <form onSubmit={onFormSubmit}>


                <div className="form-group">
                    <label htmlFor="email">Email Adress</label>
                    <input type="email" name='email' value={email} onChange={onInputChange}/>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' value={password} onChange={onInputChange}/>
                </div>


                <input type="submit" value='Login' className="btn btn-primary btn-block "/>

            </form>

        </div>
    );
}

export default Login;
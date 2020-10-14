import React, { useContext, useState,useEffect} from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext'


const Register = (props) => {



    //-----------------context------------------
    const alertContext = useContext(AlertContext);
    const {setAlert} = alertContext;

    const authContext = useContext(AuthContext);
    const {register,error,clearErrors,isAuthenticated} = authContext


    //--------------------useEffect----------------------------
    useEffect(()=>{

        if(isAuthenticated){
            props.history.push('/')
        }

        if(error === 'user already exists'){
            setAlert(error, 'danger');
            clearErrors();
        }
        //eslint-disable-next-line
    },[error, isAuthenticated,props.history]);



    //---------------------state-----------------------
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


    //-------------------------------------------
    const onFormSubmit = e =>{
        e.preventDefault();
        if(name === '' || email ==='' || password === ''){
            setAlert('Please enter all field','danger')
        }else if(password2 !== password){
            setAlert('Password do not match','danger')
        }else{
            console.log(user);
            register({
                name,
                email,
                password
            })
            setAlert('user created whit success', 'success');
        }

    }



    //-------------------------------------------------
    return (

        <div className="form-container">
        <h1>Account <span className='text-primary'>Register</span></h1>

            <form onSubmit={onFormSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' value={name} onChange={onInputChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email Adress</label>
                    <input type="email" name='email' value={email} onChange={onInputChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' value={password} onChange={onInputChange}  minLength="6"/>
                </div>

                <div className="form-group">
                    <label htmlFor="password2">Confirm Password</label>
                    <input type="password" name='password2' value={password2} onChange={onInputChange} />
                </div>

                <input type="submit" value='Register' className="btn btn-primary btn-block "/>

            </form>

        </div>
    );
}

export default Register;
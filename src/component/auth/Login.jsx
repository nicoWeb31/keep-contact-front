import React, { useState } from 'react'


const Login = () => {

    const [user, setUser] = useState({
        
        email: '',
        password: ''

    })

    const { email, password} = user

    const onInputChange = e =>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const onFormSubmit = e =>{
        e.preventDefault();
        console.log(user,'login submit')
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
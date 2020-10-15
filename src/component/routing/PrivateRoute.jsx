import React,{useContext} from 'react';
import {Route, Redirect} from 'react-router-dom'
import AuthC from '../../context/auth/authContext'


const PrivateRoute = ({component : Component,...rest}) => {

    const authContext = useContext(AuthC)
    const {isAuthenticated,loading} = authContext
    console.log(authContext)

    return (
        <Route {...rest} render={props =>!isAuthenticated && loading ? (<Redirect to='/login' />)
        :
        (<Component {...props}/>)
        }/>
    );
}

export default PrivateRoute;
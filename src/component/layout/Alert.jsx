import React,{useContext} from 'react';
import AlertContext from '../../context/alert/alertContext'


const Alert = () => {

    const contextAlert = useContext(AlertContext)

    return (
        
            contextAlert.alerts.length > 0 && contextAlert.alerts.map(alert=>(
                <div key = {alert.id} className={`alert alert.type`}>
                    <i className='fas fa-info-circle'/>{alert.message}

                </div>
            ))

    )
    
}

export default Alert;
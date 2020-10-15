import React from 'react';
import spinner from "./spinner.gif"

const Spinner = () => {

    const spinnerStyle = {
        width:'200px',
        margin:'auto',
        display:'block'
    }

    return (
        <>
            <img src={spinner} alt="loading...." style={spinnerStyle}/>
        </>
    );
}

export default Spinner;
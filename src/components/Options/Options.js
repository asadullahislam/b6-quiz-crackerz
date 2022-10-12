import React from 'react';
import { ToastContainer } from 'react-bootstrap';
import './Options.css'


const Options = ({ option, handleAddTocheck }) => {

    return (
        <div className='btn-container'>

            <button onClick={() => handleAddTocheck(option)} className='buttons '>
                {option}</button>
            <ToastContainer></ToastContainer>

        </div>
    );
};

export default Options;
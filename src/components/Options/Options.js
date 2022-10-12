import React from 'react';
import './Options.css'


const Options = ({ option, handleAddTocheck }) => {

    return (
        <div className='btn-container'>

            <button onClick={() => handleAddTocheck(option)} className='buttons '>
                {option}</button>

        </div>
    );
};

export default Options;
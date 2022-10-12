import React from 'react';
import './Options.css'

const Options = ({ option }) => {
    return (
        <div className='btn-container'>
            <button className='buttons'>{option}</button>
        </div>
    );
};

export default Options;
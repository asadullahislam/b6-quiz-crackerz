import React from 'react';
import './Options.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Options = ({ option }) => {

    const diffToast = () => {
        toast(" Completed")
    }
    return (
        <div className='btn-container'>

            <button onClick={diffToast} className='buttons '>
                <input className="form-check-input" type="radio" name=' flexRadioDefault' id="flexRadioDefault1" />{option}</button>

        </div>
    );
};

export default Options;
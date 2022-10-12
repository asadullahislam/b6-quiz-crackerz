import React from 'react';
import Options from '../Options/Options';
import './Questions.css'
import { EyeIcon } from '@heroicons/react/24/solid'

const Questions = ({ id, question }) => {
    return (
        <div className='questions-container'>
            <div >
                <h3>{question.question}</h3>
            </div>

            <div className='details-option'>
                <div className='options-container'>

                    {
                        question.options.map(option => <Options
                            option={option}></Options>)
                    }
                </div>
                <div>
                    <button className='hero-button'>
                        <EyeIcon className="hero-icon" />
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Questions;
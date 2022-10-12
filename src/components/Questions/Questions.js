import React from 'react';
import Options from '../Options/Options';
import './Questions.css'

const Questions = ({ id, question }) => {
    return (
        <div className='questions-container'>
            <div >
                <h3>{question.question}</h3>
            </div>
            <div className='options-container'>
                {
                    question.options.map(option => <Options
                        option={option}></Options>)
                }
            </div>

        </div>
    );
};

export default Questions;
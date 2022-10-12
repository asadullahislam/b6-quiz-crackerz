import React from 'react';
import './Questions.css'

const Questions = ({ id, question }) => {
    return (
        <div className='questions-container'>
            <div >
                <h3>{question.question}</h3>
            </div>
            <div>

            </div>

        </div>
    );
};

export default Questions;
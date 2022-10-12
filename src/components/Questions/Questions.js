import React from 'react';
import Options from '../Options/Options';
import './Questions.css'
import { EyeIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Questions = ({ id, question }) => {
    const { correctAnswer } = question;
    console.log(correctAnswer)
    const handleAddToCheck = (option) => {
        if (correctAnswer === option) {
            toast('correct')
        }
        else {
            toast('incorrect')
        }
    }
    const handleAddToShowAnswer = () => {
        toast(correctAnswer)
    }


    return (
        <div className='questions-container'>
            <div >
                <h3>{question.question}</h3>
            </div>

            <div className='details-option'>
                <div className='options-container'>

                    {
                        question.options.map(option => <Options
                            option={option}
                            handleAddTocheck={handleAddToCheck}

                        ></Options>)
                    }
                </div>
                <div>
                    <button onClick={() => handleAddToShowAnswer()} className='hero-button'>
                        <EyeIcon className="hero-icon" />
                    </button>
                    <ToastContainer></ToastContainer>

                </div>
            </div>

        </div >
    );
};

export default Questions;
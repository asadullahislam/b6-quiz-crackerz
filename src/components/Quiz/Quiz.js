import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const Quiz = () => {
    const quizs = useLoaderData().data;
    const { name, questions, id } = quizs;
    console.log(questions)


    return (
        <div>
            <div>
                <h1 className='text-primary'>Quiz of {name}</h1>
            </div>
            <div>
                <div>
                    {
                        questions.map(question => <Questions
                            key={question.id}
                            question={question}
                        ></Questions>)
                    }
                </div>


            </div>
        </div>
    );
};

export default Quiz;
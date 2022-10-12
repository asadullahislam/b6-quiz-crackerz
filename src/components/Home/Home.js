import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topics from '../Topics/Topics';
import './Home.css'

const Home = () => {
    const topics = useLoaderData();

    const handleAddToStart = () => {
        console.log()
    }

    return (
        <div className="home-container">
            <div>
                <img className='img-container' src="/images/newstime.jpg" alt="" />
            </div>
            <div className='topics-item'>

                {
                    topics.data.map(topic => <Topics
                        key={topic.id}
                        topic={topic}></Topics>)

                }

            </div>
        </div>
    );
};

export default Home;
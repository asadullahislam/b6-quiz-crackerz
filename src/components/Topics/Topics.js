import React from 'react';
import './Topics.css';

import { Button } from 'react-bootstrap';

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Topics = ({ topic }) => {


    const { logo, name, id } = topic;
    return (
        <div className='container'>
            <Card style={{ width: '18rem' }}>
                <Card.Img className='color' variant="top" src={logo} />
                <Card.Body className='d-flex topics-name'>
                    <h6>{name}</h6>
                    <Link to={`/quiz/${id}`}>  <Button className='button' variant="primary">Practice Start</Button></Link>
                </Card.Body>
            </Card>
        </div>


    );
};

export default Topics;
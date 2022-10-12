import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Statistics.css'

import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine, ResponsiveContainer,
} from 'recharts';

const Statistics = () => {
    const data = useLoaderData().data;
    return (
        <div className='container'>
            <div>
                <h1 className='text-primary '>Total Number of Quizes</h1>
            </div>
            <div className=''>
                <ResponsiveContainer width={500} height={500}>
                    <LineChart width={500} height={300} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
                        <YAxis dataKey="total" />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="name" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;
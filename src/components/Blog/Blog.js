import React from 'react';
import './Blog.css'
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
    return (
        <div>
            <h1 className='text-success'>Q&A</h1>

            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What is the purpose of React Router ? </Accordion.Header>
                    <Accordion.Body>
                        ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>How does work context api?</Accordion.Header>
                    <Accordion.Body>
                        <p><b>1.</b>Create a folder under your app root named contexts (not required. just a convention)</p>
                        <br />
                        <p><b>2.</b>create a file named added context and createContet();</p>
                        <br />
                        <p><b>3.</b>import and create a context like so <br /> import React,  createContext  from "react"; <br />
                            const UserContext = createContext();</p>
                        <br />
                        <p><b>4.</b>Create a component that will wrap the provider named Provider e.g. UserProvider
                            Example using React Hooks:</p>
                        <br />
                        <p><b>5.</b>Create a higher order component to consume the context named: with e.g. withUser
                            Example using React Hooks:</p>
                        <br />
                        <p><b>6.</b>Finally export them</p>
                        <br />
                        <p><b>7.</b>And use them however you like
                            <br />

                        </p>


                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>how does work         useRef hook?</Accordion.Header>
                    <Accordion.Body>
                        <p>The useRef Hook allows you to persist values between renders. <br />

                            It can be used to store a mutable value that does not cause a re-render when updated. <br />

                            It can be used to access a DOM element directly.</p><br />
                        <h2>Does Not Cause Re-renders</h2>
                        <p>If we tried to count how many times our application renders using the <b>useState</b> Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.

                            To avoid this, we can use the <b>useRef</b> Hook.</p>
                        <br />
                        <p>useRef() only returns one item. It returns an Object called current.

                            When we initialize useRef we set the initial value: useRef(0).</p>
                        <h3>Accessing DOM Elements</h3>
                        <p>In general, we want to let React handle all DOM manipulation.

                            But there are some instances where useRef can be used without causing issues.

                            In React, we can add a ref attribute to an element to access it directly in the DOM.</p>
                        <h3>Tracking State Changes</h3>
                        <p>The useRef Hook can also be used to keep track of previous state values.

                            This is because we are able to persist useRef values between renders.</p>
                        <br />
                        <p>This time we use a combination of useState, useEffect, and useRef to keep track of the previous state.

                            In the useEffect, we are updating the useRef current value each time the inputValue is updated by entering text into the input field.</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </div>
    );
};

export default Blog;
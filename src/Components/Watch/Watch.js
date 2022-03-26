import React, { useState } from 'react';
import Display from './Display/Display';

const Watch = (props) => {
    const [steps, setSteps] = useState(0);

    const increaseSteps = () => {
        const newSteps = steps + 1;
        setSteps(newSteps);
    }

    return (
        <div style={{ border: '2px solid gray', margin: '5px' }}>
            <h2>This is my smart watch</h2>
            <h3>My current steps: {steps}</h3>
            <button onClick={increaseSteps}>Run</button>
            <Display name='garmin' steps={steps}></Display>
        </div>
    );
};

export default Watch;
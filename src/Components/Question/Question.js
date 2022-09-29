import React from 'react';
import './Question.css';

const Question = () => {
    return (
        <div>
             <div className='question-part'>
                <h3>How does react work?</h3>
                <p>React is a JavaScript library (not a framework) that creates user interfaces (UIs) in a predictable and efficient way using declarative code. You can use it to help build single page applications and mobile apps, or to build complex apps if you utilise it with other libraries.</p>
            </div>
            <div className='question-part'>
                <h3>Difference between props and state</h3>
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
            </div>
            <div className='question-part'>
                <h3>What kind of work actually useEffect do?</h3>
                <p>The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.</p>
            </div>
        </div>
    );
};

export default Question;
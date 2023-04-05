import React from 'react';
import './Fitness.css';

const Fitness = (props) => {
    const { img, name, time } = props.workOut;

    return (
        <div>
            <div className='container'>
                <img src={img} alt="" />
                <h4 className='name'>{name}</h4>
                <small className='time-set'>Time: {time}sec</small>
                <button onClick={() => props.addToCart(props.workOut)} className='btn-cart'>
                    <h4>Add</h4>
                </button>
            </div>
        </div>
    );
};

export default Fitness;
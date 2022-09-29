import React from 'react';
import './Fitness.css'

const Fitness = (props) => {
    const {img, name, time} = props.workOut;
    return (
        <div className='container'>
            <img src={img} alt="" />
            <div className='cart-info'>
                <h3>{name}</h3>
                <small>Time: {time}</small>
            </div>
            <button className='btn-cart'>
                <p>Add</p>
            </button>
        </div>
    );
};

export default Fitness;
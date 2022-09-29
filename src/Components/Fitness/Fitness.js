import React from 'react';
import './Fitness.css';

const Fitness = (props) => {
    const {img, name, time} = props.workOut;
   
    return (
        <div className='container'>
            <img src={img} alt="" />
            <div className='cart-info'>
                <h4>{name}</h4>
                <small>Time: {time}sec</small>
            </div>
            <button onClick={() =>props.addToCart(props.workOut)} className='btn-cart'>
                <h4>Add</h4>
            </button>
        </div>
    );
};

export default Fitness;
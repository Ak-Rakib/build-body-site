import React, { useState } from 'react';
import './Cart.css'

const Cart = (props) => {

    
    const {cart} = props;
    console.log(cart);
    
    let total = 0;
    for(const workout of cart){
        total = total + workout.time;
    }

    const img = "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720__340.jpg"
    return (
        <div className='cart-info'>
            <img src={img} alt="" />
            <h3>Ak-Rakib</h3>
            <h5>Junior Developer</h5>
            <h2 style={{marginTop:'100px'}}>Exercise Time</h2>
            <div className='workout-details'>
                <span style={{marginRight:'30px', fontSize:'bold'}}> Workout Time:</span> {total}Sec
            </div>
                <h2 style={{marginTop:'100px'}}>Add Break</h2>
            <div className='break-time'>
                <button>34sec</button>
                <button>50sec</button>
                <button>60sec</button>
                <button>45sec</button>
            </div> 
            <div className='workout-details'>
            <span style={{marginRight:'30px', fontSize:'bold'}}> Break Time:</span> {total}Sec
            </div>   
        </div>
    );
};

export default Cart;
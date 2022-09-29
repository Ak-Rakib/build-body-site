import React from 'react';
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
            <div>
                Total Workout: {total}Sec
            </div>
        </div>
    );
};

export default Cart;
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Fitness from '../Fitness/Fitness';
import './Body-Build.css';

const Body_Build = () => {

    const [workOuts, setWorkOuts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect( () => {
      fetch('fitness.json')
      .then(res => res.json())
      .then(data => setWorkOuts(data));
    }, []);


    const addToCart = (workOut) => {
        // console.log(workOut)
        const addCart = [...cart, workOut];
        setCart(addCart);
    }
  
    return (
        <div className='fitness-container'>
            <div className='fitness-style'>
                {
                    workOuts.map(workOut => <Fitness 
                        key = {workOut.id}
                        workOut = {workOut}
                        addToCart = {addToCart}
                    ></Fitness>)
                }
            </div>

            <div className='fitness-cart'>
                <Cart
                    cart = {cart}
                ></Cart>
            </div>
        </div>

    );
};

export default Body_Build;
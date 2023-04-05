import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Cart.css'

const Cart = (props) => {

    const [count, setCount] = useState(0);
    
    const addToBreakTime1 = () => {
          setCount(34)
          localStorage.setItem('breakTime', 34);
    }
    const addToBreakTime2 = () => {
          setCount(50)
          localStorage.setItem('breakTime1', 50);
    }
    const addToBreakTime3 = () => {
          setCount(60)
          localStorage.setItem('breakTime2', 60);
    }
    const addToBreakTime4 = () => {
          setCount(45)
          localStorage.setItem('breakTime3', 45);
    }

    const notify = () => toast("Wow! Today Task Complete");
      
    const {cart} = props;
    // console.log(cart);
    
    let total = 0;
    for(const workout of cart){
        total = total + workout.time;
    }

    const img = "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720__340.jpg"
    return (
        <div className='cart-info'>
            <img src={img} alt="" />
            <h3>Ak-Rakib</h3>
            <h4>React Developer</h4>
            <h3 style={{marginTop:'20%'}}>Exercise Time</h3>
            <div className='workout-details'>
                <span style={{marginRight:'2%', fontSize:'bold'}}> Workout Time:</span> {total}Sec
            </div>
                <h3 style={{marginTop:'20%'}}>Add Break</h3>
            <div className='break-time'>
                <button className='common-btn-style' onClick={addToBreakTime1}>34sec</button>
                <button className='common-btn-style' onClick={addToBreakTime2}>50sec</button>
                <button className='common-btn-style' onClick={addToBreakTime3}>60sec</button>
                <button className='common-btn-style' onClick={addToBreakTime4}>45sec</button>
            </div> 
            <div className='workout-details'>
            <span style={{marginRight:'2%', fontSize:'bold'}}> Break Time:</span> {count}Sec
            </div>
            <div>
            <button className='toasty' onClick={notify}>Activity Completed</button>
            <ToastContainer />
        </div>   
        </div>
    );
};

export default Cart;
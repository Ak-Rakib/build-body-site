import React, { useEffect, useState } from 'react';
import Fitness from '../Fitness/Fitness';
import './Body-Build.css';

const Body_Build = () => {
    const [workOuts, setWorkOuts] = useState([]);

    useEffect( () => {
      fetch('fitness.json')
      .then(res => res.json())
      .then(data => setWorkOuts(data));
    }, []);
  
    return (
        <div className='fitness-container'>
            <div className='fitness-style'>
                {
                    workOuts.map(workOut => <Fitness 
                        key = {workOut.id}
                        workOut = {workOut}
                    ></Fitness>)
                }
            </div>

            <div className='fitness-cart'>

            </div>
        </div>

    );
};

export default Body_Build;
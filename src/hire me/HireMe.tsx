import React from 'react';
import s from './HireMe.module.css'
import sContainer from './../common files/styles/Container.module.css'


const HireMe = () => {
    return (
        <div className={s.hireBlock}>
            {/* тут заюзали два стиля для этого контейнера */}
            <div className={s.hireMeContainer}>
                <h2 className={s.title} >Ready for remote job</h2>
                <button>Hire me</button>
                
            </div>
            
        </div>
    );
};

export default HireMe;
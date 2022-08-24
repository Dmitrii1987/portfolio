import React from 'react';
import s from './Main.module.css'
import sContainer from './../common files/styles/Container.module.css'

const Main = () => {
    return (
        <div className={s.mainBlock} >
            <div className={sContainer.container}>
                <div className={s.greeting}>
                    <span>Hi There!</span>
                    <h1>I am Dzmitrii</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={s.photo}></div>
            </div>

        </div>
    );
};

export default Main;
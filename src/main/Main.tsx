import React from 'react';
import s from './Main.module.css'

const Main = () => {
    return (
        <div className={s.mainBlock} >
            <div className={s.greeting}></div>
            <div className={s.photo}></div>
        </div>
    );
};

export default Main;
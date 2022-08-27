import React from 'react';
import s from './Project.module.css'

const Project = (props: any) => {
    return (
        <div className={s.project}>
            <div className={s.image}>
                {props.image}
            </div>
            <h3>
                {props.title}
            </h3>
            <p className={s.projectName} >
                {props.projectName}
            </p>

            -----------------
            <span className={s.description}>
                {props.description}
            </span>
        </div>
    );
};

export default Project;
import React from 'react';
import s from './Skills.module.css'
import sContainer from './../common files/styles/Container.module.css'


const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            {/* тут заюзали два стиля для этого контейнера */}
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title} >Skills</h2>
                <div className={s.skills}>

                </div>
            </div>
            
        </div>
    );
};

export default Skills;
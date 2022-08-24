import React from 'react';
import s from './Skills.module.css'
import sContainer from './../common files/styles/Container.module.css'
import Skill from './skill/Skill';


const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            {/* тут заюзали два стиля для этого контейнера */}
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title} >Skills</h2>
                <div className={s.skills}>
                    <Skill title={'JS'} description={'logcccsflkopccc safccc  ffcccaa ff saaccccccsssgfsdrcs'} />
                    <Skill title={'TS'} description={'loracscscscaccs'} />
                    <Skill title={'React'} description={'loa s fg sggggg s gggg sfggcacrcs'} />
                </div>
            </div>
            
        </div>
    );
};

export default Skills;
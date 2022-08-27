import React from 'react';
import s from './MyProjects.module.css'
import sContainer from './../common files/styles/Container.module.css'
import Project from './project/Project';


const MyProjects = () => {
    return (
        <div className={s.myProjectsBlock}>
            {/* тут заюзали два стиля для этого контейнера */}
            <div className={`${sContainer.container} ${s.projectsContainer}`}>
                <h2 className={s.title} >My projects</h2>
                <div className={s.projects}>
                    <Project title={'JS'} description={'logcccsflkopccc safccc  ffcccaa ff saaccccccsssgfsdrcs'} />
                    
                    <Project title={'React'} description={'loa s fg sggggg s gggg sfggcacrcs'} />
                </div>
            </div>
            
        </div>
    );
};

export default MyProjects;
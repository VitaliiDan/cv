import React from "react";
import Project from "./Project/Project";

const Projects = ({projectsTitle, projectDescription, hardSkillTitle}) => {
    return (
        <div className='projectsWrapper'>
            <h1>{projectsTitle}</h1>
            <div className='contentWrapper'>
                <Project
                    hardSkillTitle={hardSkillTitle}
                    projectTitle={'ToDo List'}
                    tech={['React', 'Redux', 'FireBase', 'Bootstrap', 'SASS']}
                    link={'https://github.com/VitaliiDan/todolist'}
                    projectDescription={projectDescription.projectToDoList}
                />
                <Project
                    hardSkillTitle={hardSkillTitle}
                    projectTitle={'CV'}
                    tech={['React', 'SASS']}
                    link={'https://github.com/VitaliiDan/cv'}
                    projectDescription={projectDescription.projectCV}
                />
                <Project
                    hardSkillTitle={hardSkillTitle}
                    projectTitle={'NordFrost.PL'}
                    tech={['React', 'Redux', 'FireBase', 'SASS']}
                    link={'#'}
                    projectDescription={projectDescription.projectNordFrost}
                />
            </div>
        </div>
    )
};

export default Projects;
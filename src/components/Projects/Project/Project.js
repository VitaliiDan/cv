import React from "react";
import gitIco from '../../../img/contact/ghIco.jpeg'

const Project = ({projectTitle, tech, link, projectDescription, hardSkillTitle}) => {
    return (
        <div className='projectCard'>
            <div className='front'>
                <h3>{projectTitle}</h3>
                <p>{hardSkillTitle}</p>
                <ul>
                    {tech.map((el, index) => <li key={index}>{el}</li>)}
                </ul>
            </div>
            <div className='back'>
                <h3>{projectTitle}</h3>
                <p>{projectDescription}</p>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={gitIco} alt="link to project on GitHub"/>
                </a>
            </div>
        </div>
    )
};

export default Project;
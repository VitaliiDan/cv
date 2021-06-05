import React from "react";
import cssico from '../img/technologies/cssIco.png';
import htmlico from '../img/technologies/htmlIco.png';
import jsico from '../img/technologies/jsIco.png';
import gitico from '../img/technologies/gitIco.png';
import reactico from '../img/technologies/reactIco.png';
import scrumico from '../img/technologies/scrumIco.png';
import sicon from '../img/technologies/scssIco.png';
import firebaseicon from '../img/technologies/firebaseIco.png';

const HardSkills = ({hardSkillTitle}) => {
    return (
        <div className='hardSkillsWrapper'>
            <h1> {hardSkillTitle} </h1>
            <h3>
                <span>HTML</span>
                <span>CSS</span>
                <span>SASS</span>
                <span>JavaScript</span>
            </h3>

            <div className='techWrapper'>
                <img src={htmlico} alt="html icon"/>
                <img src={cssico} alt="css icon"/>
                <img src={sicon} alt="sass icon"/>
                <img
                    style={{width: '40px'}}
                    src={jsico}
                    alt="js icon"/>
            </div>

            <h3>
                <span>React</span>
                <span>GIT</span>
                <span>Firebase</span>
                <span>SCRUM</span>
            </h3>

            <div className='techWrapper'>
                <img src={reactico} alt="react icon"/>
                <img src={gitico} alt="git icon"/>
                <img
                    style={{width: '35px'}}
                    src={firebaseicon}
                    alt="firebase icon"/>
                <img
                    style={{borderRadius: '50%'}}
                    src={scrumico}
                    alt="scrum icon"
                />
            </div>
        </div>

    )
};

export default HardSkills;
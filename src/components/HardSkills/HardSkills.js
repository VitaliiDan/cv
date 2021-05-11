import React from "react";
import cssico from '../../img/technologies/cssIco.png';
import htmlico from '../../img/technologies/htmlIco.png';
import jsico from '../../img/technologies/jsIco.png';
import gitico from '../../img/technologies/gitIco.png';
import reactico from '../../img/technologies/reactIco.png';
import scrumico from '../../img/technologies/scrumIco.png';
import sicon from '../../img/technologies/scssIco.png';
import firebaseicon from '../../img/technologies/firebaseIco.png';

const HardSkills = ({hardSkillTitle}) => {
    return (
            <div className='hardSkillsWrapper'>
                <h1> {hardSkillTitle} </h1>
                <div className='techWrapper'>
                    <img src={cssico} alt="css icon"/>
                    <img src={htmlico} alt="html icon"/>
                    <img
                        style={{width :'40px'}}
                        src={jsico}
                        alt="js icon"/>
                    <img src={gitico} alt="git icon"/>
                    <img src={reactico} alt="react icon"/>
                    <img src={sicon} alt="sass icon"/>
                    <img
                        style={{borderRadius: '50%'}}
                        src={scrumico}
                        alt="scrum icon"
                    />
                    <img
                        style={{width :'35px'}}
                        src={firebaseicon}
                        alt="firebase icon"/>
                </div>
            </div>

    )
};

export default HardSkills;
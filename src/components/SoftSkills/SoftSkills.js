import React from "react";

const SoftSkills = ({softSkillsTitle, softSkillsText}) => {
    return (
        <div className='softSkillsWrapper'>
            <h1>{softSkillsTitle}</h1>
            <p>{softSkillsText}</p>
        </div>
    )
}

export default SoftSkills;
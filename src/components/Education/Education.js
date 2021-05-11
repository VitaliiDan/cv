import React from "react";

const Education = ({educationTitle, education}) => {
    return (
        <div className='educationWrapper'>
            <h1>{educationTitle}</h1>
            <ul>
                <li>
                    <strong>2020 - 2021 - </strong>
                    {education.codersLab}
                    <strong> JavaScript React Developer </strong>
                </li>
                <li>
                    <strong>2002 - 2008 - </strong>
                    {education.university}
                    <strong> Economical Cybernetics </strong>
                </li>
            </ul>
        </div>
    )
}

export default Education;
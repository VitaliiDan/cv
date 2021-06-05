import React from "react";

const Education = ({educationTitle, education}) => {
    return (
        <div className='educationWrapper'>
            <h1>{educationTitle}</h1>
            <ul>
                <li>
                    <strong>2020 - 2021 - </strong>
                    <span>{education.codersLab}</span>
                    <strong> JavaScript React Developer </strong>
                </li>
                <li>
                    <strong>2002 - 2008 - </strong>
                    <span>{education.university}</span>
                    <strong> Economical Cybernetics </strong>
                </li>
            </ul>
        </div>
    )
}

export default Education;
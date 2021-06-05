import React from "react";

const Languages = ({languagesTitle}) => {
    return (
        <div className='langWrapper'>
            <h1>{languagesTitle}</h1>
            <p>Polski: <strong> B1 (B2) </strong></p>
            <p>English: <strong> A2 (B1) </strong></p>
            <p>Український: <strong> С2 </strong></p>
            <p>Русский: <strong> С2 </strong></p>
        </div>
    )
}

export default Languages;
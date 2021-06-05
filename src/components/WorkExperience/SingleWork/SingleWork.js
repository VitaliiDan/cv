import React from "react";

const SingleWork = ({singleWork}) => {

    return (
        <div className='singleWorkWrapper'>
            <p>{singleWork.period}</p>
            <p>{singleWork.company}</p>
            <p>{singleWork.position}</p>
            <p>{singleWork.country}</p>
        </div>
    )
};

export default SingleWork;
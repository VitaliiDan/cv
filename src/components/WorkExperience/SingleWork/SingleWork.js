import React from "react";

const SingleWork = ({singleWork}) => {

    return (
        <div className='singleWorkWrapper'>
            <p><span>{singleWork.period}</span> <span>{singleWork.company}</span></p>
            <p><span></span> <span>{singleWork.position}</span></p>
            <p><span></span> <span>{singleWork.country}</span></p>
        </div>
    )
};

export default SingleWork;
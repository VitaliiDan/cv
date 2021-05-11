import React, {useState} from "react";
import arrowUp from '../../img/arrows/arrowUp.png';
import arrowDown from '../../img/arrows/arrowDown.png';
import SingleWork from "./SingleWork/SingleWork";


const WorkExperience = ({workExpirienceTitle, workExperience}) => {
    const [showModal, setShowModal] = useState(false)

    const showModalHandler = () => {
        setShowModal(prevState => !prevState)
    }

    let draw;

    if (showModal) {
        draw = (
            <div className='experienceWrapper'>
                <h1>{workExpirienceTitle}</h1>
                {workExperience.map(el => <SingleWork singleWork={el}/>)}
                <button onClick={showModalHandler}>
                    <img src={arrowUp} alt="arrow UP"/>
                </button>
            </div>
        )
    } else {
        draw = (
            <div className='experienceWrapper'>
                <h1>{workExpirienceTitle}</h1>
                <SingleWork singleWork={workExperience[0]}/>
                <button onClick={showModalHandler}>
                    <img src={arrowDown} alt="arrow Down"/>
                </button>
            </div>
        )
    }

    return draw
}

export default WorkExperience;
import React, {useState} from "react";
import arrowUp from '../../img/arrows/arrowUp.png';
import arrowDown from '../../img/arrows/arrowDown.png';
import SingleWork from "./SingleWork/SingleWork";


const WorkExperience = ({workExperienceTitle, workExperience}) => {
    const [showModal, setShowModal] = useState(false)

    const showModalHandler = () => {
        setShowModal(prevState => !prevState)
    }

    let draw;

    if (showModal) {
        draw = (
            <div className='experienceWrapper'>
                <h1>{workExperienceTitle}</h1>
                {workExperience.map((el, index) => <SingleWork key={index} singleWork={el}/>)}
                <button onClick={showModalHandler}>
                    <img src={arrowUp} alt="arrow UP"/>
                </button>
            </div>
        )
    } else {
        draw = (
            <div className='experienceWrapper'>
                <h1>{workExperienceTitle}</h1>
                <SingleWork singleWork={workExperience[0]}/>
                <button onClick={showModalHandler}>
                    <img src={arrowDown} alt="arrow Down"/>
                </button>
            </div>
        )
    }

    return (
     <>
         {draw}
         <div className='experienceWrapper_forPrint'>
             <h1>{workExperienceTitle}</h1>
             {workExperience.map((el, index) => <SingleWork key={index} singleWork={el}/>)}
         </div>
     </>
    )
}

export default WorkExperience;
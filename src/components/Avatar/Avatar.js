import React from "react";
import Ava from '../../img/cvAvatar.png';

const Avatar = () => {
    return (
        <div className='avaWrapper'>
            <img className='avatar' src={Ava} alt="avatar" />
        </div>
    )
}

export default Avatar;
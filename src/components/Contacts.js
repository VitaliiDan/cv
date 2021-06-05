import React from "react";
import inico from '../img/contact/inIco.jpeg'
import ghico from '../img/contact/ghIco.jpeg'
import telico from '../img/contact/telIco.jpeg'
import telegramico from '../img/contact/telegramIco.jpeg'
import viberico from '../img/contact/viberIco.png'
import mailico from '../img/contact/mailIco.jpeg'

const Contacts = ({name, city, myPosition}) => {
    return (
        <div className='contactWrapper'>
            <h1 className='nameSurname'> {name} </h1>
            <h2 className='myPosition'>{myPosition}</h2>
            <h2 className='myPosition'>junior/trainee JavaScript/React front-end developer</h2>
            <h2 className='city'>{city}</h2>
            <div className='socialLinksWrapper'>
                <a
                    href="https://www.linkedin.com/in/vitalii-danylevskyi-746459204/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img className='socialIcons' src={inico} alt="linkedin"/>
                </a>
                <a
                    href="https://github.com/VitaliiDan"
                    target="_blank"
                    rel="noopener noreferrer"
                ><img className='socialIcons' src={ghico} alt="github"/>
                </a>
                <a
                    href="mailto:if.dir.dv@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img className='socialIcons' src={mailico} alt="e-mail"/>
                </a>
            </div>
            <div className='telephoneWrapper'>
                <img className='socialIcons' src={telico} alt="phone number"/>
                <img className='socialIcons' src={telegramico} alt="telegram number"/>
                <img className='socialIcons' src={viberico} alt="viber number"/>
                <a className='telephone' href='tel:+48500109279'>+48 500 109 279</a>
            </div>
        </div>
    )
}

export default Contacts;
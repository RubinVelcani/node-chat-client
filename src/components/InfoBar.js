import React from 'react'

import closeIcon from '../../src/icons/closeIcon.png'
import onlineIcon from '../../src/icons/onlineIcon.png'

import './InfoBar.css'

const InfoBar = ({ room }) => (
        <div className="info-bar">
            <div className="left-inner-container">
                <img className="online-icon" src={onlineIcon} alt="Online image" />
                <h3>{room}</h3>
            </div>
            <div className="right-inner-container">
                <a href="/"><img src={closeIcon} alt="Close image"/></a>
            </div>
        </div>
)

export default InfoBar
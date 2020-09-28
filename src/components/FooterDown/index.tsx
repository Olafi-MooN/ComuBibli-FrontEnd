import React from 'react';

import developerPlus from '../../assets/images/developerPlus.svg';
import './styles.css';



function FooterDown () {
    return(
        <div className="backgroundFooter">
            <div className="paragrafo">
                <p>Alef Santos Soares</p>
                <p>CopyRight &copy;</p>
            </div>
            <div className="imgFooter">
                <img src={developerPlus} alt=""/>
            </div>
        </div>
    )
}

export default FooterDown;
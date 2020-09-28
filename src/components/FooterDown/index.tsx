import React from 'react';

import developerPlus from '../../assets/images/developerPlus.svg';
import './styles.css';



function FooterDown () {
    return(
        <div className="backgroundFooter">
            <div>
                <p>Criado por</p>
                <p>Alef Santos Soares</p>
                <p>CopyRight &copy;</p>
            </div>
            <div>
                <img src={developerPlus} alt=""/>
            </div>
        </div>
    )
}

export default FooterDown;
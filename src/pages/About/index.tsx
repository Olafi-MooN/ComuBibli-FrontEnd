import React from 'react';
import FooterDown from '../../components/FooterDown';
import MenuHead from '../../components/MenuHead';

import './styles.css'

function Sobre() {
    return (
        <div className="sobreInfo">
            <MenuHead />
            <div className="inline">
                <div className="info">
                    <h2>Por quê?</h2>
                    <p className="infoP"> A biblioteca comunitaria é um Projeto Integrado Multidisciplinar da UNIP.
            Tem como objetivo, criar uma ferramenta que permita o compartilhamento de documentos!</p>
                </div>

                <div className="createProjectName">
                    <div className="info">
                        <h2 className="compartilhe">Compartilhe</h2>
                        <p className="compartilhe"> "Compartilhe seus documentos e colabore com o mundo, dê a oportunidade de outras pessoas, conhecer oque você conhece" <br/>- Alef Santos</p>
                    </div>
                    <div className="info developer">
                        <div>
                        <h2>Desenvolvido por</h2>
                        <p>Alef Santos Soares <br /> <strong>Desenvolvedor Full-Stack</strong></p>
                        </div>
                        <img src="https://avatars0.githubusercontent.com/u/54686408?s=460&u=0c058e3ef358e53838a2259b0f000f0982caca14&v=4" alt="logo" />
                    </div>
    
                </div>
                <div className="socialNetwork">
                    <a href="https://www.instagram.com/_developerplus/">INSTAGRAM <img src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo-11.png" alt="logoInstagram" /></a>
                    <a href="https://github.com/Olafi-MooN">GIT HUB <img src="https://i.pinimg.com/originals/b1/5e/ed/b15eedbdafbbdbca3249e3942f4faf3b.png" alt="logoGitHub" /></a>
                </div>
            </div>



            <div className="footerDownCategory">
                <FooterDown />
            </div>

        </div>

    )
}

export default Sobre;
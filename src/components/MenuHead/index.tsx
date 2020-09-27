import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import logoImg from '../../assets/images/logo.svg';
import menuImg from '../../assets/images/menu.svg';

import './styles.css';
import axios from '../../services/index';

function MenuHead() {

    const [id, setId] = useState('');
    const [nomeUser, setNomeUser] = useState('');
    const [emailUser, setEmailUser] = useState('');
    const [imageURL, setImageURL] = useState('');

    const responseGoogle = async (response: any) => {
        console.log(response.profileObj)

        setNomeUser(response.profileObj.name);
        setEmailUser(response.profileObj.email);
        setImageURL(response.profileObj.imageUrl);
        setId(response.profileObj.googleId);
        console.log('=====================================')
        console.log('response.profileObj.name')
        console.log('=====================================')

        console.log(nomeUser, emailUser, imageURL, id);

        axios.post("insertUser", {
            nomeUser: response.profileObj.name,
            emailUser: response.profileObj.email,
            imageURL: response.profileObj.imageUrl
        }).then(res => { // then print response status
            console.log(res)
        })

        localStorage.setItem('nameUser', response.profileObj.name);
        localStorage.setItem('emailUser', response.profileObj.email);
        localStorage.setItem('idUser', response.profileObj.googleId);
        localStorage.setItem('imageURL', response.profileObj.imageUrl);

        window.location.reload();
    }

    function verificarLogin() {
        if (localStorage.getItem('nameUser') !== ('' || null)) {
            return (
                (<><li><button><p className="nameUser">{localStorage.getItem('nameUser')}</p></button></li>
                    <li><img src={localStorage.getItem('imageURL')?.toString()} alt="logo" /></li></>)
            )
        } else {
            return(
            <li> <GoogleLogin
                className='Entrar com Google'
                clientId="838048300980-vufd2hoj94njvl9ttmsoij1sg4alf1if.apps.googleusercontent.com"
                buttonText="Entrar com Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle} /></li>)
        }
    }

    return (
        <div className="menuHead">
            <div className="logo">
                <Link to="/"><img src={logoImg} alt="Logo" /></Link>
            </div>
            <div className="textoHead">

                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="Sobre">Sobre</Link></li>
                    {verificarLogin()}
                </ul>

            </div>
            <div className="menuMobile">
                <img src={menuImg} alt="menu" />
            </div>
        </div>
    )
}

export default MenuHead;
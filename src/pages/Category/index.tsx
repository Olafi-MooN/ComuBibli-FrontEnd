import React, { useState } from 'react';

import BlockCategory from '../../components/BlockCategory';
import MenuHead from '../../components/MenuHead';
import TitleSubHead from '../../components/TitleSubHead';
import bookImg from '../../assets/images/book.svg';

import './styles.css'
import Modal from '../../components/Modal';
import { Link } from 'react-router-dom';

function Category() {
    const [isModalVisible, setModalVisible] = useState(false);

    function verificarLogin() {
        if (localStorage.getItem('nameUser') !== ('' || null)) {
            return (
                <div className="containerCategory">
                    <Link to="/listbooks/Ebooks"><BlockCategory title="E-books" id='1' /></Link>
                    <Link to="/listbooks/academicos"><BlockCategory title="Acadêmicos" id='2' /></Link>
                    <Link to="/listbooks/Escolares"><BlockCategory title="Escolares" id='3' /></Link>
                    <Link to="/listbooks/Ti"><BlockCategory title="TI" id='4' /></Link>
                    <Link to="/listbooks/Romance"><BlockCategory title="Romance" id='5' /></Link>
                    <Link to="/listbooks/Fcientifica"><BlockCategory title="F.Cientifica" id='6' /></Link>
                    <Link to="/listbooks/Artigos"><BlockCategory title="Artigos" id='7' /></Link>
                    <Link to="/listbooks/Outros"><BlockCategory title="Outros" id='8' /></Link>
                </div>
            )
        } else {
            return (
                <div className="alertaCategory">
                    <p>É Necessário estar logado para ver a categoria de livros</p>
                </div>)
        }
    }

    return (
        <div className="category">
            {isModalVisible ? <Modal onClose={() => setModalVisible(false)} /> : null}
            <MenuHead />
            <TitleSubHead
                titleCategory="Categoria de documentos"
                typeInput="button"
                valueInput="Inserir documento"
                clickON={() => setModalVisible(true)}>
                <img src={bookImg} alt="Pesquisar" />
            </TitleSubHead>

            {verificarLogin()}
        </div>
    )
}

export default Category;
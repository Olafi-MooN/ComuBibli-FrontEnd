import React, { useEffect, useState } from 'react';

import MenuHead from '../../../components/MenuHead';
import BlockList from '../../../components/BlockList';

import searchImg from '../../../assets/images/search.svg';

import './styles.css';
import TitleSubHead from '../../../components/TitleSubHead';
import axios from '../../../services/index';


function ListBooks() {

    const [books, setBooks] = useState([]);


    useEffect(() => {
        function searchBook() {
            const categoria = "escolares";
            axios.post('booksList', { categoria }).then(res => {
                setBooks(res.data);
            })
        }searchBook();
    },[])
    

    return (
        <div className="listBooks">
            <MenuHead />
            <TitleSubHead titleCategory="Lista de livros" typeInput="text">
                <button><img src={searchImg} alt="Pesquisar" /></button>
            </TitleSubHead>
            <div className="pbodyList">
                <div className="backgroundList2">
                    <li className="name2">Nome do livro</li>
                    <li className="ano2">Ano</li>
                    <li className="author2">Autor</li>
                    <li className="download2">
                        Baixar
                    </li>
                </div>

                {books.length === 0? <div className="bookNull">Nenhum documento adicionado</div>: books.map((item: any) => {
                    return (
                        <BlockList
                            nameBook={item.autorBook}
                            ano={item.dateBook} author={item.nameBook}
                            link="/" key={item} />)
                })}

            </div>
        </div>
    )
}

export default ListBooks;
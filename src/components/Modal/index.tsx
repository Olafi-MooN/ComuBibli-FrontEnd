import React, { FormEvent, useState } from 'react';
import InputPersonalite from '../InputPersonalite';
import axios from '../../services/index';

import './styles.css';

interface ModalProps {
    onClose: any;

}

const Modal: React.FC<ModalProps> = (props) => {

    const [nameBook, setNameBook] = useState('');
    const [autorBook, setAutorBook] = useState('');
    const [dateBook, setDateBook] = useState('');
    const [fileBook, setFileBook] = useState('');
    const [categoryBook, setCategoryBook] = useState('');

    function handleUploadFilePdf(e: any) {
        setFileBook(e.target.value);
    }

    function sendForm(e: FormEvent) {
        e.preventDefault();
        console.log(nameBook, autorBook, dateBook, fileBook, categoryBook);
        const idUser = localStorage.getItem('idUser');

        if(nameBook && autorBook && dateBook && fileBook && categoryBook !== (null || '')){
            axios.post("insertBook",
            {
                nameBook,
                autorBook,
                dateBook,
                fileBook,
                idUser,
                categoryBook,
            })
            .then(res => { // then print response status
                alert(res.data.message)
                console.log(res)
            })
        }else {
            alert('Por favor preencha todos os dados!')
        }
        
    }

    return (
        <div className="modal">

            <div className="message">
                <div className="close" onClick={props.onClose}><h1>X</h1></div>
                <form action="" onSubmit={sendForm}>
                    <fieldset>
                        <legend>Adicione um Livro</legend>

                        <div className="addBook">
                            <label>Nome do Livro</label>
                            <InputPersonalite
                                typeInput="text"
                                placeholder="Nome do Livro"
                                nameInput="nome"
                                value={nameBook}
                                onChange={(e) => { setNameBook(e.target.value) }} />
                        </div>
                        <div className="addBook">
                            <label>Nome Do autor</label>
                            <InputPersonalite
                                typeInput="text"
                                placeholder="Nome do autor"
                                nameInput="autor"
                                value={autorBook}
                                onChange={(e) => { setAutorBook(e.target.value) }} />
                        </div>
                        <div className="addBook dateSelec">
                            <div className="addBook datecss">
                                <label>Date</label>
                                <InputPersonalite
                                    typeInput="date"
                                    placeholder="Ano do Livro"
                                    nameInput="ano"
                                    value={dateBook}
                                    onChange={(e) => { setDateBook(e.target.value) }} />
                            </div>

                            <div className="addBook selection">
                                <label>Categoria</label>
                                <select defaultValue="Default" onChange={(e: any) => { setCategoryBook(e.target.value) }} >
                                    <option value="Default"
                                        disabled hidden >Selecione uma opção</option>
                                    <option value="acadêmicos">acadêmicos</option>
                                    <option value="artigos">artigos</option>
                                    <option value="escolares">escolares</option>
                                    <option value="e-books">e-books</option>
                                    <option value="f.cientifica">ficção cientifica</option>
                                    <option value="tecnologia">tecnologia</option>
                                    <option value="romance">romance</option>
                                    <option value="outros">outros</option>
                                </select>
                            </div>
                        </div>
                        <div className="addBook">
                            <label>Adicione o livro</label>
                            <InputPersonalite
                                typeInput="text"
                                placeholder="https://upload/aquivo.js"
                                nameInput="Livro file"
                                value={fileBook}
                                onChange={handleUploadFilePdf} />
                        </div>
                        <div>
                            <InputPersonalite
                                typeInput="submit"
                                value="Compartilhar" />
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default Modal;
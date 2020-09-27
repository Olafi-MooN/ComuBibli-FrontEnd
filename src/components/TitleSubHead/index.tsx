import React from 'react';

import InputPersonalite from '../InputPersonalite';

import './styles.css';

interface TitleSubHeadProps {
    titleCategory: string;
    typeInput: string;
    valueInput?: string;
    clickON?: any;
}

const TitleSubHead: React.FC<TitleSubHeadProps> = (props) => {

    function isLogado() {
        if (localStorage.getItem('nameUser') !== ('' || null)) {
            return (
                <div className="title search">
                    <h2>{props.titleCategory}</h2>
                    <div className="searchCss">
                        <InputPersonalite
                            typeInput={props.typeInput}
                            valueInput={props.valueInput}
                            onClick={props.clickON}
                            
                        />
                        {props.children}
                    </div>
                </div>
            )
        } else {
            return (
                <div className="title search">
                    <h2>{props.titleCategory}</h2>
                    <div className="searchCss">
                        <InputPersonalite
                            typeInput={props.typeInput}
                            valueInput={props.valueInput}
                            onClick={()=>alert('É NECESSARIO REALIZAR LOGIN')}
                    />
                        {props.children}

                    </div>
                </div>
            )
        }
    }
    return(
        isLogado()
    )
}

export default TitleSubHead;
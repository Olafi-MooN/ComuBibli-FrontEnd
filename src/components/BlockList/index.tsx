import React from 'react';

import downloadIcon from '../../assets/images/download.svg';

import './styles.css';

interface BlockListProps {
    link: string;
    author: string;
    ano: string;
    nameBook: string;

}

const BlockList: React.FC <BlockListProps> = (props) => {
    return(
        <div className="backgroundList">
            <li className="name">{props.nameBook}</li>
            <li className="ano">{props.ano}</li>
            <li className="author">{props.author}</li>
            <li className="download">
                <a href={props.link} target="_blank" rel="noopener noreferrer"><img src={downloadIcon} alt="download"/></a>
            </li>
        </div>
    )
}

export default BlockList;
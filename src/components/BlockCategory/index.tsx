import React from 'react';

import './styles.css';

interface BlockCategoryProps {
    title: string;
    id: string;
}

const BlockCategory: React.FC <BlockCategoryProps> = (props) => {
    return (
        <div className="blockCategory" id={props.id}>
            <h1>{props.title}</h1>
        </div>
    )
}

export default BlockCategory;
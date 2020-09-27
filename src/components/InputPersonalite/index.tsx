import React, {InputHTMLAttributes} from 'react';

import './styles.css';

interface InputPersonaliteProps extends InputHTMLAttributes<HTMLInputElement>{
    typeInput: string;
    nameInput?: string;
    valueInput?: string;
}

const InputPersonalite: React.FC<InputPersonaliteProps> = ({typeInput, nameInput, valueInput, ...rest}) =>{
    return(
        <div className="inputPersonalite">
            <input 
                type={typeInput} 
                name={nameInput} 
                value={valueInput}
                {...rest}/>
        </div>   
    )
}

export default InputPersonalite;
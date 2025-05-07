import React from 'react';

interface ButtonProps {
    variant: 'solid' | 'outline' | 'text'; // Tipos de variante para o botão
    onClick: () => void; // Função de clique
    children: React.ReactNode; // Conteúdo do botão
}

const Button: React.FC<ButtonProps> = ({ variant, onClick, children }) => {
    let buttonClass = '';

    switch (variant) {
        case 'solid':
            buttonClass = 'btn-solid';
            break;
        case 'outline':
            buttonClass = 'btn-outline';
            break;
        case 'text':
            buttonClass = 'btn-text';
            break;
        default:
            buttonClass = 'btn-solid';
    }

    return (
        <button className={buttonClass} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;

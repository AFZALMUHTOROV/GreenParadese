// Importando as dependências
import styled from 'styled-components';

// Importando as constantes
import Colors from '../constant/Colors';
import Font from '../constant/Font';

// Botão - Estilizado
export const ButtonRedStyle = styled.button `
    width: 10em;
    position: relative;
    height: 3.5em;
    border: 3px ridge ${Colors.red_1};
    outline: none;
    background-color: transparent;
    color: ${Colors.white};
    text-transform: uppercase;
    transition: 1s;
    border-radius: 0.3em;
    font-size: 16px;
    font-weight: ${Font.txt_600w};
    cursor: pointer;


    &::after {
        content: "";
        position: absolute;
        top: -10px;
        left: 3%;
        width: 95%;
        height: 40%;
        background-color: ${Colors.black};
        transition: 0.5s;
        transform-origin: center;
    }

    &::before {
        content: "";
        transform-origin: center;
        position: absolute;
        top: 80%;
        left: 3%;
        width: 95%;
        height: 40%;
        background-color: ${Colors.black};
        transition: 0.5s;
    }

    &:hover::before, &:hover::after {
        transform: scale(0)
    }

    &:hover {
        box-shadow: inset 0px 0px 25px ${Colors.red_1};
        color: ${Colors.red_1};
    }
`
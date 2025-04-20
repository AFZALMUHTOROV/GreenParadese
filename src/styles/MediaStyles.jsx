// Importando as dependências
import styled from 'styled-components';

// Importando as constantes
import Colors from "../constant/Colors";

// Estilo do Media
export const MediaStyle = styled.div`
    .card {
        width: fit-content;
        height: fit-content;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.055);
    }

    .socialContainer {
        width: 52px;
        height: 52px;
        background: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        transition-duration: .3s;
        border-radius:10px;
        border: 1px solid ${Colors.red_1};
    }
    /* Instagram */
    .containerOne:hover {
        background-color: ${Colors.red_1};
        transition-duration: .3s;
        color: ${Colors.red_1};
        border: none;
    }

    /* Facebook */
    .containerTwo:hover {
        background-color: ${Colors.red_1};
        transition-duration: .3s;
        color: ${Colors.red_1};
        border: none;
    }

    /* LinkedIn */
    .containerThree:hover {
        background-color: ${Colors.red_1};
        transition-duration: .3s;
        color: ${Colors.red_1};
        border: none;
    }

    /* Youtube */
    .containerFour:hover {
        background-color: ${Colors.red_1};
        transition-duration: .3s;
        color: ${Colors.red_1};
        border: none;
    }

    .socialContainer:active {
        transform: scale(0.9);
        transition-duration: .3s;
    }

    .socialSvg {
        width: 17px;
    }

    .socialSvg path {
        fill: ${Colors.white};
    }

    .socialContainer:hover .socialSvg {
        animation: slide-in-top 0.4s both;
    }

    @keyframes slide-in-top {
        0% {
        transform: translateY(-50px);
        opacity: 0;
        }

        100% {
        transform: translateY(0);
        opacity: 1;
        }
    }

    @media (max-width: 300px) {
        .card {
            width: 80%;
        }
    }

`;
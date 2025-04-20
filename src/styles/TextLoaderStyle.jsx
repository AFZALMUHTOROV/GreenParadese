// Importando as dependências
import styled, { keyframes } from 'styled-components';

// Importando as constantes
import Colors from '../constant/Colors';
import Font from '../constant/Font';

// Card
export const Card = styled.div`
    background: transparent;
    width: auto;
`;

// Container Loader
export const LoaderContainer = styled.div`
    color: ${Colors.white};
    font-weight: 500;
    font-size: 25px;
    padding: 10px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    border-radius: 8px;
    text-shadow: ${Colors.shadow};

    @media (max-width: 600px) {
        flex-direction: column;
    }
`;

// Palavra Fixada
export const WordFixed = styled.p`
    text-transform: uppercase;
    font-weight: ${Font.txt_100w};
    font-size: ${Font.txt_3rem};

    @media (max-width: 400px) {
        font-size: ${Font.txt_2rem};
    }
`

// Container das palavras
export const WordsContainer = styled.div`
    overflow: hidden;
    position: relative;
    margin-left: 10px;
`;

// Efeito de FadeInOut
export const fadeInOut = keyframes`
    0% {
        opacity: 0;
        transform: translateY(20%);
    }
    50% {
        opacity: 1;
        transform: translateY(0);
    }
    100% {
        opacity: 0;
        transform: translateY(-20%);
    }
`;

// Palavra
export const Word = styled.p`
    display: block;
    text-align: center;
    font-weight: ${Font.txt_700w};
    text-transform: uppercase;
    color: ${Colors.red_1};
    font-size: ${Font.txt_3rem};
    animation: ${fadeInOut} 3000ms ease-in-out;
    padding-left: 6px;
    position: relative;

    @media (max-width: 400px) {
        font-size: ${Font.txt_1_5rem};
    }
`;

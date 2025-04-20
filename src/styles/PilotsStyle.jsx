// Importando as dependências
import styled from 'styled-components';

// Importando as constantes
import Font from '../constant/Font';
import Colors from '../constant/Colors';
import Backgrounds from '../constant/Backgrounds';

// Pilotos - Estilo
export const PilotsStyle = styled.main `
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: ${Backgrounds.background_dark_gray_to_red};
`

// Pilotos - Conteúdo
export const PilotsContent = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color:${Colors.white};
    padding: 0 2rem;

    @media (max-width: 700px) {
        flex-direction: column;
        gap: 2rem;
    }
`

// Pilotos - Imagem
export const PilotImage = styled.div `
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 70%;
        transition: 2s ease-in-out;
        opacity:0;
        
        @media (max-width: 700px) {
            width: 100%;
        }
    }

    .animate-img{
        animation: animation-pilot 1s ease-in-out forwards;
    }

    @keyframes animation-pilot {
        0% {
            transform: translateX(-100%);
            opacity:0.5;
        }
        100% {
            transform: translateX(0);
            opacity: 1;
        }
    }

`

// Pilotos - Info
export const PilotInfo = styled.div `
    width: 50%;
    display: flex;
    flex-direction: column;
    gap:1rem;
    padding: 2rem 1rem;

    h1 {
        color: ${Colors.white};
        text-transform: uppercase;
        font-size: ${Font.txt_2rem};
    }

    p {
        text-align: justify;
    }

    @media (max-width: 700px) {
        width: 90%;
    }
`
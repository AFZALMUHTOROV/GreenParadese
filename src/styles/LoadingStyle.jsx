// Importando as dependências
import styled from 'styled-components';

// Importando as constantes
import Colors from '../constant/Colors';

// Estilo do Loading
export const LoadingStyle = styled.main`
    height: 100dvh;
    width: 100%;
    background-color:${Colors.black};
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99999;
`

// Loader
export const Loader = styled.div `
    height: 2px;
    width: 300px;
    background: rgb(44, 44, 44);
    position: relative;
    overflow: hidden;

    .black_overlay {
        background: linear-gradient(
            87deg,
            ${Colors.black} 0%,
            rgba(0, 0, 0, 0.14) 30%,
            rgba(0, 0, 0, 0.14) 70%,
            ${Colors.black} 100%
        );
        position: absolute;
        inset: 0px;
    }

    .light {
        width: 70px;
        height: 100%;
        position: absolute;
        left: -20%;
        top: 0px;
        background: linear-gradient(
            87deg,
            rgba(0, 0, 0, 0) 0%,
            ${Colors.red_1} 40%,
            ${Colors.red_1} 60%,
            rgba(0, 0, 0, 0) 100%
        );
        animation: light 1s infinite ease-in-out;
    }

    @keyframes light {
        from {
            left: -30%;
        }
        to {
            left: 100%;
        }
    }
`
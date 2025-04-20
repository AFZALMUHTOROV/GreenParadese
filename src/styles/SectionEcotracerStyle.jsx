// Importando as dependências
import styled from 'styled-components';

// Importando as imagens
import BackgroundEcotracer from '../assets/home/ecotracer/background.png'

// Importando as constantes
import Colors from '../constant/Colors';
import Font from '../constant/Font';

// Seção EcoTracer - Estilizado
export const SectionEcotracerStyle = styled.section `
    height: 100dvh;
    width: 100%;
    display: flex;
    justify-content: center;
    background-image: url(${BackgroundEcotracer});
    background-position: center;
    background-size: cover;

    @media (max-width: 400px) {
        height: auto;
    }
`

// EcoTracer Conteúdp
export const EcotracerContent = styled.section`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
    gap: 1rem;

    @media (max-width: 600px) {
        width: 100%;
    }

    .text-animate{
            animation: subir 1.5s ease-in forwards;
        }
        @keyframes subir {
            0% {
                transform: translateY(100%);
                opacity:0;
            }
            100% {
                transform: translateY(0);
                opacity:1; 
            }
        }

`

// EcoTracer Título
export const EcotracerTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    h1 {
        text-transform: uppercase;
        font-weight: ${Font.txt_200w};
        font-size: ${Font.txt_2rem};
        color: ${Colors.white};

        strong {
            text-transform: uppercase;
            font-weight: ${Font.txt_700w};
            font-size: ${Font.txt_2rem};
            color: ${Colors.green}
        }
    }



    @media (max-width: 600px) {
        text-align: center;
        
        h1 {
            font-size:${Font.txt_2rem};
        }

        h2 {
            font-size: ${Font.txt_2rem};
        }
    }
`

// EcoTracer - Parágrafo
export const EcotracerParagraph = styled.div`
    p {
        font-size: ${Font.txt_16};
        text-align: center;
        color: ${Colors.off_white};
    }
`
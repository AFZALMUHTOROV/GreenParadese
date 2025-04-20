// Importando as dependências
import styled from 'styled-components'  

// Importando as constantes
import Colors from '../constant/Colors' 
import Font from '../constant/Font' 

// Importando as imagens
import backgroundAbout from '../assets/home/about/background.png' 

// Seção About Style
export const SectionAboutStyle = styled.section `
    width: 100%;
    height: 100dvh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${backgroundAbout});
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: 400px) {
        height: auto;
    }
`

// Container do About
export const AboutContainer = styled.section`
    width: 50%;
    height: 50%;
    display: flex;
    align-items: center;

    @media (max-width: 700px) {
        width: 100%;
        padding:  2rem;
    }
`

// Conteúdo do About
export const AboutContent = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

        h1 {
            color: ${Colors.red_1};
            font-size: ${Font.txt_40};
            font-weight:${Font.txt_800w};
            text-transform: uppercase;
        }
                
            p {
                color: ${Colors.off_white};
                font-size: ${Font.txt_16};
                text-align: center;
                    
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

    @media (max-width: 700px) {
        gap: 1.3rem;
    }   
`
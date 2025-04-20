// Importando as dependências
import styled from 'styled-components';

// Importando as constantes
import Font from '../constant/Font'
import Colors from '../constant/Colors'
import Backgrounds from '../constant/Backgrounds';

// Estilo do Race
export const RaceStyle = styled.section `
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
    min-height: 100dvh;
    background-image: ${Backgrounds.background_dark_gray_to_red};
        
        /* Swiper */
        .swiper{
            width: 100%;
            height: 100%;
            
            /* Slides */
            .swiper-slide{
                width: 40%;
                height: 450px;
                background: transparent;

                @media (max-width: 1024px){
                    width: 80%;
                }

                @media (max-width: 600px){
                    width: 90%;
                    height: 400px;
                }

                @media (max-width: 400px) {
                    height: 300px;
                }
            }
            
            /* Next Slide */
            .swiper-slide-next, .swiper-slide-prev{
                filter: blur(2px);
            }
        }

        .swiper-wrapper {

        }
`

// Race - Container
export const RaceContainer = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 1rem;
    -webkit-box-shadow: 0 32px 23.5px -17px ${Colors.shadow};
    -moz-box-shadow: 0 32px 23.5px -17px ${Colors.shadow};
    box-shadow: 0 32px 23.5px -17px ${Colors.shadow};

    @media (max-width: 450px) {
        gap: 2.5rem;
    }
`

// Race - Top
export const RaceTop = styled.div `
    width: 100%;
    height: 50px;
`

// Race - Info
export const RaceInfo = styled.div `
    display: flex;
    width: 100%;
    height: 100%;
    gap: 1rem;
`

// Race - Flag
export const RaceFlag = styled.div `
    .flag{
        height: 50px;
    }
`

// Race - NameData
export const RaceNameData = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    .data {
        font-size: ${Font.txt_16};
        font-weight:${Font.txt_400w};
        font-style: italic;
        color: ${Colors.off_white};
    }
    
    .name {
        font-size: ${Font.txt_1rem};
        font-weight: ${Font.txt_700w};
        text-transform: uppercase;
        color: ${Colors.white};

        @media (max-width: 320px) {
            font-size: ${Font.txt_12};
        }
    }
`

// Race - Bottom
export const RaceBottom = styled.div `
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    background: rgb(23,23,23);
    background: linear-gradient(328deg, rgba(23,23,23,1) 0%, rgba(71,71,71,1) 50%, rgba(23,23,23,1) 100%);
`

// Race - Texto Principal
export const RaceMainText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        width: 80%;
    }
`

// Race - Veja Mais
export const RaceSeeMore = styled.div `
    display: flex;
    gap: 0.3rem;
    cursor:pointer;

    /* Effect Rotation Arrow */
    .arrow-rotation {
        transition: transform 0.3s ease-in-out;
    }

    &:hover .arrow-rotation {
        transform: rotate(90deg);
    }
`

// Race - Botão
export const RaceButton = styled.button `
    cursor:pointer;
    background: transparent;
    border: none;
    text-decoration: none;
    list-style: none;
    text-transform: uppercase;
    font-size: ${Font.txt_12};
    color: ${Colors.off_white};
    position: relative;
    display: inline-block;
    font-weight: 300;
    transition: all 0.3s;

    /* Effect Hover Line */
    &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -3px;
        width: 0;
        height: 1px;
        background-color: ${Colors.red_1};
        transition: width 0.3s ease-in-out;
    }

    &:hover::after {
        width: 100%;
    }
`
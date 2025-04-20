// Importando as dependências
import styled from 'styled-components';

// Importando as constantes
import Colors from '../constant/Colors';
import Font from '../constant/Font'; 

// Seção Home - Estilo
export const SectionHomeStyle = styled.section `
        background-color: ${Colors.black};
        z-index: 1;

        .swiper {
            width: 100%;
            height: calc(100dvh - 58px) ;
            cursor: grab;

            &.grabbing {
                cursor: grabbing;
            }
            

            .b1 {
                background-color: ${Colors.black};
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .b2 {
                background-color: ${Colors.black};
                display: flex;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: space-around;
            }

            .b3 {
                background-color: ${Colors.black};
                display: flex;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: space-around;
            }
        }



    .swiper-pagination-bullet{
        background-color: ${Colors.red_1};
        transition: ease-in-out 0.2s;
        
    }
    
    .swiper-button-prev {
        display: none;
    }

    .swiper-button-prev:hover {
        display: none;
    }

    .swiper-button-disabled {
        display: none;
    }

    .swiper-button-next {

        display: none;
    }

    .swiper-button-next:hover {
        display: none;
    }
`

// Imagem do Banner
export const BannerImage = styled.aside `
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        height: 100%;
    }

    @media (max-width: 1000px){
        display: none
    }
`

// Conteúdo do Banner
export const BannerContent = styled.aside `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 0 2rem;

    h1 {
        font-size: ${Font.txt_2rem};
        color: ${Colors.white};
        font-weight: ${Font.txt_200w};
        text-transform: uppercase;
        text-align: center;
    }   

    @media (max-width: 1000px){
        width: 100%;
        height: 100%;
    }
`
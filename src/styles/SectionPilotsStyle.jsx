// Importando as dependências
import styled from 'styled-components';

// Importando as constantes
import Colors from '../constant/Colors';

// Seção Pilotos
export const SectionPilotsStyle = styled.section`
    height: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: ${Colors.black};
`

// Container
export const PilotsContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

    @media (max-width: 650px) {
        grid-template-columns: 1fr;
    }
`

// Card Pilotos
export const PilotsCard = styled.div`
    div {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: end;
        cursor: pointer;
        transition:2s ease-in-out;

        img {
            width: 100%;
            height: 100%;
            z-index: 100;
            opacity: 0.5;
            transition: all ease-in-out 300ms;
        
            &:hover {
                opacity:1;
            }
        }
    }

    @media (max-width: 900px) {
        div {
            img {
                opacity: 1;
            }
        }
    }
`;
import styled from 'styled-components';
import Colors from '../constant/Colors';
import Font from '../constant/Font'


export const SolutionStyle = styled.section`
    height: auto;
    background-color: ${Colors.black};
    display: flex;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`

export const LeftDivStyle = styled.div`
    width: 50%;
    min-height: (100dvh);
    display: flex;
    justify-content: center;
    align-items: start;

    @media (max-width: 1000px) {
        width: 100%;
    }
`

export const RightDivStyle = styled.div`
    margin-top: 2rem;
    width: 50%;
    min-height: (100dvh);
    background-color: ${Colors.black};
    display: flex;
    justify-content: center;

    @media (max-width: 1000px) {
        width: 100%;
    }
`

export const InfoSolution = styled.div`
    display: flex;
    width: 70%;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    @media (max-width: 1000px) {
        width: 100%;
    }
    
`

export const ContainerInfoSolution = styled.div`
    display: grid;
    grid-gap: 1rem; 
    grid-template-areas: 
        "Number TextH1"
        "Number ParagraphP"; 
    padding: 1rem;

        .Number { 
            color: ${Colors.white};
            grid-area: Number; 
        }
        .TextH1 { 
            grid-area: TextH1;
            height: auto;
            text-transform: uppercase;
            color: ${Colors.red_1};
            font-weight: ${Font.txt_500w};
        }
        .ParagraphP { 
            grid-area: ParagraphP;
            color: ${Colors.white};
            text-align: justify;
        }
`
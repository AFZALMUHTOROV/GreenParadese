// Importando os componentes
import styled from 'styled-components';

// Importando as constantes
import Colors from '../constant/Colors'; 
import Font from '../constant/Font'; 

// Importando as imagens
import Background from '../assets/login_signup/background.png' 

// Login & Sign-Up
export const LoginSignUpStyle = styled.section `        
    min-height: 100dvh;
    width: 100%;
    display: flex;
`

// Div Esquerda
export const LoginSignUpLeft = styled.div `     
    background-image: url(${Background});
    background-position: center;
    background-size: cover;
    height: auto;
    width: 40%;
    
    @media (max-width: 1000px) {
        display: none;
    }
`

// Div Direita
export const LoginSignUpRight = styled.div `        
    background-color: ${Colors.black};
    min-height: 100dvh;
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1000px) {
        width: 100%;
    }
`

// Container
export const LoginSignUpContainer = styled.div`
    width: 80%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    @media (max-width: 1000px) {
        width: 100%;
    }
`

// Div Topo
export const LoginSignUpTop = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    width: 70%;
    
    img {
        height: 30px;
    }
    
    h2 {
        color: ${Colors.white};
        font-weight: 300;
        font-size: ${Font.txt_20};
    }
`

// Div Mid
export const LoginSignUpMid = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    /* Forms Login */
    form {
        width: 85%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
        
        /* Username & Password */
        input {
            width: 100%;
            background-color: transparent;
            border:none;
            border-bottom: 1px solid ${Colors.white};
            color: ${Colors.white};
            padding: 1rem 2rem;
            outline:none;

        }
        
        /* Placeholder */
        input::placeholder {
            color: ${Colors.white}
        }
        
        /* Forgot Password */
        a {
            text-decoration: none;
            color: ${Colors.white};
            transition: all 0.3s;
            margin-top:1rem;
        }
        
        a:hover {
            color: ${Colors.white_hover}
        }
        
        /* Button Login */
        button {
            font-weight: 700;
            text-transform: uppercase;
            background-color: ${Colors.red_1};
            color: ${Colors.white};
            border: none;
            border-radius: 10px;
            width: 100%;
            padding: 1rem 3rem;
            cursor: pointer;
            background-image: linear-gradient(to left, ${Colors.red_1} 50%, ${Colors.red_hover} 50%);
            background-size: 200% 100%;
            background-position: right bottom;
            transition: background-position 0.5s ease-in-out;
            margin-top:1rem;
        }
        
            button:hover {
                background-position: left bottom;
            }
        }
        
        /* Dont Have Account */
        p {
            color: ${Colors.white};
            
            /* Link To Sign-Up */
            button {
                background-color: transparent;
                border: none;
                cursor: pointer;
                
                a {
                    font-size: ${Font.txt_16};
                    text-decoration: none;
                    color: ${Colors.white};
                    transition: all 0.3s;
                }
                
                a:hover {
                    color: ${Colors.white_hover}
                }
            }
        }

    @media (max-width: 1000px) {
        width: 100%;
    }
`

// Div Bottom
export const LoginSignUpBottom = styled.div`
    width: 50%;

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 500;
        text-transform: uppercase;
        background-color: ${Colors.white};
        color: ${Colors.dark_gray};
        font-size: ${Font.txt_12};
        border: none;
        border-radius: 10px;
        width: 100%;
        padding: 0.4rem 1rem;
        cursor: pointer;
        background-image: linear-gradient(to left, ${Colors.white} 50%, ${Colors.white_hover} 50%);
        background-size: 200% 100%;
        background-position: right bottom;
        transition: background-position 0.5s ease-in-out;

            /* Logo Google */
            img {
                height: 40px;
            }
        }

    button:hover {
        background-position: left bottom;
    }

    @media (max-width: 1000px) {
        width: 70%;
    }
`
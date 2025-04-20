// Importando Dependencias
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { handleSignUp,googleSignIn } from '../../utils/authUtils';

// Importando Imagens
import LogoMahindra from '../../assets/header/logo/mahindra-logo-new.svg'
import LogoGoogle from '../../assets/login_signup/logo-google.svg'

// Importando Styles
import { LoginSignUpStyle, LoginSignUpLeft, LoginSignUpRight, LoginSignUpContainer, LoginSignUpTop, LoginSignUpMid, LoginSignUpBottom} from '../../styles/LoginSignUpStyle';


const SectionSignUp = () => {

    // Navigate
    const navigate = useNavigate();

    // Função para mudar idioma
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setShowLanguages(false);
    };

    // Estado das váriaveis
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [username, setUsername] = useState('');

    // Função de SignUp
    const onSignUp = async (event) => {
        event.preventDefault();
        handleSignUp(email, password, confirmPassword, username, t, navigate);
    };

    return (
        <>
        <LoginSignUpStyle>
                {/* Esquerda */}
                <LoginSignUpLeft></LoginSignUpLeft>

                {/* Direita */}
                <LoginSignUpRight>
                    <LoginSignUpContainer>
                        {/* Topo */}
                        <LoginSignUpTop>
                            <img src={LogoMahindra} alt='Logo Mahindra' />
                            <h2>{t('Salom hurmatli foydalanuvchi')}</h2>
                        </LoginSignUpTop>

                        {/* Meio */}
                        <LoginSignUpMid>
                            <form action='/login' method='POST' onSubmit={onSignUp}>
                                <input type='text' name='username' placeholder={t('ism')} value={username} onChange={(e) => setUsername(e.target.value)} required/>
                                <input type='text' name='email' placeholder={t('pochta')} value={email} onChange={(e) => setEmail(e.target.value)}  required/>
                                <input type='password' name='password' placeholder={t('parol')} value={password} onChange={(e) => setPassword(e.target.value)}  required/>
                                <input type='password' name='repeat-password' placeholder={t('2-chi parol')} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}  required/>

                                <button type='submit'>{t('ruyhattan otish')}</button>
                            </form>
                            <p>{t('have-an-account')} <button><Link to ='/login'>{t('ruyhattan otish')}</Link></button></p>
                        </LoginSignUpMid>

                        {/* Fim */}
                        <LoginSignUpBottom>
                            <button onClick={googleSignIn}><img src={LogoGoogle} alt='#' /> {t('google orqali kirish')}</button>
                        </LoginSignUpBottom>                        
                    </LoginSignUpContainer>
                </LoginSignUpRight>
        </LoginSignUpStyle>
        </>
    )
}

export default SectionSignUp
// Importando Dependencias
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import { googleSignIn, handleAuthentication } from '../../utils/authUtils';

// Importando Styles
import { LoginSignUpStyle, LoginSignUpLeft, LoginSignUpRight, LoginSignUpContainer, LoginSignUpTop, LoginSignUpMid, LoginSignUpBottom} from '../../styles/LoginSignUpStyle';

// Importando Imagens
import LogoMahindra from '../../assets/header/logo/mahindra-logo-new.svg'
import LogoGoogle from '../../assets/login_signup/logo-google.svg'



const SectionLogin = () => {

    // Tradução
    const { t, i18n } = useTranslation();   
    // Navigate
    const navigate = useNavigate();

    // Estado das Variáveis
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    
    // Função para mudar idioma
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    // Função para Login
    const onLoginPress = (event) => {
        event.preventDefault();
        handleAuthentication(email, password, isLogin, user, t, navigate);
    };
    // Função para SignIn com PopUp
    const handleSignInWithPopUp = (event) => {
        event.preventDefault();
        googleSignIn(t, navigate)
    }
    
    return (
        <>
        <LoginSignUpStyle>
                {/* Left */}
                <LoginSignUpLeft></LoginSignUpLeft>

                {/* Right */}
                <LoginSignUpRight>
                    <LoginSignUpContainer>
                        {/* Top */}
                        <LoginSignUpTop>
                            <img className='w-[200px] h-[200px]' src={LogoMahindra} alt='' />
                            <h2>{t('Salom Hurmatli Foydalanuvchi')}</h2>
                        </LoginSignUpTop>

                        {/* Mid */}
                        <LoginSignUpMid>
                            <form action='/login' onSubmit={onLoginPress} >
                                <input type='text' name='username' placeholder={t('ism')} value={email} onChange={(e) => setEmail(e.target.value)} required/>
                                <input type='password' name='password' placeholder={t('parol')} value={password} onChange={(e) => setPassword(e.target.value)} required/>
                                <a href='/' className='forgot-password'>{t('forgot-password')}</a>
                                <button type='submit'>{t('Ruyhattan otish')}</button>
                            </form>
                            <p>{t('account')} <button><a href='/sign-up'>{t('Kirish')}</a></button></p>
                        </LoginSignUpMid>

                        {/* End */}
                        <LoginSignUpBottom>
                            <button onClick={handleSignInWithPopUp}><img src={LogoGoogle} alt="#"/>{t('google orqali kirish')}</button>
                        </LoginSignUpBottom>
                        
                    </LoginSignUpContainer>
                </LoginSignUpRight>
        </LoginSignUpStyle>
        </>
    )
}

export default SectionLogin
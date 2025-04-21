// Importando Dependencias
import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useInView } from 'react-intersection-observer';

// Importando Styles
import { ButtonRedFullStyle } from '../../styles/ButtonRedFullStyle'
import { SectionAboutStyle, AboutContainer, AboutContent } from '../../styles/SectionAboutStyle'


const SectionAbout = () => {

    // React intersection observer para animacao
    const {ref:textAbout, inView:textAboutVisible} = useInView({
      triggerOnce:true,
    });

    // Função para mudar idioma
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setShowLanguages(false);
    };


  return (
    <>
    <SectionAboutStyle>
          {/* Container */}
          <AboutContainer>
            {/* Conteúdo */}
            <AboutContent ref={textAbout}>
              <h1 className={textAboutVisible ? 'text-animate' : ''}>{t('ABOUt')}</h1>
              <p className={textAboutVisible ? 'text-animate' : ''}>{t('salom yurtdoshimiz biznig saytda siz uylar ni korib narxini bilishingiz mumkun va bu yerda juda kop malumot va ishonli insonlar lar 100% garantiya va xaridor topib berish uylarni narxini bilishingiz yoki uy sotib olishingiz mumkun hozir da 10000 kishidan ortiq insonga uy larini topshirdik')}</p>
              <Link to='https://t.me/GreenParadiseHomes' target='blank' className={textAboutVisible ? 'text-animate' : ''}>
                <ButtonRedFullStyle className={textAboutVisible ? 'text-animate' : ''}>{t('Korish')}</ButtonRedFullStyle>
              </Link>
            </AboutContent>
          </AboutContainer>
      </SectionAboutStyle>
    </>
  )
}

export default SectionAbout

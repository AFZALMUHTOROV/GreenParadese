// Importando Dependencias
import React from 'react'

import { useTranslation } from 'react-i18next'

// Importando Styles
import { FooterStyle, FooterContent, FooterColumnInfo, FooterInfo, FooterColumn, FooterContainerItems, FooterItems } from '../styles/FooterStyle';

// Importando Componentes
import Midias from './Midias';

// Importando Imagens
import arrowFooter from '../assets/footer/arrow.svg'
import logoMahindra from '../assets/header/logo/mahindra-logo-new.svg';

const Footer = () => {

  // Função para mudar idioma
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
      setShowLanguages(false);
    };
    
  return (
    <>
    <FooterStyle>

            {/* Footer - Esquerda */}
            <FooterContent>
              
              {/* Logo */}
              <FooterColumnInfo>  

                {/* Informações */}
                <FooterInfo>
                    <img className='"w-[200px] h-[200px]' src={logoMahindra} alt='' />
                    <h5>Lorem 2025</h5>
                    <h5>Lorem</h5>
                    <div>
                      <Midias>
                      </Midias>
                    </div>
                </FooterInfo>

              </FooterColumnInfo>

              {/* Coluna 1 */}
              <FooterColumn>

                {/* Items */}
                <FooterContainerItems>

                  {/* Notícias */}
                 
                    <FooterItems>
                      <img className='arrow-rotation' src={arrowFooter} alt='' />
                      <h4>Lorem</h4>
                    </FooterItems>
                


                  {/* Mahindra */}
                
                    <FooterItems>
                      <img className='arrow-rotation' src={arrowFooter} alt='' />
                      <h4>Lorem</h4>
                    </FooterItems>
                

                  {/* Parcerias */}
                  
                    <FooterItems>
                      <img className='arrow-rotation' src={arrowFooter} alt='' />
                      <h4>Lorem</h4>
                    </FooterItems>
                  

                </FooterContainerItems>

              </FooterColumn>

              {/* Coluna 2 */}
              <FooterColumn>

                {/* Items */}
                <FooterContainerItems>

                  {/* Carreiras */}
                  
                    <FooterItems>
                      <img className='arrow-rotation' src={arrowFooter} alt='' />
                      <h4>Lorem</h4>
                    </FooterItems>
                  

                  {/* Corredores */}
                 
                    <FooterItems>
                      <img className='arrow-rotation' src={arrowFooter} alt='' />
                      <h4>Lorem</h4>
                    </FooterItems>
                           


                  {/* Calendário */}
             
                    <FooterItems>
                      <img className='arrow-rotation' src={arrowFooter} alt='' />
                      <h4>lorem</h4>
                    </FooterItems>
                  

                  {/* FIA */}
              
                    <FooterItems>
                      <img className='arrow-rotation' src={arrowFooter} alt='' />
                      <h4>lorem</h4>
                    </FooterItems>
             
                </FooterContainerItems>

              </FooterColumn>

            </FooterContent>
    </FooterStyle>
    </>
  )
}

export default Footer
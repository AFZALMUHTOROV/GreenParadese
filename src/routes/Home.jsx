// Importando componentes
import SectionHome from '../components/home/SectionHome';
import SectionAbout from '../components/home/SectionAbout';
import SectionPilots from '../components/home/SectionPilots';
import SectionEcotracer from '../components/home/SectionEcotracer';

// Importando as dependências
import React from 'react';

// Importando o Style
import { HomeStyle } from '../styles/HomeStyle'

const Home = () => {
  return (
    <>
    <HomeStyle>
      {/* Seção Home */}
      <SectionHome />
      {/* Seção About */}
      <SectionAbout />
    </HomeStyle>
      {/* Seção Pilots*/}
      <SectionPilots /> 
      {/* Seção Ecotracer */}
      <SectionEcotracer />
    </>
  )
}

export default Home
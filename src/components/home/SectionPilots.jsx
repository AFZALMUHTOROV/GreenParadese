// Importando Dependencias
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom';

// Importando Styles
import { SectionPilotsStyle, PilotsContainer, PilotsCard} from '../../styles/SectionPilotsStyle';

// Importando Imagens
import EdoardoMortara from '../../assets/home/pilots/pilot-1.png'
import NyckdeVries from '../../assets/home/pilots/pilot-2.png'

const SectionPilots = () => {

    // Função para mudar idioma
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setShowLanguages(false);
    };

    // Selecionar Piloto
    const [pilots, setPilots] = useState([]);
    useEffect(() => {
        fetch('https://api-tracer.vercel.app/pilots')
        .then((response) => response.json())
        .then((data) => setPilots(data))
    }, []);


    return (
        <>
            <SectionPilotsStyle>
                <PilotsContainer>

                    {/* Pilot 1 - Edoardo Mortara*/}
                    <PilotsCard>
                        <Link to=''>
                            <div>
                                <img  src={EdoardoMortara} alt="Edoardo Mortara" />
                            </div>
                        </Link>
                    </PilotsCard>

                    {/* Pilot 2 - Nicky de Vries*/}
                    <PilotsCard>
                        <Link to=''>
                            <div>
                                <img src={NyckdeVries} alt="Nyck de Vries"/>
                            </div>
                        </Link>
                    </PilotsCard>

                </PilotsContainer>
            </SectionPilotsStyle>
        </>
    )
}

export default SectionPilots

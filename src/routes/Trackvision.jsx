import React from 'react'
import { SolutionStyle, LeftDivStyle, RightDivStyle, InfoSolution, ContainerInfoSolution } from '../styles/SolutionStyle'
import trackvision from '../assets/home/banners/trackvision.png'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ButtonRedStyle } from '../styles/ButtonRedStyle'

// Itens TrackVision
const ItemSolution = () => {

    // Tradução
    const { t, i18n } = useTranslation();   
    // Função para mudar idioma
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const trackvisionItems = [
        {
            number: '',
            title: t('Malumotlar'),
            paragraph: t('awdjwakdhwakhdoawihdowahdiwhaidahwi dhawdawkldhwaklhdklawhkdwakldhawklhdkawhdwakld hwakldhawkldhawkldhawkldawhdklawhdklwahdklawdhkawldhawkldhawk ldhawkldahwkdlahwkdawhawhkawhkawlhwkhwkhwlkhawlkdh wlkdwhdlkwhdklwdhlkwdhawklhdawkldhawkhwakhwklawhkwhklwhdlakwh dawklhwaklhwawakldawkldhawkdlawhdawlkdawkld awklhdawklhdakwlhdklhawkldawkldawkdaklhwdlhawkdklhaw lkdhwldhjwkldwhnkdwkhdwhlkdwlkh'),
        },
        {
            number: '',
            title: t(''),
            paragraph: t('awdjwakdhwakhdoawihdowahdiwhaidahwi dhawdawkldhwaklhdklawhkdwakldhawklhdkawhdwakld hwakldhawkldhawkldhawkldawhdklawhdklwahdklawdhkawldhawkldhawk ldhawkldahwkdlahwkdawhawhkawhkawlhwkhwkhwlkhawlkdh wlkdwhdlkwhdklwdhlkwdhawklhdawkldhawkhwakhwklawhkwhklwhdlakwh dawklhwaklhwawakldawkldhawkdlawhdawlkdawkld awklhdawklhdakwlhdklhawkldawkldawkdaklhwdlhawkdklhaw lkdhwldhjwkldwhnkdwkhdwhlkdwlkh'),
        },
        {
            number: '',
            title: t(),
            paragraph: t('awdjwakdhwakhdoawihdowahdiwhaidahwi dhawdawkldhwaklhdklawhkdwakldhawklhdkawhdwakld hwakldhawkldhawkldhawkldawhdklawhdklwahdklawdhkawldhawkldhawk ldhawkldahwkdlahwkdawhawhkawhkawlhwkhwkhwlkhawlkdh wlkdwhdlkwhdklwdhlkwdhawklhdawkldhawkhwakhwklawhkwhklwhdlakwh dawklhwaklhwawakldawkldhawkdlawhdawlkdawkld awklhdawklhdakwlhdklhawkldawkldawkdaklhwdlhawkdklhaw lkdhwldhjwkldwhnkdwkhdwhlkdwlkh'),
        }
    ];

    return (
        <InfoSolution>
            {trackvisionItems.map((item, index) => (
                <ContainerInfoSolution key={index} className='grid'>
                    <p className='Number'>{item.number}</p>
                    <h1 className='TextH1'>{item.title}</h1>
                    <p className='ParagraphP'>{item.paragraph}</p>
                </ContainerInfoSolution>
            ))}

                <Link className='mt-6' to=''>
                    <ButtonRedStyle>QAYTISH</ButtonRedStyle>
                </Link>
        </InfoSolution>
    );
}


// Componente TrackVision
const Trackvision = () => {
    return (
        <SolutionStyle>
            <LeftDivStyle>
                <img src={trackvision} alt="TrackVision" />
            </LeftDivStyle>

            <RightDivStyle>
                <ItemSolution />
            </RightDivStyle>
        </SolutionStyle>
    )
}


export default Trackvision
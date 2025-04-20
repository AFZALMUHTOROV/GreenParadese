import TRacer from '../assets/app_mobile/celularReto.png'
import React from 'react'
import { SolutionStyle, LeftDivStyle, RightDivStyle, InfoSolution, ContainerInfoSolution } from '../styles/SolutionStyle'
import { ButtonRedStyle } from '../styles/ButtonRedStyle'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

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
            title: t(''),
            paragraph: t('awdjwakdhwakhdoawihdowahdiwhaidahwi dhawdawkldhwaklhdklawhkdwakldhawklhdkawhdwakld hwakldhawkldhawkldhawkldawhdklawhdklwahdklawdhkawldhawkldhawk ldhawkldahwkdlahwkdawhawhkawhkawlhwkhwkhwlkhawlkdh wlkdwhdlkwhdklwdhlkwdhawklhdawkldhawkhwakhwklawhkwhklwhdlakwh dawklhwaklhwawakldawkldhawkdlawhdawlkdawkld awklhdawklhdakwlhdklhawkldawkldawkdaklhwdlhawkdklhaw lkdhwldhjwkldwhnkdwkhdwhlkdwlkh'),
        },

        {
            number: '',
            title: t(''),
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

            <div className='w-full flex flex-wrap pl-4 pr-4 gap-4 mt-6 justify-around'>
                <Link to='/'>
                    <ButtonRedStyle>Bosh Sahifa</ButtonRedStyle>
                </Link>

                <Link to=''>
                    <ButtonRedStyle>Qaytish</ButtonRedStyle>
                </Link>
            </div>
        </InfoSolution>
    );
}


const App = () => {
    return (
        <SolutionStyle className='gap-10'>
            <LeftDivStyle>
                <img className='pt-7' src={TRacer} alt="TrackVision" />
            </LeftDivStyle>

            <RightDivStyle>
                <ItemSolution />
            </RightDivStyle>
        </SolutionStyle>
    )
}


export default App

// export default App;

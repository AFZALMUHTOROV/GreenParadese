// Importando Dependencias
import React from 'react'
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

// Importando Styles
import { SectionEcotracerStyle, EcotracerContent, EcotracerTitle, EcotracerParagraph} from '../../styles/SectionEcotracerStyle'

const SectionEcotracer = () => {

    // UseInView para animacoes
    const {ref:textEco, inView:textEcoVisible} = useInView({
        triggerOnce:true,
        threshold:0.3
    });

    // Função para mudar idioma
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setShowLanguages(false);
    };

    return (
        <>
        <SectionEcotracerStyle>

                {/* Conteúdo */}
                <EcotracerContent ref={textEco}>
                    {/* Título */}
                    <EcotracerTitle className={textEcoVisible ? 'text-animate' : ''}>
                        <h1>{t('Bizning')} <strong>Malumotlar</strong></h1>
                    </EcotracerTitle>
                    {/* Parágrafo */}
                    <EcotracerParagraph className={textEcoVisible ? 'text-animate' : ''}>
                        <p>{t('Bizning saytimiz sizga eng so‘nggi va ishonchli ko‘chmas mulk e’lonlarini taqdim etadi. Har bir e’lon professional tarzda tekshirilib, to‘liq ma’lumotlar bilan taqdim etiladi: uy joylashuvi, xonalar soni, umumiy maydoni, narxi hamda mulkka oid hujjat holati aniq ko‘rsatilgan. Saytimiz orqali siz uylarni xaritada ko‘rib chiqishingiz, rasmlarini tomosha qilishingiz hamda bevosita egasi yoki rieltor bilan bog‘lanishingiz mumkin. Maqsadimiz – sizga ishonchli, tezkor va qulay xizmat ko‘rsatishdir. Har bir mijozimiz uchun alohida yondashuv taklif qilamiz. Siz orzu qilgan uyni topishingizda bizga ishoning!')}</p>
                    </EcotracerParagraph>
                </EcotracerContent>

        </SectionEcotracerStyle>
        </>
    )
}

export default SectionEcotracer

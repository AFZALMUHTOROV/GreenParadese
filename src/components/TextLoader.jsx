// Importando Dependencias
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// Importando Styles
import { LoaderContainer, WordFixed, Word, WordsContainer, Card } from '../styles/TextLoaderStyle';


const TextLoader = () => {
    
    // Função para mudar de idioma
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setShowLanguages(false);
    };
    
    // Lista de palavras para aparecer no menu com traduções
    const words = [t('paradese'), t('homes'), t('market'), t('shop')];

    // UseState para trocar as palavras
    const [currentWord, setCurrentWord] = useState(0);

    // UseEffect para trocar as palavras
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWord((prevWord) => (prevWord + 1) % words.length);
        }, 3000);
        return () => clearInterval(interval);
        }, []);

    return (
        <Card>
            <LoaderContainer>
                {/* Palavra Fixada */}
                <WordFixed>GREEN</WordFixed> 
                <WordsContainer>
                    <Word key={currentWord}>{words[currentWord]}</Word>
                </WordsContainer>
            </LoaderContainer>
        </Card>
    );
};

export default TextLoader;
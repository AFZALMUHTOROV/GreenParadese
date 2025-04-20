import React from "react";
import { useTranslation } from 'react-i18next'

const Pricing = () => {

    // Tradução
    const { t, i18n } = useTranslation();
    // Função para mudar idioma
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <section className="bg-zinc-950">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        {t('choose')} <strong className="text-red-600 uppercase">{t('plan')}</strong>
                    </h2> 
                    <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
                        {t('sub-1-t-princing')}<br /> {t('sub-2-t-princing')}
                    </p>
                </div>

                <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                    {/* Pricing Card */}
                    <PricingCard
                        title="LOW CHARGE"
                        price="R$ 0"
                        description={t('sub-1-t-princing')}
                        features={[
                            t('beneficio-low-1'),
                            t('beneficio-low-2'),
                            t('beneficio-low-3'),
                        ]}
                    />
                    <PricingCard
                        title="HIGH VOLTAGE"
                        price={t('price-high')}
                        description={t('sub-1-t-princing')}
                        features={[
                            t('beneficio-high-1'),
                            t('beneficio-high-2'),
                            t('beneficio-high-3'),
                            t('beneficio-high-4'),
                            t('beneficio-high-5'),
                        ]}
                    />
                    <PricingCard
                        title="MAX POWER"
                        price={t('price-max')}
                        description={t('sub-1-t-princing')}
                        features={[
                            t('beneficio-max-1'),
                            t('beneficio-max-2'),
                            t('beneficio-max-3'),
                            t('beneficio-max-4'),
                            t('beneficio-max-5'),
                            t('beneficio-max-6'),
                            t('beneficio-max-7'),
                        ]}
                    />
                </div>
            </div>
        </section>
    );
};

const PricingCard = ({ title, price, description, features }) => {

    const title_color = {
        "LOW CHARGE":"red-600",
        "HIGH VOLTAGE": "white",
        "MAX POWER": "green-500"
    }

    // Tradução
    const { t, i18n } = useTranslation();
    // Função para mudar idioma
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="flex flex-col p-6 mx-auto max-w-lg text-center bg-white rounded-lg border border-gray-100 shadow dark:border-gray-800 xl:p-8 dark:bg-zinc-900">
            <h3 className={`mb-4 text-2xl font-semibold text-${title_color[title]}`}>{title}</h3>
            <p className="font-light text-gray-100 sm:text-lg dark:text-gray-400">
                {description}
            </p>
            <div className="flex justify-center items-baseline my-8 ">
                <span className="mr-2 text-5xl font-extrabold text-white">{price}</span>   
            </div>
            <ul role="list" className="mb-8 space-y-4 text-left">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                        <svg
                            className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        <span className="text-white">{feature}</span>
                    </li>
                ))}
            </ul>
            <button className="text-white uppercase bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all duration-300 ease-in-out">
                {t('garantir-acesso')}
            </button>
        </div>
    );
};

export default Pricing;

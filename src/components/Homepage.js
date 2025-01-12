import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';  // Import the LanguageSwitcher component

const HomePage = () => {
    const { t, i18n } = useTranslation();

    return (
        <>
            <div>
                <h1>{t('welcome_message')}</h1>  {/* Dynamic translation */}
                <button>{t('login')}</button>
                <button>{t('register')}</button>
            </div>
            <div>
                <LanguageSwitcher i18n={i18n} />
            </div>


            <h1>onkar joshi this is a page we need to accesses</h1>
        </>
    );
};

export default HomePage;

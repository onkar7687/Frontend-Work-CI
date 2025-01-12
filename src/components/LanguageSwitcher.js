import React from 'react';

const LanguageSwitcher = ({ i18n }) => {
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <>
            <button onClick={() => changeLanguage('en')}>English</button>
            <button onClick={() => changeLanguage('fr')}>Français</button>
            <button onClick={() => changeLanguage('es')}>Español</button>
        </>
    );
};

export default LanguageSwitcher;

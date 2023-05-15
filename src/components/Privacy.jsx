import React from 'react';
import '../styles/Legal_info.css';
import Header from './Header';
import Footer from './Footer';
import PrivacyText from './PrivacyText';
import BtnToMain from './BtnToMain';
import privacyPdf from '../styles/img/privacyPdf.svg' 
import pdf from '../docs/PrivacyPolitic.pdf'

const Privacy = () => {
    return ( 
        <div>
            <div className="container">
            <Header />
            <section className="privacy_content">
                <div className="privacyPdf item">
                    <img src={privacyPdf} width = '16.67' height = '18.33'alt="pdf_icon" />
                    <a href={pdf} className="pdfLink" target="_blank" rel="noopener noreferrer">Скачать в PDF</a>
                </div>
                <h4 className="h4 item">Политика конфиденциальности</h4>
                <div className="privacy_text item"> 
                   <PrivacyText />
                </div> 
                <div className="privacy_btnToMain item">
                    <BtnToMain />
                </div>  
            </section>
            <Footer />
            </div>
        </div>
    );
};

export default Privacy;

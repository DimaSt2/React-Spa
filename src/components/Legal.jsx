import React from 'react';
import '../styles/Legal_info.css';
import Header from './Header';
import Footer from './Footer';
import BtnToMain from './BtnToMain';
import mail from '../styles/img/mail.svg';

import { Link } from 'react-router-dom';
// import Privacy from './Privacy';

const Legal = () => {
    return (
        <div> 
           <div className="container">
            <Header />
            <section className="legal_content">
            <div className="registry_info">
                <p className="company_name">ООО “ФастКофе”</p>
                <p className="registry_data">
                    Свидетельство о регистрации номер 
                    123456789 <br />
                    Выдано Минским горисполкомом <br /> 
                    Дата выдачи 20.09.2021 <br />
                    УНП 123456789 
                </p>
                <p className="address">
                    Юридический и почтовый адрес: <br />
                    220030, г. Минск, пл. Свободы, 17
                </p>
            </div>
            <div className="mail">
                <img className="mail_img" src={mail} width = '15' height = '11' alt="mail" />
                <a href="https://www.google.com/" className="company_mail">hello@fastcoffee.com</a>
            </div>
            <Link to="https://www.google.com/" className="docs">Пользовательское соглашение</Link>
            <Link to="https://www.google.com/" className="docs">Согласие на обработку персональных данных</Link>
            <Link to="./Privacy" className="docs">Политика конфиденциальности</Link>
            <div className="legal_btnToMain">
                <BtnToMain />
            </div>    
            </section>
            <Footer />
            </div>      

            


        </div>
    );
};

export default Legal;

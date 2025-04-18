import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Portfolio.scss';
// import './../../components/Header/Header.scss';
import Dropdown from '../Dropdown/Dropdown';
import Footer from '../../HOME-PAGE/Footer/Footer';

import { ReactComponent as Envelope } from './../../images/svg1/envelope (hover).svg';
import { ReactComponent as Smartphone } from './../../images/svg1/smartphone.svg';
import AllPortfolio from './AllPortfolio/AllPortfolio';

const Portfolio = () => {
  const [t, i18n] = useTranslation('global');
  return (
    <>
      <header className="header header__line">
        <div className="container">
          <div className="header__wrap">
            {/* {isOpen ? (
              <button onClick={handleMenu}>Clouse</button>
            ) : (
              <button  onClick={handleMenu}>
                Open
              </button>
            )} */}
            <div className="mobile__wrap">
              <Link className="logo" to="/" aria-label="logo">
                <span className="logo__web">Web</span>
                <span className="logo__web">Dev</span>
                <span className="logo__studio">Studio</span>
              </Link>
              <Dropdown />

              <button
                aria-label="button open"
                type="button"
                className="mobile__btn is__open"
                data-menu-button
              ></button>
            </div>

            <div className="menu__burger" data-menu>
              <nav className="header__nav" aria-label="navigation">
                <ul className="menu">
                  <li className="menu__item">
                    <Link
                      className="menu__link js__link"
                      to="/"
                      aria-label="link to page home"
                    >
                      {t('header.home')}
                      {/* Home */}
                    </Link>
                  </li>
                  <li className="menu__item">
                    <Link
                      className="menu__link current"
                      to="/portfolio"
                      aria-label="link to page portfolio"
                    >
                      {t('header.portfolio')}
                      {/* Portfolio */}
                    </Link>
                  </li>
                  <li className="menu__item">
                    <a
                      className="menu__link"
                      href="/"
                      aria-label="link to page contact"
                    >
                      {t('header.contacts')}
                      {/* Contacts */}
                    </a>
                  </li>
                </ul>
                <ul className="menu__contacts">
                  <li className="contacts__item">
                    <a
                      aria-label="link to email"
                      className="contacts__link contacts__icon"
                      href="mailto:info@example.com"
                    >
                      <Envelope className="contacts__svg-envelope" />
                      audipunkwp@gmail.com
                    </a>
                  </li>

                  <li className="contacts__item">
                    <a
                      aria-label="link to phone"
                      className="contacts__link contacts__icon"
                      href="tel:+27 786858122"
                    >
                      <Smartphone className="contacts__svg" />
                      +27 786858122
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <AllPortfolio />
      <Footer />
    </>
  );
};

export default Portfolio;

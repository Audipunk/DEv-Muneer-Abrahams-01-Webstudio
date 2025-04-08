import React from 'react';
import './Footer.scss';

import { motion } from 'framer-motion';

import { useTranslation } from 'react-i18next';

import { ReactComponent as Instagram } from './../../images/svg1/instagram 2.svg';
import { ReactComponent as Twitter } from './../../images/svg1/twitter 1.svg';
import { ReactComponent as Facebook } from './../../images/svg1/facebook 1.svg';
import { ReactComponent as Linkedin } from './../../images/svg1/linkedin 1.svg';

const Animation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: custom => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
};

const Footer = () => {
  const [t, i18n] = useTranslation('global');
  return (
    <>
      <motion.footer initial="hidden" whileInView="visible" className="footer">
        <div className="container">
          <div className="footer-wrap">
            <motion.div
              custom={1}
              variants={Animation}
              className="footer-contact"
            >
              <a className="logo element-animation" href="!#">
                <span className="logo-web">Web</span>
                <span className="logo-web">Dev</span>
                <span className="logo-studio-footer">Studio</span>
              </a>
              <address className="address element-animation">
                <a
                  aria-label="link to map"
                  className="address-map"
                  href="https://www.google.com/maps/place/16+Cashel+Ave,+Zwartdam,+Cape+Town,+7760/@-33.9693714,18.5052141,17z/data=!3m1!4b1!4m6!3m5!1s0x1dcc434d01f62aa3:0x1520b7fa763066cf!8m2!3d-33.9693759!4d18.507789!16s%2Fg%2F11cskl44p0?entry=ttu&g_ep=EgoyMDI1MDQwNi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferer noreferrer"
                >
                  {t('footer.addres')}
                </a>
                <a
                  aria-label="link to email"
                  className="address-link"
                  href="mailto:audipunkwp@gmail.com"
                >
                  {t('footer.email')}
                </a>
                <a
                  aria-label="link to tel"
                  className="address-link no-margin"
                  href="tel:+27786858122"
                >
                  {t('footer.tel')}
                  {/* +27786858122 */}
                </a>
              </address>
            </motion.div>
            <motion.div
              custom={2}
              variants={Animation}
              className="footer-icons"
            >
              <b className="footer-text element-animation">
                {t('footer.social')}
                {/* Social media */}
              </b>
              <ul className="team-flex element-animation">
                <li className="footer-list-icon">
                 
                </li>
                <li className="footer-list-icon">
                  <a
                    href="https://twitter.com/?lang=uk"
                    aria-label="link to client1"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Twitter
                      aria-label="Ссилка на Twitter"
                      className="footer-icon"
                    />
                  </a>
                </li>
                <li className="footer-list-icon">
                  <a
                    href="https://www.facebook.com/"
                    aria-label="link to facebook"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Facebook
                      aria-label="Ссилка на facebook"
                      className="footer-icon"
                    />
                  </a>
                </li>
                <li className="footer-list-icon">
                  <a
                    href="https://www.linkedin.com/"
                    aria-label="link to linkedin"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Linkedin
                      aria-label="Ссилка на Linkedin"
                      className="footer-icon"
                    />
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.footer>
    </>
  );
};

export default Footer;

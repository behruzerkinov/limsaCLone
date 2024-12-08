import { useTranslation } from "react-i18next";
import "./Contacts.css";
import locationIcon from "../../assets/locationIcon.svg";
import phoneIcon from "../../assets/phoneIcon.svg";
import clockIcon from "../../assets/clockIcon.svg";
import shareIcon from "../../assets/shareIcon.svg";
import linkedinIcon from "../../assets/linkedinIcon.svg";
import instagramIcon from "../../assets/instagramIcon.svg";
import telegramIcon from "../../assets/telegramIcon.svg";
import limsaLogo from "../../assets/limsaLogoFooter.webp";

function Contacts() {
   const { t } = useTranslation();

   return (
      <div className="contactsContainer" id="contacts">
         <h1 data-aos="fade-up">{t('contacts.title')}</h1>

         <div className="contactsWrapper">
            <div className="contactsLeft">
               <div
                  className="contactItem"
                  data-aos="fade-up"
                  data-aos-delay="100"
               >
                  <img src={locationIcon} alt={t('contacts.address.title')} />
                  <div>
                     <h3>{t('contacts.address.title')}</h3>
                     <p>{t('contacts.address.value')}</p>
                  </div>
               </div>

               <div
                  className="contactItem"
                  data-aos="fade-up"
                  data-aos-delay="200"
               >
                  <img src={clockIcon} alt={t('contacts.workingHours.title')} />
                  <div>
                     <h3>{t('contacts.workingHours.title')}</h3>
                     <p>{t('contacts.workingHours.value')}</p>
                  </div>
               </div>

               <div
                  className="contactItem"
                  data-aos="fade-up"
                  data-aos-delay="300"
               >
                  <img src={phoneIcon} alt={t('contacts.phone.title')} />
                  <div>
                     <h3>{t('contacts.phone.title')}</h3>
                     <p>{t('contacts.phone.value')}</p>
                  </div>
               </div>

               <div
                  className="contactItem"
                  data-aos="fade-up"
                  data-aos-delay="400"
               >
                  <img src={shareIcon} alt={t('contacts.social.title')} />
                  <div>
                     <h3>{t('contacts.social.title')}</h3>
                     <div className="socialLinks">
                        <a href="https://www.linkedin.com/company/limsa-2021/" aria-label={t('contacts.social.linkedin')}>
                           <img src={linkedinIcon} alt="LinkedIn" />
                        </a>
                        <a href="https://www.instagram.com/limsa_uz/" aria-label={t('contacts.social.instagram')}>
                           <img src={instagramIcon} alt="Instagram" />
                        </a>
                        <a href="https://t.me/it_time" aria-label={t('contacts.social.telegram')}>
                           <img src={telegramIcon} alt="Telegram" />
                        </a>
                     </div>
                  </div>
               </div>
            </div>

            <div className="mapContainer" data-aos="fade-left">
               <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.6386281282316!2d69.28315707553132!3d41.33847079902883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b4e3088e9bf%3A0xdd9a89a16d423604!2sIT%20Time%20Academy!5e0!3m2!1sen!2s!4v1730203365105!5m2!1sen!2s"
                  width="600"
                  height="300"
                  style={{ border: "1px solid #6C2DBA", borderRadius: "10px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Limsa office location"
               ></iframe>
            </div>
         </div>

         <div className="footerContainer">
            <img src={limsaLogo} alt="Limsa Logo" />
            <p>{t('common.copyright')}</p>
         </div>
      </div>
   );
}

export default Contacts;

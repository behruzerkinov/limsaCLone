import { useTranslation } from "react-i18next";
import "./Services.css";
import serviceWebsite from "../../assets/serviceWebsite.jpg";
import serviceMobile from "../../assets/serviceMobile.png";
import serviceBot from "../../assets/serviceBot.png";
import serviceDesign from "../../assets/serviceDesign.jpg";
import responsive from "../../assets/responsive.png";

function Services() {
   const { t } = useTranslation();

   return (
      <div className="servicesContainer" id="services">
         <div className="servicesTitle" data-aos="fade-up">
            <h2>{t('services.title')}</h2>
         </div>

         <div className="serviceCard" data-aos="fade-up" data-aos-delay="100">
            <img src={serviceWebsite} alt={t('services.webDev.title')} className="serviceImage" />
            <div className="serviceContent">
               <h3 className="serviceTitle">{t('services.webDev.title')}</h3>
               <ul className="serviceFeatures">
                  <li>{t('services.webDev.features.marketing')}</li>
                  <li>{t('services.webDev.features.ecommerce')}</li>
                  <li>{t('services.webDev.features.education')}</li>
                  <li>{t('services.webDev.features.crm')}</li>
               </ul>
               <button className="serviceButton">{t('common.sendRequest')}</button>
            </div>
         </div>

         <div className="serviceCard" data-aos="fade-up" data-aos-delay="200">
            <img
               src={serviceMobile}
               alt={t('services.mobileDev.title')}
               className="serviceImage"
            />
            <div className="serviceContent">
               <h3 className="serviceTitle">{t('services.mobileDev.title')}</h3>
               <ul className="serviceFeatures">
                  <li>Android</li>
                  <li>iOS</li>
               </ul>
               <button className="serviceButton">{t('common.sendRequest')}</button>
            </div>
         </div>

         <div className="serviceCard" data-aos="fade-up" data-aos-delay="300">
            <img
               src={serviceBot}
               alt={t('services.telegramBot.title')}
               className="serviceImage"
            />
            <div className="serviceContent">
               <h3 className="serviceTitle">{t('services.telegramBot.title')}</h3>
               <ul className="serviceFeatures">
                  <li>{t('services.telegramBot.features.payment')}</li>
                  <li>{t('services.telegramBot.features.complex')}</li>
                  <li>{t('services.telegramBot.features.delivery')}</li>
                  <li>{t('services.telegramBot.features.integration')}</li>
               </ul>
               <button className="serviceButton">{t('common.sendRequest')}</button>
            </div>
         </div>

         <div className="serviceCard" data-aos="fade-up" data-aos-delay="400">
            <img
               src={serviceDesign}
               alt={t('services.design.title')}
               className="serviceImage"
            />
            <div className="serviceContent">
               <h3 className="serviceTitle">{t('services.design.title')}</h3>
               <ul className="serviceFeatures">
                  <li>{t('services.design.features.smm')}</li>
                  <li>{t('services.design.features.branding')}</li>
                  <li>{t('services.design.features.webBanners')}</li>
                  <li>{t('services.design.features.adBanners')}</li>
               </ul>
               <button className="serviceButton">{t('common.sendRequest')}</button>
            </div>
         </div>
         <div className="responsive-design-container">
            <div className="responsive-design-content" data-aos="fade-right">
               <h2 className="responsive-design-title text-lg">
                  {t('services.responsive.title')}
               </h2>
               <p className="responsive-design-description">
                  {t('services.responsive.description')}
               </p>
            </div>
            <div className="responsive-design-image" data-aos="fade-left">
               <img src={responsive} alt={t('services.responsive.title')} />
            </div>
         </div>
      </div>
   );
}

export default Services;

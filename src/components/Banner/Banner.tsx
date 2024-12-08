import { useTranslation } from "react-i18next";
import "./Banner.css";
import bannerImg from "../../assets/bannerImg.png";

function Banner() {
   const { t } = useTranslation();

   return (
      <div className="banner-container">
         <div className="banner-text" data-aos="fade-right">
            <h1 className="banner-title">
               {t('banner.title')}
            </h1>
            <p className="banner-description">
               {t('banner.description')}
            </p>
            <button className="contact-button">{t('banner.contactButton')}</button>
         </div>
         <div className="banner-image-container" data-aos="fade-left">
            <img
               src={bannerImg}
               alt="Banner"
               className="banner-image"
               loading="lazy"
            />
         </div>
      </div>
   );
}

export default Banner;

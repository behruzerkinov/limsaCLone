import { useTranslation } from "react-i18next";
import "./Partners.css";
import limsaLogo from "../../assets/projectsLogo.png";
import itTimeLogo from "../../assets/itTimeLogo.png";
import dezLogo from "../../assets/dezLogo.png";
import homeKitLogo from "../../assets/homeKitLogo.png";
import loyalLogo from "../../assets/loyalLogo.png";
import oitsLogo from "../../assets/oitsLogo.jpg";
import autoZoomLogo from "../../assets/autoZoomLogo.svg";

function Partners() {
   const { t } = useTranslation();

   return (
      <div className="partnersContainer" id="partners">
         <div className="partnersPageTexts">
            <div className="partnersLogoContainer">
               <img
                  src={limsaLogo}
                  className="partnersLogo"
                  alt="Limsa Company Logo"
               />
            </div>
            <h1>
               {t('partners.description')}
            </h1>
            <div className="partnersNumbers">
               <div className="projectsNumber">
                  <div className="numberOfProjects">500+</div>
                  <div>{t('partners.stats.projects')}</div>
               </div>
               <div className="clientsNumber">
                  <div className="numberOfClients">20+</div>
                  <div>{t('partners.stats.clients')}</div>
               </div>
            </div>
         </div>
         <div className="partnersPageLogos">
            <div className="logo">
               <img src={itTimeLogo} alt="ItTime Logo" />
               <h3>It Time</h3>
            </div>
            <div className="logo">
               <img src={dezLogo} alt="Dezinfeksiya Taskent Logo" />
               <h3>Dezinfeksiya Tashkent</h3>
            </div>
            <div className="logo">
               <img src={homeKitLogo} alt="Homekit Logo  " />
               <h3>HomeKit</h3>
            </div>
            <div className="logo">
               <img src={loyalLogo} alt="Loyal Advokatlik Byurosi Logo" />
               <h3>Loyal</h3>
            </div>
            <div className="logo">
               <img src={oitsLogo} alt="Namangan OITS Logo" />
               <h3>Namangan OITS</h3>
            </div>
            <div className="logo">
               <img src={autoZoomLogo} alt="Auto Zoom Car Rental Logo" />
               <h3>Auto zoom</h3>
            </div>
         </div>
      </div>
   );
}

export default Partners;

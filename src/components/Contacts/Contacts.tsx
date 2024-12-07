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
  return (
    <div className="contactsContainer">
      <h1 data-aos="fade-up">Contacts</h1>

      <div className="contactsWrapper">
        <div className="contactsLeft">
          <div className="contactItem" data-aos="fade-up" data-aos-delay="100">
            <img src={locationIcon} alt="location icon" />
            <div>
              <h3>Manzil</h3>
              <p>Toshkent shahar Yunusobod tumani</p>
            </div>
          </div>

          <div className="contactItem" data-aos="fade-up" data-aos-delay="200">
            <img src={clockIcon} alt="clock icon" />
            <div>
              <h3>Ish vaqti</h3>
              <p>9:00 18:00 Mon-Sat</p>
            </div>
          </div>

          <div className="contactItem" data-aos="fade-up" data-aos-delay="300">
            <img src={phoneIcon} alt="phone icon" />
            <div>
              <h3>Telefon raqami</h3>
              <p>+998 (93) 513-88-33</p>
            </div>
          </div>

          <div className="contactItem" data-aos="fade-up" data-aos-delay="400">
            <img src={shareIcon} alt="social icon" />
            <div>
              <h3>Ijtimoiy hisoblar</h3>
              <div className="socialLinks">
                <a href="https://www.linkedin.com/company/limsa-2021/">
                  <img src={linkedinIcon} alt="linkedin" />
                </a>
                <a href="https://www.instagram.com/limsa_uz/">
                  <img src={instagramIcon} alt="instagram" />
                </a>
                <a href="https://t.me/it_time">
                  <img src={telegramIcon} alt="telegram" />
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
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

      <div className="footerContainer">
        <img src={limsaLogo} alt="Limsa Logo" />
        <p> 2024 Limsa. Barcha huquqlar himoyalangan.</p>
      </div>
    </div>
  );
}

export default Contacts;

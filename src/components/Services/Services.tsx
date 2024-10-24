import "./Services.css";
import serviceWebsite from "../../assets/serviceWebsite.jpg";
import serviceMobile from "../../assets/serviceMobile.png";
import serviceBot from "../../assets/serviceBot.png";
import serviceDesign from "../../assets/serviceDesign.jpg";
import responsive from "../../assets/responsive.png";

function Services() {
  return (
    <div className="servicesContainer">
      <h2 className="servicesTitle">Xizmat turlari</h2>

      <div className="serviceCard">
        <img src={serviceWebsite} alt="Veb-sayt" className="serviceImage" />
        <div className="serviceContent">
          <h3 className="serviceTitle">Veb-sayt</h3>
          <ul className="serviceFeatures">
            <li>Marketing va biznes uchun saytlar</li>
            <li>Internet do'konlar</li>
            <li>Ta'lim platformasi To'lov tizimlari</li>
            <li>Veb-dasturlar, CRM, LMS tizimlari</li>
          </ul>
          <button className="serviceButton">Hozir so'rov yuborish</button>
        </div>
      </div>

      <div className="serviceCard">
        <img
          src={serviceMobile}
          alt="Mobil ilovalar"
          className="serviceImage"
        />
        <div className="serviceContent">
          <h3 className="serviceTitle">Mobil ilovalar</h3>
          <ul className="serviceFeatures">
            <li>Android</li>
            <li>iOS</li>
          </ul>
          <button className="serviceButton">Hozir so'rov yuborish</button>
        </div>
      </div>

      <div className="serviceCard">
        <img src={serviceBot} alt="Telegram botlari" className="serviceImage" />
        <div className="serviceContent">
          <h3 className="serviceTitle">Telegram botlari</h3>
          <ul className="serviceFeatures">
            <li>To'lov tizimlariga ulangan botlar</li>
            <li>Barcha murakkablikdagi botlar</li>
            <li>Yetkazib berish va taxi buyurtma botlari</li>
            <li>Saytga botlar integratsiya qilish</li>
          </ul>
          <button className="serviceButton">Hozir so'rov yuborish</button>
        </div>
      </div>

      <div className="serviceCard">
        <img
          src={serviceDesign}
          alt="Grafika dizayni"
          className="serviceImage"
        />
        <div className="serviceContent">
          <h3 className="serviceTitle">Grafika dizayni</h3>
          <ul className="serviceFeatures">
            <li>SMM dizaynlari</li>
            <li>Brending va logotip</li>
            <li>Vebsayt uchun bannerlari</li>
            <li>Reklama bannerlari</li>
          </ul>
          <button className="serviceButton">Hozir so'rov yuborish</button>
        </div>
      </div>
      <div className="responsive-design-container">
        <div className="responsive-design-image">
          <img src={responsive} alt="Responsive design across devices" />
        </div>
        <div className="responsive-design-content">
          <p className="responsive-design-subtitle">Javobgar</p>
          <h2 className="responsive-design-title">
            Har qanday ekran o'lchamiga mos keladigan veb-ilovalar
          </h2>
          <p className="responsive-design-description">
            Startapo veb-saytingiz yoki mobil ilovangiz barcha qurilmalarda
            birdek yaxshi ishlashini ta'minlaydi.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;

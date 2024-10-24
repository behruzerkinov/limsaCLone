import "./Banner.css";
import bannerImg from "../../assets/bannerImg.png";

function Banner() {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <h1 className="banner-title">
          SIZNING BIZNESINGIZNI<br />
          RIVOJLANTIRISH UCHUN<br />
          MUKAMMAL <span className="highlight-it">'IT'</span> YECHIMLAR!
        </h1>
        <p className="banner-description">
          Loyihangizni 10 yildan ortiq tajribaga ega<br />
          mutaxassislarga ishonib topshiring va qisqa vaqt ichida<br />
          yuqori muvaffaqiyatlarga erishing.
        </p>
        <button className="contact-button">Aloqa</button>
      </div>
      <div className="banner-image-container">
        <img src={bannerImg} alt="Banner" className="banner-image" />
      </div>
    </div>
  );
}

export default Banner;

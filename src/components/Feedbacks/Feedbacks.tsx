import "./Feedbacks.css";
import feedbacksLogo from "../../assets/feedbacksLogo.svg";
import feedbacksAvatar from "../../assets/feedbacksAvatar.svg";

const feedbacks = [
  {
    id: 1,
    name: "Sevara Ataeva",
    comment:
      "The website of our company was prepared by the graduates of this place, it turned out great.",
  },
  {
    id: 2,
    name: "Muhammad Umarov",
    comment: "👍 👍 👍 👍 ...",
  },
  {
    id: 3,
    name: "Ismoiljon Madgaziyev",
    comment:
      "5 yillik tajribaga ega Full stack web dasturchi va grafik dizayner",
  },
];

function Feedbacks() {
  return (
    <div className="feedbacksContainer">
      <div className="feedbacksLogoContainer">
        <img src={feedbacksLogo} alt="Feedbacks Logo" />
      </div>
      <div className="feedbacksTitle">
        <p>Hamkorlarimizning fikrlari</p>
      </div>
      <div className="feedbacksGrid">
        {feedbacks.map((feedback) => (
          <div key={feedback.id} className="feedbackCard">
            <div className="avatarContainer">
              <img src={feedbacksAvatar} alt={feedback.name} />
            </div>
            <h3 className="feedbackName">{feedback.name}</h3>
            <p className="feedbackComment">{feedback.comment}</p>
          </div>
        ))}
      </div>
      <div className="connectionContainer">
        <div className="connectionTitle">
          <h1>Bizga ma'lumotingizni qoldiring</h1>
        </div>
        <div className="connectionSubtitle">
          <p>Xodimlarimiz tez orada siz bilan bog'lanadi</p>
        </div>
        <div className="connectionForm">
          <div>
            <input type="text" placeholder="Ismingizni kiriting" />
            <input type="text" placeholder="+998-___-__-__" />
          </div>
          <textarea placeholder="Sizga qanday yordam bera olamiz?" />
          <button>Yuborish</button>
        </div>
      </div>
    </div>
  );
}

export default Feedbacks;

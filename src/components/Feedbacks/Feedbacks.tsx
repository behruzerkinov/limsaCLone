import { useTranslation } from "react-i18next";
import "./Feedbacks.css";
import feedbacksLogo from "../../assets/feedbacksLogo.svg";
import feedbacksAvatar from "../../assets/feedbacksAvatar.svg";

interface FeedbackItem {
   name: string;
   comment: string;
}

function Feedbacks() {
   const { t } = useTranslation();

   const feedbacks: FeedbackItem[] = t('feedbacks.items', { returnObjects: true });

   return (
      <div className="feedbacksContainer">
         <div className="feedbacksLogoContainer">
            <img src={feedbacksLogo} alt="Feedbacks Logo" />
         </div>
         <div className="feedbacksTitle">
            <p>{t('feedbacks.title')}</p>
         </div>
         <div className="feedbacksGrid">
            {feedbacks.map((feedback, index) => (
               <div key={index} className="feedbackCard">
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
               <h1>{t('feedbacks.connection.title')}</h1>
            </div>
            <div className="connectionSubtitle">
               <p>{t('feedbacks.connection.subtitle')}</p>
            </div>
            <div className="connectionForm">
               <div>
                  <input 
                     type="text" 
                     placeholder={t('contacts.form.name.placeholder')} 
                     aria-label={t('contacts.form.name.label')}
                  />
                  <input 
                     type="tel" 
                     placeholder={t('contacts.form.phone.placeholder')}
                     aria-label={t('contacts.form.phone.label')}
                  />
               </div>
               <textarea 
                  placeholder={t('contacts.form.message.placeholder')}
                  aria-label={t('contacts.form.message.label')}
               />
               <button>{t('contacts.form.submit')}</button>
            </div>
         </div>
      </div>
   );
}

export default Feedbacks;

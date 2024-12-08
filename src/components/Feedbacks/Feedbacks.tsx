import { useTranslation } from "react-i18next";
import "./Feedbacks.css";
import feedbacksLogo from "../../assets/feedbacksLogo.svg";
import feedbacksAvatar from "../../assets/feedbacksAvatar.svg";

interface FeedbackItem {
   id: number;
   nameKey: string;
   commentKey: string;
}

const feedbackItems: FeedbackItem[] = [
   {
      id: 1,
      nameKey: 'feedbacks.items.0.name',
      commentKey: 'feedbacks.items.0.comment'
   },
   {
      id: 2,
      nameKey: 'feedbacks.items.1.name',
      commentKey: 'feedbacks.items.1.comment'
   },
   {
      id: 3,
      nameKey: 'feedbacks.items.2.name',
      commentKey: 'feedbacks.items.2.comment'
   }
];

function Feedbacks() {
   const { t } = useTranslation();

   return (
      <div className="feedbacksContainer">
         <div className="feedbacksLogoContainer">
            <img src={feedbacksLogo} alt="Feedbacks Logo" />
         </div>
         <div className="feedbacksTitle">
            <p>{t('feedbacks.title')}</p>
         </div>
         <div className="feedbacksGrid">
            {feedbackItems.map((feedback) => (
               <div key={feedback.id} className="feedbackCard">
                  <div className="avatarContainer">
                     <img src={feedbacksAvatar} alt={t(feedback.nameKey)} />
                  </div>
                  <h3 className="feedbackName">{t(feedback.nameKey)}</h3>
                  <p className="feedbackComment">{t(feedback.commentKey)}</p>
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

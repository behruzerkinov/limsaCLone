import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  uz: {
    translation: {
      common: {
        sendRequest: "Hozir so'rov yuborish",
        copyright: "2024 Limsa. Barcha huquqlar himoyalangan."
      },
      nav: {
        partners: "Bizning Hamkorlar",
        projects: "Loyihalar",
        services: "Xizmatlar",
        contacts: "Aloqa"
      },
      banner: {
        title: "SIZNING BIZNESINGIZNI RIVOJLANTIRISH UCHUN MUKAMMAL 'IT' YECHIMLAR!",
        description: "Loyihangizni 10 yildan ortiq tajribaga ega mutaxassislarga ishonib topshiring va qisqa vaqt ichida yuqori muvaffaqiyatlarga erishing.",
        contactButton: "Aloqa"
      },
      services: {
        title: "Xizmat turlari",
        webDev: {
          title: "Veb-sayt",
          features: {
            marketing: "Marketing va biznes uchun saytlar",
            ecommerce: "Internet do'konlar",
            education: "Ta'lim platformasi To'lov tizimlari",
            crm: "Veb-dasturlar, CRM, LMS tizimlari"
          }
        },
        mobileDev: {
          title: "Mobil ilovalar",
          description: "iOS va Android uchun mobil ilovalar yaratamiz"
        },
        telegramBot: {
          title: "Telegram botlari",
          features: {
            payment: "To'lov tizimlariga ulangan botlar",
            complex: "Barcha murakkablikdagi botlar",
            delivery: "Yetkazib berish va taxi buyurtma botlari",
            integration: "Saytga botlar integratsiya qilish"
          }
        },
        design: {
          title: "Grafika dizayni",
          features: {
            smm: "SMM dizaynlari",
            branding: "Brending va logotip",
            webBanners: "Vebsayt uchun bannerlari",
            adBanners: "Reklama bannerlari"
          }
        },
        responsive: {
          title: "Har qanday ekran o'lchamiga mos keladigan veb-ilovalar",
          description: "Startapo veb-saytingiz yoki mobil ilovangiz barcha qurilmalarda birdek yaxshi ishlashini ta'minlaydi."
        }
      },
      projects: {
        title: "Bizning loyihalar",
        subtitle: "Biz bilan hamkorlik qilgan kompaniyalar",
        items: {
          construction: "Atayev Bahodir Qurilish kompaniyasi",
          carRental: "Toshkentda avtomobil ijarasi",
          dezinfection: "Dezinfeksiya xizmati",
          homeKit: "Aqlli uy uchun Home Kit ilovasi",
          itEducation: "Onlayn IT ta'lim platformasi",
          humanitarian: "Gumanitar yordam xizmati",
          tourism: "Turizm sayohat firmasi"
        }
      },
      partners: {
        title: "Bizning Hamkorlar",
        description: "Bizga ishongan odamlar soni va muvaffaqiyatli loyihalar soni",
        stats: {
          projects: "Tugallangan loyihalar",
          clients: "Mijozlar"
        }
      },
      contacts: {
        title: "Kontaktlar",
        address: {
          title: "Manzil",
          value: "Toshkent shahar Yunusobod tumani"
        },
        workingHours: {
          title: "Ish vaqti",
          value: "9:00 18:00 Dush-Shan"
        },
        phone: {
          title: "Telefon raqami",
          value: "+998 (93) 513-88-33"
        },
        social: {
          title: "Ijtimoiy hisoblar",
          linkedin: "LinkedIn sahifamiz",
          instagram: "Instagram sahifamiz",
          telegram: "Telegram kanalimiz"
        },
        form: {
          name: {
            label: "Ismingiz",
            placeholder: "Ismingizni kiriting"
          },
          phone: {
            label: "Telefon raqamingiz",
            placeholder: "+998 (__) ___-__-__"
          },
          message: {
            label: "Xabar",
            placeholder: "Xabaringizni kiriting"
          },
          submit: "Yuborish"
        }
      },
      feedbacks: {
        title: "Hamkorlarimizning fikrlari",
        connection: {
          title: "Bizga ma'lumotingizni qoldiring",
          subtitle: "Xodimlarimiz tez orada siz bilan bog'lanadi"
        },
        items: [
          {
            name: "Sevara Ataeva",
            comment: "Kompaniyamizning veb-sayti shu yerning bitiruvchilari tomonidan tayyorlangan, ajoyib chiqdi."
          },
          {
            name: "Muhammad Umarov",
            comment: "👍 👍 👍 👍 ..."
          },
          {
            name: "Ismoiljon Madgaziyev",
            comment: "5 yillik tajribaga ega Full stack web dasturchi va grafik dizayner"
          }
        ]
      }
    }
  },
  ru: {
    translation: {
      common: {
        sendRequest: "Отправить запрос сейчас",
        copyright: "2024 Limsa. Все права защищены."
      },
      nav: {
        partners: "Наши Партнеры",
        projects: "Проекты",
        services: "Услуги",
        contacts: "Контакты"
      },
      banner: {
        title: "СОВЕРШЕННЫЕ 'IT' РЕШЕНИЯ ДЛЯ РАЗВИТИЯ ВАШЕГО БИЗНЕСА!",
        description: "Доверьте свой проект специалистам с более чем 10-летним опытом и достигайте высоких результатов в короткие сроки.",
        contactButton: "Связаться"
      },
      services: {
        title: "Наши Услуги",
        webDev: {
          title: "Веб-сайт",
          features: {
            marketing: "Сайты для маркетинга и бизнеса",
            ecommerce: "Интернет-магазины",
            education: "Образовательные платформы",
            crm: "Веб-приложения, CRM, LMS системы"
          }
        },
        mobileDev: {
          title: "Мобильные приложения",
          description: "Разрабатываем приложения для iOS и Android"
        },
        telegramBot: {
          title: "Telegram боты",
          features: {
            payment: "Боты с интеграцией платежных систем",
            complex: "Боты любой сложности",
            delivery: "Боты для доставки и такси",
            integration: "Интеграция ботов с сайтом"
          }
        },
        design: {
          title: "Графический дизайн",
          features: {
            smm: "SMM дизайн",
            branding: "Брендинг и логотипы",
            webBanners: "Баннеры для сайтов",
            adBanners: "Рекламные баннеры"
          }
        },
        responsive: {
          title: "Адаптивные веб-приложения",
          description: "Мы обеспечиваем отличную работу вашего сайта или мобильного приложения на всех устройствах."
        }
      },
      projects: {
        title: "Наши проекты",
        subtitle: "Компании, которые с нами сотрудничают",
        items: {
          construction: "Строительная компания Атаева Баходира",
          carRental: "Аренда автомобилей в Ташкенте",
          dezinfection: "Служба дезинфекции",
          homeKit: "Приложение Home Kit для умного дома",
          itEducation: "Онлайн IT образовательная платформа",
          humanitarian: "Служба гуманитарной помощи",
          tourism: "Туристическая фирма"
        }
      },
      partners: {
        title: "Наши Партнеры",
        description: "Количество людей и успешных проектов, доверивших нам свой бизнес",
        stats: {
          projects: "Завершенные проекты",
          clients: "Клиенты"
        }
      },
      contacts: {
        title: "Контакты",
        address: {
          title: "Адрес",
          value: "г. Ташкент, Юнусабадский район"
        },
        workingHours: {
          title: "Режим работы",
          value: "9:00 18:00 Пн-Сб"
        },
        phone: {
          title: "Номер телефона",
          value: "+998 (93) 513-88-33"
        },
        social: {
          title: "Социальные сети",
          linkedin: "Наша страница LinkedIn",
          instagram: "Наш Instagram",
          telegram: "Наш Telegram канал"
        },
        form: {
          name: {
            label: "Ваше имя",
            placeholder: "Введите ваше имя"
          },
          phone: {
            label: "Ваш номер телефона",
            placeholder: "+998 (__) ___-__-__"
          },
          message: {
            label: "Сообщение",
            placeholder: "Введите ваше сообщение"
          },
          submit: "Отправить"
        }
      },
      feedbacks: {
        title: "Отзывы наших партнеров",
        connection: {
          title: "Оставьте нам свои данные",
          subtitle: "Наши сотрудники свяжутся с вами в ближайшее время"
        },
        items: [
          {
            name: "Севара Атаева",
            comment: "Веб-сайт нашей компании был подготовлен выпускниками этого места, получилось отлично."
          },
          {
            name: "Мухаммад Умаров",
            comment: "👍 👍 👍 👍 ..."
          },
          {
            name: "Исмоилжон Мадгазиев",
            comment: "Full stack веб-разработчик и графический дизайнер с 5-летним опытом"
          }
        ]
      }
    }
  },
  en: {
    translation: {
      common: {
        sendRequest: "Send Request Now",
        copyright: "2024 Limsa. All rights reserved."
      },
      nav: {
        partners: "Our Partners",
        projects: "Projects",
        services: "Services",
        contacts: "Contact"
      },
      banner: {
        title: "PERFECT 'IT' SOLUTIONS TO GROW YOUR BUSINESS!",
        description: "Trust your project to specialists with more than 10 years of experience and achieve high success in a short time.",
        contactButton: "Contact"
      },
      services: {
        title: "Our Services",
        webDev: {
          title: "Website",
          features: {
            marketing: "Marketing and Business Websites",
            ecommerce: "E-commerce Stores",
            education: "Educational Platforms",
            crm: "Web Applications, CRM, LMS Systems"
          }
        },
        mobileDev: {
          title: "Mobile Applications",
          description: "We develop apps for iOS and Android"
        },
        telegramBot: {
          title: "Telegram Bots",
          features: {
            payment: "Payment System Integrated Bots",
            complex: "Bots of Any Complexity",
            delivery: "Delivery and Taxi Order Bots",
            integration: "Website Bot Integration"
          }
        },
        design: {
          title: "Graphic Design",
          features: {
            smm: "SMM Designs",
            branding: "Branding and Logo",
            webBanners: "Website Banners",
            adBanners: "Advertising Banners"
          }
        },
        responsive: {
          title: "Responsive Web Applications",
          description: "We ensure your website or mobile app works perfectly across all devices."
        }
      },
      projects: {
        title: "Our Projects",
        subtitle: "Companies that collaborate with us",
        items: {
          construction: "Atayev Bahodir Build Construction Company",
          carRental: "Car Rental Company in Tashkent",
          dezinfection: "Dezinfection Service",
          homeKit: "Home Kit App for Smart Home",
          itEducation: "Online IT Education Platform",
          humanitarian: "Humanitarian Help Service",
          tourism: "Tourism Tour Firm"
        }
      },
      partners: {
        title: "Our Partners",
        description: "Number of people and successful projects who trusted us with their business",
        stats: {
          projects: "Completed Projects",
          clients: "Clients"
        }
      },
      contacts: {
        title: "Contacts",
        address: {
          title: "Address",
          value: "Tashkent city, Yunusabad district"
        },
        workingHours: {
          title: "Working Hours",
          value: "9:00 18:00 Mon-Sat"
        },
        phone: {
          title: "Phone Number",
          value: "+998 (93) 513-88-33"
        },
        social: {
          title: "Social Accounts",
          linkedin: "Our LinkedIn Page",
          instagram: "Our Instagram",
          telegram: "Our Telegram Channel"
        },
        form: {
          name: {
            label: "Your Name",
            placeholder: "Enter your name"
          },
          phone: {
            label: "Your Phone Number",
            placeholder: "+998 (__) ___-__-__"
          },
          message: {
            label: "Message",
            placeholder: "Enter your message"
          },
          submit: "Send"
        }
      },
      feedbacks: {
        title: "Our Partners' Feedback",
        connection: {
          title: "Leave us your information",
          subtitle: "Our team will contact you soon"
        },
        items: [
          {
            name: "Sevara Ataeva",
            comment: "The website of our company was prepared by the graduates of this place, it turned out great."
          },
          {
            name: "Muhammad Umarov",
            comment: "👍 👍 👍 👍 ..."
          },
          {
            name: "Ismoiljon Madgaziyev",
            comment: "Full stack web developer and graphic designer with 5 years of experience"
          }
        ]
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'uz',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;

const data = {
    name: {
        pl: 'Vitalii Danylevskyi',
        en: 'Vitalii Danylevskyi',
        ua: 'Віталій Данилевський',
        ru: 'Виталий Данилевский'
    },
    myPosition: {
        pl: 'Szukam pracy na stanowisko:',
        en: 'Looking for a job for a position:',
        ua: 'Шукаю роботу на посаду:',
        ru: 'Ищу работу на должность:'
    },
    city: {
        pl: 'Miasto: Warszawa, Polska',
        en: 'City: Warsaw, Poland',
        ua: 'Мiсто: Варшава, Польща',
        ru: 'Город: Варшава, Польша'
    },
    softSkillsTitle: {
        pl: 'O mnie: ',
        en: 'About me: ',
        ua: 'Про мене: ',
        ru: 'Обо мне:'
    },
    softSkillsText: {
        pl: 'W swoim życiu pracowałem w różnych firmach, krajach i w różnych zespołach. To doświadczenie rozwinęło we mnie umiejętność dostosowania się do otoczenia i rozumienia ludzi. Uwielbiam i umiem pracować w zespole, a w razie potrzeby potrafię go poprowadzić i zapewnić wysoką produktywność. Odporny na stres, towarzyski, łatwy do studij.',
        en: 'In my life I have worked in different companies, countries and in different teams. This experience has developed in me the ability to adapt to the environment and understand people. I love and know how to work in a team and, if necessary, I can lead it and ensure high productivity. Stress-resistant, sociable, easy to train.',
        ua: 'У своєму житті я працював в різних компаніях, країнах і в різних колективах. Цей досвід розвинув в мені здатність пристосовуватися до навколишнього оточення і розбиратися в людях. Люблю і вмію працювати в команді і в разі необхідності можу її очолити і забезпечити високу продуктивність. Стресостійкий, комунікабельний, легко вчуся.',
        ru: 'В своей жизни я работал в разных компаниях, странах и в разных коллективах. Этот опыт развил во мне способность приспосабливаться к окружающей обстановке и разбираться в людях. Люблю и умею работать в команде и в случае необходимости могу ее возглавить и обеспечить высокую производительность. Стрессоустойчив, коммуникабелен, легко-обучаем.'
    },
    hardSkillsTitle: {
        pl: 'Technologie: ',
        en: 'Technologies: ',
        ua: 'Технології: ',
        ru: 'Технологии: '
    },
    languagesTitle: {
        pl: 'Języki: ',
        en: 'Languages: ',
        ua: 'Мови:',
        ru: 'Языки: '
    },
    projectsTitle: {
        pl: 'Moje projekty: ',
        en: 'My projects: ',
        ua: 'Мої проекти:',
        ru: 'Мои проекты: '
    },
    projectDescription: {
        projectToDoList: {
            pl: 'Dość standardowy projekt dla początkującego programisty, ale zrobiłem to po to, aby poćwiczyć z technologią Context (Redux) i Firebase oraz trochę animacji.',
            en: 'A fairly standard project for a novice programmer, but I did it in order to practice with the Context technology (Redux) and Firebase and a little animation.',
            ua: 'Досить стандартний проект для програміста початківця, але я його зробив для того, щоб потренуватися з технологією Context (Redux) і Firebase ну і трохи анімації.',
            ru: 'Достаточно стандартный проект для начинающего программиста, но я его делал для того, чтобы потренироваться с технологией Context (Redux) и Firebase ну и немного анимации.'
        },
        projectCV: {
            pl: 'Korzystanie z React-Route, rozwiązanie problemu wielojęzyczności witryny. Animacja z SASS (CSS)',
            en: 'Using React-Route, solving the issue of site multi-languages. Animation with SASS (CSS)',
            ua: 'За допомогою React-Route вирішення питання багатомовності сайту. Анімація за допомогою SASS (CSS)',
            ru: 'При помощи React-Route решение вопроса мультиязычности сайта. Анимация при помощи SASS (CSS)'
        },
        projectNordFrost: {
            pl: 'Ten projekt działa i jest używany w firmie. Zawiera różnego rodzaju formularze i sprawdzanie poprawności danych. Zaprojektowany w celu automatyzacji procesów pracy w firmie.',
            en: 'This project is working and is used in the company. Packed with all sorts of forms and data validation. Designed to automate work processes in a company.',
            ua: 'Даний проект робочий і використовується в фірмі. Насичений всілякими формами і валідаціями даних. Призначений для автоматизації робочих процесів в компанії.',
            ru: 'Данный проект рабочий и используется в фирме. Насыщен всевозможными формами и валидацией данных. Предназначен для автоматизации рабочих процессов в компании.'
        }
    },
    educationTitle: {
        pl: 'Edukacja:',
        en: 'Education:',
        ua: 'Освіта:',
        ru: 'Образование:'
    },
    education: {
        codersLab: {
            pl: '"Szkoła IT CodersLab"',
            en: '"IT-school CodersLab"',
            ua: '"IT-школа CodersLab"',
            ru: '"IT-школа CodersLab"'
        },
        university: {
            pl: '"Kryvyi Rih National University"',
            en: '"Kryvyi Rih National University"',
            ua: '"Криворізький національний університет"',
            ru: '"Криворожский национальный университет"'
        }
    },
    workExperienceTitle: {
        pl: 'Doświadczenie zawodowe:',
        en: 'Work experience:',
        ua: 'Досвід роботи:',
        ru: 'Опыт работы:'
    },
    workExperience: {
        pl: [
            {
                period: '08.2019 - obecnie',
                company: '“NordFrost.PL Dystrybucja” Sp z o.o',
                country: 'Miasto: Warszawa, Polska',
                position: 'Analityk systemu komputerowego'
            },
            {
                period: '10.2018 - 02.2019',
                company: '“BUDTEHSERVIS” Sp z o.o',
                country: 'Miasto: Warszawa, Polska',
                position: 'Menedżer kryzysowy'
            },
            {
                period: '07.2016 - 10.2018',
                company: '“Spec-Bud” Sp z o.o.',
                country: 'Miasto: Rzeszów, Polska / Wilno, Litwa',
                position: 'Współwłaściciel'
            },
            {
                period: '01.2015 - 07.2016',
                company: '“Galbud” Sp z o.o',
                country: 'Miasto: Rzeszów, Polska / Wilno, Litwa',
                position: 'Współwłaściciel'
            },
            {
                period: '07.2014 - 12.2014',
                company: 'UAB “Promfactor”',
                country: 'Miasto: Šiauliai, Litwa',
                position: 'Menedżer kryzysowy'
            },
            {
                period: '06.2011 - 02.2013',
                company: '“Western Pipeline Company” LLC',
                country: 'Miasto: Ivano Frankivsk, Ukraina',
                position: 'Dyrektor'
            },
            {
                period: '08.2008 - 06.2011',
                company: 'CJSC “Electrograd”',
                country: 'Miasto: Kryvyi Rih, Ukraina',
                position: 'Główny inżynier Departamentu Działalności Międzynarodowej Gospodarczej'
            },
            {
                period: '11.2007 - 08.2008',
                company: '"Electrograd" LLC',
                country: 'Miasto: Moskwa, Rosja',
                position: 'Dyrektor Handlowy'
            },
            {
                period: '07.2006 - 11.2007',
                company: 'CJSC “Electrograd”',
                country: 'Miasto: Kryvyi Rih, Ukraina',
                position: 'Manager Zespołu Sprzedaży'
            },
            {
                period: '01.2005 - 07.2006',
                company: '"Foxtrot"',
                country: 'Miasto: Kryvyi Rih, Ukraina',
                position: 'Sprzedawca / kierownik sieci działów IT'
            }
        ],
        en: [
            {
                period: '08.2019 - till now',
                company: '“NordFrost.PL Dystrybucja” Sp z o.o',
                country: 'City: Warsaw, Poland',
                position: 'Computer system analyst'
            },
            {
                period: '10.2018 - 02.2019',
                company: '“BUDTEHSERVIS” Sp z o.o',
                country: 'City: Warsaw, Poland',
                position: 'Crisis manager'
            },
            {
                period: '07.2016 - 10.2018',
                company: '“Spec-Bud” Sp z o.o.',
                country: 'City: Rzeszów, Poland / Vilnius, Lithuania',
                position: 'Co-owner'
            },
            {
                period: '01.2015 - 07.2016',
                company: '“Galbud” Sp z o.o',
                country: 'City: Rzeszów, Poland / Vilnius, Lithuania',
                position: 'Co-owner'
            },
            {
                period: '07.2014 - 12.2014',
                company: 'UAB “Promfactor”',
                country: 'City: Šiauliai, Lithuania',
                position: 'Crisis manager'
            },
            {
                period: '06.2011 - 02.2013',
                company: '“Western Pipeline Company” LLC',
                country: 'City: Ivano Frankivsk, Ukraine',
                position: 'Director'
            },
            {
                period: '08.2008 - 06.2011',
                company: 'CJSC “Electrograd”',
                country: 'City: Kryvyi Rih, Ukraine',
                position: 'Chief engineer of the Department of International Economic Activity'
            },
            {
                period: '11.2007 - 08.2008',
                company: '"Electrograd" LLC',
                country: 'City: Moscow, Russia',
                position: 'Commercial Director'
            },
            {
                period: '07.2006 - 11.2007',
                company: 'CJSC “Electrograd”',
                country: 'City: Kryvyi Rih, Ukraine',
                position: 'Sales Team Manager'
            },
            {
                period: '01.2005 - 07.2006',
                company: '"Foxtrot"',
                country: 'City: Kryvyi Rih, Ukraine',
                position: 'salesman / manager of the network of IT departments'
            }
        ],
        ua: [
            {
                period: '08.2019 - дотепер',
                company: '“NordFrost.PL Dystrybucja” Sp z o.o',
                country: 'Місто: Варшава, Польща',
                position: 'Аналітик комп’ютерних систем'
            },
            {
                period: '10.2018 - 02.2019',
                company: '“BUDTEHSERVIS” Sp z o.o',
                country: 'Місто: Варшава, Польща',
                position: 'Антикризовий менеджер'
            },
            {
                period: '07.2016 - 10.2018',
                company: '“Spec-Bud” Sp z o.o.',
                country: 'Місто: Жешув, Польща / Вільнюс, Литва',
                position: 'Співвласник'
            },
            {
                period: '01.2015 - 07.2016',
                company: '“Galbud” Sp z o.o',
                country: 'Місто: Жешув, Польща / Вільнюс, Литва',
                position: 'Співвласник'
            },
            {
                period: '07.2014 - 12.2014',
                company: 'UAB “Promfactor”',
                country: 'Місто: Шяуляй, Литва',
                position: 'Антикризовий менеджер'
            },
            {
                period: '06.2011 - 02.2013',
                company: '“Western Pipeline Company” LLC',
                country: 'Місто: Івано-Франківськ, Україна',
                position: 'Директор'
            },
            {
                period: '08.2008 - 06.2011',
                company: 'CJSC “Electrograd”',
                country: 'Місто: Кривий Ріг, Україна',
                position: 'Головний інженер відділу міжнародної економічної діяльності'
            },
            {
                period: '11.2007 - 08.2008',
                company: '"Electrograd" LLC',
                country: 'Місто: Москва, Росія',
                position: 'Комерційний директор'
            },
            {
                period: '07.2006 - 11.2007',
                company: 'CJSC “Electrograd”',
                country: 'Місто: Кривий Ріг, Україна',
                position: 'Менеджер вiддiлу продажу'
            },
            {
                period: '01.2005 - 07.2006',
                company: '"Foxtrot"',
                country: 'Місто: Кривий Ріг, Україна',
                position: 'продавець / менеджер мережі ІТ-відділів'
            }
        ],
        ru: [
            {
                period: '08.2019 - по сегодняшний день',
                company: '“NordFrost.PL Dystrybucja” Sp z o.o',
                country: 'Город: Варшава, Польша',
                position: 'Аналитик компьютерных систем'
            },
            {
                period: '10.2018 - 02.2019',
                company: '“BUDTEHSERVIS” Sp z o.o',
                country: 'Город: Варшава, Польша',
                position: 'Антикризисный менеджер'
            },
            {
                period: '07.2016 - 10.2018',
                company: '“Spec-Bud” Sp z o.o.',
                country: 'Город: Жешув, Польша / Вильнюс, Литва',
                position: 'Совладелец'
            },
            {
                period: '01.2015 - 07.2016',
                company: '“Galbud” Sp z o.o',
                country: 'Город: Жешув, Польша / Вильнюс, Литва',
                position: 'Совладелец'
            },
            {
                period: '07.2014 - 12.2014',
                company: 'UAB “Promfactor”',
                country: 'Город: Шяуляй, Литва',
                position: 'Антикризисный менеджер'
            },
            {
                period: '06.2011 - 02.2013',
                company: '“Western Pipeline Company” LLC',
                country: 'Город: Ивано Франковск, Украина',
                position: 'Директор'
            },
            {
                period: '08.2008 - 06.2011',
                company: 'CJSC “Electrograd”',
                country: 'Город: Кривой Рог, Украина',
                position: 'Главный инженер Департамента внешнеэкономической деятельности'
            },
            {
                period: '11.2007 - 08.2008',
                company: '"Electrograd" LLC',
                country: 'Город: Москва, Россия',
                position: 'Коммерческий директор'
            },
            {
                period: '07.2006 - 11.2007',
                company: 'CJSC “Electrograd”',
                country: 'Город: Кривой Рог, Украина',
                position: 'Менеджер отдела продаж'
            },
            {
                period: '01.2005 - 07.2006',
                company: '"Foxtrot"',
                country: 'Город: Кривой Рог, Украина',
                position: 'продавец / менеджер сети ИТ-отделов'
            }
        ]
    }
}
export default data;


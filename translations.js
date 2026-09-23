window.translations = (function () {
  'use strict';

  var nav = {
    uz: { about: 'Biz haqimizda', services: 'Xizmatlar', projects: 'Loyihalar', cooperation: 'Hamkorlik', capability: 'Imkoniyatlar', contact: 'Aloqa' },
    uzCyrl: { about: 'Биз ҳақимизда', services: 'Хизматлар', projects: 'Лойиҳалар', cooperation: 'Ҳамкорлик', capability: 'Имкониятлар', contact: 'Алоқа' },
    ru: { about: 'О нас', services: 'Услуги', projects: 'Проекты', cooperation: 'Сотрудничество', capability: 'Возможности', contact: 'Контакты' },
    en: { about: 'About us', services: 'Services', projects: 'Projects', cooperation: 'Partnerships', capability: 'Capabilities', contact: 'Contact' }
  };

  var aria = {
    uz: { logoHome: "Jizzaxyo'lloyiha bosh sahifa", mainNav: 'Asosiy navigatsiya', selectLang: 'Tilni tanlash', openMenu: 'Menyuni ochish', mobileMenu: 'Mobil menyu', closeMenu: 'Menyuni yopish', mobileNav: 'Mobil navigatsiya', yearFilter: "Loyihalarni yil bo'yicha filtrlash", footerNav: 'Footer navigatsiya', closeDialog: 'Yopish' },
    uzCyrl: { logoHome: "Jizzaxyo'lloyiha бош саҳифа", mainNav: 'Асосий навигация', selectLang: 'Тилни танлаш', openMenu: 'Менюни очиш', mobileMenu: 'Мобил меню', closeMenu: 'Менюни ёпиш', mobileNav: 'Мобил навигация', yearFilter: 'Лойиҳаларни йил бўйича филтрлаш', footerNav: 'Пастки навигация', closeDialog: 'Ёпиш' },
    ru: { logoHome: "Jizzaxyo'lloyiha — главная страница", mainNav: 'Основная навигация', selectLang: 'Выбор языка', openMenu: 'Открыть меню', mobileMenu: 'Мобильное меню', closeMenu: 'Закрыть меню', mobileNav: 'Мобильная навигация', yearFilter: 'Фильтр проектов по году', footerNav: 'Навигация в подвале', closeDialog: 'Закрыть' },
    en: { logoHome: 'Jizzaxyo‘lloyiha home', mainNav: 'Main navigation', selectLang: 'Select language', openMenu: 'Open menu', mobileMenu: 'Mobile menu', closeMenu: 'Close menu', mobileNav: 'Mobile navigation', yearFilter: 'Filter projects by year', footerNav: 'Footer navigation', closeDialog: 'Close' }
  };

  var meta = {
    uz: {
      title: 'JIZZAXYO‘LLOYIHA MChJ — Yo‘l va transport infratuzilmasi',
      description: 'JIZZAXYO‘LLOYIHA MChJ — yo‘l va transport infratuzilmasi bo‘yicha loyihalash, muhandislik-qidiruv, texnik nazorat va konsalting xizmatlarini ko‘rsatuvchi kompaniya.'
    },
    uzCyrl: {
      title: 'ЖИЗЗАХЙЎЛЛОЙИҲА МЧЖ — Йўл ва транспорт инфратузилмаси',
      description: 'ЖИЗЗАХЙЎЛЛОЙИҲА МЧЖ — йўл ва транспорт инфратузилмаси бўйича лойиҳалаш, муҳандислик-қидирув, техник назорат ва консалтинг хизматларини кўрсатувчи компания.'
    },
    ru: {
      title: 'JIZZAXYO‘LLOYIHA MChJ — Дорожная и транспортная инфраструктура',
      description: 'JIZZAXYO‘LLOYIHA MChJ — компания в области дорожной и транспортной инфраструктуры, выполняющая проектирование, инженерные изыскания, технический надзор и консультационные услуги.'
    },
    en: {
      title: 'JIZZAXYO‘LLOYIHA MChJ — Road & Transport Infrastructure',
      description: 'JIZZAXYO‘LLOYIHA MChJ is an engineering company specializing in road and transport infrastructure design, engineering surveys, technical supervision and consulting services.'
    }
  };

  var hero = {
    uz: {
      eyebrow: "JIZZAXYO‘LLOYIHA MCHJ",
      title: "Yo‘l va transport infratuzilmasi uchun kompleks muhandislik yechimlari",
      desc: "2001-yildan buyon avtomobil yo‘llari, transport infratuzilmasi va sun’iy inshootlarni loyihalash, muhandislik-qidiruv, nazorat va konsalting xizmatlarini taqdim etamiz.",
      ctaPrimary: "Loyihalarni ko‘rish",
      ctaSecondary: "Biz bilan bog‘lanish",
      stat1Label: 'Yillik tajriba', stat2Label: 'Malakali mutaxassis', stat3Label: 'Tashkil topgan yil', stat4Label: 'Sifat menejmenti',
      imageAlt: 'Avtomobil yo‘li qurilishi va transport infratuzilmasi'
    },
    uzCyrl: {
      eyebrow: "JIZZAXYO‘LLOYIHA MCHJ",
      title: 'Йўл ва транспорт инфратузилмаси учун комплекс муҳандислик ечимлари',
      desc: ' 2001-йилдан буён автомобиль йўллари, транспорт инфратузилмаси ва сунъий иншоотларни лойиҳалаш, муҳандислик-қидирув, назорат ва консалтинг хизматларини тақдим этамиз.',
      ctaPrimary: 'Лойиҳаларни кўриш',
      ctaSecondary: 'Биз билан боғланиш',
      stat1Label: 'Йиллик тажриба', stat2Label: 'Малакали мутахассис', stat3Label: 'Ташкил топган йил', stat4Label: 'Сифат менежменти',
      imageAlt: 'Автомобиль йўли қурилиши ва транспорт инфратузилмаси'
    },
    ru: {
      eyebrow: "JIZZAXYO‘LLOYIHA MCHJ",
      title: 'Комплексные инженерные решения для дорожной и транспортной инфраструктуры',
      desc: 'С 2001 года предоставляем услуги проектирования автомобильных дорог, транспортной инфраструктуры и искусственных сооружений, инженерных изысканий, надзора и консалтинга.',
      ctaPrimary: 'Смотреть проекты',
      ctaSecondary: 'Связаться с нами',
      stat1Label: 'лет опыта', stat2Label: 'квалифицированных специалистов', stat3Label: 'год основания', stat4Label: 'Менеджмент качества',
      imageAlt: 'Строительство автомобильной дороги и транспортная инфраструктура'
    },
    en: {
      eyebrow: "JIZZAXYO‘LLOYIHA MCHJ",
      title: 'Comprehensive engineering solutions for road and transport infrastructure',
      desc: 'Since 2001, we have provided design services for roads, transport infrastructure and structures, engineering surveys, supervision and consulting.',
      ctaPrimary: 'View projects',
      ctaSecondary: 'Contact us',
      stat1Label: 'years of experience', stat2Label: 'qualified specialists', stat3Label: 'year founded', stat4Label: 'Quality management',
      imageAlt: 'Road construction and transport infrastructure'
    }
  };

  var about = {
    uz: {
      eyebrow: '01 — BIZ HAQIMIZDA',
      heading: '25 yildan ortiq tajriba. Muhandislikka asoslangan yondashuv.',
      intro: '2001-yilda Andijon–Toshkent–Qo‘ng‘irot avtomagistrali uchun texnik-iqtisodiy asos va loyiha-smeta hujjatlarini ishlab chiqish maqsadida davlat muassasasi sifatida tashkil etilgan. 2007-yilda xususiy investorga topshirilib, qayta tashkil etilgach, xususiy loyiha-konsalting kompaniyasi sifatida faoliyatini davom ettirmoqda — yo‘l va transport infratuzilmasi, sun’iy inshootlar, loyiha-smeta hujjatlari, muhandislik-qidiruv, texnik va muallif nazorati hamda konsalting xizmatlari yo‘nalishlarida.',
      introMobile: '2001-yilda Andijon–Toshkent–Qo‘ng‘irot avtomagistrali uchun texnik-iqtisodiy asos va loyiha-smeta hujjatlarini ishlab chiqish maqsadida davlat muassasasi sifatida tashkil etilgan. 2007-yilda xususiy investorga topshirilib, qayta tashkil etilgach, xususiy loyiha-konsalting kompaniyasi sifatida faoliyatini davom ettirmoqda.',
      m1Year: '2001', m1Title: 'Davlat muassasasi sifatida tashkil topdi', m1Desc: 'Andijon–Toshkent–Qo‘ng‘irot avtomagistrali uchun texnik-iqtisodiy asos va loyiha-smeta hujjatlarini ishlab chiqish maqsadida tashkil etildi.',
      m2Year: '2007', m2Title: 'Xususiy investorga topshirildi', m2Desc: 'Kompaniya qayta tashkil etilib, xususiy loyiha va konsalting kompaniyasi sifatida faoliyatini davom ettirdi.',
      m3Year: 'BUGUN', m3Title: 'Kompleks muhandislik konsaltingi', m3Desc: 'Yo‘l va transport infratuzilmasi, sun’iy inshootlar, loyiha-smeta hujjatlari, muhandislik-qidiruv, texnik va muallif nazorati hamda konsalting xizmatlari.'
    },
    uzCyrl: {
      eyebrow: '01 — БИЗ ҲАҚИМИЗДА',
      heading: '25 йилдан ортиқ тажриба. Муҳандисликка асосланган ёндашув.',
      intro: 'Компания 2001-йилда Андижон–Тошкент–Қўнғирот автомагистрали учун техник-иқтисодий асос ва лойиҳа-смета ҳужжатларини ишлаб чиқиш мақсадида давлат муассасаси сифатида ташкил этилган. 2007-йилда хусусий инвесторга топширилиб, қайта ташкил этилгач, хусусий лойиҳа-консалтинг компанияси сифатида фаолиятини давом эттирмоқда — йўл ва транспорт инфратузилмаси, сунъий иншоотлар, лойиҳа-смета ҳужжатлари, муҳандислик-қидирув, техник ва муаллиф назорати ҳамда консалтинг хизматлари йўналишларида.',
      introMobile: '2001-йилда Андижон–Тошкент–Қўнғирот автомагистрали учун техник-иқтисодий асос ва лойиҳа-смета ҳужжатларини ишлаб чиқиш мақсадида давлат муассасаси сифатида ташкил этилган. 2007-йилда хусусий инвесторга топширилиб, қайта ташкил этилгач, хусусий лойиҳа-консалтинг компанияси сифатида фаолиятини давом эттирмоқда.',
      m1Year: '2001', m1Title: 'Давлат муассасаси сифатида ташкил топди', m1Desc: 'Андижон–Тошкент–Қўнғирот автомагистрали учун техник-иқтисодий асос ва лойиҳа-смета ҳужжатларини ишлаб чиқиш мақсадида ташкил этилди.',
      m2Year: '2007', m2Title: 'Хусусий инвесторга топширилди', m2Desc: 'Компания қайта ташкил этилиб, хусусий лойиҳа ва консалтинг компанияси сифатида фаолиятини давом эттирди.',
      m3Year: 'БУГУН', m3Title: 'Комплекс муҳандислик консалтинги', m3Desc: 'Йўл ва транспорт инфратузилмаси, сунъий иншоотлар, лойиҳа-смета ҳужжатлари, муҳандислик-қидирув, техник ва муаллиф назорати ҳамда консалтинг хизматлари.'
    },
    ru: {
      eyebrow: '01 — О НАС',
      heading: 'Более 25 лет опыта. Подход, основанный на инженерии.',
      intro: 'Основана в 2001 году как государственное учреждение для разработки технико-экономического обоснования и проектно-сметной документации автомагистрали Андижан–Ташкент–Кунград. В 2007 году передана частному инвестору и, пройдя реорганизацию, продолжает деятельность как частная проектно-консалтинговая компания — в направлениях дорожной и транспортной инфраструктуры, искусственных сооружений, проектно-сметной документации, инженерных изысканий, технического и авторского надзора, а также консалтинговых услуг.',
      introMobile: 'Основана в 2001 году как государственное учреждение для разработки технико-экономического обоснования и проектно-сметной документации автомагистрали Андижан–Ташкент–Кунград. В 2007 году передана частному инвестору и продолжает деятельность как частная проектно-консалтинговая компания.',
      m1Year: '2001', m1Title: 'Основана как государственное учреждение', m1Desc: 'Создана для разработки технико-экономического обоснования и проектно-сметной документации автомагистрали Андижан–Ташкент–Кунград.',
      m2Year: '2007', m2Title: 'Передана частному инвестору', m2Desc: 'Компания была реорганизована и продолжила деятельность как частная проектно-консалтинговая компания.',
      m3Year: 'СЕГОДНЯ', m3Title: 'Комплексный инженерный консалтинг', m3Desc: 'Дорожная и транспортная инфраструктура, искусственные сооружения, проектно-сметная документация, инженерные изыскания, технический и авторский надзор, а также консалтинговые услуги.'
    },
    en: {
      eyebrow: '01 — ABOUT US',
      heading: '25+ years of experience. An engineering-led approach.',
      intro: 'Founded in 2001 as a state institution to develop the feasibility study and design-estimate documentation for the Andijan–Tashkent–Kungrad highway. In 2007 it was transferred to a private investor and, following reorganisation, continues to operate as a private design-and-consulting company — covering road and transport infrastructure, structures, design-estimate documentation, engineering surveys, technical and author’s supervision, and consulting services.',
      introMobile: 'Founded in 2001 as a state institution to develop the feasibility study and design-estimate documentation for the Andijan–Tashkent–Kungrad highway. In 2007 it was transferred to a private investor and continues to operate as a private design-and-consulting company.',
      m1Year: '2001', m1Title: 'Founded as a state institution', m1Desc: 'Established to develop the feasibility study and design-estimate documentation for the Andijan–Tashkent–Kungrad highway.',
      m2Year: '2007', m2Title: 'Transferred to a private investor', m2Desc: 'The company was reorganised and continued operating as a private design and consulting company.',
      m3Year: 'TODAY', m3Title: 'Comprehensive engineering consulting', m3Desc: 'Road and transport infrastructure, structures, design-estimate documentation, engineering surveys, technical and author’s supervision, and consulting services.'
    }
  };

  function svc(eyebrow, heading, desc, items) {
    return { eyebrow: eyebrow, heading: heading, desc: desc, items: items };
  }

  var services = {
    uz: svc('02 — XIZMATLAR', 'Kompleks muhandislik xizmatlari', 'JIZZAXYO‘LLOYIHA MChJ yo‘l va transport infratuzilmasi bo‘yicha muhandislik-qidiruv va loyihalashdan tortib, nazorat, konsalting va loyiha hujjatlarigacha bo‘lgan xizmatlarni birgalikda taqdim etadi.', [
      { title: 'Yo‘l va transport infratuzilmasini loyihalash', desc: 'Avtomobil yo‘llari, ko‘priklar va tunnellarni loyihalash bo‘yicha muhandislik yechimlari.', bullets: ['Avtomobil yo‘llarini qurish, rekonstruksiya qilish va ta’mirlash', 'Shahar va qishloq yo‘llari', 'Aeroportlar', 'Ko‘priklar', 'Tunnellar'] },
      { title: 'Muhandislik-qidiruv va tadqiqot ishlari', desc: 'Loyihalashdan oldingi topografik va geotexnik tadqiqot ishlari.', bullets: ['Topografik / muhandislik-qidiruv ishlari', 'Yo‘l to‘shamalarini tadqiq qilish va hisoblash', 'Grunt va suv qochirish tizimlarini o‘rganish', 'Suv o‘tkazuvchi inshootlar va geotexnik tadqiqotlar', 'Uy-joy kommunal xo‘jaligi obyektlari va muhandislik tarmoqlarini loyihalash'] },
      { title: 'Baholash va rejalashtirish', desc: 'Xavfsizlik, ekologik va transport rejalashtirish bo‘yicha tahlil xizmatlari.', bullets: ['Yo‘l harakati xavfsizligi bo‘yicha loyihalash', 'Ijtimoiy-iqtisodiy va ekologik baholash', 'Iqlim o‘zgarishi ta’sirini baholash', 'Suv xo‘jaligi obyektlari va muhandislik tarmoqlarini loyihalash'] },
      { title: 'Qurilish nazorati va shartnomalarni boshqarish', desc: 'FIDIC standartlariga muvofiq texnik va mualliflik nazorati xizmatlari.', bullets: ['Qurilish shartnomalarini boshqarish va qurilish nazorati', 'Ijro hujjatlarini tayyorlash', 'FIDIC shartnomalari bo‘yicha muhandislik kuzatuvi', 'Oraliq to‘lov sertifikatlari (IPA) va asoslovchi hujjatlarni tayyorlash'] },
      { title: 'Smeta va tender hujjatlari', desc: 'Loyiha qiymatini aniqlash va tender hujjatlarini tayyorlash.', bullets: ['Smeta hujjatlarini ishlab chiqish va loyihalar qiymatini baholash', 'Tender hujjatlarini tayyorlash va tender takliflarini ishlab chiqish', 'Transport modellashtirishi'] }
    ]),
    uzCyrl: svc('02 — ХИЗМАТЛАР', 'Комплекс муҳандислик хизматлари', 'JIZZAXYO‘LLOYIHA MChJ йўл ва транспорт инфратузилмаси бўйича муҳандислик-қидирув ва лойиҳалашдан тортиб, назорат, консалтинг ва лойиҳа ҳужжатларигача бўлган хизматларни биргаликда тақдим этади.', [
      { title: 'Йўл ва транспорт инфратузилмасини лойиҳалаш', desc: 'Автомобиль йўллари, кўприклар ва туннелларни лойиҳалаш бўйича муҳандислик ечимлари.', bullets: ['Автомобиль йўлларини қуриш, реконструксия қилиш ва таъмирлаш', 'Шаҳар ва қишлоқ йўллари', 'Аэропортлар', 'Кўприклар', 'Туннеллар'] },
      { title: 'Муҳандислик-қидирув ва тадқиқот ишлари', desc: 'Лойиҳалашдан олдинги топографик ва геотехник тадқиқот ишлари.', bullets: ['Топографик / муҳандислик-қидирув ишлари', 'Йўл тўшамаларини тадқиқ қилиш ва ҳисоблаш', 'Грунт ва сув қочириш тизимларини ўрганиш', 'Сув ўтказувчи иншоотлар ва геотехник тадқиқотлар', 'Уй-жой коммунал хўжалиги объектлари ва муҳандислик тармоқларини лойиҳалаш'] },
      { title: 'Баҳолаш ва режалаштириш', desc: 'Хавфсизлик, экологик ва транспорт режалаштириш бўйича таҳлил хизматлари.', bullets: ['Йўл ҳаракати хавфсизлиги бўйича лойиҳалаш', 'Ижтимоий-иқтисодий ва экологик баҳолаш', 'Иқлим ўзгариши таъсирини баҳолаш', 'Сув хўжалиги объектлари ва муҳандислик тармоқларини лойиҳалаш'] },
      { title: 'Қурилиш назорати ва шартномаларни бошқариш', desc: 'FIDIC стандартларига мувофиқ техник ва муаллифлик назорати хизматлари.', bullets: ['Қурилиш шартномаларини бошқариш ва қурилиш назорати', 'Ижро ҳужжатларини тайёрлаш', 'FIDIC шартномалари бўйича муҳандислик кузатуви', 'Оралиқ тўлов сертификатлари (IPA) ва асословчи ҳужжатларни тайёрлаш'] },
      { title: 'Смета ва тендер ҳужжатлари', desc: 'Лойиҳа қийматини аниқлаш ва тендер ҳужжатларини тайёрлаш.', bullets: ['Смета ҳужжатларини ишлаб чиқиш ва лойиҳалар қийматини баҳолаш', 'Тендер ҳужжатларини тайёрлаш ва тендер таклифларини ишлаб чиқиш', 'Транспорт моделлаштириши'] }
    ]),
    ru: svc('02 — УСЛУГИ', 'Комплексные инженерные услуги', 'JIZZAXYO‘LLOYIHA MChJ предоставляет полный комплекс услуг в сфере дорожной и транспортной инфраструктуры — от инженерных изысканий и проектирования до надзора, консалтинга и разработки проектной документации.', [
      { title: 'Проектирование дорожной и транспортной инфраструктуры', desc: 'Инженерные решения по проектированию автомобильных дорог, мостов и тоннелей.', bullets: ['Строительство, реконструкция и ремонт автомобильных дорог', 'Городские и сельские дороги', 'Аэропорты', 'Мосты', 'Тоннели'] },
      { title: 'Инженерные изыскания и исследования', desc: 'Топографические и геотехнические изыскания на предпроектной стадии.', bullets: ['Топографические / инженерно-изыскательские работы', 'Исследование и расчёт дорожной одежды', 'Изучение грунтов и систем водоотвода', 'Водопропускные сооружения и геотехнические исследования', 'Проектирование объектов жилищно-коммунального хозяйства и инженерных сетей'] },
      { title: 'Оценка и планирование', desc: 'Аналитические услуги в области безопасности, экологии и транспортного планирования.', bullets: ['Проектирование безопасности дорожного движения', 'Социально-экономическая и экологическая оценка', 'Оценка воздействия изменения климата', 'Проектирование объектов водного хозяйства и инженерных сетей'] },
      { title: 'Строительный надзор и управление контрактами', desc: 'Услуги технического и авторского надзора в соответствии со стандартами FIDIC.', bullets: ['Управление строительными контрактами и строительный надзор', 'Подготовка исполнительной документации', 'Инженерный надзор по контрактам FIDIC', 'Подготовка промежуточных платёжных сертификатов (IPC) и обосновывающей документации'] },
      { title: 'Сметная и тендерная документация', desc: 'Определение стоимости проекта и подготовка тендерной документации.', bullets: ['Разработка сметной документации и оценка стоимости проектов', 'Подготовка тендерной документации и тендерных предложений', 'Транспортное моделирование'] }
    ]),
    en: svc('02 — SERVICES', 'Comprehensive engineering services', 'JIZZAXYO‘LLOYIHA MChJ provides a full range of services for road and transport infrastructure — from engineering surveys and design to supervision, consulting and project documentation.', [
      { title: 'Design of road and transport infrastructure', desc: 'Engineering solutions for the design of roads, bridges and tunnels.', bullets: ['Construction, reconstruction and rehabilitation of roads', 'Urban and rural roads', 'Airports', 'Bridges', 'Tunnels'] },
      { title: 'Engineering surveys and investigations', desc: 'Topographic and geotechnical surveys prior to design.', bullets: ['Topographic / engineering survey works', 'Pavement investigation and design calculations', 'Study of soils and drainage systems', 'Water-crossing structures and geotechnical investigations', 'Design of housing and utilities facilities and engineering networks'] },
      { title: 'Assessment and planning', desc: 'Analytical services covering safety, environmental and transport planning.', bullets: ['Road safety design', 'Socio-economic and environmental assessment', 'Climate change impact assessment', 'Design of water management facilities and engineering networks'] },
      { title: 'Construction supervision and contract management', desc: 'Technical and author’s supervision services in accordance with FIDIC standards.', bullets: ['Construction contract management and site supervision', 'Preparation of as-built documentation', 'Engineer’s supervision under FIDIC contracts', 'Preparation of Interim Payment Certificates (IPC) and supporting documentation'] },
      { title: 'Cost estimates and tender documentation', desc: 'Determining project cost and preparing tender documentation.', bullets: ['Development of cost estimates and project valuation', 'Preparation of tender documentation and tender proposals', 'Transport modelling'] }
    ])
  };

  function projRow(title, line) { return { title: title, line: line }; }

  var projectRowsUz = {
    y2026_1: projRow('Samarqand shahri “Shukrona” mahallasi — “Dimashq” arig‘i bo‘yi', '0,9 km suv bo‘yi infratuzilmasini yaxshilash va sayilgoh tashkil etish loyihasi'),
    y2026_2: projRow('“Urgut” EIZ “Dahbet” massiviga olib boruvchi yo‘l', 'Avtomobil yo‘lini loyihalash'),
    y2026_3: projRow('Qishloq xo‘jaligi boshqarmasi binosi', 'Jizzax viloyati — sobiq binoni rekonstruksiya qilish'),
    y2026_4: projRow('4R‑48 avtomobil yo‘li — Kattaqo‘rg‘on–Xatirchi', '8,2 km qismini ta’mirlash'),
    y2025_1: projRow('G‘obdin qishlog‘iga boruvchi ichki yo‘l', '26 km, sement-beton qoplama'),
    y2025_2: projRow('Jizzax viloyati avtomobil yo‘llari', 'Bir nechta yo‘lni qayta qurish — sementobeton qoplamali loyihalar'),
    y2025_3: projRow('4R40 avtomobil yo‘li', '81–95 km qismini rekonstruksiya qilish'),
    y2025_4: projRow('Arnasoy tumani ko‘prigi', 'Avtomobil yo‘lidagi ko‘prikni ta’mirlash'),
    y2025_5: projRow('Zomin tumani artezian qudug‘lari', '3 ta artezian qudug‘i va ichki ariqlarni betonlash — ishchi loyiha'),
    y2024_1: projRow('Zafarobod tumani maktabi', 'Yangi maktab qurilishi'),
    y2024_2: projRow('Zarbdor tumani maktabi', 'Yangi umumta’lim maktabi qurilishi'),
    y2024_3: projRow('Zomin tumani avtomobil yo‘li', 'Yangi yo‘l qurilishi loyihasi'),
    y2023_1: projRow('4R38 avtomobil yo‘li', '10–18, 18–22 va 23–25 km qismlarini to‘liq ta’mirlash'),
    y2023_2: projRow('Sement-beton qoplamali ichki yo‘llar', '2-bosqich TIAsi'),
    y2021_1: projRow('“Obod qishloq” va “Obod mahalla” dasturlari', 'Zomin, Zarbdor, Sh.Rashidov tumanlari va Jizzax shahri — ichki xo‘jalik ko‘chalarini ta’mirlash'),
    y2021_2: projRow('Bunyodkor mahallasi, Mulkanlik ko‘chasi', 'Jizzax shahri — ko‘chani ta’mirlash loyihasi'),
    y2020_1: projRow('Zomin shahri aylanma yo‘li — 2-bosqich', '3,9 km'),
    y2020_2: projRow('“Jizzax” EIZ kengaytirilgan hudud kirish yo‘li', '2 ta ko‘prik bilan'),
    y2019_1: projRow('Zomin shahri aylanma yo‘li', '3,9 km yangi avtomobil yo‘li'),
    y2019_2: projRow('“Jizzax” EIZ kirish yo‘llari', 'Erkin iqtisodiy zonaga kirish yo‘llarini qurish'),
    y2019_3: projRow('R.Alimov ko‘chasi', 'To‘liq ta’mirlash — 1,7 km'),
    y2019_4: projRow('Zomin aylanma yo‘li — Bog‘ishamol ko‘chasi ulanishi', '1,3 km')
  };

  var projectRowsUzCyrl = {
    y2026_1: projRow('Самарқанд шаҳри «Шукрона» маҳалласи — «Димашқ» ариғи бўйи', '0,9 км сув бўйи инфратузилмасини яхшилаш ва сайилгоҳ ташкил этиш лойиҳаси'),
    y2026_2: projRow('«Ургут» ЭИЗ «Даҳбет» массивига олиб борувчи йўл', 'Автомобиль йўлини лойиҳалаш'),
    y2026_3: projRow('Қишлоқ хўжалиги бошқармаси биноси', 'Жиззах вилояти — собиқ бинони реконструксия қилиш'),
    y2026_4: projRow('4R‑48 автомобиль йўли — Қаттақўрғон–Хатирчи', '8,2 км қисмини таъмирлаш'),
    y2025_1: projRow('Ғобдин қишлоғига борувчи ички йўл', '26 км, цемент-бетон қоплама'),
    y2025_2: projRow('Жиззах вилояти автомобиль йўллари', 'Бир нечта йўлни қайта қуриш — цементобетон қопламали лойиҳалар'),
    y2025_3: projRow('4R40 автомобиль йўли', '81–95 км қисмини реконструксия қилиш'),
    y2025_4: projRow('Арнасой тумани кўприги', 'Автомобиль йўлидаги кўприкни таъмирлаш'),
    y2025_5: projRow('Зомин тумани артезиан қудуқлари', '3 та артезиан қудуғи ва ички ариқларни бетонлаш — ишчи лойиҳа'),
    y2024_1: projRow('Зафаробод тумани мактаби', 'Янги мактаб қурилиши'),
    y2024_2: projRow('Зарбдор тумани мактаби', 'Янги умумтаълим мактаби қурилиши'),
    y2024_3: projRow('Зомин тумани автомобиль йўли', 'Янги йўл қурилиши лойиҳаси'),
    y2023_1: projRow('4R38 автомобиль йўли', '10–18, 18–22 ва 23–25 км қисмларини тўлиқ таъмирлаш'),
    y2023_2: projRow('Цемент-бетон қопламали ички йўллар', '2-босқич ТИАси'),
    y2021_1: projRow('«Обод қишлоқ» ва «Обод маҳалла» дастурлари', 'Зомин, Зарбдор, Ш.Рашидов туманлари ва Жиззах шаҳри — ички хўжалик кўчаларини таъмирлаш'),
    y2021_2: projRow('Бунёдкор маҳалласи, Мулканлик кўчаси', 'Жиззах шаҳри — кўчани таъмирлаш лойиҳаси'),
    y2020_1: projRow('Зомин шаҳри айланма йўли — 2-босқич', '3,9 км'),
    y2020_2: projRow('«Жиззах» ЭИЗ кенгайтирилган ҳудуд кириш йўли', '2 та кўприк билан'),
    y2019_1: projRow('Зомин шаҳри айланма йўли', '3,9 км янги автомобиль йўли'),
    y2019_2: projRow('«Жиззах» ЭИЗ кириш йўллари', 'Эркин иқтисодий зонага кириш йўлларини қуриш'),
    y2019_3: projRow('Р.Алимов кўчаси', 'Тўлиқ таъмирлаш — 1,7 км'),
    y2019_4: projRow('Зомин айланма йўли — Боғишамол кўчаси уланиши', '1,3 км')
  };

  var projectRowsRu = {
    y2026_1: projRow('Самарканд, махалля «Шукрона» — вдоль арыка «Димашк»', 'Проект благоустройства прибрежной инфраструктуры и создания набережной, 0,9 км'),
    y2026_2: projRow('Дорога к массиву «Дахбет» СЭЗ «Ургут»', 'Проектирование автомобильной дороги'),
    y2026_3: projRow('Здание управления сельского хозяйства', 'Джизакская область — реконструкция существующего здания'),
    y2026_4: projRow('Автодорога 4R-48 — Каттакурган–Хатырчи', 'Ремонт участка протяжённостью 8,2 км'),
    y2025_1: projRow('Внутренняя дорога к посёлку Гобдин', '26 км, цементобетонное покрытие'),
    y2025_2: projRow('Автомобильные дороги Джизакской области', 'Реконструкция нескольких дорог — проекты с цементобетонным покрытием'),
    y2025_3: projRow('Автодорога 4R40', 'Реконструкция участка 81–95 км'),
    y2025_4: projRow('Мост в Арнасайском районе', 'Ремонт моста на автомобильной дороге'),
    y2025_5: projRow('Артезианские скважины Заминского района', '3 артезианские скважины и бетонирование внутренних арыков — рабочий проект'),
    y2024_1: projRow('Школа в Зафарабадском районе', 'Строительство новой школы'),
    y2024_2: projRow('Школа в Зарбдарском районе', 'Строительство новой общеобразовательной школы'),
    y2024_3: projRow('Автомобильная дорога в Заминском районе', 'Проект строительства новой дороги'),
    y2023_1: projRow('Автодорога 4R38', 'Полный ремонт участков 10–18, 18–22 и 23–25 км'),
    y2023_2: projRow('Внутренние дороги с цементобетонным покрытием', 'ТЭО, 2-й этап'),
    y2021_1: projRow('Программы «Обод кишлок» и «Обод махалля»', 'Заминский, Зарбдарский, Ш.Рашидовский районы и город Джизак — ремонт внутрихозяйственных улиц'),
    y2021_2: projRow('Махалля Бунёдкор, улица Мулканлик', 'Город Джизак — проект ремонта улицы'),
    y2020_1: projRow('Объездная дорога города Зомин — 2-й этап', '3,9 км'),
    y2020_2: projRow('Подъездная дорога к расширенной территории СЭЗ «Джизак»', 'С 2 мостами'),
    y2019_1: projRow('Объездная дорога города Зомин', '3,9 км новой автомобильной дороги'),
    y2019_2: projRow('Подъездные дороги к СЭЗ «Джизак»', 'Строительство подъездных дорог к свободной экономической зоне'),
    y2019_3: projRow('Улица Р. Алимова', 'Капитальный ремонт — 1,7 км'),
    y2019_4: projRow('Объездная дорога Зомина — соединение с улицей Богишамол', '1,3 км')
  };

  var projectRowsEn = {
    y2026_1: projRow('Samarkand, Shukrona mahalla — along the Dimashq canal', '0.9 km waterfront infrastructure improvement and promenade project'),
    y2026_2: projRow('Road to the Dahbet area of the Urgut FEZ', 'Road design'),
    y2026_3: projRow('Agriculture Department building', 'Jizzakh region — reconstruction of an existing building'),
    y2026_4: projRow('4R-48 road — Kattakurgan–Khatirchi', 'Repair of an 8.2 km section'),
    y2025_1: projRow('Local road to Gobdin village', '26 km, cement-concrete pavement'),
    y2025_2: projRow('Jizzakh region roads', 'Reconstruction of several roads — cement-concrete pavement projects'),
    y2025_3: projRow('4R40 road', 'Reconstruction of the 81–95 km section'),
    y2025_4: projRow('Bridge in Arnasoy district', 'Repair of a road bridge'),
    y2025_5: projRow('Artesian wells, Zomin district', '3 artesian wells and lining of internal irrigation channels — detailed design'),
    y2024_1: projRow('School in Zafarobod district', 'Construction of a new school'),
    y2024_2: projRow('School in Zarbdor district', 'Construction of a new general education school'),
    y2024_3: projRow('Road in Zomin district', 'New road construction project'),
    y2023_1: projRow('4R38 road', 'Full repair of the 10–18, 18–22 and 23–25 km sections'),
    y2023_2: projRow('Local roads with cement-concrete pavement', 'Feasibility study, phase 2'),
    y2021_1: projRow('“Obod Qishloq” and “Obod Mahalla” programmes', 'Zomin, Zarbdor, Sh. Rashidov districts and Jizzakh city — repair of local streets'),
    y2021_2: projRow('Bunyodkor mahalla, Mulkanlik street', 'Jizzakh city — street repair project'),
    y2020_1: projRow('Zomin city bypass road — phase 2', '3.9 km'),
    y2020_2: projRow('Access road to the expanded area of the Jizzakh FEZ', 'With 2 bridges'),
    y2019_1: projRow('Zomin city bypass road', '3.9 km of new road'),
    y2019_2: projRow('Access roads to the Jizzakh FEZ', 'Construction of access roads to the free economic zone'),
    y2019_3: projRow('R. Alimov street', 'Full repair — 1.7 km'),
    y2019_4: projRow('Zomin bypass road — connection to Bog‘ishamol street', '1.3 km')
  };

  var projects = {
    uz: { eyebrow: '03 — LOYIHALAR', heading: 'Loyihalarda tasdiqlangan tajriba', descDesktop: '2019–2026 yillar davomida amalga oshirilgan 22 ta loyiha bizning loyiha portfelimiz — avtomobil yo‘llari, ko‘priklar, ichki yo‘llar va boshqa transport infratuzilmasi obyektlarini qamrab oladi.', descMobile: '2019–2026 yillar davomida amalga oshirilgan 22 ta loyihadan iborat portfolio.', featuredLabel: 'TANLANGAN LOYIHA', featuredNote: 'sxematik chiziq — haqiqiy marshrut emas', filterAll: 'BARCHASI', rows: projectRowsUz },
    uzCyrl: { eyebrow: '03 — ЛОЙИҲАЛАР', heading: 'Лойиҳаларда тасдиқланган тажриба', descDesktop: '2019–2026 йиллар давомида амалга оширилган 22 та лойиҳа бизнинг лойиҳа портфелимиз — автомобиль йўллари, кўприклар, ички йўллар ва бошқа транспорт инфратузилмаси объектларини қамраб олади.', descMobile: '2019–2026 йиллар давомида амалга оширилган 22 та лойиҳадан иборат портфолио.', featuredLabel: 'ТАНЛАНГАН ЛОЙИҲА', featuredNote: 'схематик чизиқ — ҳақиқий маршрут эмас', filterAll: 'БАРЧАСИ', rows: projectRowsUzCyrl },
    ru: { eyebrow: '03 — ПРОЕКТЫ', heading: 'Опыт, подтверждённый проектами', descDesktop: 'Наш портфель из 22 проектов, реализованных в 2019–2026 годах, охватывает автомобильные дороги, мосты, внутренние дороги и другие объекты транспортной инфраструктуры.', descMobile: 'Портфолио из 22 проектов, реализованных в 2019–2026 годах.', featuredLabel: 'ВЫБРАННЫЙ ПРОЕКТ', featuredNote: 'схематичная линия — не является фактическим маршрутом', filterAll: 'ВСЕ', rows: projectRowsRu },
    en: { eyebrow: '03 — PROJECTS', heading: 'Experience proven in projects', descDesktop: 'Our portfolio of 22 projects delivered between 2019 and 2026 covers roads, bridges, local roads and other transport infrastructure facilities.', descMobile: 'A portfolio of 22 projects delivered between 2019 and 2026.', featuredLabel: 'FEATURED PROJECT', featuredNote: 'schematic line — not an actual route', filterAll: 'ALL', rows: projectRowsEn }
  };

  var orgNames = ['KOCKS CONSULTING', 'IRD Engineering', 'Dongsung Engineering', 'Saman Engineering GmbH', 'Louis Berger S.A.'];
  var financeNames = ['Asian Development Bank (ADB)', 'World Bank', 'Islamic Development Bank (IsDB)', 'Saudi Fund for Development (SFD)', 'Kuwait Fund for Arab Economic Development (KFAED)'];

  var cooperation = {
    uz: { eyebrow: '04 — HAMKORLIK', heading: 'Xalqaro tajriba va hamkorlik', descDesktop: 'Kompaniya xalqaro muhandislik kompaniyalari bilan hamkorlik tajribasiga, shuningdek so‘nggi o‘n yillikda xalqaro moliya institutlari ishtirokidagi yirik yo‘l loyihalari uchun loyiha-smeta hujjatlarini ishlab chiqishda qatnashgan tajribaga ega.', descMobile: 'Kompaniya xalqaro muhandislik kompaniyalari bilan hamkorlik tajribasiga, shuningdek xalqaro moliya institutlari ishtirokidagi yirik yo‘l loyihalari tajribasiga ega.', group1Label: 'XALQARO HAMKORLAR', group2Label: 'XALQARO MOLIYA INSTITUTLARI', orgNames: orgNames, financeNames: financeNames },
    uzCyrl: { eyebrow: '04 — ҲАМКОРЛИК', heading: 'Халқаро тажриба ва ҳамкорлик', descDesktop: 'Компания халқаро муҳандислик компаниялари билан ҳамкорлик тажрибасига, шунингдек сўнгги ўн йилликда халқаро молия институтлари иштирокидаги йирик йўл лойиҳалари учун лойиҳа-смета ҳужжатларини ишлаб чиқишда қатнашган тажрибага эга.', descMobile: 'Компания халқаро муҳандислик компаниялари билан ҳамкорлик тажрибасига, шунингдек халқаро молия институтлари иштирокидаги йирик йўл лойиҳалари тажрибасига эга.', group1Label: 'ХАЛҚАРО ҲАМКОРЛАР', group2Label: 'ХАЛҚАРО МОЛИЯ ИНСТИТУТЛАРИ', orgNames: orgNames, financeNames: financeNames },
    ru: { eyebrow: '04 — СОТРУДНИЧЕСТВО', heading: 'Международный опыт и сотрудничество', descDesktop: 'Компания имеет опыт сотрудничества с международными инжиниринговыми компаниями, а также опыт участия в разработке проектно-сметной документации для крупных дорожных проектов при участии международных финансовых институтов за последнее десятилетие.', descMobile: 'Компания имеет опыт сотрудничества с международными инжиниринговыми компаниями, а также опыт работы над крупными дорожными проектами с участием международных финансовых институтов.', group1Label: 'МЕЖДУНАРОДНЫЕ ПАРТНЁРЫ', group2Label: 'МЕЖДУНАРОДНЫЕ ФИНАНСОВЫЕ ИНСТИТУТЫ', orgNames: orgNames, financeNames: financeNames },
    en: { eyebrow: '04 — PARTNERSHIPS', heading: 'International experience and partnerships', descDesktop: 'The company has experience collaborating with international engineering firms, as well as experience over the past decade contributing to design-estimate documentation for major road projects involving international financial institutions.', descMobile: 'The company has experience collaborating with international engineering firms and working on major road projects involving international financial institutions.', group1Label: 'INTERNATIONAL PARTNERS', group2Label: 'INTERNATIONAL FINANCIAL INSTITUTIONS', orgNames: orgNames, financeNames: financeNames }
  };

  function equip(title, desc) { return { title: title, desc: desc || '' }; }

  var capability = {
    uz: { eyebrow: '05 — IMKONIYATLAR', heading: 'Malakali jamoa. Zamonaviy texnik baza', desc: 'Kompaniyaning muhandislik salohiyati tajribali mutaxassislar hamda zamonaviy dala va loyihalash uskunalari bilan ta’minlangan.', statLabel: 'MALAKALI MUTAXASSIS', peopleText: 'Mutaxassislar Buyuk Britaniya, Germaniya, Koreya, Singapur va Chexiyada malaka oshirish va amaliyotlarda qatnashgan.', countries: ['Buyuk Britaniya', 'Germaniya', 'Koreya', 'Singapur', 'Chexiya'], techTitle: 'Texnik baza', equipment: [
      equip('Leica Sprinter 250M', 'Raqamli nivelirlar'), equip('Leica TS-07', 'Raqamli taxeometrlar'), equip('GPS/GNSS i90', '2 to‘plam'),
      equip('Elektron o‘lchov lentalari'), equip('Zamonaviy dala o‘lchov uskunalari'), equip('Yuqori unumdorlikdagi ofis jihozlari'), equip('Zamonaviy loyihalash dasturiy ta’minotlari')
    ] },
    uzCyrl: { eyebrow: '05 — ИМКОНИЯТЛАР', heading: 'Малакали жамоа. Замонавий техник база', desc: 'Компаниянинг муҳандислик салоҳияти тажрибали мутахассислар ҳамда замонавий дала ва лойиҳалаш ускуналари билан таъминланган.', statLabel: 'МАЛАКАЛИ МУТАХАССИС', peopleText: 'Мутахассислар Буюк Британия, Германия, Корея, Сингапур ва Чехияда малака ошириш ва амалиётларда қатнашган.', countries: ['Буюк Британия', 'Германия', 'Корея', 'Сингапур', 'Чехия'], techTitle: 'Техник база', equipment: [
      equip('Leica Sprinter 250M', 'Рақамли нивелирлар'), equip('Leica TS-07', 'Рақамли тахеометрлар'), equip('GPS/GNSS i90', '2 тўплам'),
      equip('Электрон ўлчов ленталари'), equip('Замонавий дала ўлчов ускуналари'), equip('Юқори унумдорликдаги офис жиҳозлари'), equip('Замонавий лойиҳалаш дастурий таъминотлари')
    ] },
    ru: { eyebrow: '05 — ВОЗМОЖНОСТИ', heading: 'Квалифицированная команда. Современная техническая база', desc: 'Инженерный потенциал компании обеспечен опытными специалистами, а также современным полевым и проектным оборудованием.', statLabel: 'КВАЛИФИЦИРОВАННЫХ СПЕЦИАЛИСТОВ', peopleText: 'Специалисты компании прошли повышение квалификации и стажировки в Великобритании, Германии, Корее, Сингапуре и Чехии.', countries: ['Великобритания', 'Германия', 'Корея', 'Сингапур', 'Чехия'], techTitle: 'Техническая база', equipment: [
      equip('Leica Sprinter 250M', 'Цифровые нивелиры'), equip('Leica TS-07', 'Цифровые тахеометры'), equip('GPS/GNSS i90', '2 комплекта'),
      equip('Электронные измерительные ленты'), equip('Современное полевое измерительное оборудование'), equip('Высокопроизводительное офисное оборудование'), equip('Современное проектное программное обеспечение')
    ] },
    en: { eyebrow: '05 — CAPABILITIES', heading: 'A skilled team. A modern technical base', desc: 'The company’s engineering capacity is backed by experienced specialists and modern field and design equipment.', statLabel: 'QUALIFIED SPECIALISTS', peopleText: 'Our specialists have completed professional training and internships in the United Kingdom, Germany, South Korea, Singapore and the Czech Republic.', countries: ['United Kingdom', 'Germany', 'South Korea', 'Singapore', 'Czech Republic'], techTitle: 'Technical base', equipment: [
      equip('Leica Sprinter 250M', 'Digital levels'), equip('Leica TS-07', 'Digital total stations'), equip('GPS/GNSS i90', '2 sets'),
      equip('Electronic measuring tapes'), equip('Modern field survey equipment'), equip('High-performance office equipment'), equip('Modern design software')
    ] }
  };

  var quality = {
    uz: { eyebrow: '06 — SIFAT VA LITSENZIYALAR', heading: 'Sifat standartlari va professional vakolat', desc: 'Kompaniyaning sifat yondashuvi ISO 9001:2015 sertifikati hamda tan olingan muhandislik va material standartlari bo‘yicha amaliy tajriba bilan qo‘llab-quvvatlanadi.', isoCaption: 'Sifat menejmenti', standardsIntro: 'Materiallar muhandislari quyidagi standartlar bilan amaliy tajribaga ega:', standards: ['O‘zRst', 'GOST', 'ASTM', 'AASHTO'], licensesTitle: 'Litsenziya va faoliyat yo‘nalishlari', licenses: ['Geodezik / topografik ishlar', 'Transport obyektlari va majmualari uchun loyiha-smeta hujjatlari', 'Umumiy foydalanishdagi avtomobil yo‘llarini qurish, rekonstruksiya qilish va ta’mirlash', 'Uy-joy kommunal xo‘jaligi va muhandislik tarmoqlari', 'Ko‘priklar va tunnellar', 'Suv xo‘jaligi obyektlari va tarmoqlari'] },
    uzCyrl: { eyebrow: '06 — СИФАТ ВА ЛИТСЕНЗИЯЛАР', heading: 'Сифат стандартлари ва профессионал ваколат', desc: 'Компаниянинг сифат ёндашуви ISO 9001:2015 сертификати ҳамда тан олинган муҳандислик ва материал стандартлари бўйича амалий тажриба билан қўллаб-қувватланади.', isoCaption: 'Сифат менежменти', standardsIntro: 'Материаллар муҳандислари қуйидаги стандартлар билан амалий тажрибага эга:', standards: ['ЎзРст', 'ГОСТ', 'ASTM', 'AASHTO'], licensesTitle: 'Литсензия ва фаолият йўналишлари', licenses: ['Геодезик / топографик ишлар', 'Транспорт объектлари ва мажмуалари учун лойиҳа-смета ҳужжатлари', 'Умумий фойдаланишдаги автомобиль йўлларини қуриш, реконструксия қилиш ва таъмирлаш', 'Уй-жой коммунал хўжалиги ва муҳандислик тармоқлари', 'Кўприклар ва туннеллар', 'Сув хўжалиги объектлари ва тармоқлари'] },
    ru: { eyebrow: '06 — КАЧЕСТВО И ЛИЦЕНЗИИ', heading: 'Стандарты качества и профессиональная компетенция', desc: 'Подход компании к качеству подкреплён сертификатом ISO 9001:2015, а также практическим опытом работы по признанным инженерным и материаловедческим стандартам.', isoCaption: 'Менеджмент качества', standardsIntro: 'Инженеры-материаловеды компании имеют практический опыт работы со следующими стандартами:', standards: ['O‘zRst', 'ГОСТ', 'ASTM', 'AASHTO'], licensesTitle: 'Лицензия и направления деятельности', licenses: ['Геодезические / топографические работы', 'Проектно-сметная документация для транспортных объектов и комплексов', 'Строительство, реконструкция и ремонт автомобильных дорог общего пользования', 'Жилищно-коммунальное хозяйство и инженерные сети', 'Мосты и тоннели', 'Объекты и сети водного хозяйства'] },
    en: { eyebrow: '06 — QUALITY & LICENSES', heading: 'Quality standards and professional authority', desc: 'The company’s approach to quality is supported by ISO 9001:2015 certification, along with practical experience working to recognised engineering and materials standards.', isoCaption: 'Quality management', standardsIntro: 'Our materials engineers have practical experience working with the following standards:', standards: ['O‘zRst', 'GOST', 'ASTM', 'AASHTO'], licensesTitle: 'License and areas of operation', licenses: ['Geodetic / topographic works', 'Design-estimate documentation for transport facilities and complexes', 'Construction, reconstruction and repair of public roads', 'Housing and utilities and engineering networks', 'Bridges and tunnels', 'Water management facilities and networks'] }
  };

  var contact = {
    uz: { eyebrow: '07 — BIZ BILAN BOG‘LANING', title: 'Loyihangizni birgalikda muhokama qilaylik.', desc: 'Yo‘l va transport infratuzilmasi loyihangiz uchun muhandislik yechimlarini muhokama qilish uchun biz bilan bog‘laning.', ctaButton: 'Biz bilan bog‘lanish', contactHeading: 'Bog‘lanish', contactDesc: 'Muhandislik loyihangiz bo‘yicha savollaringiz bo‘lsa, quyidagi ma’lumotlar orqali biz bilan bog‘lanishingiz mumkin.', address: 'Jizzax shahri, Pakhtakor ko‘chasi, 9-uy', projectDetailLabel: 'LOYIHA TAFSILOTI', projectDetailNote: 'Ushbu loyiha bo‘yicha manbada mavjud bo‘lgan barcha ma’lumot yuqorida ko‘rsatilgan.' },
    uzCyrl: { eyebrow: '07 — БИЗ БИЛАН БОҒЛАНИНГ', title: 'Лойиҳангизни биргаликда муҳокама қилайлик.', desc: 'Йўл ва транспорт инфратузилмаси лойиҳангиз учун муҳандислик ечимларини муҳокама қилиш учун биз билан боғланинг.', ctaButton: 'Биз билан боғланиш', contactHeading: 'Боғланиш', contactDesc: 'Муҳандислик лойиҳангиз бўйича саволларингиз бўлса, қуйидаги маълумотлар орқали биз билан боғланишингиз мумкин.', address: 'Жиззах шаҳри, Пахтакор кўчаси, 9-уй', projectDetailLabel: 'ЛОЙИҲА ТАФСИЛОТИ', projectDetailNote: 'Ушбу лойиҳа бўйича манбада мавжуд бўлган барча маълумот юқорида кўрсатилган.' },
    ru: { eyebrow: '07 — СВЯЖИТЕСЬ С НАМИ', title: 'Давайте обсудим ваш проект вместе.', desc: 'Свяжитесь с нами, чтобы обсудить инженерные решения для вашего проекта дорожной и транспортной инфраструктуры.', ctaButton: 'Связаться с нами', contactHeading: 'Контакты', contactDesc: 'Если у вас есть вопросы по вашему инженерному проекту, вы можете связаться с нами, используя указанные ниже контактные данные.', address: 'г. Джизак, улица Пахтакор, дом 9', projectDetailLabel: 'ДЕТАЛИ ПРОЕКТА', projectDetailNote: 'Вся имеющаяся информация по данному проекту указана выше.' },
    en: { eyebrow: '07 — GET IN TOUCH', title: 'Let’s discuss your project together.', desc: 'Get in touch with us to discuss engineering solutions for your road and transport infrastructure project.', ctaButton: 'Contact us', contactHeading: 'Contact', contactDesc: 'If you have questions about your engineering project, you can reach us using the contact details below.', address: 'Jizzakh, Pakhtakor Street, 9', projectDetailLabel: 'PROJECT DETAILS', projectDetailNote: 'All available information on this project is shown above.' }
  };

  var langs = ['uz', 'uzCyrl', 'ru', 'en'];
  var out = {};
  langs.forEach(function (l) {
    out[l] = {
      nav: nav[l], aria: aria[l], meta: meta[l], hero: hero[l], about: about[l],
      services: services[l], projects: projects[l], cooperation: cooperation[l],
      capability: capability[l], quality: quality[l], contact: contact[l]
    };
  });
  return out;
})();

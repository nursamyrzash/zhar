const UNIVERSAL_PLAN = {
kk: [
{icon:'🩺',title:'Дәрігерлік қорытынды алу',desc:'Психиатр, невролог, ПМПК қорытындылары',steps:[
{q:'Кімге бару керек?',a:'• Психиатр (балалар психиатры) — АСБ диагнозын қоятын негізгі дәрігер\n• Невролог — неврологиялық жай-күйді бағалайды\n• Психолог — психологиялық-педагогикалық бағалау жасайды'},
{q:'Қандай қорытынды қажет?',a:'• «Аутизм спектрінің бұзылысы» (F84.0 немесе F84) диагнозы бар психиатр қорытындысы\n• Невролог қорытындысы\n• ПМПК қорытындысы'},
{q:'ПМПК қорытындысын қайдан алуға болады?',a:'Аудандық білім бөліміне немесе арнайы ПМПК орталығына хабарласыңыз.'},
{q:'⚠️ Маңызды',a:'Барлық қорытындылар дәрігердің мөрімен және қолымен расталған болуы керек.'},
]},
{icon:'📄',title:'Құжаттарды жинау',desc:'Жеке куәлік, туу туралы куәлік, медициналық қорытындылар',steps:[
{q:'Баланың құжаттары',a:'• Туу туралы куәлік (түпнұсқа + көшірме)\n• Жеке куәлік (14 жастан асқан болса)\n• Тіркеу бойынша тұрақты тұру мекенжайы туралы анықтама\n• Медициналық карта (амбулаториялық)\n• Психиатр қорытындысы\n• Невролог қорытындысы\n• ПМПК қорытындысы'},
{q:'Ата-ананың құжаттары',a:'• Жеке куәлік (түпнұсқа + көшірме)\n• Баламен туыстығын растайтын құжат (туу туралы куәлік немесе сот шешімі)'},
{q:'✅ Кеңес',a:'Барлық құжаттардың 2 данадан көшірмесін алдын ала жасаңыз — бірін МСЭ-ға тапсырасыз, бірі өзіңізде қалсын.'},
]},
{icon:'📋',title:'МСЭ-дан өту',desc:'Мүгедектікті ресімдеу',steps:[
{q:'МСЭ дегеніміз не?',a:'МСЭ — Медициналық-әлеуметтік сараптама. Бұл арнайы комиссия баланың денсаулық жағдайын бағалап, мүгедектік тобын белгілейді.'},
{q:'1. Поликлиникаға хабарласу',a:'• Баланың тіркелген поликлиникасына барыңыз\n• Учаскелік дәрігерден МСЭ-ға жолдама сұраңыз\n• Дәрігер «030/у» нысанын толтырады'},
{q:'2. МСЭ комиссиясына бару',a:'• Аудандық МСЭ бөліміне барлық дайын құжаттарды алып барыңыз\n• Комиссия баланы тексеріп, сұхбат жүргізеді\n• Шешім мерзімі: 1–5 жұмыс күні'},
{q:'3. Нәтиже',a:'• «Мүгедек бала» мәртебесін растайтын сараптама актісін аласыз\n• Мүгедектік тобы белгіленеді (1, 2 немесе 3-топ)\n• Жеке оңалту бағдарламасы (ЖОБ) беріледі'},
{q:'⚠️ Маңызды',a:'МСЭ мойындамаса — шешімге 1 ай ішінде жоғары МСЭ бөліміне немесе сотқа шағымдана аласыз.'},
]},
{icon:'🌐',title:'eGov.kz-ге тіркелу',desc:'ЭЦП жасау',steps:[
{q:'ЭЦП алу (бірінші рет)',a:'• ЦОН-ға (Азаматтарға қызмет көрсету орталығы) барыңыз\n• Жеке куәлікті алып барыңыз\n• ЭЦП сертификатын алыңыз — тегін\n• Сертификат флешкаға немесе телефонға жазылады'},
{q:'eGov-қа тіркелу',a:'• egov.kz сайтына кіріңіз\n• «Тіркелу» батырмасын басыңыз\n• ЖСН енгізіңіз\n• ЭЦП арқылы растаңыз'},
{q:'✅ Кеңес',a:'eGov мобильді қосымшасын да жүктеп алыңыз — App Store немесе Google Play-дан «eGov Mobile» деп іздеңіз.'},
]},
{icon:'💰',title:'Мүгедектік бойынша жәрдемақыны ресімдеу',desc:'eGov немесе ЦОН арқылы',steps:[
{q:'eGov арқылы (үйден)',a:'• egov.kz сайтына кіріңіз\n• «Мүгедек балаға жәрдемақы» деп іздеңіз\n• Онлайн нысанды толтырыңыз, МСЭ актісін тіркеңіз\n• ЭЦП арқылы растаңыз'},
{q:'ЦОН арқылы (жеке барып)',a:'• Аудандық ЦОН-ға барыңыз\n• МСЭ актісі, жеке куәлік, туу туралы куәлік\n• Банктік шот деректемелерін беріңіз'},
{q:'Мерзімдер',a:'• Өтінім қарау: 8 жұмыс күні\n• Жәрдемақы ай сайын банк шотына аударылады'},
]},
{icon:'👨‍👩‍👧',title:'Күтім бойынша жәрдемақыны ресімдеу',desc:'Ата-ана үшін',steps:[
{q:'Шарттар',a:'• Баланың мүгедектік мәртебесі болуы керек\n• Күтім жасаушы жұмыс істемеуі тиіс\n• Күтім жасаушы зейнеткер немесе мүгедек болмауы тиіс'},
{q:'Қажетті құжаттар',a:'• Өтініш (нысан ЦОН-да беріледі)\n• Жеке куәлік\n• Еңбек кітапшасы (болса)\n• Баланың МСЭ актісі\n• Жұмыссыздық туралы анықтама'},
{q:'Қайда хабарласу?',a:'ЦОН немесе egov.kz → «Мүгедек балаға күтім жасаушыға жәрдемақы»'},
]},
{icon:'🏥',title:'Емдеу орталығына жазылу',desc:'Жолдама алу және орталық таңдау',steps:[
{q:'Орталыққа жолдама алу',a:'• Психиатрдан немесе неврологтан жолдама алыңыз\n• ПМПК ұсынған орталықты анықтаңыз\n• Жеңілдікті жолдама ресімдеу үшін ЦОН-ға хабарласыңыз'},
{q:'Орталықтардың түрлері',a:'• Мемлекеттік оңалту орталықтары — тегін, жолдама арқылы\n• Аутизм орталықтары — мамандандырылған\n• Арнайы білім беру мекемелері — ПМПК қорытындысы негізінде'},
{q:'Мемлекеттік тегін қызметтер',a:'• ABA-терапия (кейбір орталықтарда)\n• Логопед, дефектолог, психолог сабақтары\n• Физио-, эрготерапия'},
{q:'✅ Кеңес',a:'Орталықта кезек ұзақ болуы мүмкін. Бірнеше орталыққа бір уақытта тізімге жаздырыңыз.'},
]},
],
ru: [
{icon:'🩺',title:'Получить медицинское заключение',desc:'Психиатр, невролог, ПМПК',steps:[
{q:'К кому обращаться?',a:'• Психиатр (детский) — ставит диагноз РАС\n• Невролог — оценивает неврологическое состояние\n• Психолог — психолого-педагогическая оценка'},
{q:'Какие заключения нужны?',a:'• Заключение психиатра с диагнозом РАС (F84.0 или F84)\n• Заключение невролога\n• Заключение ПМПК'},
{q:'Где получить заключение ПМПК?',a:'Обратитесь в районный отдел образования или специализированный центр ПМПК.'},
{q:'⚠️ Важно',a:'Все заключения должны быть заверены печатью и подписью врача.'},
]},
{icon:'📄',title:'Собрать документы',desc:'Удостоверение личности, свидетельство о рождении, медзаключения',steps:[
{q:'Документы ребёнка',a:'• Свидетельство о рождении (оригинал + копия)\n• Удостоверение личности (если старше 14 лет)\n• Справка о постоянном месте жительства\n• Медицинская карта (амбулаторная)\n• Заключение психиатра, невролога, ПМПК'},
{q:'Документы родителя',a:'• Удостоверение личности (оригинал + копия)\n• Документ, подтверждающий родство (свидетельство о рождении или решение суда)'},
{q:'✅ Совет',a:'Сделайте по 2 копии всех документов заранее — одну сдаёте в МСЭ, вторая остаётся у вас.'},
]},
{icon:'📋',title:'Пройти МСЭ',desc:'Оформить инвалидность',steps:[
{q:'Что такое МСЭ?',a:'МСЭ — Медико-социальная экспертиза. Специальная комиссия оценивает состояние здоровья ребёнка и устанавливает группу инвалидности.'},
{q:'1. Обратиться в поликлинику',a:'• Идите в поликлинику, где наблюдается ребёнок\n• Попросите участкового врача оформить направление на МСЭ\n• Врач заполняет форму «030/у»'},
{q:'2. Явиться в комиссию МСЭ',a:'• Принесите все готовые документы в районный отдел МСЭ\n• Комиссия осмотрит ребёнка и проведёт беседу\n• Срок принятия решения: 1–5 рабочих дней'},
{q:'3. Результат',a:'• Получите акт экспертизы, подтверждающий статус «ребёнок-инвалид»\n• Устанавливается группа инвалидности (1, 2 или 3)\n• Выдаётся индивидуальная программа реабилитации (ИПР)'},
{q:'⚠️ Важно',a:'Если МСЭ откажет — можно обжаловать решение в течение 1 месяца в вышестоящем МСЭ или суде.'},
]},
{icon:'🌐',title:'Зарегистрироваться на eGov.kz',desc:'Создать ЭЦП',steps:[
{q:'Получение ЭЦП (первый раз)',a:'• Обратитесь в ЦОН (Центр обслуживания граждан)\n• Возьмите с собой удостоверение личности\n• Получите сертификат ЭЦП — бесплатно\n• Сертификат записывается на флешку или телефон'},
{q:'Регистрация на eGov',a:'• Перейдите на egov.kz\n• Нажмите «Зарегистрироваться»\n• Введите ИИН\n• Подтвердите через ЭЦП'},
{q:'✅ Совет',a:'Скачайте мобильное приложение eGov Mobile — ищите в App Store или Google Play.'},
]},
{icon:'💰',title:'Оформить пособие по инвалидности',desc:'Через eGov или ЦОН',steps:[
{q:'Через eGov (из дома)',a:'• Зайдите на egov.kz\n• Найдите «пособие на ребёнка-инвалида»\n• Заполните онлайн-форму, прикрепите акт МСЭ\n• Подтвердите через ЭЦП'},
{q:'Через ЦОН (лично)',a:'• Обратитесь в районный ЦОН\n• Акт МСЭ, удостоверение личности, свидетельство о рождении\n• Укажите реквизиты банковского счёта'},
{q:'Сроки',a:'• Рассмотрение заявления: 8 рабочих дней\n• Пособие перечисляется ежемесячно на банковский счёт'},
]},
{icon:'👨‍👩‍👧',title:'Оформить пособие по уходу',desc:'Для родителя',steps:[
{q:'Условия',a:'• У ребёнка должен быть статус инвалида\n• Ухаживающий не должен работать официально\n• Ухаживающий не должен быть пенсионером или инвалидом'},
{q:'Необходимые документы',a:'• Заявление (бланк в ЦОН)\n• Удостоверение личности\n• Трудовая книжка (при наличии)\n• Акт МСЭ ребёнка\n• Справка о безработице'},
{q:'Куда обращаться?',a:'ЦОН или egov.kz → «Пособие по уходу за ребёнком-инвалидом»'},
]},
{icon:'🏥',title:'Записаться в реабилитационный центр',desc:'',steps:[
{q:'Как получить направление?',a:'• Возьмите направление у психиатра или невролога\n• Определите центр, рекомендованный ПМПК\n• Для льготного направления обратитесь в ЦОН'},
{q:'Виды центров',a:'• Государственные реабилитационные центры — бесплатно, по направлению\n• Центры аутизма — специализированные\n• Специальные учебные учреждения — по заключению ПМПК'},
{q:'Бесплатные государственные услуги',a:'• ABA-терапия (в некоторых центрах)\n• Логопед, дефектолог, психолог\n• Физио-, эрготерапия'},
{q:'✅ Совет',a:'Очередь в центрах может быть долгой. Записывайтесь в несколько центров одновременно.'},
]},
],
en: [
{icon:'🩺',title:'Get medical reports',desc:'Psychiatrist, neurologist, PMPC',steps:[
{q:'Who to visit?',a:'• Child psychiatrist — diagnoses ASD\n• Neurologist — assesses neurological condition\n• Psychologist — psychological-pedagogical assessment'},
{q:'What reports are needed?',a:'• Psychiatrist report with ASD diagnosis (F84.0 or F84)\n• Neurologist report\n• PMPC (psycho-medical-pedagogical commission) report'},
{q:'Where to get PMPC report?',a:'Contact the district education department or a specialized PMPC center.'},
{q:'⚠️ Important',a:'All reports must be stamped and signed by the doctor.'},
]},
{icon:'📄',title:'Gather documents',desc:'ID, birth certificate, medical reports',steps:[
{q:"Child's documents",a:'• Birth certificate (original + copy)\n• ID card (if over 14)\n• Residence registration certificate\n• Outpatient medical record\n• Psychiatrist, neurologist, PMPC reports'},
{q:"Parent's documents",a:'• ID card (original + copy)\n• Document confirming relationship (birth certificate or court decision)'},
{q:'✅ Tip',a:'Make 2 copies of all documents in advance — submit one to MSE, keep one for yourself.'},
]},
{icon:'📋',title:'Pass the disability commission (MSE)',desc:'Get official disability status',steps:[
{q:'What is MSE?',a:'MSE — Medical and Social Expert Commission. It evaluates the child\'s health and assigns a disability group.'},
{q:'1. Visit the clinic',a:'• Go to the clinic where the child is registered\n• Ask the district doctor for an MSE referral\n• Doctor fills in form «030/у»'},
{q:'2. Attend the MSE commission',a:'• Bring all documents to the district MSE office\n• Commission examines the child and conducts an interview\n• Decision time: 1–5 working days'},
{q:'3. Result',a:'• Receive an expert act confirming "child with disability" status\n• Disability group is assigned (1, 2 or 3)\n• Individual rehabilitation program (IRP) is issued'},
{q:'⚠️ Important',a:'If MSE denies — you can appeal the decision within 1 month at a higher MSE office or court.'},
]},
{icon:'🌐',title:'Register on eGov.kz',desc:'Create a digital signature (EDS)',steps:[
{q:'Getting EDS (first time)',a:'• Visit a CRC (Citizen Service Center)\n• Bring your ID card\n• Get EDS certificate — free of charge\n• Certificate is saved to a flash drive or phone'},
{q:'Registering on eGov',a:'• Go to egov.kz\n• Click "Register"\n• Enter your IIN\n• Confirm via EDS'},
{q:'✅ Tip',a:'Download the eGov Mobile app — search in App Store or Google Play.'},
]},
{icon:'💰',title:'Apply for disability allowance',desc:'Via eGov or service center',steps:[
{q:'Via eGov (from home)',a:'• Go to egov.kz\n• Search for "child disability allowance"\n• Fill in the online form, attach MSE act\n• Confirm via EDS'},
{q:'Via CRC (in person)',a:'• Visit your district CRC\n• MSE act, ID card, birth certificate\n• Provide bank account details'},
{q:'Timelines',a:'• Application review: 8 working days\n• Allowance transferred monthly to bank account'},
]},
{icon:'👨‍👩‍👧',title:'Apply for caregiver allowance',desc:'For the parent',steps:[
{q:'Conditions',a:'• Child must have disability status\n• Caregiver must not be officially employed\n• Caregiver must not be a pensioner or disabled person'},
{q:'Required documents',a:'• Application (form available at CRC)\n• ID card\n• Employment record book (if available)\n• Child\'s MSE act\n• Unemployment certificate'},
{q:'Where to apply?',a:'CRC or egov.kz → "Allowance for caring for a disabled child"'},
]},
{icon:'🏥',title:'Enroll in a rehabilitation center',desc:'',steps:[
{q:'How to get a referral?',a:'• Get a referral from a psychiatrist or neurologist\n• Identify center recommended by PMPC\n• Contact CRC for a subsidized referral'},
{q:'Types of centers',a:'• State rehabilitation centers — free, by referral\n• Autism centers — specialized\n• Special educational institutions — by PMPC report'},
{q:'Free state services',a:'• ABA therapy (in some centers)\n• Speech therapist, special educator, psychologist\n• Physio and occupational therapy'},
{q:'✅ Tip',a:'Queues at centers can be long. Register at several centers at the same time.'},
]},
],
};
 
const BENEFITS_DATA = {
// Инвалидность 1 группы
disability_group1: {
ru:[
  {icon:'🚌',title:'Транспорт',items:[
    'Бесплатный проезд в городском транспорте (автобусы, метро)',
    'Скидки на междугородние билеты, в том числе на авиабилеты и ЖД билеты'
  ]},
  {icon:'🏥',title:'Медицина и реабилитация',items:[
    'Бесплатное санаторно-курортное лечение 1 раз в год',
    'Компенсация на протезно-ортопедическую помощь и технические средства реабилитации'
  ]},
  {icon:'🏛️',title:'Услуги и права',items:[
    'Обслуживание вне очереди в организациях и учреждениях',
    'Скидка 50% на услуги нотариуса (включая сделки купли-продажи недвижимости)'
  ]},
  {icon:'🏠',title:'Жильё и ипотека',items:[
    'Приоритетная очередь на жильё от государства',
    'Участие в программах «Бақытты отбасы» и «Шаңырақ»',
    'Льготная ипотека: ставка ~2–5% (при соблюдении условий)',
    'В некоторых регионах: компенсация аренды жилья',
    'В некоторых регионах: помощь с первоначальным взносом или разовые выплаты'
  ]}
],
kk:[
  {icon:'🚌',title:'Көлік',items:[
    'Қала көлігінде (автобус, метро) тегін жүру',
    'Қалааралық билеттерге жеңілдік (авиа және теміржол билеттерін қоса)'
  ]},
  {icon:'🏥',title:'Медицина және оңалту',items:[
    'Жылына 1 рет тегін санаторлық-курорттық ем',
    'Протездік-ортопедиялық көмек пен оңалту техникалық құралдарына өтемақы'
  ]},
  {icon:'🏛️',title:'Қызметтер мен құқықтар',items:[
    'Ұйымдар мен мекемелерде кезексіз қызмет',
    'Нотариус қызметтеріне 50% жеңілдік (жылжымайтын мүлікті сату-сатып алу мәмілелерін қоса)'
  ]},
  {icon:'🏠',title:'Тұрғын үй және ипотека',items:[
    'Мемлекеттен тұрғын үй алуға кезекте басымдық',
    '«Бақытты отбасы» және «Шаңырақ» бағдарламаларына қатысу',
    'Жеңілдікті ипотека: ~2–5% мөлшерлеме (шарттар орындалғанда)',
    'Кейбір аймақтарда: тұрғын үй жалдауына өтемақы',
    'Кейбір аймақтарда: бастапқы жарнаға көмек немесе біржолғы төлемдер'
  ]}
],
en:[
  {icon:'🚌',title:'Transport',items:[
    'Free travel on city public transport (buses, metro)',
    'Discounts on intercity tickets including flights and railway'
  ]},
  {icon:'🏥',title:'Healthcare & rehabilitation',items:[
    'Free sanatorium treatment once a year',
    'Compensation for prosthetic-orthopedic assistance and rehabilitation equipment'
  ]},
  {icon:'🏛️',title:'Services & rights',items:[
    'Priority (queue-free) service in all institutions and organisations',
    '50% discount on notary services including real estate transactions'
  ]},
  {icon:'🏠',title:'Housing & mortgage',items:[
    'Priority queue for state housing',
    'Participation in programmes "Bakhytty Otbasy" and "Shanyraq"',
    'Subsidised mortgage: rate ~2–5% (subject to conditions)',
    'In some regions: rent compensation',
    'In some regions: help with down payment or one-time payments'
  ]}
]},
// Инвалидность 2 группы
disability_group2: {
ru:[
  {icon:'💵',title:'Налоги',items:[
    'Освобождение от налога на транспорт и имущество'
  ]},
  {icon:'✈️',title:'Транспорт',items:[
    'Скидки на авиабилеты и ЖД билеты внутри Казахстана (по заявлениям в транспортные компании)'
  ]},
  {icon:'🏠',title:'Жильё и ипотека',items:[
    'Приоритетная очередь на жильё от государства',
    'Участие в программах «Бақытты отбасы» и «Шаңырақ»',
    'Льготная ипотека: ставка ~2–5% (при соблюдении условий)',
    'В некоторых регионах: компенсация аренды жилья',
    'В некоторых регионах: помощь с первоначальным взносом или разовые выплаты'
  ]},
  {icon:'⚖️',title:'Трудовые права',items:[
    'Сокращённая рабочая неделя',
    'Дополнительный отпуск'
  ]},
  {icon:'📋',title:'Услуги и выплаты',items:[
    'Скидки у нотариуса до 50% на оформление доверенностей, завещаний и других действий',
    'Возможность получения пособия и социальных выплат независимо от трудового стажа'
  ]}
],
kk:[
  {icon:'💵',title:'Салықтар',items:[
    'Көлік және мүлік салығынан босатылу'
  ]},
  {icon:'✈️',title:'Көлік',items:[
    'Қазақстан ішіндегі авиа және теміржол билеттеріне жеңілдік (көлік компанияларына өтінім бойынша)'
  ]},
  {icon:'🏠',title:'Тұрғын үй және ипотека',items:[
    'Мемлекеттен тұрғын үй алуға кезекте басымдық',
    '«Бақытты отбасы» және «Шаңырақ» бағдарламаларына қатысу',
    'Жеңілдікті ипотека: ~2–5% мөлшерлеме (шарттар орындалғанда)',
    'Кейбір аймақтарда: тұрғын үй жалдауына өтемақы',
    'Кейбір аймақтарда: бастапқы жарнаға көмек немесе біржолғы төлемдер'
  ]},
  {icon:'⚖️',title:'Еңбек құқықтары',items:[
    'Қысқартылған жұмыс аптасы',
    'Қосымша демалыс'
  ]},
  {icon:'📋',title:'Қызметтер мен төлемдер',items:[
    'Нотариуста сенімхат, өсиет және басқа әрекеттерге 50%-ға дейін жеңілдік',
    'Еңбек өтіліне қарамастан жәрдемақы мен әлеуметтік төлем алу мүмкіндігі'
  ]}
],
en:[
  {icon:'💵',title:'Taxes',items:[
    'Exemption from vehicle and property tax'
  ]},
  {icon:'✈️',title:'Transport',items:[
    'Discounts on domestic flights and railway tickets in Kazakhstan (upon application to carriers)'
  ]},
  {icon:'🏠',title:'Housing & mortgage',items:[
    'Priority queue for state housing',
    'Participation in programmes "Bakhytty Otbasy" and "Shanyraq"',
    'Subsidised mortgage: rate ~2–5% (subject to conditions)',
    'In some regions: rent compensation',
    'In some regions: help with down payment or one-time payments'
  ]},
  {icon:'⚖️',title:'Labour rights',items:[
    'Reduced working week',
    'Additional paid leave'
  ]},
  {icon:'📋',title:'Services & benefits',items:[
    'Up to 50% notary discount on powers of attorney, wills and other actions',
    'Eligibility for allowance and social payments regardless of work history'
  ]}
]},
// Инвалидность 3 группы
disability_group3: {
ru:[
  {icon:'💵',title:'Налоги',items:[
    'Освобождение от подоходного налога на доходы до 882 МРП в год',
    'Налоговые льготы для ИП-инвалидов 3 группы'
  ]},
  {icon:'📋',title:'Услуги',items:[
    '50% скидка на услуги нотариуса (подтверждается справкой об инвалидности)'
  ]},
  {icon:'🏥',title:'Медицина',items:[
    'Возможность оформить пенсию по инвалидности и доплату из ЕНПФ',
    'Частичная компенсация на медикаменты и технические средства'
  ]},
  {icon:'🏠',title:'Жильё и коммунальные услуги',items:[
    'Участие в программах «Бақытты отбасы» и «Шаңырақ»',
    'Льготная ипотека: ставка ~2–5% (при соблюдении условий)',
    'В некоторых регионах: компенсация аренды жилья',
    'В некоторых регионах: помощь с первоначальным взносом или разовые выплаты',
    'В некоторых регионах — скидки на коммунальные услуги'
  ]}
],
kk:[
  {icon:'💵',title:'Салықтар',items:[
    'Жылына 882 АЕК-ке дейінгі табысқа табыс салығынан босатылу',
    'III топ мүгедек кәсіпкерлерге салықтық жеңілдіктер'
  ]},
  {icon:'📋',title:'Қызметтер',items:[
    'Нотариус қызметтеріне 50% жеңілдік (мүгедектік анықтамасымен расталады)'
  ]},
  {icon:'🏥',title:'Медицина',items:[
    'Мүгедектік бойынша зейнетақы және БЖЗҚ-дан қосымша төлем ресімдеу мүмкіндігі',
    'Дәрілер мен техникалық құралдарға ішінара өтемақы'
  ]},
  {icon:'🏠',title:'Тұрғын үй және коммуналдық қызметтер',items:[
    '«Бақытты отбасы» және «Шаңырақ» бағдарламаларына қатысу',
    'Жеңілдікті ипотека: ~2–5% мөлшерлеме (шарттар орындалғанда)',
    'Кейбір аймақтарда: тұрғын үй жалдауына өтемақы',
    'Кейбір аймақтарда: бастапқы жарнаға көмек немесе біржолғы төлемдер',
    'Кейбір аймақтарда — коммуналдық қызметтерге жеңілдік'
  ]}
],
en:[
  {icon:'💵',title:'Taxes',items:[
    'Income tax exemption on earnings up to 882 MCI per year',
    'Tax relief for self-employed persons with Group III disability'
  ]},
  {icon:'📋',title:'Services',items:[
    '50% notary discount (confirmed by disability certificate)'
  ]},
  {icon:'🏥',title:'Healthcare',items:[
    'Eligibility for disability pension and supplemental payment from UAPF',
    'Partial compensation for medicines and rehabilitation equipment'
  ]},
  {icon:'🏠',title:'Housing & utilities',items:[
    'Participation in programmes "Bakhytty Otbasy" and "Shanyraq"',
    'Subsidised mortgage: rate ~2–5% (subject to conditions)',
    'In some regions: rent compensation',
    'In some regions: help with down payment or one-time payments',
    'Discounts on utility bills in some regions'
  ]}
]}
};
 
const DIAGNOSES = {
kk: ['Аутизм','ДЦП','Синдром Дауна','Есту кемістігі','Көру кемістігі','Сөйлеу кемістігі','Мүгедектік','Басқа'],
ru: ['Аутизм','ДЦП','Синдром Дауна','Нарушение слуха','Нарушение зрения','Нарушение речи','Инвалидность','Другое'],
en: ['Autism','Cerebral Palsy','Down Syndrome','Hearing Impairment','Visual Impairment','Speech Impairment','Disability','Other']
};
const DISABILITY_GROUPS = {
kk: ['I топ','II топ','III топ'],
ru: ['I группа','II группа','III группа'],
en: ['Group I','Group II','Group III']
};
const CITIES = ['Қостанай / Костанай','Астана','Алматы','Шымкент','Қарағанды / Карагандa','Басқа / Другое / Other'];
 
const GOV_SUPPORT_RAILWAY = {
  title: 'Дисконтная карта «Мейірім»',
  subtitle: 'Для лиц с инвалидностью всех групп и детей с инвалидностью предусмотрена скидка 50% на проезд по социально значимым железнодорожным маршрутам (согласно Правилам перевозок РК, приказ №545 с изменениями №611).',
  steps: [
    {
      q: 'Основные условия',
      a: '• Выдаётся только гражданам Республики Казахстан\n• Стоимость: 1 тенге\n• Действует только на территории РК\n• Оформляется в ж/д кассах на вокзалах'
    },
    {
      q: 'Необходимые документы',
      a: '1. Удостоверяющий личности.\n2. Справка об инвалидности (через eGov.kz или приложение eGov mobile)\n3. Согласие на обработку персональных данных\n4. Адрес электронной почты владельца ДК (при наличии).'
    },
    {
      q: 'Подробная инструкция',
      a: 'С подробной инcтрукцией покупки на сайте, Вы можете ознакомиться пройдя по ссылке https://bilet.railways.kz/post/infogr'
    }
  ]
};


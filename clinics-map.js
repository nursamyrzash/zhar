/**
 * clinics-map.js — Zharyk Online
 * Defines KZ_CLINICS, CLINICS (foreign), KZ_REGIONS, and window.renderKazakhstanMap.
 * Include BEFORE app.js in your HTML.
 */

/* ═══════════════════════════════════════
   KZ_CLINICS — Kazakhstan rehab centers
   ═══════════════════════════════════════ */
const KZ_CLINICS = {
  almaty: [
    {name:'РДЦ «Балбұлақ»',address:'г. Алматы, ул. Жибек Жолы, 50',phone:'+7 727 273 11 01',email:'balbulak@mzsr.kz',site:'https://balbulak.kz',desc:{ru:'Крупнейший гос. центр реабилитации детей с ДЦП, аутизмом, задержкой развития. Стационар, ЛФК, логопедия, психология.',kk:'ДЦП, аутизм бар балаларды оңалтатын ең ірі мемлекеттік орталық. ЛФК, логопедия, психология.',en:'Largest state rehab center for children with cerebral palsy, autism, developmental delays. Inpatient, physiotherapy, speech therapy.'}},
    {name:'ДЦ «Шапағат»',address:'г. Алматы, пр. Абая, 42',phone:'+7 727 220 44 33',email:'shapagat@inbox.kz',site:'',desc:{ru:'АВА-терапия, сенсорная интеграция, эрготерапия, нейрологопедия.',kk:'АВА-терапия, сенсорлық интеграция, эрготерапия, нейрологопедия.',en:'ABA therapy, sensory integration, occupational therapy, neurospeech therapy.'}},
    {name:'Центр «Умит» — ранняя помощь',address:'г. Алматы, ул. Тимирязева, 28/2',phone:'+7 727 394 20 10',email:'umit@umit.kz',site:'https://umit.kz',desc:{ru:'Ранняя помощь детям 0–8 лет: коррекция речи, поведенческий анализ.',kk:'0–8 жасар балаларға ерте көмек: сөйлеу түзету, мінез-құлық талдауы.',en:'Early intervention for children 0–8: speech correction, behavioral analysis.'}},
    {name:'«Инклюзив Ресурс Хаб»',address:'г. Алматы, ул. Гоголя, 20',phone:'+7 777 995 70 87',email:'hello@inclusivereshub.kz',site:'https://inclusivereshub.kz',desc:{ru:'ЛФК, арт-терапия, инклюзивные игровые группы для детей с ОВЗ.',kk:'ЛФК, арт-терапия, мүмкіндігі шектеулі балаларға арналған ойын топтары.',en:'Physiotherapy, art therapy, inclusive play groups for children with disabilities.'}},
    {name:'МЦ «Мирас» — реабилитация',address:'г. Алматы, ул. Байзақова, 280',phone:'+7 727 250 75 25',email:'',site:'',desc:{ru:'ДЦП: ботулинотерапия, рефлексотерапия, водолечение, тренажёры Гросса.',kk:'ДЦП: ботулинотерапия, рефлексотерапия, су емдеу.',en:'Cerebral palsy: botulinum therapy, reflexotherapy, hydrotherapy, Gross trainers.'}},
    {name:'Центр «Болашақ» — коррекция',address:'г. Алматы, мкр. Алатау, ул. Саяхат, 5',phone:'+7 701 234 55 10',email:'',site:'',desc:{ru:'Психолого-педагогическая коррекция, дефектология, логопедия, сенсорная комната.',kk:'Психологиялық-педагогикалық түзету, дефектология, логопедия.',en:'Psycho-pedagogical correction, defectology, speech therapy, sensory room.'}},
    {name:'РЦ «Нұрлы Жол»',address:'г. Алматы, ул. Алтынсарина, 115',phone:'+7 727 233 19 44',email:'',site:'',desc:{ru:'Массаж, ЛФК, физиолечение, Войта-терапия.',kk:'Массаж, ЛФК, физиолечение, Войта-терапия.',en:'Massage, physiotherapy, Vojta therapy.'}},
    {name:'ДЦ «Меруерт» — аутизм и ОВЗ',address:'г. Алматы, ул. Навои, 208',phone:'+7 700 500 14 44',email:'',site:'',desc:{ru:'АВА, логопедия, нейропсихология для детей с РАС и СДВГ.',kk:'АВА, логопедия, нейропсихология.',en:'ABA, speech therapy, neuropsychology for children with ASD and ADHD.'}},
    {name:'РК «Айболит»',address:'г. Алматы, ул. Толе Би, 298',phone:'+7 727 225 60 05',email:'',site:'',desc:{ru:'ЛФК, массаж, физиотерапия, бассейн для детей с ДЦП.',kk:'ЛФК, массаж, физиотерапия, бассейн.',en:'Physiotherapy, massage, pool for children with cerebral palsy.'}},
    {name:'Центр «Ақ Ниет» — слух и речь',address:'г. Алматы, ул. Манаса, 34',phone:'+7 727 266 77 88',email:'',site:'',desc:{ru:'Слухопротезирование, развитие речи, сурдопедагогика.',kk:'Есту протездеу, сөйлеуді дамыту, сурдопедагогика.',en:'Hearing aid fitting, speech development, deaf pedagogy.'}},
    {name:'Фонд «Боташым»',address:'г. Алматы, ул. Райымбека, 174/13',phone:'+7 707 160 57 58',email:'fondbotashym@bk.ru',site:'',desc:{ru:'Кинезиотерапия, эрготерапия, психологическая поддержка семей.',kk:'Кинезиотерапия, эрготерапия, отбасыларға психологиялық қолдау.',en:'Kinesiotherapy, occupational therapy, family psychological support.'}},
    {name:'МЦ «Ассоциация аутизма» Алматы',address:'г. Алматы, мкр. Қарғалы, ул. Кенесары хан, 100',phone:'+7 701 955 82 45',email:'info@autism.kz',site:'https://autism.kz',desc:{ru:'Диагностика, группы раннего вмешательства, обучение родителей АВА.',kk:'Диагностика, ерте кіру топтары, АВА бойынша ата-аналарды оқыту.',en:'Diagnosis, early intervention groups, parent ABA training.'}},
    {name:'РЦ «Тілашар»',address:'г. Алматы, ул. Байтурсынова, 88',phone:'+7 727 291 40 10',email:'',site:'',desc:{ru:'Задержка речи, заикание, дислексия, онлайн-занятия.',kk:'Сөйлеу кешігуі, кекештік, дислексия, онлайн сабақтар.',en:'Speech delay, stuttering, dyslexia, online sessions.'}},
    {name:'МЦ «Аль-Фараби» — нейрореабилитация',address:'г. Алматы, ул. Ходжанова, 74',phone:'+7 727 264 14 14',email:'',site:'',desc:{ru:'Роботизированная механотерапия, эрготерапия при ДЦП, после ЧМТ.',kk:'Роботталған механотерапия, эрготерапия.',en:'Robotic mechanotherapy, occupational therapy for cerebral palsy, post-TBI.'}},
    {name:'ОРЦ «Достық»',address:'г. Алматы, ул. Алмазная, 4',phone:'+7 727 290 55 60',email:'',site:'',desc:{ru:'Комплексная помощь детям с ОВЗ, сопровождение семей.',kk:'Мүмкіндігі шектеулі балаларға кешенді көмек, отбасыларды сүйемелдеу.',en:'Comprehensive support for children with disabilities, family assistance.'}},
    {name:'ДЦ «Сенім»',address:'г. Алматы, ул. Сейфуллина, 480',phone:'+7 727 212 08 08',email:'',site:'',desc:{ru:'Ранняя диагностика задержки развития, коррекция, программы 0–12 лет.',kk:'Даму кешігуін ерте диагностикалау, түзету.',en:'Early diagnosis of developmental delays, correction programs for children 0–12.'}},
    {name:'МЦ «Нейрон» Алматы',address:'г. Алматы, ул. Жандосова, 94А',phone:'+7 727 399 01 90',email:'',site:'',desc:{ru:'ТМС, биофидбэк, нейрокогнитивная коррекция при СДВГ, РАС.',kk:'ТМС, биофидбэк, нейрокогнитивтік түзету.',en:'TMS, biofeedback, neurocognitive correction for ADHD, ASD.'}},
    {name:'Алматинский областной ОРЦ «Мейірім»',address:'Алматинская обл., пос. Қызыл Қайрат',phone:'+7 707 229 41 29',email:'',site:'',desc:{ru:'Областной центр реабилитации детей с инвалидностью Алматинской области.',kk:'Алматы облысының мүгедек балаларын оңалту облыстық орталығы.',en:'Regional rehabilitation center for disabled children, Almaty Region.'}},
    {name:'Центр «Жан Саулығы»',address:'г. Алматы, пр. Достык, 142',phone:'+7 727 250 99 00',email:'',site:'',desc:{ru:'Психиатрическая реабилитация, психосоциальная поддержка.',kk:'Психиатриялық оңалту, психоәлеуметтік қолдау.',en:'Psychiatric rehabilitation, psychosocial support.'}},
    {name:'ДЦ «Арман» — конная терапия',address:'г. Алматы, мкр. Самал-2, д. 65',phone:'+7 700 120 11 22',email:'',site:'',desc:{ru:'Конная терапия, канистерапия, арт-терапия для детей с ОВЗ.',kk:'Ат терапиясы, канистерапия, арт-терапия.',en:'Hippotherapy, canine therapy, art therapy for children with disabilities.'}},
    {name:'РЦ «Балдырған»',address:'г. Алматы, ул. Сатпаева, 21А',phone:'+7 727 394 12 55',email:'',site:'',desc:{ru:'Задержка речи и нарушения аутистического спектра.',kk:'Сөйлеу кешігуі және аутистикалық спектр бұзылыстары.',en:'Speech delay and autism spectrum disorders.'}},
    {name:'МЦ «Тонус» — физиотерапия',address:'г. Алматы, ул. Тулебаева, 32',phone:'+7 727 272 63 63',email:'',site:'',desc:{ru:'Физиотерапия, кинезиотерапия, кинезиотейпирование, ЛФК.',kk:'Физиотерапия, кинезиотерапия, кинезиотейпирование.',en:'Physiotherapy, kinesiotherapy, kinesiotaping.'}},
    {name:'ДЦ «Астра» — аутизм',address:'г. Алматы, ул. Аль-Фараби, 17/1',phone:'+7 708 555 09 08',email:'',site:'',desc:{ru:'EIBI, PECS, вербальное поведение, социальные навыки.',kk:'EIBI, PECS, вербальды мінез-құлық, әлеуметтік дағдылар.',en:'EIBI, PECS, verbal behavior, social skills training.'}},
    {name:'Центр «Гармония» — сенсорная интеграция',address:'г. Алматы, ул. Карасай батыра, 96',phone:'+7 700 345 67 89',email:'',site:'',desc:{ru:'Сенсорная интеграция, эрготерапия, нейродинамические тренировки.',kk:'Сенсорлық интеграция, эрготерапия.',en:'Sensory integration, occupational therapy, neurodynamic training.'}},
    {name:'МЦ «Альтернатива» — КАК/ДАК',address:'г. Алматы, ул. Маркова, 55',phone:'+7 702 200 78 78',email:'',site:'',desc:{ru:'AAC-устройства, PECS для детей с тяжёлыми формами аутизма.',kk:'AAC-құрылғылар, PECS.',en:'AAC devices, PECS for children with severe autism.'}},
    {name:'МЦ «Иппотерапия»',address:'г. Алматы, мкр. Ак-Булак, конный клуб',phone:'+7 701 910 55 44',email:'',site:'',desc:{ru:'Лечебная верховая езда для детей с ДЦП, аутизмом, ЗПР.',kk:'ДЦП, аутизм, ПДЗ бар балаларға емдік ат мінуі.',en:'Therapeutic horse riding for children with cerebral palsy, autism, intellectual delays.'}},
    {name:'Центр логопедии «Дыбыс»',address:'г. Алматы, ул. Сатпаева, 90/20',phone:'+7 705 100 40 70',email:'',site:'',desc:{ru:'Постановка звуков, коррекция заикания, развитие речи.',kk:'Дыбыстарды қою, кекештікті түзету, сөйлеуді дамыту.',en:'Sound production, stuttering correction, speech development.'}},
    {name:'ДЦ «Нейрон Кидс»',address:'г. Алматы, мкр. Калкаман-2, д. 18',phone:'+7 702 450 99 50',email:'',site:'',desc:{ru:'СДВГ, дислексия, школьные трудности.',kk:'СДВГ, дислексия, мектептегі қиындықтар.',en:'ADHD, dyslexia, learning difficulties.'}},
    {name:'МЦ «Оңалту»',address:'г. Алматы, ул. Гоголя, 127',phone:'+7 727 233 44 22',email:'',site:'',desc:{ru:'Ортопедия, постинсультная реабилитация, ЛФК для детей и взрослых.',kk:'Ортопедия, инсульттан кейінгі оңалту, ЛФК.',en:'Orthopedics, post-stroke rehabilitation, physiotherapy for children and adults.'}},
    {name:'Центр «Нейрологика»',address:'г. Алматы, ул. Пушкина, 97',phone:'+7 727 310 05 05',email:'',site:'',desc:{ru:'ДЦП, эпилепсия, задержка развития. Электронейромиография, ЭЭГ.',kk:'ДЦП, эпилепсия, даму кешігуі. ЭЭГ.',en:'Cerebral palsy, epilepsy, developmental delay. ENMG, EEG.'}},
  ],
  astana: [
    {name:'НЦ материнства и детства (НЦМД)',address:'г. Астана, ул. Туран, 8',phone:'+7 7172 70 63 00',email:'ncmd@ncmd.kz',site:'https://ncmd.kz',desc:{ru:'Педиатрия, нейрохирургия, кардиология, ранняя реабилитация новорождённых.',kk:'Педиатрия, нейрохирургия, кардиология, жаңа туғандарды ерте оңалту.',en:'Pediatrics, neurosurgery, cardiology, early neonatal rehabilitation.'}},
    {name:'РЦ «ДАРА»',address:'г. Астана, р-н Есиль, ул. Достық, 18',phone:'+7 705 114 32 50',email:'info@dara.kz',site:'https://dara.kz',desc:{ru:'РАС, СДВГ, ЗРР: АВА-терапия, нейропсихология, сенсорная интеграция.',kk:'РАС, СДВГ, ЗСД: АВА-терапия, нейропсихология.',en:'ASD, ADHD, speech delay: ABA therapy, neuropsychology, sensory integration.'}},
    {name:'Фонд «Акниет»',address:'г. Астана, ул. Бейбитшилик, 8',phone:'+7 702 920 99 78',email:'fondakniet@mail.ru',site:'',desc:{ru:'ЛФК, логопедия, арт-терапия, канистерапия для детей с инвалидностью.',kk:'ЛФК, логопедия, арт-терапия, канистерапия.',en:'Physiotherapy, speech therapy, art therapy, canine therapy for children with disabilities.'}},
    {name:'РЦ «Арман» Астана',address:'г. Астана, пр. Богенбай батыра, 62',phone:'+7 7172 32 55 88',email:'',site:'',desc:{ru:'Войта, Бобат, ПНФ, массаж, гидрокинезиотерапия.',kk:'Войта, Бобат, ПНФ, массаж, гидрокинезиотерапия.',en:'Vojta, Bobath, PNF, massage, hydrokinesiotherapy.'}},
    {name:'Гос. центр «Мейірім» Астана',address:'г. Астана, ул. Сейфуллина, 41',phone:'+7 7172 20 60 40',email:'',site:'',desc:{ru:'Дети с ДЦП, аутизмом, нарушениями слуха и зрения.',kk:'ДЦП, аутизм, есту және көру бұзылысы бар балалар.',en:'Children with cerebral palsy, autism, hearing and visual impairments.'}},
    {name:'МЦ «Нейрон» Астана',address:'г. Астана, ул. Кунаева, 12/1',phone:'+7 7172 500 618',email:'',site:'',desc:{ru:'Биофидбэк, транскраниальная магнитная стимуляция, нейрокогнитивная коррекция.',kk:'Биофидбэк, транскраниальды магниттік ынталандыру.',en:'Biofeedback, TMS, neurocognitive correction.'}},
    {name:'Центр «Жарық жол» Астана',address:'г. Астана, пр. Женис, 79/А',phone:'+7 7172 522 962',email:'of_dar@mail.ru',site:'',desc:{ru:'Психолого-педагогическое сопровождение, индивидуальные образовательные программы.',kk:'Психологиялық-педагогикалық сүйемелдеу, жеке білім бағдарламалары.',en:'Psycho-pedagogical support, individual educational programs.'}},
    {name:'ОРЦ «Ерекше бала» Астана',address:'г. Астана, ул. Алматы, 4А',phone:'+7 7172 27 44 10',email:'',site:'',desc:{ru:'Коррекция речи, развитие коммуникации, сопровождение при включении в школу.',kk:'Сөйлеуді түзету, қатынас дамыту, мектепке кіруде сүйемелдеу.',en:'Speech correction, communication development, school integration support.'}},
    {name:'РЦ «Аяла» Астана',address:'г. Астана, ул. Жубанова, 10',phone:'+7 701 899 40 40',email:'',site:'',desc:{ru:'ЛФК, кинезиотейпирование, нейропсихологическая коррекция.',kk:'ЛФК, кинезиотейпирование, нейропсихологиялық түзету.',en:'Physiotherapy, kinesiotaping, neuropsychological correction.'}},
    {name:'МЦ «Астана Мед» — нейрореабилитация',address:'г. Астана, пр. Мангилик Ел, 28',phone:'+7 7172 77 55 00',email:'',site:'',desc:{ru:'Робот Lokomat, эрготерапия, нейрологопедия, бассейн.',kk:'Lokomat роботы, эрготерапия, нейрологопедия, бассейн.',en:'Lokomat robot, occupational therapy, neurospeech therapy, pool.'}},
    {name:'Детский психоневрологический диспансер',address:'г. Астана, ул. Достык, 14',phone:'+7 7172 21 50 11',email:'',site:'',desc:{ru:'Психиатрическая и неврологическая диагностика, коррекция, дневной стационар.',kk:'Психиатриялық және неврологиялық диагностика, күндізгі стационар.',en:'Psychiatric and neurological diagnosis for children, day hospital.'}},
    {name:'РЦ «Шапағат» Астана',address:'г. Астана, ул. Аль-Фараби, 36',phone:'+7 7172 35 22 10',email:'',site:'',desc:{ru:'АВА, PECS, сенсорная интеграция, коррекция поведения при РАС.',kk:'АВА, PECS, сенсорлық интеграция.',en:'ABA, PECS, sensory integration, behavior correction for ASD.'}},
    {name:'ОРЦ «Болашақ» Астана',address:'г. Астана, ул. Д.Кунаева, 12/1',phone:'+7 7172 500 618',email:'charityfoundation@bolashak.kz',site:'',desc:{ru:'Долгосрочные программы для детей с тяжёлыми нарушениями развития.',kk:'Ауыр даму бұзылыстары бар балаларға ұзақ мерзімді бағдарламалар.',en:'Long-term programs for children with severe developmental disorders.'}},
    {name:'МЦ «Рауан» Астана',address:'г. Астана, ул. Московская, 39',phone:'+7 7172 42 60 90',email:'',site:'',desc:{ru:'Физиотерапия, кинезиотерапия, постоперационная реабилитация.',kk:'Физиотерапия, кинезиотерапия, операциядан кейінгі оңалту.',en:'Physiotherapy, kinesiotherapy, post-operative rehabilitation.'}},
    {name:'Центр «Жан» Астана',address:'г. Астана, пр. Республики, 7',phone:'+7 702 555 10 15',email:'',site:'',desc:{ru:'Психологическое консультирование, группы поддержки для родителей.',kk:'Психологиялық кеңес беру, ата-аналарға қолдау топтары.',en:'Psychological counseling, parent support groups.'}},
    {name:'МЦ «Тілашар» Астана',address:'г. Астана, мкр. Юго-Восток, ул. Жарок, 14',phone:'+7 700 771 05 11',email:'',site:'',desc:{ru:'Логопедия, работа с неговорящими детьми, подготовка к школе.',kk:'Логопедия, сөйлемейтін балалармен жұмыс, мектепке дайындау.',en:'Speech therapy, work with non-verbal children, school preparation.'}},
    {name:'ДЦ «Нейрологика» Астана',address:'г. Астана, пр. Кабанбай батыра, 58/1',phone:'+7 7172 35 66 00',email:'',site:'',desc:{ru:'Неврология, ЭЭГ, коррекция внимания и памяти.',kk:'Неврология, ЭЭГ, зейін мен есте сақтауды түзету.',en:'Neurology, EEG, attention and memory correction.'}},
    {name:'ОРЦ «Светлый путь» Астана',address:'г. Астана, ул. Иманова, 29',phone:'+7 7172 50 88 77',email:'',site:'',desc:{ru:'Социальная адаптация, профориентация, трудотерапия.',kk:'Әлеуметтік бейімделу, кәсіби бағдарлау, еңбек терапиясы.',en:'Social adaptation, vocational guidance, occupational therapy.'}},
    {name:'ДЦ «Iрімжiк» Астана',address:'г. Астана, ул. Кошкарбаева, 35',phone:'+7 705 111 22 33',email:'',site:'',desc:{ru:'Ранняя помощь детям 0–3 лет, лечебный массаж, ЛФК.',kk:'0–3 жасар балаларға ерте көмек, емдік массаж.',en:'Early help for children 0–3, therapeutic massage, physiotherapy.'}},
    {name:'МЦ «Гармония» Астана',address:'г. Астана, ул. Пушкина, 58',phone:'+7 7172 31 70 75',email:'',site:'',desc:{ru:'Арт-терапия, музыкотерапия, сенсорная комната при РАС.',kk:'Арт-терапия, музыкотерапия, сенсорлық бөлме.',en:'Art therapy, music therapy, sensory room for ASD.'}},
    {name:'Центр «Дара Нур» Астана',address:'г. Астана, мкр. Асыл Арман',phone:'+7 702 900 44 22',email:'',site:'',desc:{ru:'Поведенческий анализ, вербальное поведение, групповые занятия при РАС.',kk:'Мінез-құлық талдауы, вербальды мінез-құлық.',en:'Behavioral analysis, verbal behavior, group sessions for ASD.'}},
    {name:'РЦ «Жарық болашақ» Астана',address:'г. Астана, ул. Темирказык, 42А',phone:'+7 7172 26 88 40',email:'',site:'',desc:{ru:'Тяжёлая умственная отсталость, множественные нарушения развития.',kk:'Ауыр ақыл-ой кемістігі, кешенді даму бұзылыстары.',en:'Severe intellectual disabilities and multiple developmental disorders.'}},
    {name:'МЦ «Арман» — иппотерапия (Астана)',address:'г. Астана, пос. Косшы, конный клуб',phone:'+7 701 330 11 44',email:'',site:'',desc:{ru:'Иппотерапия для детей с ДЦП, аутизмом, задержкой развития.',kk:'ДЦП, аутизм, даму кешігуі бар балаларға иппотерапия.',en:'Hippotherapy for children with cerebral palsy, autism, developmental delay.'}},
    {name:'Назарбаев Университет — Детский центр',address:'г. Астана, ул. А.Бөкейханов, 1',phone:'+7 7172 57 14 26',email:'',site:'',desc:{ru:'Диагностика нарушений развития, консультации нейропсихологов и логопедов.',kk:'Даму бұзылыстарын диагностикалау, нейропсихологтар мен логопедтердің кеңестері.',en:'Diagnosis of developmental disorders, consultations by neuropsychologists and speech therapists.'}},
  ],
  shymkent: [
    {name:'Областной ДРЦ Туркестанской обл.',address:'г. Шымкент, ул. Байтурсынова, 5',phone:'+7 7252 53 00 00',email:'',site:'',desc:{ru:'ДЦП, аутизм, ЗРР, нейрологопедия, ЛФК, физиотерапия.',kk:'ДЦП, аутизм, ЗСД, нейрологопедия, ЛФК.',en:'Cerebral palsy, autism, speech delay, neurospeech therapy, physiotherapy.'}},
    {name:'РЦ «Надежда» Шымкент',address:'г. Шымкент, пр. Тауке хана, 112',phone:'+7 7252 56 02 02',email:'',site:'',desc:{ru:'АВА-группы, родительский клуб для детей с аутизмом.',kk:'АВА топтары, ата-аналар клубы.',en:'ABA groups, parent club for children with autism.'}},
    {name:'Центр «Туркестан жарығы»',address:'г. Туркестан, ул. Н.Назарбаева, 9',phone:'+7 725 334 35 00',email:'',site:'',desc:{ru:'Ранняя помощь, сенсорная интеграция, массаж, логопедия.',kk:'Ерте көмек, сенсорлық интеграция, массаж, логопедия.',en:'Early help, sensory integration, massage, speech therapy.'}},
    {name:'МЦ «Жан» — психологическая реабилитация',address:'г. Шымкент, ул. Рыскулова, 14',phone:'+7 707 350 01 15',email:'',site:'',desc:{ru:'Арт-терапия, песочная терапия, поддержка семей.',kk:'Арт-терапия, құм терапиясы, отбасыларды қолдау.',en:'Art therapy, sand therapy, family support.'}},
    {name:'ЦСО «Асыл»',address:'г. Шымкент, мкр. Нурсат, ул. Тулпар, 4',phone:'+7 747 311 00 22',email:'',site:'',desc:{ru:'Коррекционно-развивающие занятия, подготовка к школе.',kk:'Түзету-дамытушы сабақтар, мектепке дайындау.',en:'Correction and development sessions, school preparation.'}},
    {name:'МЦ «Жарқын» Шымкент',address:'г. Шымкент, пр. Б.Момышулы, 20',phone:'+7 7252 44 11 20',email:'',site:'',desc:{ru:'Массаж по Манакову, Войта-терапия, гидрокинезиотерапия при ДЦП.',kk:'Манаков бойынша массаж, Войта-терапия.',en:'Manakov massage, Vojta therapy, hydrokinesiotherapy for cerebral palsy.'}},
    {name:'ДЦ «Бала» Шымкент',address:'г. Шымкент, мкр. Аль-Фараби, д. 17',phone:'+7 747 555 22 33',email:'',site:'',desc:{ru:'Логопедия, нейропсихология, коррекция поведения.',kk:'Логопедия, нейропсихология, мінез-құлық түзету.',en:'Speech therapy, neuropsychology, behavior correction.'}},
    {name:'ОРЦ «Мейірім» Шымкент',address:'г. Шымкент, ул. Желтоксан, 60',phone:'+7 7252 21 08 00',email:'',site:'',desc:{ru:'Государственный центр: стационарная реабилитация детей с инвалидностью.',kk:'Мемлекеттік орталық: мүгедек балаларды стационарлық оңалту.',en:'State center: inpatient rehabilitation for children with disabilities.'}},
    {name:'Центр «Іргетас» — нарушения слуха',address:'г. Шымкент, ул. Казыбек би, 32',phone:'+7 747 200 15 60',email:'',site:'',desc:{ru:'Слухопротезирование, кохлеарная имплантация, сурдопедагогика.',kk:'Есту протездеу, кохлеарлық имплантация, сурдопедагогика.',en:'Hearing aids, cochlear implantation, deaf pedagogy.'}},
    {name:'МЦ «Арман» Шымкент',address:'г. Шымкент, мкр. Самал, ул. Тауелсіздік, 8',phone:'+7 705 444 33 22',email:'',site:'',desc:{ru:'АВА, EIBI, PECS для детей с аутизмом, консультации.',kk:'АВА, EIBI, PECS, аутизм бар балаларға кеңес беру.',en:'ABA, EIBI, PECS for children with autism, consultations.'}},
    {name:'ДЦ «Нур» Кентау',address:'г. Кентау, ул. Гагарина, 5',phone:'+7 7253 25 00 40',email:'',site:'',desc:{ru:'Физическая реабилитация, массаж, ЛФК для детей Туркестанской области.',kk:'Түркістан облысы балаларына физикалық оңалту, массаж, ЛФК.',en:'Physical rehabilitation, massage, physiotherapy for children of Turkestan Region.'}},
    {name:'ОРЦ «Қорлан» Шымкент',address:'г. Шымкент, ул. Абая, 27',phone:'+7 7252 32 44 10',email:'',site:'',desc:{ru:'Ортопедия, постоперационное восстановление.',kk:'Ортопедия, операциядан кейінгі қалпына келтіру.',en:'Orthopedics, post-operative recovery.'}},
    {name:'МЦ «Тілек» Шымкент',address:'г. Шымкент, мкр. Нурсат-2, д. 44',phone:'+7 705 333 12 00',email:'',site:'',desc:{ru:'Дефектология, логопедия, групповые занятия для дошкольников с ОВЗ.',kk:'Дефектология, логопедия, топтық сабақтар.',en:'Defectology, speech therapy, group sessions for preschoolers.'}},
    {name:'ДЦ «Саулық» Шымкент',address:'г. Шымкент, пр. Республики, 25',phone:'+7 7252 61 02 20',email:'',site:'',desc:{ru:'Физиотерапия, коррекция сколиоза и плоскостопия у детей.',kk:'Физиотерапия, сколиоз бен жалпақ табанды түзету.',en:'Physiotherapy, correction of scoliosis and flat feet in children.'}},
    {name:'МЦ «Шапағат» Шымкент',address:'г. Шымкент, ул. Шаяхметова, 12',phone:'+7 747 100 05 50',email:'',site:'',desc:{ru:'Нейрореабилитация, сенсорная комната, эрготерапия, Монтессори.',kk:'Нейрооңалту, сенсорлық бөлме, эрготерапия.',en:'Neurorehabilitation, sensory room, occupational therapy, Montessori.'}},
    {name:'Центр «Болашақ» Сарыагаш',address:'г. Сарыагаш, ул. Абая, 15',phone:'+7 7254 21 30 00',email:'',site:'',desc:{ru:'Реабилитация в зоне санатория Сарыагаш, лечебные ванны, ЛФК.',kk:'Сарыагаш санаторий аймағында оңалту, емдік ванналар.',en:'Rehabilitation in Saryagash sanatorium zone, therapeutic baths, physiotherapy.'}},
    {name:'ОРЦ «Ерекше бала» Шымкент',address:'г. Шымкент, мкр. Акбулак, ул. Жаңа Дала, 4',phone:'+7 702 900 77 11',email:'',site:'',desc:{ru:'Инклюзивное образование, сопровождение в школе.',kk:'Инклюзивті білім беру, мектептегі сүйемелдеу.',en:'Inclusive education, school support.'}},
    {name:'МЦ «Иппотерапия» Шымкент',address:'г. Шымкент, конный клуб «Арабат»',phone:'+7 705 700 80 60',email:'',site:'',desc:{ru:'Иппотерапия для детей с ДЦП, аутизмом, нарушениями ОДА.',kk:'ДЦП, аутизм бар балаларға иппотерапия.',en:'Hippotherapy for children with cerebral palsy, autism, musculoskeletal disorders.'}},
  ],
  atyrau: [
    {name:'ОРЦ «Мерей» Атырау',address:'г. Атырау, ул. Айтеке би, 33',phone:'+7 7122 27 11 01',email:'',site:'',desc:{ru:'ДЦП, нарушения ОДА, ЛФК, бассейн.',kk:'ДЦП, тірек-қимыл аппараты бұзылыстары, ЛФК, бассейн.',en:'Cerebral palsy, musculoskeletal disorders, physiotherapy, pool.'}},
    {name:'Центр ранней помощи «Болашақ» Атырау',address:'г. Атырау, ул. Студенческая, 8',phone:'+7 7122 32 44 20',email:'',site:'',desc:{ru:'Логопедия, дефектология, психологическая поддержка, 0–7 лет.',kk:'Логопедия, дефектология, 0–7 жас.',en:'Speech therapy, defectology, psychological support, 0–7 years.'}},
    {name:'ДЦ «Жұлдыз» Атырау',address:'г. Атырау, мкр. Авангард-2',phone:'+7 775 222 10 50',email:'',site:'',desc:{ru:'Нейрологопедия, АВА, сенсорная интеграция при РАС.',kk:'Нейрологопедия, АВА-терапия, сенсорлық интеграция.',en:'Neurospeech therapy, ABA, sensory integration for ASD.'}},
    {name:'МЦ «Айзере» Атырау',address:'г. Атырау, ул. Абая, 47А',phone:'+7 7122 45 33 10',email:'',site:'',desc:{ru:'Массаж, ЛФК, физиотерапия, нейропсихологическая коррекция.',kk:'Массаж, ЛФК, физиотерапия.',en:'Massage, physiotherapy, neuropsychological correction.'}},
    {name:'ОРЦ «Мейірім» Атырау',address:'г. Атырау, мкр. Привокзальный, 18',phone:'+7 7122 33 11 55',email:'',site:'',desc:{ru:'Государственный центр: реабилитация детей-инвалидов всех нозологий.',kk:'Мемлекеттік орталық: барлық нозологиялардағы мүгедек балаларды оңалту.',en:'State center: rehabilitation for disabled children of all diagnostic categories.'}},
    {name:'Центр «Шапағат» Атырау',address:'г. Атырау, ул. Аль-Фараби, 12',phone:'+7 702 300 45 50',email:'',site:'',desc:{ru:'Логопедия, психология, арт-терапия, нарушения слуха.',kk:'Логопедия, психология, арт-терапия.',en:'Speech therapy, psychology, art therapy, hearing impairments.'}},
    {name:'МЦ «Нейрон» Атырау',address:'г. Атырау, пр. Азаттык, 50',phone:'+7 705 811 99 44',email:'',site:'',desc:{ru:'Нейродиагностика, ЭЭГ, коррекция СДВГ.',kk:'Нейродиагностика, ЭЭГ, СДВГ түзету.',en:'Neurodiagnostics, EEG, ADHD correction.'}},
    {name:'ДЦ «Арман» Атырау',address:'г. Атырау, мкр. Жилгородок, д. 4',phone:'+7 705 400 22 80',email:'',site:'',desc:{ru:'Нарушения ОДА, иппотерапия, бассейн.',kk:'Тірек-қимыл аппараты бұзылыстары, иппотерапия, бассейн.',en:'Musculoskeletal disorders, hippotherapy, pool.'}},
  ],
  pavlodar: [
    {name:'ОРЦ «Мейірім» Павлодар',address:'г. Павлодар, ул. Кутузова, 56',phone:'+7 7182 55 63 00',email:'',site:'',desc:{ru:'ДЦП, аутизм, нарушения слуха. ЛФК, массаж, логопедия.',kk:'ДЦП, аутизм, есту бұзылысы. ЛФК, массаж.',en:'Cerebral palsy, autism, hearing impairments. Physiotherapy, massage, speech therapy.'}},
    {name:'ДРЦ «Жарық» Павлодар',address:'г. Павлодар, ул. Ленина, 138',phone:'+7 7182 32 15 45',email:'',site:'',desc:{ru:'Неврологические заболевания, психолого-педагогическая коррекция.',kk:'Неврологиялық аурулар, психологиялық-педагогикалық түзету.',en:'Neurological diseases, psycho-pedagogical correction.'}},
    {name:'Центр «Арман» — слух (Павлодар)',address:'г. Павлодар, ул. Катаева, 34',phone:'+7 7182 45 90 10',email:'',site:'',desc:{ru:'Слухопротезирование, сурдопедагогика, развитие речи.',kk:'Есту протездеу, сурдопедагогика, сөйлеуді дамыту.',en:'Hearing prosthetics, deaf pedagogy, speech development.'}},
    {name:'МЦ «Ерекше бала» Павлодар',address:'г. Павлодар, ул. Сатпаева, 22',phone:'+7 7182 60 12 30',email:'',site:'',desc:{ru:'АВА, нейропсихология, сенсорная интеграция при РАС и СДВГ.',kk:'АВА, нейропсихология, сенсорлық интеграция.',en:'ABA, neuropsychology, sensory integration for ASD and ADHD.'}},
    {name:'Центр «Жаңа Өмір» Павлодар',address:'г. Павлодар, мкр. Химпром, д. 7',phone:'+7 705 212 44 70',email:'',site:'',desc:{ru:'Войта-терапия, кинезиотейпирование, гимнастика Петлянова.',kk:'Войта-терапия, кинезиотейпирование.',en:'Vojta therapy, kinesiotaping.'}},
    {name:'ОРЦ «Нур» Павлодар',address:'г. Павлодар, ул. Торайгырова, 80',phone:'+7 7182 71 04 20',email:'',site:'',desc:{ru:'Комплексная помощь детям с инвалидностью, поддержка семей.',kk:'Мүгедек балаларға кешенді көмек, отбасыларды қолдау.',en:'Comprehensive help for disabled children, family support.'}},
    {name:'МЦ «Болашақ» Павлодар',address:'г. Павлодар, ул. Бектурова, 28А',phone:'+7 705 505 40 00',email:'',site:'',desc:{ru:'Логопедия, дефектология для дошкольников с ОВЗ.',kk:'Логопедия, дефектология.',en:'Speech therapy, defectology for preschoolers with special needs.'}},
    {name:'ДЦ «Тілашар» Павлодар',address:'г. Павлодар, пр. Назарбаева, 62',phone:'+7 7182 33 99 11',email:'',site:'',desc:{ru:'Коррекция речи, неговорящие дети, подготовка к школе.',kk:'Сөйлеуді түзету, сөйлемейтін балалар.',en:'Speech correction, non-verbal children, school preparation.'}},
  ],
  kokshetau: [
    {name:'ОРЦ «Умит» Кокшетау',address:'г. Кокшетау, ул. Ауельбекова, 140',phone:'+7 7162 25 44 10',email:'',site:'',desc:{ru:'ЛФК, логопедия, психология, социальная адаптация.',kk:'ЛФК, логопедия, психология, әлеуметтік бейімделу.',en:'Physiotherapy, speech therapy, psychology, social adaptation.'}},
    {name:'Центр «Ерекше бала» Кокшетау',address:'г. Кокшетау, ул. Горького, 42',phone:'+7 7162 40 21 11',email:'',site:'',desc:{ru:'Коррекция речи, арт-терапия, психолого-педагогическая помощь.',kk:'Сөйлеуді түзету, арт-терапия.',en:'Speech correction, art therapy, psycho-pedagogical support.'}},
    {name:'МЦ «Жаңа өмір» Кокшетау',address:'г. Кокшетау, ул. Абая, 92',phone:'+7 705 560 44 90',email:'',site:'',desc:{ru:'Физическая реабилитация после травм, Бобат-терапия.',kk:'Жарақаттан кейінгі физикалық оңалту, Бобат-терапия.',en:'Physical rehabilitation after injuries, Bobath therapy.'}},
    {name:'МЦ «Арман» Кокшетау',address:'г. Кокшетау, пр. Абылай хана, 18',phone:'+7 7162 31 20 40',email:'',site:'',desc:{ru:'АВА-терапия, поведенческий анализ.',kk:'АВА-терапия, мінез-құлық талдауы.',en:'ABA therapy, behavioral analysis.'}},
    {name:'ОРЦ «Нур» Кокшетау',address:'г. Кокшетау, ул. Каирбекова, 55',phone:'+7 7162 26 00 33',email:'',site:'',desc:{ru:'Государственный областной центр реабилитации детей-инвалидов.',kk:'Мүгедек балаларды оңалтудың мемлекеттік облыстық орталығы.',en:'State regional rehabilitation center for disabled children.'}},
    {name:'Центр «Болашақ» Кокшетау',address:'г. Кокшетау, ул. Биржан сала, 12',phone:'+7 705 880 33 77',email:'',site:'',desc:{ru:'Логопедия, задержка речи и умственного развития.',kk:'Логопедия, сөйлеу және ақыл-ой дамуының кешігуі.',en:'Speech therapy, speech and intellectual delays.'}},
    {name:'МЦ «Тілашар» Степногорск',address:'г. Степногорск, 1-й мкр., д. 20',phone:'+7 716 642 11 30',email:'',site:'',desc:{ru:'Логопедия, дефектология для детей Акмолинской области.',kk:'Ақмола облысы балаларына логопедия, дефектология.',en:'Speech therapy, defectology for children of Akmola Region.'}},
    {name:'ДЦ «Сенім» Кокшетау',address:'г. Кокшетау, ул. Момышулы, 41',phone:'+7 702 711 05 30',email:'',site:'',desc:{ru:'Сенсорная интеграция, эрготерапия, сенсорная комната.',kk:'Сенсорлық интеграция, эрготерапия.',en:'Sensory integration, occupational therapy, sensory room.'}},
  ],
  karagandy: [
    {name:'ОРЦ «Жарқын болашақ»',address:'г. Қарағанды, ул. Ерубаева, 57',phone:'+7 7212 43 20 60',email:'',site:'',desc:{ru:'ДЦП, аутизм, ЗПР: стационарные и дневные программы.',kk:'ДЦП, аутизм, ПДЗ: стационарлық және күндізгі бағдарламалар.',en:'Cerebral palsy, autism, intellectual delays: inpatient and day programs.'}},
    {name:'Центр «Кенже»',address:'г. Қарағанды, пр. Бухар Жырау, 41',phone:'+7 7212 56 77 11',email:'',site:'',desc:{ru:'АВА-терапия, нейрологопедия, поведенческий анализ.',kk:'АВА-терапия, нейрологопедия.',en:'ABA therapy, neurospeech therapy, behavioral analysis.'}},
    {name:'МЦ «Медсервис» — нейрореабилитация',address:'г. Қарағанды, ул. Степная, 14',phone:'+7 7212 50 26 30',email:'',site:'',desc:{ru:'Роботизированные тренажёры, транскраниальная стимуляция при ДЦП.',kk:'Роботталған тренажерлар, транскраниальды ынталандыру.',en:'Robotic trainers, transcranial stimulation for cerebral palsy.'}},
    {name:'ОРЦ «Арман» Қарағанды',address:'г. Қарағанды, ул. Муканова, 22',phone:'+7 7212 41 00 55',email:'',site:'',desc:{ru:'Войта, Бобат, массаж, ЛФК, кинезиотейпирование.',kk:'Войта, Бобат, массаж, ЛФК.',en:'Vojta, Bobath, massage, physiotherapy, kinesiotaping.'}},
    {name:'МЦ «Тілашар» Жезқазған',address:'г. Жезқазған, ул. Ломова, 8',phone:'+7 7102 77 50 10',email:'',site:'',desc:{ru:'Логопедия, дефектология для детей Карагандинской области.',kk:'Қарағанды облысы балаларына логопедия.',en:'Speech therapy, defectology for children of Karaganda Region.'}},
    {name:'ДРЦ «Ерекше бала» Қарағанды',address:'г. Қарағанды, мкр. Михайловка',phone:'+7 705 700 50 20',email:'',site:'',desc:{ru:'Инклюзивное образование, ЗРР, АВА, сенсорная комната.',kk:'Инклюзивті білім беру, АВА, сенсорлық бөлме.',en:'Inclusive education, speech delay, ABA, sensory room.'}},
    {name:'МЦ «Болашақ» Теміртау',address:'г. Теміртау, ул. Металлургов, 26',phone:'+7 7213 90 30 10',email:'',site:'',desc:{ru:'Ортопедия, массаж, ЛФК, физиотерапия.',kk:'Ортопедия, массаж, ЛФК.',en:'Orthopedics, massage, physiotherapy.'}},
  ],
  aktobe: [
    {name:'ОРЦ «Жан» Ақтөбе',address:'г. Ақтөбе, пр. А.Молдагуловой, 34',phone:'+7 7132 56 00 60',email:'',site:'',desc:{ru:'ДЦП, травмы, постоперационное восстановление. ЛФК, бассейн, массаж.',kk:'ДЦП, жарақат, операциядан кейін. ЛФК, бассейн, массаж.',en:'Cerebral palsy, injuries, post-operative recovery. Physiotherapy, pool, massage.'}},
    {name:'Центр «Ақ Жол»',address:'г. Ақтөбе, ул. Маресьева, 12',phone:'+7 7132 21 44 32',email:'',site:'',desc:{ru:'Логопедия, нейропсихологическая коррекция, задержка речи.',kk:'Логопедия, нейропсихологиялық түзету.',en:'Speech therapy, neuropsychological correction, speech delay.'}},
    {name:'ДЦ «Радуга» Ақтөбе',address:'г. Ақтөбе, ул. Братьев Жубановых, 302',phone:'+7 7132 77 15 20',email:'',site:'',desc:{ru:'Сенсорная интеграция, песочная терапия, работа с семьёй.',kk:'Сенсорлық интеграция, құм терапиясы.',en:'Sensory integration, sand therapy, family work.'}},
    {name:'ОРЦ «Мейірім» Ақтөбе',address:'г. Ақтөбе, ул. Курмангазы, 22',phone:'+7 7132 54 03 30',email:'',site:'',desc:{ru:'Государственный центр: стационарная реабилитация детей-инвалидов.',kk:'Мемлекеттік орталық: мүгедек балаларды стационарлық оңалту.',en:'State center: inpatient rehabilitation for disabled children.'}},
    {name:'МЦ «Нур» Ақтөбе',address:'г. Ақтөбе, мкр. Нур-Астана, д. 55',phone:'+7 705 950 33 22',email:'',site:'',desc:{ru:'АВА, PECS, коррекция поведения при аутизме и СДВГ.',kk:'АВА, PECS, мінез-құлық түзету.',en:'ABA, PECS, behavior correction for autism and ADHD.'}},
    {name:'МЦ «Тілашар» Ақтөбе',address:'г. Ақтөбе, пр. 312 Стрелковой дивизии, 3',phone:'+7 7132 32 22 10',email:'',site:'',desc:{ru:'Логопедия, дефектология, подготовка к школе.',kk:'Логопедия, дефектология, мектепке дайындау.',en:'Speech therapy, defectology, school preparation.'}},
    {name:'ДРЦ «Болашақ» Ақтөбе',address:'г. Ақтөбе, ул. Санкибай батыра, 12А',phone:'+7 702 800 44 20',email:'',site:'',desc:{ru:'Физиотерапия, кинезиотерапия, ортопедия детей.',kk:'Физиотерапия, кинезиотерапия, балалар ортопедиясы.',en:'Physiotherapy, kinesiotherapy, pediatric orthopedics.'}},
    {name:'МЦ «Сенім» Ақтөбе',address:'г. Ақтөбе, пр. А.Молдагуловой, 12',phone:'+7 705 111 30 40',email:'',site:'',desc:{ru:'Психологическая поддержка, тревожные расстройства, задержка развития.',kk:'Психологиялық қолдау, мазасыздық бұзылыстары.',en:'Psychological support, anxiety disorders, developmental delays.'}},
  ],
  oral: [
    {name:'ОРЦ «Мерей» Орал',address:'г. Орал, ул. Достык, 227',phone:'+7 7112 50 30 60',email:'',site:'',desc:{ru:'ДЦП, аутизм, нарушения слуха и речи.',kk:'ДЦП, аутизм, есту және сөйлеу бұзылыстары.',en:'Cerebral palsy, autism, hearing and speech disorders.'}},
    {name:'Центр «Болашақ» Орал',address:'г. Орал, ул. Кабанбай батыра, 10',phone:'+7 7112 51 43 20',email:'',site:'',desc:{ru:'Ранняя помощь 0–8 лет, логопедия, коррекция.',kk:'0–8 жасар балаларға ерте көмек, логопедия.',en:'Early help 0–8, speech therapy, correction.'}},
    {name:'МЦ «Жарық» Орал',address:'г. Орал, мкр. Шанхай, д. 5',phone:'+7 705 411 77 00',email:'',site:'',desc:{ru:'АВА, PECS, социальные истории, сенсорные игры при аутизме.',kk:'АВА, PECS, сенсорлық ойындар.',en:'ABA, PECS, social stories, sensory play for autism.'}},
    {name:'МЦ «Нур» Орал',address:'г. Орал, ул. Мухита, 18А',phone:'+7 7112 23 40 50',email:'',site:'',desc:{ru:'Физиотерапия, массаж при ДЦП и ортопедических нарушениях.',kk:'Физиотерапия, массаж.',en:'Physiotherapy, massage for cerebral palsy and orthopedic disorders.'}},
    {name:'ОРЦ «Ерекше бала» Орал',address:'г. Орал, пр. Достык, 77',phone:'+7 702 444 88 20',email:'',site:'',desc:{ru:'Инклюзивное образование, сопровождение в школу, социализация.',kk:'Инклюзивті білім беру, мектепке сүйемелдеу.',en:'Inclusive education, school support, socialization.'}},
    {name:'МЦ «Сенім» Орал',address:'г. Орал, ул. Маресьева, 6',phone:'+7 705 512 09 00',email:'',site:'',desc:{ru:'Психологическая помощь, арт-терапия, сенсорная комната.',kk:'Психологиялық көмек, арт-терапия.',en:'Psychological help, art therapy, sensory room.'}},
  ],
  aktau: [
    {name:'ОРЦ «Саулық» Ақтау',address:'г. Ақтау, 12-й мкр., д. 2',phone:'+7 7292 50 03 60',email:'',site:'',desc:{ru:'ДЦП, ортопедия, Войта-терапия, гидрокинезиотерапия.',kk:'ДЦП, ортопедия, Войта-терапия.',en:'Cerebral palsy, orthopedics, Vojta therapy, hydrokinesiotherapy.'}},
    {name:'ДЦ «Мирас» Ақтау',address:'г. Ақтау, 14-й мкр., д. 3',phone:'+7 7292 33 44 55',email:'',site:'',desc:{ru:'Логопедия, нейропсихология, АВА, сенсорная комната.',kk:'Логопедия, нейропсихология, АВА.',en:'Speech therapy, neuropsychology, ABA, sensory room.'}},
    {name:'МЦ «Болашақ» Ақтау',address:'г. Ақтау, 9-й мкр., д. 7',phone:'+7 701 500 12 34',email:'',site:'',desc:{ru:'Коррекция речи, кинезиотерапия, работа с семьёй.',kk:'Сөйлеуді түзету, кинезиотерапия.',en:'Speech correction, kinesiotherapy, family work.'}},
    {name:'ОРЦ «Жарық» Жанаозен',address:'г. Жанаозен, мкр. Нурлы Жол, д. 11',phone:'+7 7293 60 01 20',email:'',site:'',desc:{ru:'Реабилитация детей с ОВЗ, физиотерапия, логопедия.',kk:'Мүмкіндігі шектеулі балаларды оңалту.',en:'Rehabilitation for children with disabilities, physiotherapy, speech therapy.'}},
    {name:'МЦ «Нур» Ақтау',address:'г. Ақтау, 11-й мкр., д. 15',phone:'+7 701 900 55 77',email:'',site:'',desc:{ru:'АВА, социальные навыки, поддержка семей.',kk:'АВА, әлеуметтік дағдылар, отбасыларды қолдау.',en:'ABA, social skills development, family support.'}},
  ],
  kostanay: [
    {name:'ОРЦ «Рауан» Қостанай',address:'г. Қостанай, ул. Текстильщиков, 10',phone:'+7 7142 53 55 00',email:'',site:'',desc:{ru:'ДЦП, аутизм, нарушения слуха. ЛФК, физиотерапия.',kk:'ДЦП, аутизм, есту бұзылыстары.',en:'Cerebral palsy, autism, hearing disorders. Physiotherapy.'}},
    {name:'Центр «Жарық жол» Қостанай',address:'г. Қостанай, пр. Аль-Фараби, 98',phone:'+7 7142 54 14 00',email:'',site:'',desc:{ru:'Психолого-педагогическое сопровождение, АВА-терапия.',kk:'Психологиялық-педагогикалық сүйемелдеу, АВА-терапия.',en:'Psycho-pedagogical support, ABA therapy.'}},
    {name:'МЦ «Тілашар» Қостанай',address:'г. Қостанай, ул. Байтурсынова, 66',phone:'+7 7142 700 33 11',email:'',site:'',desc:{ru:'Логопедия, дефектология, подготовка к школе.',kk:'Логопедия, дефектология, мектепке дайындау.',en:'Speech therapy, defectology, school preparation.'}},
    {name:'ОРЦ «Нур» Қостанай',address:'г. Қостанай, ул. Дружбы, 25',phone:'+7 7142 51 66 20',email:'',site:'',desc:{ru:'Государственный центр: физическая реабилитация и социальная адаптация.',kk:'Мемлекеттік орталық: физикалық оңалту және әлеуметтік бейімделу.',en:'State center: physical rehabilitation and social adaptation of disabled children.'}},
    {name:'МЦ «Болашақ» Рудный',address:'г. Рудный, ул. Ленина, 22',phone:'+7 7143 62 55 30',email:'',site:'',desc:{ru:'Логопедия, физиотерапия, ранняя помощь.',kk:'Логопедия, физиотерапия, ерте көмек.',en:'Speech therapy, physiotherapy, early help.'}},
  ],
  petropavl: [
    {name:'ОРЦ «Үміт» Петропавл',address:'г. Петропавл, ул. Конституции Казахстана, 30',phone:'+7 7152 46 56 11',email:'',site:'',desc:{ru:'ДЦП, нарушения ОДА, гидрокинезиотерапия, массаж.',kk:'ДЦП, тірек-қимыл аппараты бұзылыстары, гидрокинезиотерапия.',en:'Cerebral palsy, musculoskeletal disorders, hydrokinesiotherapy, massage.'}},
    {name:'Центр «Жаңа өмір» Петропавл',address:'г. Петропавл, ул. Жамбыла, 41',phone:'+7 7152 33 11 44',email:'',site:'',desc:{ru:'Логопедия, коррекция, ранняя помощь 0–6 лет.',kk:'Логопедия, түзету, 0–6 жас.',en:'Speech therapy, correction, early help 0–6.'}},
  ],
  taraz: [
    {name:'ОРЦ «Жамбыл» Тараз',address:'г. Тараз, ул. Толе Би, 54',phone:'+7 7262 45 40 00',email:'',site:'',desc:{ru:'ДЦП, аутизм, нарушения ОДА. ЛФК, массаж.',kk:'ДЦП, аутизм, тірек-қимыл аппараты бұзылыстары.',en:'Cerebral palsy, autism, musculoskeletal disorders. Physiotherapy, massage.'}},
    {name:'ДЦ «Арман» Тараз',address:'г. Тараз, мкр-4, ул. Жуалы, 19',phone:'+7 7262 55 21 00',email:'',site:'',desc:{ru:'Логопедия, нейропсихология, развитие коммуникации.',kk:'Логопедия, нейропсихология.',en:'Speech therapy, neuropsychology, communication development.'}},
  ],
  oskemen: [
    {name:'Областной ДРЦ ВКО',address:'г. Өскемен, ул. Пролетарская, 43',phone:'+7 7232 26 08 00',email:'',site:'',desc:{ru:'ЛФК, логопедия, физиотерапия, психология.',kk:'ЛФК, логопедия, физиотерапия, психология.',en:'Physiotherapy, speech therapy, psychology.'}},
  ],
  kyzylorda: [
    {name:'ОРЦ «Сырдария» Қызылорда',address:'г. Қызылорда, ул. Аль-Фараби, 18',phone:'+7 7242 27 00 30',email:'',site:'',desc:{ru:'ДЦП, нарушения развития: массаж, ЛФК, логопедия.',kk:'ДЦП, даму бұзылыстары: массаж, ЛФК, логопедия.',en:'Cerebral palsy, developmental disorders: massage, physiotherapy, speech therapy.'}},
  ],
};

/* ═══════════════════════════════════════
   CLINICS — Foreign rehab centers
   ═══════════════════════════════════════ */
const CLINICS = [
  {flag:'🇹🇷',city:'Стамбул',countryName:{ru:'Турция',kk:'Түркия',en:'Turkey'},name:'Medipol Mega Hospital — Neurorehabilitation',address:'Bağcılar, İstanbul',phone:'+90 212 460 77 77',email:'info@medipol.com.tr',site:'https://medipol.com.tr',directions:{ru:'ДЦП, аутизм, нарушения ОДА. Роботизированные тренажёры, экзоскелет, Бобат.',kk:'ДЦП, аутизм. Роботталған тренажерлар, экзоскелет.',en:'Cerebral palsy, autism, musculoskeletal disorders. Robotic trainers, Exoskeleton, Bobath.'}},
  {flag:'🇹🇷',city:'Анкара',countryName:{ru:'Турция',kk:'Түркия',en:'Turkey'},name:'Hacettepe University Children\'s Hospital',address:'Sihhiye, Ankara',phone:'+90 312 305 10 00',email:'cocuk@hacettepe.edu.tr',site:'https://cocuk.hacettepe.edu.tr',directions:{ru:'Педиатрическая нейрореабилитация, генетика, ортопедия, диагностика редких заболеваний.',kk:'Педиатриялық нейрооңалту, генетика, ортопедия.',en:'Pediatric neurorehabilitation, genetics, orthopedics, rare disease diagnosis.'}},
  {flag:'🇹🇷',city:'Измир',countryName:{ru:'Турция',kk:'Түркия',en:'Turkey'},name:'Ege University — Pediatric Rehabilitation',address:'Bornova, İzmir',phone:'+90 232 390 10 00',email:'',site:'https://egemed.ege.edu.tr',directions:{ru:'Нейромышечные заболевания, ортезирование, гидрокинезиотерапия, иппотерапия.',kk:'Нейромышечная аурулар, ортездеу, гидрокинезиотерапия.',en:'Neuromuscular diseases, orthotics, hydrokinesiotherapy, hippotherapy.'}},
  {flag:'🇹🇷',city:'Стамбул',countryName:{ru:'Турция',kk:'Түркия',en:'Turkey'},name:'Anadolu Medical Center',address:'Gebze, Kocaeli',phone:'+90 262 678 55 55',email:'international@anadolumedical.com',site:'https://anadolumedical.com',directions:{ru:'ДЦП, аутизм, онкологическая реабилитация. Команда для иностранных пациентов.',kk:'ДЦП, аутизм, шетелдік пациенттерге арналған команда.',en:'Cerebral palsy, autism, oncological rehabilitation. Team for foreign patients.'}},
  {flag:'🇩🇪',city:'Мюнхен',countryName:{ru:'Германия',kk:'Германия',en:'Germany'},name:'Klinikum Uni München — Sozialpädiatrisches Zentrum',address:'Marchioninistr. 15, München',phone:'+49 89 4400 52811',email:'spz@med.uni-muenchen.de',site:'https://klinikum.uni-muenchen.de',directions:{ru:'РАС, ДЦП, ЗРР, СДВГ. Мультидисциплинарная команда, помощь иностранным пациентам.',kk:'РАС, ДЦП, СДВГ. Мультидисциплинарлық команда.',en:'ASD, cerebral palsy, speech delay, ADHD. Multidisciplinary team, support for foreign patients.'}},
  {flag:'🇩🇪',city:'Берлин',countryName:{ru:'Германия',kk:'Германия',en:'Germany'},name:'Charité — Kinderneurologie und Sozialpädiatrie',address:'Augustenburger Pl. 1, Berlin',phone:'+49 30 450 566 122',email:'kinderneurologie@charite.de',site:'https://charite.de',directions:{ru:'ДЦП, эпилепсия, нейромышечные заболевания, нейрореабилитация.',kk:'ДЦП, эпилепсия, нейромышечная аурулар.',en:'Cerebral palsy, epilepsy, neuromuscular diseases, neurorehabilitation.'}},
  {flag:'🇩🇪',city:'Гейдельберг',countryName:{ru:'Германия',kk:'Германия',en:'Germany'},name:'Universitätsklinikum Heidelberg — Kinderklinik',address:'Im Neuenheimer Feld 430, Heidelberg',phone:'+49 6221 56 36900',email:'kinder@med.uni-heidelberg.de',site:'https://klinikum.uni-heidelberg.de',directions:{ru:'Генетика, ортопедия, нейрохирургия, послеоперационное восстановление.',kk:'Генетика, ортопедия, нейрохирургия.',en:'Genetics, orthopedics, neurosurgery, post-operative recovery.'}},
  {flag:'🇮🇱',city:'Тель-Авив',countryName:{ru:'Израиль',kk:'Израиль',en:'Israel'},name:'Sheba Medical Center — Pediatric Rehabilitation',address:'Tel Hashomer, Tel Aviv',phone:'+972 3 530 31 30',email:'international@sheba.health.gov.il',site:'https://eng.sheba.co.il',directions:{ru:'ДЦП, аутизм, ЧМТ, врождённые пороки. Программы для иностранных пациентов.',kk:'ДЦП, аутизм, ЖМЖ, туа біткен ақаулар.',en:'Cerebral palsy, autism, TBI, congenital disorders. Programs for international patients.'}},
  {flag:'🇮🇱',city:'Иерусалим',countryName:{ru:'Израиль',kk:'Израиль',en:'Israel'},name:'Hadassah Medical Center',address:'Ein Kerem, Jerusalem',phone:'+972 2 677 76 74',email:'hadassah@hadassah.org.il',site:'https://www.hadassah.org.il/en',directions:{ru:'Нейрореабилитация, генетика, онкология, уникальные протоколы при редких заболеваниях.',kk:'Нейрооңалту, генетика, онкология.',en:'Neurorehabilitation, genetics, oncology, unique protocols for rare diseases.'}},
  {flag:'🇮🇱',city:'Рааньяна',countryName:{ru:'Израиль',kk:'Израиль',en:'Israel'},name:'Loewenstein Rehabilitation Hospital',address:'Haim Ozer 278, Ra\'anana',phone:'+972 9 770 93 00',email:'foreign@loewenstein.co.il',site:'https://www.loewenstein.co.il/en',directions:{ru:'Нейрореабилитация, восстановление после ЧМТ, инсульта, ДЦП.',kk:'Нейрооңалту, ЖМЖ мен инсульттан кейін.',en:'Neurorehabilitation, recovery after TBI, stroke, cerebral palsy.'}},
  {flag:'🇷🇺',city:'Москва',countryName:{ru:'Россия',kk:'Ресей',en:'Russia'},name:'НМИЦ здоровья детей',address:'г. Москва, Ломоносовский пр-т, 2/1',phone:'+7 495 967 14 20',email:'nmiz@nczd.ru',site:'https://nczd.ru',directions:{ru:'Педиатрия, нейрология, реабилитация, программы для детей с тяжёлыми диагнозами.',kk:'Педиатрия, неврология, оңалту.',en:'Pediatrics, neurology, rehabilitation, programs for children with severe diagnoses.'}},
  {flag:'🇷🇺',city:'Москва',countryName:{ru:'Россия',kk:'Ресей',en:'Russia'},name:'РДКБ — Российская детская клиническая больница',address:'г. Москва, Ленинский пр-т, 117',phone:'+7 495 936 91 12',email:'',site:'https://rdkb.ru',directions:{ru:'Нейрохирургия, нейрореабилитация, ортопедия, послеоперационное восстановление.',kk:'Нейрохирургия, нейрооңалту, ортопедия.',en:'Neurosurgery, neurorehabilitation, orthopedics, post-operative recovery.'}},
  {flag:'🇷🇺',city:'Санкт-Петербург',countryName:{ru:'Россия',kk:'Ресей',en:'Russia'},name:'НМИЦ им. В.А. Алмазова',address:'г. Санкт-Петербург, ул. Аккуратова, 2',phone:'+7 812 702 37 03',email:'reception@almazovcentre.ru',site:'https://almazovcentre.ru',directions:{ru:'Реабилитация при кардиологических и неврологических заболеваниях у детей.',kk:'Балалардағы кардиологиялық және неврологиялық аурулардан оңалту.',en:'Rehabilitation for cardiovascular and neurological diseases in children.'}},
  {flag:'🇬🇪',city:'Тбилиси',countryName:{ru:'Грузия',kk:'Грузия',en:'Georgia'},name:'Aversi Clinic — Pediatric Rehabilitation',address:'D. Aghmashenebeli Ave, Tbilisi',phone:'+995 32 242 42 42',email:'info@aversi.ge',site:'https://aversi.ge',directions:{ru:'Неврология, ортопедия, ДЦП. Доступные цены, визовая поддержка.',kk:'Неврология, ортопедия, ДЦП. Қолжетімді бағалар, визалық қолдау.',en:'Neurology, orthopedics, cerebral palsy. Affordable prices, visa support.'}},
  {flag:'🇬🇪',city:'Тбилиси',countryName:{ru:'Грузия',kk:'Грузия',en:'Georgia'},name:'EVEX Medical Corporation',address:'T. Tsereteli Ave, Tbilisi',phone:'+995 32 224 44 44',email:'',site:'https://evexhospitals.com',directions:{ru:'Бобат, Войта, АВА, логопедия. Русскоязычный персонал.',kk:'Бобат, Войта, АВА, логопедия. Орысша сөйлейтін персонал.',en:'Bobath, Vojta, ABA, speech therapy. Russian-speaking staff.'}},
  {flag:'🇦🇹',city:'Вена',countryName:{ru:'Австрия',kk:'Австрия',en:'Austria'},name:'Orthopaedisches Spital Speising — Kinderklinik',address:'Speisinger Str. 109, Wien',phone:'+43 1 80 182',email:'info@oss.at',site:'https://www.oss.at',directions:{ru:'Детская ортопедия: ДЦП, сколиоз, вальгусная деформация, роботизированная реабилитация.',kk:'Балалар ортопедиясы: ДЦП, сколиоз, вальгус деформациясы.',en:'Pediatric orthopedics: cerebral palsy, scoliosis, valgus deformity, robotic rehabilitation.'}},
  {flag:'🇨🇿',city:'Прага',countryName:{ru:'Чехия',kk:'Чехия',en:'Czech Republic'},name:'Centrum pohybové medicíny Praha',address:'Na Příkopě 14, Praha 1',phone:'+420 222 244 100',email:'info@cpm.cz',site:'https://www.cpm.cz',directions:{ru:'Войта, Бобат, эрготерапия, гидротерапия при неврологических нарушениях.',kk:'Войта, Бобат, эрготерапия, гидротерапия.',en:'Vojta, Bobath, occupational therapy, hydrotherapy for neurological disorders.'}},
];

/* ═══════════════════════════════════════
   KZ_REGIONS — Region config for SVG map
   ═══════════════════════════════════════ */
const KZ_REGIONS = [
  {id:'zko',       key:'oral',       cx:62,  cy:212, r:24, name:{ru:'ЗКО',      kk:'БҚО',       en:'WKO'},   fullName:{ru:'Западно-Казахстанская обл.',kk:'Батыс Қазақстан обл.',en:'West Kazakhstan Region'}},
  {id:'atyrau',    key:'atyrau',     cx:62,  cy:298, r:24, name:{ru:'Атырау',   kk:'Атырау',    en:'Atyrau'}, fullName:{ru:'Атырауская обл.',kk:'Атырау обл.',en:'Atyrau Region'}},
  {id:'mangystau', key:'aktau',      cx:90,  cy:386, r:22, name:{ru:'Маңғыстау',kk:'Маңғыстау',en:'Mangystau'}, fullName:{ru:'Мангистауская обл.',kk:'Маңғыстау обл.',en:'Mangystau Region'}},
  {id:'aktobe',    key:'aktobe',     cx:172, cy:248, r:26, name:{ru:'Ақтөбе',   kk:'Ақтөбе',   en:'Aktobe'}, fullName:{ru:'Актюбинская обл.',kk:'Ақтөбе обл.',en:'Aktobe Region'}},
  {id:'kostanay',  key:'kostanay',   cx:292, cy:138, r:24, name:{ru:'Қостанай', kk:'Қостанай', en:'Kostanay'}, fullName:{ru:'Костанайская обл.',kk:'Қостанай обл.',en:'Kostanay Region'}},
  {id:'sko',       key:'petropavl',  cx:352, cy:78,  r:20, name:{ru:'СКО',      kk:'СҚО',       en:'NKO'},   fullName:{ru:'Северо-Казахстанская обл.',kk:'Солтүстік Қазақстан обл.',en:'North Kazakhstan Region'}},
  {id:'akmola',    key:'kokshetau',  cx:426, cy:146, r:24, name:{ru:'Ақмола',   kk:'Ақмола',   en:'Akmola'}, fullName:{ru:'Акмолинская обл.',kk:'Ақмола обл.',en:'Akmola Region'}},
  {id:'astana',    key:'astana',     cx:492, cy:188, r:34, name:{ru:'Астана',   kk:'Астана',   en:'Astana'}, fullName:{ru:'г. Астана',kk:'Астана қ.',en:'Astana city'}},
  {id:'pavlodar',  key:'pavlodar',   cx:576, cy:118, r:24, name:{ru:'Павлодар', kk:'Павлодар', en:'Pavlodar'}, fullName:{ru:'Павлодарская обл.',kk:'Павлодар обл.',en:'Pavlodar Region'}},
  {id:'vko',       key:'oskemen',    cx:718, cy:228, r:22, name:{ru:'ШҚО',      kk:'ШҚО',       en:'EKO'},   fullName:{ru:'Восточно-Казахстанская обл.',kk:'Шығыс Қазақстан обл.',en:'East Kazakhstan Region'}},
  {id:'karagandy', key:'karagandy',  cx:516, cy:288, r:28, name:{ru:'Қарағанды',kk:'Қарағанды',en:'Karaganda'}, fullName:{ru:'Карагандинская обл.',kk:'Қарағанды обл.',en:'Karaganda Region'}},
  {id:'almaty',    key:'almaty',     cx:648, cy:398, r:36, name:{ru:'Алматы',   kk:'Алматы',   en:'Almaty'}, fullName:{ru:'г. Алматы + Алматинская обл.',kk:'Алматы қ. + Алматы обл.',en:'Almaty city + Almaty Region'}},
  {id:'zhambyl',   key:'taraz',      cx:554, cy:398, r:22, name:{ru:'Жамбыл',   kk:'Жамбыл',   en:'Zhambyl'}, fullName:{ru:'Жамбылская обл.',kk:'Жамбыл обл.',en:'Zhambyl Region'}},
  {id:'turkestan', key:'shymkent',   cx:446, cy:458, r:30, name:{ru:'Туркестан',kk:'Түркістан',en:'Turkestan'}, fullName:{ru:'Туркестанская обл. + г.Шымкент',kk:'Түркістан обл. + Шымкент қ.',en:'Turkestan Region + Shymkent'}},
  {id:'kyzylorda', key:'kyzylorda',  cx:336, cy:368, r:22, name:{ru:'Қызылорда',kk:'Қызылорда',en:'Kyzylorda'}, fullName:{ru:'Кызылординская обл.',kk:'Қызылорда обл.',en:'Kyzylorda Region'}},
];

/* ═══════════════════════════════════════
   renderKazakhstanMap
   ═══════════════════════════════════════ */
window.renderKazakhstanMap = function(container, userCity) {
  const L = (typeof LANG !== 'undefined') ? LANG : 'ru';

  function svgEl(tag, attrs) {
    const e = document.createElementNS('http://www.w3.org/2000/svg', tag);
    Object.entries(attrs || {}).forEach(([k,v]) => e.setAttribute(k, String(v)));
    return e;
  }

  container.innerHTML = '';
  const wrap = document.createElement('div');

  /* Legend */
  const legend = document.createElement('div');
  legend.style.cssText = 'display:flex;gap:14px;flex-wrap:wrap;margin-bottom:12px;padding:10px 16px;background:rgba(255,255,255,.92);border-radius:14px;border:1.5px solid var(--border);font-size:12px;font-family:Inter,sans-serif;';
  [{c:'#c04060',l:{ru:'20+ центров',kk:'20+ орталық',en:'20+ centers'}},
   {c:'#d46878',l:{ru:'5–19 центров',kk:'5–19 орталық',en:'5–19 centers'}},
   {c:'#e8a8b4',l:{ru:'1–4 центра',kk:'1–4 орталық',en:'1–4 centers'}}
  ].forEach(({c,l}) => {
    const item = document.createElement('div');
    item.style.cssText = 'display:flex;align-items:center;gap:6px;';
    item.innerHTML = '<span style="width:12px;height:12px;border-radius:50%;background:'+c+';display:inline-block;flex-shrink:0;"></span>' + (l[L]||l.ru);
    legend.appendChild(item);
  });
  wrap.appendChild(legend);

  /* SVG */
  const VW=900,VH=540;
  const svg = svgEl('svg',{viewBox:'0 0 '+VW+' '+VH,style:'width:100%;max-width:900px;display:block;margin:0 auto;border-radius:18px;','aria-label':'Kazakhstan map'});
  svg.appendChild(svgEl('rect',{x:0,y:0,width:VW,height:VH,fill:'#e8f0fa',rx:18}));
  svg.appendChild(svgEl('polygon',{points:'62,165 28,88 308,46 520,50 628,88 820,158 878,268 810,398 720,438 640,468 520,498 420,518 310,488 230,418 140,378 50,348 30,278 62,165',fill:'#d0e0f4',stroke:'#88aac4','stroke-width':'2'}));
  for(let i=90;i<VW;i+=90){svg.appendChild(svgEl('line',{x1:i,y1:0,x2:i,y2:VH,stroke:'rgba(140,170,210,.15)','stroke-width':'1'}));}
  for(let i=80;i<VH;i+=80){svg.appendChild(svgEl('line',{x1:0,y1:i,x2:VW,y2:i,stroke:'rgba(140,170,210,.15)','stroke-width':'1'}));}
  const stLbl=svgEl('text',{x:450,y:28,fill:'#5580a0','font-size':'12','font-weight':'700','text-anchor':'middle','font-family':'Inter,sans-serif',opacity:'0.4'});
  stLbl.textContent=L==='kk'?'ҚАЗАҚСТАН':L==='en'?'KAZAKHSTAN':'КАЗАХСТАН';
  svg.appendChild(stLbl);

  let selectedId=null;
  KZ_REGIONS.forEach(reg=>{
    const centers=KZ_CLINICS[reg.key]||[];
    const count=centers.length;
    const fill=count>=20?'#c04060':count>=5?'#d46878':'#e8a8b4';
    const strokeC=count>=20?'#902040':count>=5?'#b05060':'#c08090';
    if(count>=20){
      const p=svgEl('circle',{cx:reg.cx,cy:reg.cy,r:reg.r+6,fill:'none',stroke:fill,'stroke-width':'2',opacity:'0.3'});
      p.innerHTML='<animate attributeName="r" values="'+(reg.r+4)+';'+(reg.r+14)+';'+(reg.r+4)+'" dur="2.8s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.35;0;0.35" dur="2.8s" repeatCount="indefinite"/>';
      svg.appendChild(p);
    }
    const g=svgEl('g',{cursor:'pointer'});
    g.appendChild(svgEl('circle',{cx:reg.cx+2,cy:reg.cy+2,r:reg.r,fill:'rgba(0,0,0,.12)'}));
    const circle=svgEl('circle',{cx:reg.cx,cy:reg.cy,r:reg.r,fill:fill,stroke:strokeC,'stroke-width':'2',style:'transition:all .2s'});
    circle.setAttribute('data-fill',fill);
    circle.setAttribute('data-r',String(reg.r));
    g.appendChild(circle);
    const nm=svgEl('text',{x:reg.cx,y:reg.cy-(count?5:0),fill:'#fff','font-size':reg.r>=30?'10':'9','font-weight':'800','text-anchor':'middle','dominant-baseline':'middle','font-family':'Inter,sans-serif',style:'pointer-events:none;user-select:none;'});
    nm.textContent=reg.name[L]||reg.name.ru;
    g.appendChild(nm);
    if(count>0){
      const ct=svgEl('text',{x:reg.cx,y:reg.cy+9,fill:'rgba(255,255,255,.9)','font-size':'9','font-weight':'600','text-anchor':'middle','dominant-baseline':'middle','font-family':'Inter,sans-serif',style:'pointer-events:none;user-select:none;'});
      ct.textContent=count+' цтр';
      g.appendChild(ct);
    }
    g.addEventListener('mouseenter',function(){circle.setAttribute('r',String(reg.r+4));circle.setAttribute('fill','#902040');});
    g.addEventListener('mouseleave',function(){if(selectedId!==reg.id){circle.setAttribute('r',String(reg.r));circle.setAttribute('fill',fill);}});
    g.addEventListener('click',function(){
      selectedId=reg.id;
      svg.querySelectorAll('[data-fill]').forEach(function(c){c.setAttribute('fill',c.getAttribute('data-fill'));c.setAttribute('r',c.getAttribute('data-r'));});
      circle.setAttribute('fill','#701030');
      showPanel(reg,centers);
    });
    svg.appendChild(g);
  });
  wrap.appendChild(svg);

  const panel=document.createElement('div');
  panel.id='kz-rehab-panel';
  panel.style.marginTop='18px';
  panel.innerHTML='<div style="text-align:center;padding:24px;background:rgba(255,255,255,.85);border-radius:16px;border:1.5px dashed var(--border);color:var(--text3);font-family:Inter,sans-serif;"><div style="font-size:30px;margin-bottom:8px;">🗺️</div><div style="font-size:14px;font-weight:700;">'+(L==='kk'?'Ақпарат алу үшін аймақты таңдаңыз':L==='en'?'Click a region to see rehabilitation centers':'Нажмите на регион для просмотра центров')+'</div></div>';
  wrap.appendChild(panel);
  container.appendChild(wrap);

  function showPanel(reg,centers){
    const p=document.getElementById('kz-rehab-panel');
    if(!p)return;
    const rName=reg.fullName[L]||reg.fullName.ru;
    let html='<div style="background:linear-gradient(135deg,var(--g1),var(--g2));border-radius:18px 18px 0 0;padding:18px 24px;display:flex;align-items:center;gap:14px;"><div style="width:48px;height:48px;border-radius:12px;background:rgba(255,255,255,.2);display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;">🏥</div><div><div style="font-family:Inter,sans-serif;font-weight:900;font-size:17px;color:#fff;">'+rName+'</div><div style="font-size:12px;color:rgba(255,255,255,.82);margin-top:3px;">'+centers.length+' '+(L==='kk'?'оңалту орталығы':L==='en'?'rehabilitation center(s)':'реабилитационных центра(ов)')+'</div></div></div><div style="display:flex;flex-direction:column;gap:10px;padding:16px;background:#fff;border:1.5px solid var(--border);border-top:none;border-radius:0 0 18px 18px;">';
    if(!centers.length){
      html+='<div style="text-align:center;padding:20px;color:var(--text3);font-size:14px;">'+(L==='kk'?'Деректер жоқ':L==='en'?'No data available':'Данные отсутствуют')+'</div>';
    }else{
      centers.forEach(function(c,i){
        const desc=(c.desc&&(c.desc[L]||c.desc.ru))||'';
        html+='<details style="background:var(--g4);border-radius:14px;border:1.5px solid var(--border);overflow:hidden;"><summary style="padding:13px 18px;cursor:pointer;display:flex;align-items:center;gap:12px;list-style:none;font-family:Inter,sans-serif;user-select:none;"><span style="width:28px;height:28px;border-radius:8px;background:var(--g1);color:#fff;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;flex-shrink:0;">'+(i+1)+'</span><span style="font-weight:800;font-size:14px;color:var(--text);flex:1;line-height:1.35;">'+c.name+'</span><span style="font-size:16px;color:var(--text3);">›</span></summary><div style="padding:14px 18px;display:flex;flex-direction:column;gap:7px;border-top:1.5px solid var(--border);">'+(desc?'<p style="font-size:13px;color:var(--text2);line-height:1.65;margin:0;">'+desc+'</p>':'')+(c.address?'<div style="font-size:12px;color:var(--text3);display:flex;gap:5px;align-items:flex-start;"><span>📍</span><span>'+c.address+'</span></div>':'')+(c.phone?'<div style="font-size:12px;display:flex;gap:5px;align-items:center;"><span>📞</span><a href="tel:'+c.phone+'" style="color:var(--g1);font-weight:700;text-decoration:none;">'+c.phone+'</a></div>':'')+(c.email?'<div style="font-size:12px;display:flex;gap:5px;align-items:center;"><span>✉️</span><a href="mailto:'+c.email+'" style="color:var(--g1);font-weight:700;text-decoration:none;">'+c.email+'</a></div>':'')+(c.site?'<div style="font-size:12px;display:flex;gap:5px;align-items:center;"><span>🌐</span><a href="'+c.site+'" target="_blank" rel="noreferrer" style="color:var(--g1);font-weight:700;text-decoration:none;word-break:break-all;">'+c.site.replace(/^https?:\/\//,'').replace(/\/$/,'')+'</a></div>':'')+'</div></details>';
      });
    }
    html+='</div>';
    p.innerHTML=html;
    p.scrollIntoView({behavior:'smooth',block:'nearest'});
  }
};

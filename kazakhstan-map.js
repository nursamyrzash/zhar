const KZ_REGIONS = [
{id:'zko',name:{kk:'Батыс Қазақстан',ru:'Западно-Казахстанская',en:'West Kazakhstan'},cap:{kk:'Орал',ru:'Уральск',en:'Oral'},pin:'blue',cx:120,cy:144,centers:2,families:97,phone:'+7 711 250-xx-xx',desc:{kk:'Орал қаласында 2 оңалту орталығы жұмыс істейді',ru:'В Уральске работают 2 реабилитационных центра',en:'2 rehabilitation centers operate in Oral'},fill:'#b4ccdf',path:'M 68,62 L 98,50 L 130,44 L 162,48 L 188,60 L 206,78 L 218,100 L 220,124 L 212,150 L 196,170 L 172,184 L 144,192 L 114,190 L 88,178 L 68,158 L 56,132 L 60,104 Z'},
{id:'atyrau',name:{kk:'Атырау облысы',ru:'Атырауская область',en:'Atyrau Region'},cap:{kk:'Атырау',ru:'Атырау',en:'Atyrau'},pin:'orange',cx:80,cy:250,centers:2,families:88,phone:'+7 712 222-xx-xx',desc:{kk:'Каспий жағалауында 2 орталық бар',ru:'На берегу Каспия расположены 2 центра',en:'2 centers on the Caspian coast'},fill:'#c0d4e6',path:'M 56,194 L 88,178 L 114,190 L 144,192 L 168,196 L 178,218 L 172,244 L 156,264 L 132,278 L 104,282 L 76,274 L 52,258 L 40,236 L 42,210 Z'},
{id:'mangystau',name:{kk:'Маңғыстау облысы',ru:'Мангистауская область',en:'Mangystau Region'},cap:{kk:'Ақтау',ru:'Актау',en:'Aktau'},pin:'blue',cx:58,cy:346,centers:2,families:76,phone:'+7 729 233-xx-xx',desc:{kk:'Каспий теңізінің жағалауындағы 2 орталық',ru:'2 центра на побережье Каспийского моря',en:'2 centers on the Caspian Sea coast'},fill:'#ccd8e8',path:'M 40,236 L 52,258 L 76,274 L 104,282 L 132,278 L 152,284 L 158,308 L 152,336 L 138,360 L 116,378 L 88,386 L 60,378 L 36,358 L 22,330 L 24,298 L 34,266 Z'},
{id:'aktobe',name:{kk:'Ақтөбе облысы',ru:'Актюбинская область',en:'Aktobe Region'},cap:{kk:'Ақтөбе',ru:'Актобе',en:'Aktobe'},pin:'orange',cx:230,cy:192,centers:3,families:125,phone:'+7 713 222-xx-xx',desc:{kk:'Батыс өңірінде 3 оңалту орталығы бар',ru:'В западном регионе 3 реабилитационных центра',en:'3 rehabilitation centers in the western region'},fill:'#aec8dc',path:'M 162,48 L 202,36 L 244,28 L 286,32 L 316,48 L 336,70 L 340,98 L 330,128 L 312,152 L 284,170 L 252,184 L 220,192 L 196,192 L 172,184 L 196,170 L 212,150 L 220,124 L 218,100 L 206,78 L 188,60 Z'},
{id:'kostanay',name:{kk:'Қостанай облысы',ru:'Костанайская область',en:'Kostanay Region'},cap:{kk:'Қостанай',ru:'Костанай',en:'Kostanay'},pin:'orange',cx:360,cy:98,centers:3,families:142,phone:'+7 714 239-25-58',desc:{kk:'КГУ, BAQYT, Ten Qogam — 3 мамандандырылған орталық',ru:'КГУ, BAQYT, Ten Qogam — 3 специализированных центра',en:'KGU, BAQYT, Ten Qogam — 3 specialized centers'},fill:'#b8d4e0',path:'M 286,32 L 326,16 L 368,6 L 412,10 L 446,26 L 464,50 L 468,80 L 458,112 L 438,136 L 410,154 L 378,164 L 346,166 L 318,158 L 312,152 L 330,128 L 340,98 L 336,70 L 316,48 Z'},
{id:'nko',name:{kk:'Солтүстік Қазақстан',ru:'Северо-Казахстанская',en:'North Kazakhstan'},cap:{kk:'Петропавл',ru:'Петропавловск',en:'Petropavl'},pin:'blue',cx:510,cy:76,centers:2,families:108,phone:'+7 715 246-xx-xx',desc:{kk:'Солтүстік өңірдің 2 орталығы',ru:'2 центра северного региона',en:'2 centers of the northern region'},fill:'#aec8d8',path:'M 446,26 L 478,14 L 520,4 L 562,6 L 596,20 L 616,42 L 618,70 L 604,96 L 578,116 L 546,128 L 514,132 L 482,128 L 454,116 L 438,100 L 458,80 L 468,50 Z'},
{id:'akmola',name:{kk:'Ақмола облысы',ru:'Акмолинская область',en:'Akmola Region'},cap:{kk:'Көкшетау',ru:'Кокшетау',en:'Kokshetau'},pin:'yellow',cx:526,cy:178,centers:3,families:118,phone:'+7 716 222-xx-xx',desc:{kk:'Астана маңында 3 оңалту орталығы жұмыс істейді',ru:'Близ Астаны работают 3 реабилитационных центра',en:'3 rehabilitation centers operate near Astana'},fill:'#b6d0e2',path:'M 454,116 L 482,128 L 514,132 L 546,128 L 578,136 L 600,158 L 604,184 L 590,210 L 566,228 L 536,242 L 504,246 L 472,242 L 444,226 L 420,208 L 410,186 L 416,162 L 436,148 L 438,136 L 458,112 L 454,116 Z'},
{id:'astana',name:{kk:'Астана қаласы',ru:'город Астана',en:'Astana City'},cap:{kk:'Астана',ru:'Астана',en:'Astana'},pin:'yellow',cx:592,cy:192,centers:3,families:180,phone:'+7(7172)51-15-55',desc:{kk:'Астана — Қазақстанның астанасы. 3 мамандандырылған оңалту орталығы бар',ru:'Астана — столица Казахстана. 3 специализированных реабилитационных центра',en:'Astana — capital of Kazakhstan. 3 specialized rehabilitation centers'},fill:'#e8d870',path:'M 580,182 L 590,176 L 602,178 L 606,188 L 602,198 L 590,202 L 580,198 L 576,188 Z'},
{id:'pavlodar',name:{kk:'Павлодар облысы',ru:'Павлодарская область',en:'Pavlodar Region'},cap:{kk:'Павлодар',ru:'Павлодар',en:'Pavlodar'},pin:'blue',cx:672,cy:130,centers:3,families:130,phone:'+7 718 232-xx-xx',desc:{kk:'Солтүстік-шығыс өңірдің 3 орталығы',ru:'3 центра северо-восточного региона',en:'3 centers of the northeastern region'},fill:'#b0ccd8',path:'M 596,20 L 636,10 L 678,6 L 720,12 L 752,30 L 770,56 L 772,88 L 758,118 L 732,140 L 700,156 L 666,162 L 634,156 L 608,138 L 592,116 L 578,116 L 604,96 L 618,70 L 616,42 Z'},
{id:'vko',name:{kk:'Шығыс Қазақстан',ru:'Восточно-Казахстанская',en:'East Kazakhstan'},cap:{kk:'Өскемен',ru:'Усть-Каменогорск',en:'Oskemen'},pin:'orange',cx:832,cy:194,centers:8,families:175,phone:'+7 723 225-xx-xx',desc:{kk:'Алтай өңірінде 8 мамандандырылған орталық бар',ru:'В Алтайском регионе 8 специализированных центров',en:'8 specialized centers in the Altai region'},fill:'#bed0e4',path:'M 720,12 L 764,2 L 812,2 L 858,14 L 896,36 L 922,70 L 934,110 L 932,152 L 918,190 L 892,222 L 854,248 L 816,260 L 780,262 L 748,248 L 722,226 L 706,200 L 700,168 L 708,144 L 732,140 L 758,118 L 772,88 L 770,56 L 752,30 Z'},
{id:'karagandy',name:{kk:'Қарағанды облысы',ru:'Карагандинская область',en:'Karaganda Region'},cap:{kk:'Қарағанды',ru:'Караганда',en:'Karaganda'},pin:'yellow',cx:582,cy:328,centers:5,families:210,phone:'+7 721 277-xx-xx',desc:{kk:'Орталық Қазақстанда ең ірі — 5 орталық',ru:'Крупнейший в Центральном Казахстане — 5 центров',en:'Largest in Central Kazakhstan — 5 centers'},fill:'#baced8',path:'M 420,208 L 444,226 L 472,242 L 504,246 L 536,242 L 566,228 L 590,210 L 604,184 L 618,172 L 644,170 L 672,180 L 700,198 L 718,222 L 732,250 L 740,284 L 738,320 L 722,354 L 698,380 L 664,400 L 628,410 L 590,412 L 554,404 L 520,390 L 492,370 L 468,344 L 446,316 L 428,284 L 416,252 Z'},
{id:'kyzylorda',name:{kk:'Қызылорда облысы',ru:'Кызылординская область',en:'Kyzylorda Region'},cap:{kk:'Қызылорда',ru:'Кызылорда',en:'Kyzylorda'},pin:'blue',cx:348,cy:376,centers:2,families:95,phone:'+7 724 227-xx-xx',desc:{kk:'Арал өңіріндегі 2 орталық',ru:'2 центра в Приаралье',en:'2 centers in the Aral Sea region'},fill:'#c2d6e8',path:'M 152,308 L 164,278 L 180,256 L 206,240 L 234,230 L 264,224 L 296,222 L 328,228 L 358,240 L 386,254 L 410,268 L 424,286 L 420,318 L 402,350 L 376,376 L 346,400 L 312,418 L 278,426 L 246,422 L 218,412 L 194,398 L 178,378 L 164,352 L 158,326 Z'},
{id:'turkestan',name:{kk:'Түркістан облысы',ru:'Туркестанская область',en:'Turkestan Region'},cap:{kk:'Түркістан',ru:'Туркестан',en:'Turkestan'},pin:'orange',cx:334,cy:498,centers:4,families:215,phone:'+7 725 221-xx-xx',desc:{kk:'Оңтүстіктің 4 оңалту орталығы',ru:'4 реабилитационных центра на юге',en:'4 rehabilitation centers in the south'},fill:'#bccee0',path:'M 194,398 L 218,412 L 246,422 L 278,426 L 312,418 L 346,400 L 366,418 L 374,448 L 368,478 L 354,506 L 332,528 L 304,542 L 272,548 L 240,542 L 210,530 L 184,512 L 162,490 L 154,464 L 158,436 L 172,412 L 186,400 Z'},
{id:'zhambyl',name:{kk:'Жамбыл облысы',ru:'Жамбылская область',en:'Zhambyl Region'},cap:{kk:'Тараз',ru:'Тараз',en:'Taraz'},pin:'blue',cx:496,cy:488,centers:3,families:140,phone:'+7 726 245-xx-xx',desc:{kk:'Тараз қаласының 3 оңалту орталығы',ru:'3 реабилитационных центра города Тараза',en:'3 rehabilitation centers of Taraz city'},fill:'#b4cade',path:'M 346,400 L 376,376 L 402,350 L 420,328 L 440,308 L 462,298 L 486,310 L 510,330 L 530,356 L 544,386 L 546,416 L 534,446 L 516,470 L 492,488 L 462,498 L 430,500 L 400,492 L 374,476 L 366,452 L 366,428 L 366,418 Z'},
{id:'almaty',name:{kk:'Алматы облысы',ru:'Алматинская область',en:'Almaty Region'},cap:{kk:'Алматы',ru:'Алматы',en:'Almaty'},pin:'orange',cx:706,cy:452,centers:12,families:520,phone:'+7 727 272-xx-xx',desc:{kk:'Ең ірі өңір — 12 орталық пен мамандандырылған клиникалар',ru:'Крупнейший регион — 12 центров и специализированные клиники',en:'Largest region — 12 centers and specialized clinics'},fill:'#b8cad8',path:'M 520,390 L 554,374 L 590,364 L 628,360 L 662,368 L 696,384 L 724,404 L 748,428 L 762,456 L 768,486 L 756,514 L 732,536 L 700,550 L 664,554 L 628,546 L 596,530 L 570,506 L 550,478 L 534,448 L 544,418 L 544,390 L 530,370 Z'}
];
 
const PIN_C = { orange:'#d9603a', blue:'#4a8fc4', yellow:'#d4943a' };
 
const KZ_CLINICS = {
kostanay: [
{name:'Центр дневного пребывания (аутизм)',city:{kk:'Қостанай',ru:'Костанай',en:'Kostanay'},directions:{kk:['Аутизм','Ментальды бұзылыстар','Реабилитация'],ru:['Аутизм','Ментальные нарушения','Реабилитация детей'],en:['Autism','Mental disorders','Children rehabilitation']},phone:'+77078924148',free:true,icon:'🏥',address:'Костанай, ул. Пушкина, 179',note:{kk:'Аутизм спектрі бар балалар үшін күндізгі орталық',ru:'Центр дневного пребывания для детей с аутизмом',en:'Day center for children with autism'}},
{name:'Қамқорлық',city:{kk:'Қостанай',ru:'Костанай',en:'Kostanay'},directions:{kk:['Ерте интервенция','Мүгедектігі бар балалар'],ru:['Раннее вмешательство','Дети с инвалидностью'],en:['Early intervention','Children with disabilities']},phone:'+77142263538',free:true,icon:'🏥',address:'Костанай, ул. Леонида Беды, 23а',note:{kk:'Мүгедек балаларға арналған ерте интервенция орталығы',ru:'Центр раннего вмешательства для детей с инвалидностью',en:'Early intervention center for disabled children'}},
{name:'Артромед',city:{kk:'Қостанай',ru:'Костанай',en:'Kostanay'},directions:{kk:['Инсульттан оңалту','Жарақаттан оңалту','Мүгедек балалар оңалтуы'],ru:['Реабилитация после инсульта','После травм/ДТП','Реабилитация инвалидов'],en:['Post-stroke rehab','Injury rehab','Disability rehab']},phone:'+77769111266',phone2:'+77751128338',free:false,icon:'🏢',address:'Костанай, 6-й микрорайон, 3Б',note:{kk:'Жеке реабилитациялық орталық',ru:'Частный реабилитационный центр',en:'Private rehabilitation center'}},
{name:'Реабилитационный медицинский центр',city:{kk:'Қостанай',ru:'Костанай',en:'Kostanay'},directions:{kk:['Инсульттан оңалту','ДЦП','Аутизм','Жарақаттан оңалту'],ru:['После инсульта','ДЦП','Аутизм','После травм'],en:['Post-stroke','CP','Autism','Post-injury']},phone:'+77774471103',phone2:'+77056594070',free:false,icon:'🏢',address:'Костанай, ул. Калабаева, 27',note:{kk:'Кешенді реабилитация',ru:'Комплексная реабилитация',en:'Complex rehabilitation'}},
{name:'Алем',city:{kk:'Қостанай',ru:'Костанай',en:'Kostanay'},directions:{kk:['РАС','Дамуды тежелу'],ru:['РАС','Задержка развития'],en:['ASD','Developmental delay']},phone:'+77774884588',free:false,icon:'🏢',address:'Костанай, пр. Кобыланды батыра, 38а',note:{kk:'РАС және дамуды тежелу орталығы',ru:'Центр РАС и задержки развития',en:'ASD and developmental delay center'}},
],
aktobe: [
{name:"КГУ «Асыл Мирас» Актюбинской области",city:{kk:'Ақтөбе',ru:'Актобе',en:'Aktobe'},directions:{kk:['РАС','Аутизм','АВА','Сөйлеу','Әлеуметтену'],ru:['РАС','Аутизм','АВА','Речь','Социализация'],en:['ASD','Autism','ABA','Speech','Socialization']},phone:'+7(771)743-02-31',free:true,icon:'🏥',address:'Актобе, ул. Маресьева, 63, 1 этаж',note:{kk:'Тегін мемлекеттік орталық',ru:'Бесплатно. Государственный центр',en:'Free. State center'}},
{name:'Qamqorlyq',city:{kk:'Ақтөбе',ru:'Актобе',en:'Aktobe'},directions:{kk:['Балаларды оңалту','ДЦП','Аутизм'],ru:['Реабилитация детей','ДЦП','Аутизм'],en:['Children rehab','CP','Autism']},phone:'+7(7132)577564',free:false,icon:'🏢',address:'Актобе, ул. Шестихатка, 471а',note:{kk:'Жеке балалар реабилитация орталығы',ru:'Частный детский реабилитационный центр',en:'Private children rehabilitation center'}},
{name:'Дару',city:{kk:'Ақтөбе',ru:'Актобе',en:'Aktobe'},directions:{kk:['Инсульттан оңалту','ДЦП','Аутизм','Мүгедек оңалтуы'],ru:['После инсульта','ДЦП','Аутизм','Реабилитация инвалидов'],en:['Post-stroke','CP','Autism','Disability rehab']},phone:'+7(7132)704001',phone2:'+7(7132)704000',free:false,icon:'🏢',address:'Актобе, проспект Санкибай батыра, 72Б',note:{kk:'Кешенді медициналық реабилитация',ru:'Комплексная медицинская реабилитация',en:'Complex medical rehabilitation'}},
{name:'Акбобек',city:{kk:'Ақтөбе',ru:'Актобе',en:'Aktobe'},directions:{kk:['Балаларды оңалту','ДЦП','Аутизм'],ru:['Реабилитация детей','ДЦП','Аутизм'],en:['Children rehab','CP','Autism']},phone:'+7(7132)500059',phone2:'+7(7132)501854',free:false,icon:'🏢',address:'Актобе, ул. Ватутина, 1в',note:{kk:'Балалар реабилитация орталығы',ru:'Детский реабилитационный центр',en:'Children rehabilitation center'}},
{name:'Адал ниет',city:{kk:'Ақтөбе',ru:'Актобе',en:'Aktobe'},directions:{kk:['Инсульттан оңалту','ДЦП','Аутизм','Мүгедек оңалтуы'],ru:['После инсульта','ДЦП','Аутизм','Реабилитация инвалидов'],en:['Post-stroke','CP','Autism','Disability rehab']},phone:'+77756838304',free:false,icon:'🏢',address:'Актобе, ул. Монке Би, 94Б',note:{kk:'Барлық жастағы науқастарға арналған',ru:'Для пациентов всех возрастов',en:'For patients of all ages'}},
{name:'Tolkyn Med',city:{kk:'Ақтөбе',ru:'Актобе',en:'Aktobe'},directions:{kk:['Мүгедек оңалтуы','Балаларды оңалту','ДЦП'],ru:['Реабилитация инвалидов','Реабилитация детей','ДЦП'],en:['Disability rehab','Children rehab','CP']},phone:'+77718447177',free:false,icon:'🏢',address:'Актобе, ул. Гришина, 11а',note:{kk:'Мүгедек балалар үшін',ru:'Для детей с инвалидностью',en:'For children with disabilities'}},
{name:'Акниет Плюс',city:{kk:'Ақтөбе',ru:'Актобе',en:'Aktobe'},directions:{kk:['Инсульттан оңалту','Мүгедек оңалтуы'],ru:['После инсульта','Реабилитация инвалидов'],en:['Post-stroke','Disability rehab']},phone:'+77057244863',free:false,icon:'🏢',address:'Актобе, ул. Бокенбай батыра, 127Б',note:{kk:'Реабилитациялық орталық',ru:'Реабилитационный центр',en:'Rehabilitation center'}},
{name:'Актюбинская железнодорожная больница',city:{kk:'Ақтөбе',ru:'Актобе',en:'Aktobe'},directions:{kk:['Инсульттан оңалту','Жарақаттан оңалту','Аутизм'],ru:['После инсульта','После травм','Аутизм'],en:['Post-stroke','Post-injury','Autism']},phone:'+7(7132)975485',free:false,icon:'🏢',address:'Актобе, ул. Хиуаз Доспановой, 36а',note:{kk:'Темір жол ауруханасы',ru:'Железнодорожная больница',en:'Railway hospital'}},
],
zko: [
{name:'Асыл Мирас (Орал)',city:{kk:'Орал',ru:'Уральск',en:'Oral'},directions:{kk:['Аутизм','Балалар қолдауы'],ru:['Аутизм','Поддержка детей'],en:['Autism','Children support']},phone:'+77758364184',phone2:'+7(7112)250272',free:true,icon:'🏥',address:'Орал, ул. Самал, 102',note:{kk:'Аутизмі бар балаларды қолдау орталығы',ru:'Центр поддержки детей с аутизмом',en:'Support center for children with autism'}},
{name:'Dr.Karin',city:{kk:'Орал',ru:'Уральск',en:'Oral'},directions:{kk:['Балаларды оңалту','Мүгедек оңалтуы'],ru:['Реабилитация детей','Реабилитация инвалидов'],en:['Children rehab','Disability rehab']},phone:'+77074093341',free:false,icon:'🏢',address:'Уральск, ул. Есенжанова, 3/2',note:{kk:'Жеке медициналық орталық',ru:'Частный медицинский центр',en:'Private medical center'}},
{name:'Мейiрiм',city:{kk:'Орал',ru:'Уральск',en:'Oral'},directions:{kk:['Инсульттан оңалту','ДЦП','Аутизм'],ru:['После инсульта','ДЦП','Аутизм'],en:['Post-stroke','CP','Autism']},phone:'+77784440403',phone2:'+77764440403',free:false,icon:'🏢',address:'Уральск, ул. Самал, 82/1',note:{kk:'Реабилитациялық орталық',ru:'Реабилитационный центр',en:'Rehabilitation center'}},
{name:'ADN',city:{kk:'Орал',ru:'Уральск',en:'Oral'},directions:{kk:['Инсульттан оңалту','ДЦП','Аутизм','Балаларды оңалту'],ru:['После инсульта','ДЦП','Аутизм','Реабилитация детей'],en:['Post-stroke','CP','Autism','Children rehab']},phone:'+77478585442',free:false,icon:'🏢',address:'Уральск, ул. Тукая, 39',note:{kk:'Кешенді оңалту',ru:'Комплексная реабилитация',en:'Complex rehabilitation'}},
{name:'Hadiya education',city:{kk:'Орал',ru:'Уральск',en:'Oral'},directions:{kk:['Балаларды оңалту','ДЦП','Аутизм'],ru:['Реабилитация детей','ДЦП','Аутизм'],en:['Children rehab','CP','Autism']},phone:'+77028346472',free:false,icon:'🏢',address:'Уральск, ул. Жангали Набиуллина, 1/1',note:{kk:'Балаларға арналған орталық',ru:'Центр для детей',en:'Center for children'}},
{name:'Neuron orta',city:{kk:'Орал',ru:'Уральск',en:'Oral'},directions:{kk:['ДЦП','Аутизм'],ru:['ДЦП','Аутизм'],en:['CP','Autism']},phone:'+77080168988',free:false,icon:'🏢',address:'Уральск, ул. Сарайшык, 54, цокольный этаж',note:{kk:'Нейрологиялық оңалту',ru:'Неврологическая реабилитация',en:'Neurological rehabilitation'}},
],
atyrau: [
{name:'Adal Clinic',city:{kk:'Атырау',ru:'Атырау',en:'Atyrau'},directions:{kk:['Инсульттан оңалту','ДЦП','Жарақаттан оңалту'],ru:['После инсульта','ДЦП','После травм'],en:['Post-stroke','CP','Post-injury']},phone:'+77087087785',free:false,icon:'🏢',address:'Атырау, ул. Курмангазы, 6а, 1 этаж',note:{kk:'Реабилитациялық орталық',ru:'Реабилитационный центр',en:'Rehabilitation center'}},
{name:'Skolioz.kz',city:{kk:'Атырау',ru:'Атырау',en:'Atyrau'},directions:{kk:['Инсульттан оңалту','ДЦП','Аутизм'],ru:['После инсульта','ДЦП','Аутизм'],en:['Post-stroke','CP','Autism']},phone:'+77018018448',free:false,icon:'🏢',address:'Атырау, ул. Мухита Калимова, 24',note:{kk:'Остеопатия және реабилитация орталығы',ru:'Центр остеопатии и реабилитации',en:'Center of osteopathy and rehabilitation'}},
{name:'Dm Clinic',city:{kk:'Атырау',ru:'Атырау',en:'Atyrau'},directions:{kk:['Инсульттан оңалту','Жарақаттан оңалту','Мүгедек оңалтуы'],ru:['После инсульта','После травм','Реабилитация инвалидов'],en:['Post-stroke','Post-injury','Disability rehab']},phone:'+77781073746',free:false,icon:'🏢',address:'Атырау, ул. Льва Владимирского, 100е',note:{kk:'Реабилитациялық орталық',ru:'Реабилитационный центр',en:'Rehabilitation center'}},
{name:'AB medical',city:{kk:'Атырау',ru:'Атырау',en:'Atyrau'},directions:{kk:['Инсульттан оңалту','Жарақаттан оңалту','Мүгедек оңалтуы'],ru:['После инсульта','После травм','Реабилитация инвалидов'],en:['Post-stroke','Post-injury','Disability rehab']},phone:'+7(7122)304414',free:false,icon:'🏢',address:'Атырау, ул. Бауыржана Момышулы, ст21а',note:{kk:'Медициналық орталық',ru:'Медицинский центр',en:'Medical center'}},
{name:'Областной детский реабилитационный центр',city:{kk:'Атырау',ru:'Атырау',en:'Atyrau'},directions:{kk:['Мүгедек балалар','Балаларды оңалту','Аутизм'],ru:['Реабилитация инвалидов','Реабилитация детей','Аутизм'],en:['Disability rehab','Children rehab','Autism']},phone:'+7(7122)453177',free:true,icon:'🏥',address:'Атырау, ул. Кайыргали Смагулов, 59',note:{kk:'Мемлекеттік балалар орталығы',ru:'Государственный детский центр',en:'State children center'}},
{name:'Симметрия',city:{kk:'Атырау',ru:'Атырау',en:'Atyrau'},directions:{kk:['Инсульттан оңалту','Жарақаттан оңалту','Балаларды оңалту'],ru:['После инсульта','После травм','Реабилитация детей'],en:['Post-stroke','Post-injury','Children rehab']},phone:'+77471200202',free:false,icon:'🏢',address:'Атырау, проспект Азаттык, 46, 1 этаж',note:{kk:'Ортопедия және травматология орталығы',ru:'Центр ортопедии и травматологии',en:'Orthopedics and traumatology center'}},
{name:'Областной центр реабилитации инвалидов',city:{kk:'Атырау',ru:'Атырау',en:'Atyrau'},directions:{kk:['Мүгедек оңалтуы'],ru:['Реабилитация инвалидов'],en:['Disability rehabilitation']},phone:'+7(7122)364536',free:true,icon:'🏥',address:'Атырау, микрорайон Привокзальный 3а, 10Б',note:{kk:'Мемлекеттік мүгедек оңалту орталығы',ru:'Государственный центр реабилитации инвалидов',en:'State disability rehabilitation center'}},
{name:'Центр раннего вмешательства «Қамқорлық»',city:{kk:'Атырау',ru:'Атырау',en:'Atyrau'},directions:{kk:['Ерте интервенция','ДЦП','Даун синдромы','Нерв жүйесі'],ru:['Раннее вмешательство','ДЦП','Синдром Дауна','Нервная система'],en:['Early intervention','CP','Down Syndrome','Nervous system']},phone:'+7(7122)467156',free:true,icon:'🏥',address:'Атырау',note:{kk:'Мерзімінен бұрын туған балалар үшін, ДЦП, Даун синдромы',ru:'Для недоношенных, ДЦП, синдром Дауна',en:'For premature babies, CP, Down Syndrome'}},
],
nko: [
{name:"КГУ «Асыл Мирас» СКО",city:{kk:'Петропавл',ru:'Петропавловск',en:'Petropavl'},directions:{kk:['РАС','Аутизм','Сөйлеу дамыту','АВА-терапия'],ru:['РАС','Аутизм','Развитие речи','АВА-терапия'],en:['ASD','Autism','Speech development','ABA therapy']},phone:'+7(7152)704858',phone2:'+77776550483',free:true,icon:'🏥',address:'Петропавловск, ул. Жамбыла Жабаева, 80, 1 этаж',note:{kk:'2019 жылы ашылды. 500 м²',ru:'Открыт 3 октября 2019 г. 500 м²',en:'Opened Oct 3, 2019. 500 m²'}},
{name:'НевроKazМед',city:{kk:'Петропавл',ru:'Петропавловск',en:'Petropavl'},directions:{kk:['Аутизм'],ru:['Аутизм'],en:['Autism']},phone:'+7(7152)532559',phone2:'+77711354040',free:false,icon:'🏢',address:'Петропавловск, ул. Магжана Жумабаева, 41',note:{kk:'Аутизм емдеу орталығы',ru:'Центр лечения аутизма',en:'Autism treatment center'}},
],
pavlodar: [
{name:"КГУ КППК «Асыл Мирас» Павлодар",city:{kk:'Павлодар',ru:'Павлодар',en:'Pavlodar'},directions:{kk:['РАС','Аутизм','АВА-терапия','Сөйлеу дамыту'],ru:['РАС','Аутизм','АВА-терапия','Развитие речи'],en:['ASD','Autism','ABA therapy','Speech development']},phone:'+7(7182)621560',phone2:'+7(7182)627750',email:'asylmiras_pvl@mail.kz',free:true,icon:'🏥',address:'Павлодар, ул. Луначарского, 28',note:{kk:'АВА, АВА-терапия, сөйлеу, әлеуметтік дағдылар',ru:'АВА-терапия, развитие речи, социальные навыки',en:'ABA therapy, speech, social skills'}},
{name:'Павлодарская железнодорожная больница',city:{kk:'Павлодар',ru:'Павлодар',en:'Pavlodar'},directions:{kk:['Инсульттан оңалту','ДЦП','Аутизм','Жарақаттан оңалту'],ru:['После инсульта','ДЦП','Аутизм','После травм'],en:['Post-stroke','CP','Autism','Post-injury']},phone:'+7(7182)662001',free:false,icon:'🏢',address:'Павлодар, ул. Павлова, 1/3',note:{kk:'Кешенді реабилитация',ru:'Комплексная реабилитация',en:'Complex rehabilitation'}},
{name:'Атлант',city:{kk:'Павлодар',ru:'Павлодар',en:'Pavlodar'},directions:{kk:['Инсульттан оңалту','Жарақаттан оңалту','Балаларды оңалту'],ru:['После инсульта','После травм','Реабилитация детей'],en:['Post-stroke','Post-injury','Children rehab']},phone:'+7(7182)662622',free:false,icon:'🏢',address:'Павлодар, ул. Генерала Дюсенова, 3/1',note:{kk:'Медициналық реабилитация',ru:'Медицинская реабилитация',en:'Medical rehabilitation'}},
{name:'Центр доктора Бубновского (Павлодар)',city:{kk:'Павлодар',ru:'Павлодар',en:'Pavlodar'},directions:{kk:['Инсульттан оңалту','ДЦП','Балаларды оңалту'],ru:['После инсульта','ДЦП','Реабилитация детей'],en:['Post-stroke','CP','Children rehab']},phone:'+77057555050',free:false,icon:'🏢',address:'Павлодар, ул. Лермонтова, 91',note:{kk:'Бубновский орталығы',ru:'Центр Бубновского',en:'Bubnovsky center'}},
{name:'Реабилитационный центр Дианы Дерепаско',city:{kk:'Павлодар',ru:'Павлодар',en:'Pavlodar'},directions:{kk:['Инсульттан оңалту','ДЦП','Аутизм','Жарақаттан оңалту'],ru:['После инсульта','ДЦП','Аутизм','После травм'],en:['Post-stroke','CP','Autism','Post-injury']},phone:'+77713281528',free:false,icon:'🏢',address:'Павлодар, ул. Академика Бектурова, 139/1',note:{kk:'Реабилитация орталығы',ru:'Реабилитационный центр',en:'Rehabilitation center'}},
{name:'Областной детский реабилитационный центр (Павлодар)',city:{kk:'Павлодар',ru:'Павлодар',en:'Pavlodar'},directions:{kk:['Аутизм','Балалар мүгедектігі'],ru:['Аутизм','Детская инвалидность'],en:['Autism','Child disability']},phone:'+7(7182)787264',free:true,icon:'🏥',address:'Павлодар, ул. Джамбульская, 6, 1 этаж',note:{kk:'Мемлекеттік балалар орталығы',ru:'Государственный детский центр',en:'State children center'}},
{name:'InTime',city:{kk:'Павлодар',ru:'Павлодар',en:'Pavlodar'},directions:{kk:['Балаларды оңалту','ДЦП','Аутизм'],ru:['Реабилитация детей','ДЦП','Аутизм'],en:['Children rehab','CP','Autism']},phone:'+77057045642',free:false,icon:'🏢',address:'Павлодар, ул. Естая Беркимбаева, 101 к3',note:{kk:'Жеке балалар орталығы',ru:'Частный детский центр',en:'Private children center'}},
{name:'Aqniet',city:{kk:'Павлодар',ru:'Павлодар',en:'Pavlodar'},directions:{kk:['Балаларды оңалту','ДЦП','Аутизм','Мүгедек балалар'],ru:['Реабилитация детей','ДЦП','Аутизм','Дети-инвалиды'],en:['Children rehab','CP','Autism','Disabled children']},phone:'+77002225393',free:false,icon:'🏢',address:'Павлодар, ул. Алии Молдагуловой, 81а',note:{kk:'Балалар коррекция және даму орталығы',ru:'Детский центр коррекции и развития',en:'Children correction and development center'}},
],
akmola: [
{name:'Реабилитационный центр «Камкорлык» (Кокшетау)',city:{kk:'Көкшетау',ru:'Кокшетау',en:'Kokshetau'},directions:{kk:['Нейрологиялық аурулар','ДЦП'],ru:['Неврологические заболевания','ДЦП'],en:['Neurological diseases','CP']},phone:'+7(7162)780199',free:true,icon:'🏥',address:'Кокшетау, ул. Каныша Сатпаева, 87а',note:{kk:'МО балалар ауруханасы жанында',ru:'При МО детской больнице',en:'At MO children hospital'}},
{name:'Пазл успеха',city:{kk:'Көкшетау',ru:'Кокшетау',en:'Kokshetau'},directions:{kk:['Балаларды оңалту','ДЦП','Аутизм'],ru:['Реабилитация детей','ДЦП','Аутизм'],en:['Children rehab','CP','Autism']},phone:'+77023590088',free:false,icon:'🏢',address:'Кокшетау, ул. Мухтара Ауэзова, 213Б',note:{kk:'Коррекциялық орталық',ru:'Коррекционный центр',en:'Correction center'}},
{name:'Болашақ',city:{kk:'Көкшетау',ru:'Кокшетау',en:'Kokshetau'},directions:{kk:['Балаларды оңалту','ДЦП'],ru:['Реабилитация детей','ДЦП'],en:['Children rehab','CP']},phone:'+7(7162)250536',free:false,icon:'🏢',address:'Кокшетау, проспект Нурсултана Назарбаева, 35',note:{kk:'Балалар реабилитация орталығы',ru:'Детский реабилитационный центр',en:'Children rehabilitation center'}},
{name:'Центр доктора Бубновского (Кокшетау)',city:{kk:'Көкшетау',ru:'Кокшетау',en:'Kokshetau'},directions:{kk:['Инсульттан оңалту','ДЦП','Балаларды оңалту'],ru:['После инсульта','ДЦП','Реабилитация детей'],en:['Post-stroke','CP','Children rehab']},phone:'+7(7162)442090',free:false,icon:'🏢',address:'Кокшетау, ул. Алимжана Баймуканова, 68',note:{kk:'Бубновский орталығы',ru:'Центр Бубновского',en:'Bubnovsky center'}},
{name:'Формула здоровья',city:{kk:'Көкшетау',ru:'Кокшетау',en:'Kokshetau'},directions:{kk:['Инсульттан оңалту','ДЦП','Аутизм','Балаларды оңалту'],ru:['После инсульта','ДЦП','Аутизм','Реабилитация детей'],en:['Post-stroke','CP','Autism','Children rehab']},phone:'+77074085838',free:false,icon:'🏢',address:'Кокшетау, ул. Шакарима Кудайбердиева, 62',note:{kk:'Реабилитациялық орталық',ru:'Реабилитационный центр',en:'Rehabilitation center'}},
{name:'Я сам шагаю',city:{kk:'Көкшетау',ru:'Кокшетау',en:'Kokshetau'},directions:{kk:['Балаларды оңалту','ДЦП','Аутизм'],ru:['Реабилитация детей','ДЦП','Аутизм'],en:['Children rehab','CP','Autism']},phone:'+77472685474',free:false,icon:'🏢',address:'Кокшетау, ул. Байкена Ашимова, 86',note:{kk:'Ерекше білім беру қажеттіліктері бар балалар',ru:'Дети с особыми образовательными потребностями',en:'Children with special educational needs'}},
{name:'Doctor Step (Степногорск)',city:{kk:'Степногорск',ru:'Степногорск',en:'Stepnogorsk'},directions:{kk:['Инсульттан оңалту','ДЦП','Аутизм'],ru:['После инсульта','ДЦП','Аутизм'],en:['Post-stroke','CP','Autism']},phone:'+77086348056',free:false,icon:'🏢',address:'Степногорск, 3-й микрорайон, 103',note:{kk:'Медициналық орталық',ru:'Медицинский центр',en:'Medical center'}},
{name:'Дәрігер plus (Степногорск)',city:{kk:'Степногорск',ru:'Степногорск',en:'Stepnogorsk'},directions:{kk:['Инсульттан оңалту','ДЦП','Аутизм','Балаларды оңалту'],ru:['После инсульта','ДЦП','Аутизм','Реабилитация детей'],en:['Post-stroke','CP','Autism','Children rehab']},phone:'+77056593636',free:false,icon:'🏢',address:'Степногорск, 1-й микрорайон, 15',note:{kk:'Степногорск көпсалалы қалалық ауруханасы',ru:'Степногорская многопрофильная городская больница',en:'Stepnogorsk multidisciplinary city hospital'}},
],
astana: [
{name:"National Children's Rehabilitation Center",city:{kk:'Астана',ru:'Астана',en:'Astana'},directions:{kk:['ДЦП','Аутизм','Неврологиялық аурулар','Оңалту'],ru:['ДЦП','Аутизм','Неврологические заболевания','Реабилитация'],en:['CP','Autism','Neurological diseases','Rehabilitation']},phone:'+7(7172)511555',free:true,icon:'🏥',address:'Астана, пр. Туран, 36',note:{kk:'Мемлекеттік',ru:'Государственный',en:'State-funded'}},
{name:'Expert Neuro',city:{kk:'Астана',ru:'Астана',en:'Astana'},directions:{kk:['Нейрологиялық оңалту'],ru:['Неврологическая реабилитация'],en:['Neurological rehabilitation']},phone:'+77079043368',free:false,icon:'🏢',address:'Астана, шоссе Коргалжын, 4/1',note:{kk:'Жеке орталық',ru:'Частный центр',en:'Private center'}},
{name:'Tamshylar',city:{kk:'Астана',ru:'Астана',en:'Astana'},directions:{kk:['Аутизм','АВА-терапия'],ru:['Аутизм','АВА-терапия'],en:['Autism','ABA therapy']},phone:'+77075315701',free:false,icon:'🏢',address:'Астана',note:{kk:'Жеке аутизм орталығы',ru:'Частный центр аутизма',en:'Private autism center'}},
{name:'ABA all day',city:{kk:'Астана',ru:'Астана',en:'Astana'},directions:{kk:['ДЦП','Аутизм'],ru:['Реабилитация при ДЦП','Реабилитация при аутизме'],en:['CP','Autism']},phone:'+77026788716',phone2:'+77753640213',free:false,icon:'🏢',address:'Астана, ул. Жошы хан, 27',note:{kk:'АВА терапия орталығы',ru:'Центр АВА терапии',en:'ABA therapy center'}},
{name:'Reborn Clinic',city:{kk:'Астана',ru:'Астана',en:'Astana'},directions:{kk:['Инсульттан оңалту','Аурулардан оңалту','Жарақаттан оңалту','Мүгедек оңалтуы','Балаларды оңалту','ДЦП','Аутизм'],ru:['После инсульта','После болезней','После травм/ДТП','Реабилитация инвалидов','Реабилитация детей','ДЦП','Аутизм'],en:['Post-stroke','Post-illness','Post-injury','Disability rehab','Children rehab','CP','Autism']},phone:'+77760141416',free:false,icon:'🏢',address:'Астана, ул. Анет баба, 11/3 (вход с ул. Айтеке би)',note:{kk:'Кешенді оңалту',ru:'Комплексная реабилитация',en:'Complex rehabilitation'}},
{name:'Доктрина Азия',city:{kk:'Астана',ru:'Астана',en:'Astana'},directions:{kk:['Аурулардан оңалту','Жарақаттан оңалту','Мүгедек оңалтуы','Балаларды оңалту','ДЦП','Аутизм'],ru:['После болезней','После травм/ДТП','Реабилитация инвалидов','Реабилитация детей','ДЦП','Аутизм'],en:['Post-illness','Post-injury','Disability rehab','Children rehab','CP','Autism']},phone:'+77002560024',phone2:'+77070400393',free:false,icon:'🏢',address:'Астана, пр. Бауыржан Момышулы, 2а, НП: 14',note:{kk:'Реабилитациялық орталық',ru:'Реабилитационный центр',en:'Rehabilitation center'}},
{name:'INFINITY LIFE',city:{kk:'Астана',ru:'Астана',en:'Astana'},directions:{kk:['Инсульттан оңалту','Аурулардан оңалту','Жарақаттан оңалту','Балаларды оңалту','ДЦП','Аутизм'],ru:['После инсульта','После болезней','После травм/ДТП','Реабилитация детей','ДЦП','Аутизм'],en:['Post-stroke','Post-illness','Post-injury','Children rehab','CP','Autism']},phone:'+77470953954',free:false,icon:'🏢',address:'Астана, пр. Кабанбай батыра, 40',note:{kk:'Реабилитациялық орталық',ru:'Реабилитационный центр',en:'Rehabilitation center'}},
{name:'Bala',city:{kk:'Астана',ru:'Астана',en:'Astana'},directions:{kk:['Жарақаттан оңалту','Мүгедек оңалтуы','Балаларды оңалту','ДЦП','Аутизм'],ru:['После травм/ДТП','Реабилитация инвалидов','Реабилитация детей','ДЦП','Аутизм'],en:['Post-injury','Disability rehab','Children rehab','CP','Autism']},phone:'+77058929809',free:false,icon:'🏢',address:'Астана, пр. Туран, 14, 1 этаж',note:{kk:'Балалар оңалту орталығы',ru:'Детский реабилитационный центр',en:'Children rehabilitation center'}},
{name:'Частный благотворительный фонд Адал Ниет',city:{kk:'Астана',ru:'Астана',en:'Astana'},directions:{kk:['Инсульттан оңалту','Жарақаттан оңалту','Мүгедек оңалтуы','Балаларды оңалту','ДЦП'],ru:['После инсульта','После травм/ДТП','Реабилитация инвалидов','Реабилитация детей','ДЦП'],en:['Post-stroke','Post-injury','Disability rehab','Children rehab','CP']},phone:'+7(7172)534606',free:false,icon:'🏢',address:'Астана, ул. Маскеу, 17, 1 этаж',note:{kk:'Қайырымдылық қоры',ru:'Благотворительный фонд',en:'Charity foundation'}},
{name:'Aisera Clinic',city:{kk:'Астана',ru:'Астана',en:'Astana'},directions:{kk:['Аурулардан оңалту','Жарақаттан оңалту','Мүгедек оңалтуы','Балаларды оңалту','ДЦП'],ru:['После болезней','После травм/ДТП','Реабилитация инвалидов','Реабилитация детей','ДЦП'],en:['Post-illness','Post-injury','Disability rehab','Children rehab','CP']},phone:'+77084250938',phone2:'+7(7172)250938',free:false,icon:'🏢',address:'Астана, ул. Жумекен Нажимеденов, 14',note:{kk:'Реабилитациялық клиника',ru:'Реабилитационная клиника',en:'Rehabilitation clinic'}},
{name:'Центр доктора Бубновского (Астана)',city:{kk:'Астана',ru:'Астана',en:'Astana'},directions:{kk:['Инсульттан оңалту','Аурулардан оңалту','Жарақаттан оңалту','Мүгедек оңалтуы','Балаларды оңалту','ДЦП'],ru:['После инсульта','После болезней','После травм/ДТП','Реабилитация инвалидов','Реабилитация детей','ДЦП'],en:['Post-stroke','Post-illness','Post-injury','Disability rehab','Children rehab','CP']},phone:'+7(7172)280800',phone2:'+77472047589',free:false,icon:'🏢',address:'Астана, ул. Алихан Бокейхан, 2',note:{kk:'Бубновский орталығы',ru:'Центр Бубновского',en:'Bubnovsky center'}},
{name:'Fenix',city:{kk:'Астана',ru:'Астана',en:'Astana'},directions:{kk:['Инсульттан оңалту','Аурулардан оңалту','Жарақаттан оңалту','Мүгедек оңалтуы','Балаларды оңалту','ДЦП','Аутизм'],ru:['После инсульта','После болезней','После травм/ДТП','Реабилитация инвалидов','Реабилитация детей','ДЦП','Аутизм'],en:['Post-stroke','Post-illness','Post-injury','Disability rehab','Children rehab','CP','Autism']},phone:'+77782489675',free:false,icon:'🏢',address:'Астана, ул. Жанайдар Жирентаев, 4/1',note:{kk:'Реабилитациялық орталық',ru:'Реабилитационный центр',en:'Rehabilitation center'}},
{name:'Zaman Medical',city:{kk:'Астана',ru:'Астана',en:'Astana'},directions:{kk:['Инсульттан оңалту','Жарақаттан оңалту','Мүгедек оңалтуы','Балаларды оңалту','ДЦП'],ru:['После инсульта','После травм/ДТП','Реабилитация инвалидов','Реабилитация детей','ДЦП'],en:['Post-stroke','Post-injury','Disability rehab','Children rehab','CP']},phone:'+77753960544',free:false,icon:'🏢',address:'Астана, ул. Бухар жырау, 36',note:{kk:'Реабилитациялық орталық',ru:'Реабилитационный центр',en:'Rehabilitation center'}},
{name:'Aquatic',city:{kk:'Астана',ru:'Астана',en:'Astana'},directions:{kk:['Жарақаттан оңалту','Балаларды оңалту','ДЦП','Аутизм'],ru:['После травм/ДТП','Реабилитация детей','ДЦП','Аутизм'],en:['Post-injury','Children rehab','CP','Autism']},phone:'+77780995758',free:false,icon:'🏢',address:'Астана, ул. Абикен Бектуров, 7, НП: 13',note:{kk:'Су реабилитациясы',ru:'Водная реабилитация',en:'Aquatic rehabilitation'}},
{name:'Qazaq Emhanasy',city:{kk:'Астана',ru:'Астана',en:'Astana'},directions:{kk:['Инсульттан оңалту','Аурулардан оңалту','Мүгедек оңалтуы','ДЦП','Аутизм'],ru:['После инсульта','После болезней','Реабилитация инвалидов','ДЦП','Аутизм'],en:['Post-stroke','Post-illness','Disability rehab','CP','Autism']},phone:'+77472008818',phone2:'+77789008818',free:false,icon:'🏢',address:'Астана, ул. Буктырма, 13, 1 этаж',note:{kk:'Медициналық орталық',ru:'Медицинский центр',en:'Medical center'}},
{name:'Жулдызай',city:{kk:'Астана',ru:'Астана',en:'Astana'},directions:{kk:['ДЦП'],ru:['Реабилитация при ДЦП'],en:['CP rehabilitation']},phone:'+7(7172)308897',phone2:'+77781592031',free:false,icon:'🏢',address:'Астана, пр. Кабанбай батыра, 46/1',note:{kk:'ДЦП орталығы',ru:'Центр ДЦП',en:'CP center'}},
{name:'iv Plus',city:{kk:'Астана',ru:'Астана',en:'Astana'},directions:{kk:['Инсульттан оңалту','Аурулардан оңалту','Жарақаттан оңалту','Мүгедек оңалтуы','Балаларды оңалту','ДЦП','Аутизм'],ru:['После инсульта','После болезней','После травм/ДТП','Реабилитация инвалидов','Реабилитация детей','ДЦП','Аутизм'],en:['Post-stroke','Post-illness','Post-injury','Disability rehab','Children rehab','CP','Autism']},phone:'+77064188246',free:false,icon:'🏢',address:'Астана, пр. Туран, 59/2, 1-3 этаж',note:{kk:'Кешенді реабилитация',ru:'Комплексная реабилитация',en:'Complex rehabilitation'}},
{name:'Erekshe Analar',city:{kk:'Астана',ru:'Астана',en:'Astana'},directions:{kk:['ДЦП','Аутизм'],ru:['Реабилитация при ДЦП','Реабилитация при аутизме'],en:['CP','Autism']},phone:'+77053089733',free:false,icon:'🏢',address:'Астана, ул. Каныш Сатпаев, 23/1',note:{kk:'Ерекше балалар орталығы',ru:'Центр для особых детей',en:'Special children center'}},
{name:'Sau Jer Clinic',city:{kk:'Астана',ru:'Астана',en:'Astana'},directions:{kk:['Инсульттан оңалту','Аурулардан оңалту','Жарақаттан оңалту','Мүгедек оңалтуы','Тәуелділіктен оңалту','Балаларды оңалту','ДЦП','Аутизм'],ru:['После инсульта','После болезней','После травм/ДТП','Реабилитация инвалидов','Реабилитация зависимых','Реабилитация детей','ДЦП','Аутизм'],en:['Post-stroke','Post-illness','Post-injury','Disability rehab','Addiction rehab','Children rehab','CP','Autism']},phone:'+77777066650',free:false,icon:'🏢',address:'Астана, БЦ 7 Континент, ул. Кенесары, 40, 18 этаж',note:{kk:'Кешенді реабилитация',ru:'Комплексная реабилитация',en:'Complex rehabilitation'}},
{name:'Komeq Relife',city:{kk:'Астана',ru:'Астана',en:'Astana'},directions:{kk:['Инсульттан оңалту','Аурулардан оңалту','Жарақаттан оңалту','Мүгедек оңалтуы','Балаларды оңалту','ДЦП','Аутизм'],ru:['После инсульта','После болезней','После травм/ДТП','Реабилитация инвалидов','Реабилитация детей','ДЦП','Аутизм'],en:['Post-stroke','Post-illness','Post-injury','Disability rehab','Children rehab','CP','Autism']},phone:'+77051655525',free:false,icon:'🏢',address:'Астана, ул. Аманжол Болекпаев, 1',note:{kk:'Реабилитациялық орталық',ru:'Реабилитационный центр',en:'Rehabilitation center'}},
{name:'National Medical Park',city:{kk:'Астана',ru:'Астана',en:'Astana'},directions:{kk:['Инсульттан оңалту','Аурулардан оңалту','Жарақаттан оңалту','ДЦП'],ru:['После инсульта','После болезней','После травм/ДТП','ДЦП'],en:['Post-stroke','Post-illness','Post-injury','CP']},phone:'+77711031152',free:false,icon:'🏢',address:'Астана, ул. Ахмет Байтурсынулы, 63',note:{kk:'Медициналық орталық',ru:'Медицинский центр',en:'Medical center'}},
{name:'SAmed Clinic',city:{kk:'Астана',ru:'Астана',en:'Astana'},directions:{kk:['Инсульттан оңалту','Аурулардан оңалту','Жарақаттан оңалту','Мүгедек оңалтуы','Балаларды оңалту','ДЦП'],ru:['После инсульта','После болезней','После травм/ДТП','Реабилитация инвалидов','Реабилитация детей','ДЦП'],en:['Post-stroke','Post-illness','Post-injury','Disability rehab','Children rehab','CP']},phone:'+77711240202',free:false,icon:'🏢',address:'Астана, ул. Ахмет Байтурсынулы, 41',note:{kk:'Медициналық клиника',ru:'Медицинская клиника',en:'Medical clinic'}},
{name:"Sa'bi health",city:{kk:'Астана',ru:'Астана',en:'Astana'},directions:{kk:['ДЦП'],ru:['Реабилитация при ДЦП'],en:['CP rehabilitation']},phone:'+77074999102',free:false,icon:'🏢',address:'Астана, ул. Алихан Бокейхан, 25а, цокольный этаж, НП: 17',note:{kk:'ДЦП орталығы',ru:'Центр ДЦП',en:'CP center'}},
{name:'Dr.johnson_astana',city:{kk:'Астана',ru:'Астана',en:'Astana'},directions:{kk:['Инсульттан оңалту','Аурулардан оңалту','Жарақаттан оңалту','ДЦП'],ru:['После инсульта','После болезней','После травм/ДТП','ДЦП'],en:['Post-stroke','Post-illness','Post-injury','CP']},phone:'+77477455822',free:false,icon:'🏢',address:'Астана, пр. Ракымжан Кошкарбаев, 34, офис 34, 9 этаж',note:{kk:'Реабилитациялық орталық',ru:'Реабилитационный центр',en:'Rehabilitation center'}},
],
mangystau: [
{name:'Ерекше Әлем',city:{kk:'Ақтау',ru:'Актау',en:'Aktau'},directions:{kk:['Аутизм','Бейімделу','Әлеуметтену'],ru:['Аутизм','Адаптация','Социализация'],en:['Autism','Adaptation','Socialization']},phone:'+77012823442',free:false,icon:'🏢',address:'Актау, 15-й микрорайон, 56а, ЖК Таншолпан',note:{kk:'Аутизм спектрі бар балаларды бейімдеу орталығы',ru:'Центр адаптации детей с аутизмом',en:'Autism adaptation center'}},
{name:'Қамкорлық (Актау)',city:{kk:'Ақтау',ru:'Актау',en:'Aktau'},directions:{kk:['Инсульттан оңалту','ДЦП','Аутизм','Балаларды оңалту'],ru:['После инсульта','ДЦП','Аутизм','Реабилитация детей'],en:['Post-stroke','CP','Autism','Children rehab']},phone:'+7(7292)210202',free:true,icon:'🏥',address:'Актау, 26-й микрорайон, 51',note:{kk:'Ерте интервенция орталығы',ru:'Центр раннего вмешательства',en:'Early intervention center'}},
{name:'Акерке',city:{kk:'Ақтау',ru:'Актау',en:'Aktau'},directions:{kk:['Инсульттан оңалту','Жарақаттан оңалту','ДЦП','Балаларды оңалту'],ru:['После инсульта','После травм','ДЦП','Реабилитация детей'],en:['Post-stroke','Post-injury','CP','Children rehab']},phone:'+77084309277',free:false,icon:'🏢',address:'Актау, микрорайон Шыгыс 1, 287',note:{kk:'Реабилитациялық орталық',ru:'Реабилитационный центр',en:'Rehabilitation center'}},
{name:'Сөйлеу әлемі',city:{kk:'Ақтау',ru:'Актау',en:'Aktau'},directions:{kk:['Балаларды оңалту','ДЦП','Аутизм'],ru:['Реабилитация детей','ДЦП','Аутизм'],en:['Children rehab','CP','Autism']},phone:'+77770429702',free:false,icon:'🏢',address:'Актау, 17-й микрорайон, 43',note:{kk:'Балалар орталығы',ru:'Детский центр',en:'Children center'}},
{name:'Kids Balance',city:{kk:'Ақтау',ru:'Актау',en:'Aktau'},directions:{kk:['ДЦП','Аутизм'],ru:['ДЦП','Аутизм'],en:['CP','Autism']},phone:'+77083090719',free:false,icon:'🏢',address:'Актау, 19-й микрорайон, 14',note:{kk:'Балалар реабилитация орталығы',ru:'Детский реабилитационный центр',en:'Children rehabilitation center'}},
],
karagandy: [
{name:"КГУ «Асыл Мирас» Карагандинский",city:{kk:'Қарағанды',ru:'Караганда',en:'Karaganda'},directions:{kk:['Аутизм','РАС'],ru:['Аутизм','РАС'],en:['Autism','ASD']},phone:'+7(7212)256090',free:true,icon:'🏥',address:'Караганда, ул. Аманжолова, 92',note:{kk:'Мемлекеттік орталық',ru:'Государственный центр',en:'State center'}},
{name:'AquaFit',city:{kk:'Қарағанды',ru:'Караганда',en:'Karaganda'},directions:{kk:['Инсульттан оңалту','Аурулардан оңалту','Жарақаттан оңалту','Мүгедек оңалтуы','Балаларды оңалту','ДЦП','Аутизм'],ru:['После инсульта','После болезней','После травм/ДТП','Реабилитация инвалидов','Реабилитация детей','ДЦП','Аутизм'],en:['Post-stroke','Post-illness','Post-injury','Disability rehab','Children rehab','CP','Autism']},phone:'+77011913734',free:false,icon:'🏢',address:'Караганда, пр. Шахтёров, 36/2',note:{kk:'Су реабилитациясы',ru:'Водная реабилитация',en:'Aquatic rehabilitation'}},
{name:'SANAD',city:{kk:'Қарағанды',ru:'Караганда',en:'Karaganda'},directions:{kk:['Инсульттан оңалту','Аурулардан оңалту','Жарақаттан оңалту','Мүгедек оңалтуы'],ru:['После инсульта','После болезней','После травм/ДТП','Реабилитация инвалидов'],en:['Post-stroke','Post-illness','Post-injury','Disability rehab']},phone:'+77765504046',phone2:'+77015425048',free:false,icon:'🏢',address:'Караганда, ул. Аманжолова, 41',note:{kk:'Реабилитациялық орталық. sanadmed.kz',ru:'Реабилитационный центр. sanadmed.kz',en:'Rehabilitation center. sanadmed.kz'}},
{name:'Мерей',city:{kk:'Қарағанды',ru:'Караганда',en:'Karaganda'},directions:{kk:['Инсульттан оңалту','Аурулардан оңалту','Жарақаттан оңалту','Мүгедек оңалтуы','Балаларды оңалту','ДЦП'],ru:['После инсульта','После болезней','После травм/ДТП','Реабилитация инвалидов','Реабилитация детей','ДЦП'],en:['Post-stroke','Post-illness','Post-injury','Disability rehab','Children rehab','CP']},phone:'+7(7212)400200',phone2:'+77009720186',free:false,icon:'🏢',address:'Караганда, пр. Бухар-жырау, 139',note:{kk:'mfmerey.kz',ru:'mfmerey.kz',en:'mfmerey.kz'}},
{name:'Реабилитационный Центр Умит',city:{kk:'Қарағанды',ru:'Караганда',en:'Karaganda'},directions:{kk:['Мүгедек оңалтуы','Балаларды оңалту','ДЦП'],ru:['Реабилитация инвалидов','Реабилитация детей','ДЦП'],en:['Disability rehab','Children rehab','CP']},phone:'+7(7212)438303',free:true,icon:'🏥',address:'Караганда, ул. Аманжолова, 96',note:{kk:'Мемлекеттік орталық',ru:'Государственный центр',en:'State center'}},
{name:'Bala_oksimer',city:{kk:'Қарағанды',ru:'Караганда',en:'Karaganda'},directions:{kk:['Инсульттан оңалту','Мүгедек оңалтуы','Балаларды оңалту','ДЦП','Аутизм'],ru:['После инсульта','Реабилитация инвалидов','Реабилитация детей','ДЦП','Аутизм'],en:['Post-stroke','Disability rehab','Children rehab','CP','Autism']},phone:'+77018903022',free:false,icon:'🏢',address:'Караганда, ЖК Crystal, ул. Таттимбета, 10/14',note:{kk:'Реабилитациялық орталық',ru:'Реабилитационный центр',en:'Rehabilitation center'}},
{name:'Кабинет мануального терапевта Михаила Петровича',city:{kk:'Қарағанды',ru:'Караганда',en:'Karaganda'},directions:{kk:['Инсульттан оңалту','Аурулардан оңалту','Жарақаттан оңалту','Мүгедек оңалтуы','ДЦП'],ru:['После инсульта','После болезней','После травм/ДТП','Реабилитация инвалидов','ДЦП'],en:['Post-stroke','Post-illness','Post-injury','Disability rehab','CP']},phone:'+77751333181',phone2:'+77087196503',free:false,icon:'🏢',address:'Караганда, ул. Ерубаева, 67а, 1 кабинет, 1 этаж',note:{kk:'Мануальды терапевт-реабилитолог',ru:'Мануальный терапевт-реабилитолог',en:'Manual therapist-rehabilitologist'}},
],
kyzylorda: [
{name:"КГУ «Асыл Мирас» Кызылорда",city:{kk:'Қызылорда',ru:'Кызылорда',en:'Kyzylorda'},directions:{kk:['Аутизм','РАС'],ru:['Аутизм','РАС'],en:['Autism','ASD']},phone:'+77719934194',phone2:'+7(7242)264488',free:true,icon:'🏥',address:'Кызылорда, ул. Байсеитовой, 113а',note:{kk:'2015 жылдан бері жұмыс істейді',ru:'Работает с 2015 г.',en:'Operating since 2015'}},
],
turkestan: [
{name:"КГУ «Асыл Мирас» Шымкент",city:{kk:'Шымкент',ru:'Шымкент',en:'Shymkent'},directions:{kk:['РАС','Аутизм','Сөйлеу','Коррекция'],ru:['РАС','Аутизм','Речь','Коррекция'],en:['ASD','Autism','Speech','Correction']},free:true,icon:'🏥',address:'Шымкент, ул. Дулати, 36',note:{kk:'Мемлекеттік орталық',ru:'Государственный центр',en:'State center'}},
{name:'Алинур',city:{kk:'Шымкент',ru:'Шымкент',en:'Shymkent'},directions:{kk:['Инсульттан оңалту','Аурулардан оңалту','Жарақаттан оңалту','Мүгедек оңалтуы','Балаларды оңалту','ДЦП','Аутизм'],ru:['После инсульта','После болезней','После травм/ДТП','Реабилитация инвалидов','Реабилитация детей','ДЦП','Аутизм'],en:['Post-stroke','Post-illness','Post-injury','Disability rehab','Children rehab','CP','Autism']},phone:'+77783114559',free:false,icon:'🏢',address:'Шымкент, мкр. Нурсат, 105',note:{kk:'Реабилитациялық орталық',ru:'Реабилитационный центр',en:'Rehabilitation center'}},
{name:'№14 Емдеу орталығы',city:{kk:'Шымкент',ru:'Шымкент',en:'Shymkent'},directions:{kk:['ДЦП'],ru:['Реабилитация при ДЦП'],en:['CP rehabilitation']},phone:'+77052322616',phone2:'+77754581945',free:false,icon:'🏢',address:'Шымкент, ул. Аршалы, 96а, 1 этаж',note:{kk:'ДЦП орталығы',ru:'Центр ДЦП',en:'CP center'}},
{name:'Aqjan',city:{kk:'Шымкент',ru:'Шымкент',en:'Shymkent'},directions:{kk:['Инсульттан оңалту','Аурулардан оңалту','Жарақаттан оңалту','Мүгедек оңалтуы','Тәуелділіктен оңалту','Балаларды оңалту','ДЦП','Аутизм'],ru:['После инсульта','После болезней','После травм/ДТП','Реабилитация инвалидов','Реабилитация зависимых','Реабилитация детей','ДЦП','Аутизм'],en:['Post-stroke','Post-illness','Post-injury','Disability rehab','Addiction rehab','Children rehab','CP','Autism']},phone:'+77758967356',phone2:'+77017571283',free:false,icon:'🏢',address:'Шымкент, пр. Нурсултана Назарбаева, 683Б, 1-2 этаж',note:{kk:'Кешенді реабилитация',ru:'Комплексная реабилитация',en:'Complex rehabilitation'}},
{name:'Атамекен',city:{kk:'Шымкент',ru:'Шымкент',en:'Shymkent'},directions:{kk:['Мүгедек оңалтуы','Балаларды оңалту','ДЦП','Аутизм'],ru:['Реабилитация инвалидов','Реабилитация детей','ДЦП','Аутизм'],en:['Disability rehab','Children rehab','CP','Autism']},phone:'+77010990111',phone2:'+77781563426',free:false,icon:'🏢',address:'Шымкент, мкр. Астана, 102',note:{kk:'Реабилитациялық орталық',ru:'Реабилитационный центр',en:'Rehabilitation center'}},
{name:'Мейрим',city:{kk:'Шымкент',ru:'Шымкент',en:'Shymkent'},directions:{kk:['Аурулардан оңалту','Жарақаттан оңалту','Мүгедек оңалтуы','Балаларды оңалту','ДЦП','Аутизм'],ru:['После болезней','После травм/ДТП','Реабилитация инвалидов','Реабилитация детей','ДЦП','Аутизм'],en:['Post-illness','Post-injury','Disability rehab','Children rehab','CP','Autism']},phone:'+7(7252)530540',free:false,icon:'🏢',address:'Шымкент, ул. Дулати, 11, 1 этаж',note:{kk:'Реабилитациялық орталық',ru:'Реабилитационный центр',en:'Rehabilitation center'}},
{name:'Turlan Medical',city:{kk:'Шымкент',ru:'Шымкент',en:'Shymkent'},directions:{kk:['Инсульттан оңалту','Аурулардан оңалту','Жарақаттан оңалту','Мүгедек оңалтуы','Тәуелділіктен оңалту','Балаларды оңалту','ДЦП','Аутизм'],ru:['После инсульта','После болезней','После травм/ДТП','Реабилитация инвалидов','Реабилитация зависимых','Реабилитация детей','ДЦП','Аутизм'],en:['Post-stroke','Post-illness','Post-injury','Disability rehab','Addiction rehab','Children rehab','CP','Autism']},phone:'+7(7252)770867',phone2:'+77052640725',free:false,icon:'🏢',address:'Шымкент, ул. Мориса Тореза, 24Б',note:{kk:'Кешенді реабилитация',ru:'Комплексная реабилитация',en:'Complex rehabilitation'}},
{name:'Kids mozaika',city:{kk:'Шымкент',ru:'Шымкент',en:'Shymkent'},directions:{kk:['ДЦП','Аутизм'],ru:['Реабилитация при ДЦП','Реабилитация при аутизме'],en:['CP','Autism']},phone:'+77013130255',phone2:'+77085796069',free:false,icon:'🏢',address:'Шымкент, ул. Анарова, 8/4, 1-2 этаж',note:{kk:'Балалар орталығы',ru:'Детский центр',en:'Children center'}},
{name:'Bobek',city:{kk:'Шымкент',ru:'Шымкент',en:'Shymkent'},directions:{kk:['Инсульттан оңалту','Аурулардан оңалту','Мүгедек оңалтуы','Балаларды оңалту','ДЦП','Аутизм'],ru:['После инсульта','После болезней','Реабилитация инвалидов','Реабилитация детей','ДЦП','Аутизм'],en:['Post-stroke','Post-illness','Disability rehab','Children rehab','CP','Autism']},phone:'+77052377529',phone2:'+77783470008',free:false,icon:'🏢',address:'Шымкент, ул. Мангельдина, 35',note:{kk:'Реабилитациялық орталық',ru:'Реабилитационный центр',en:'Rehabilitation center'}},
{name:'РайМед',city:{kk:'Шымкент',ru:'Шымкент',en:'Shymkent'},directions:{kk:['Инсульттан оңалту','Аурулардан оңалту','Жарақаттан оңалту','Мүгедек оңалтуы'],ru:['После инсульта','После болезней','После травм/ДТП','Реабилитация инвалидов'],en:['Post-stroke','Post-illness','Post-injury','Disability rehab']},phone:'+7(7252)554015',phone2:'+77052421803',free:false,icon:'🏢',address:'Шымкент, ул. Кентарал, 8/2, 1-3 этаж',note:{kk:'Реабилитациялық орталық',ru:'Реабилитационный центр',en:'Rehabilitation center'}},
{name:'Клиника доктора Кравченко',city:{kk:'Шымкент',ru:'Шымкент',en:'Shymkent'},directions:{kk:['Аутизм'],ru:['Реабилитация при аутизме'],en:['Autism rehabilitation']},phone:'+77023399647',phone2:'+77760011836',free:false,icon:'🏢',address:'Шымкент, ул. Адиль Сасбукаева, 96а',note:{kk:'Аутизм орталығы',ru:'Центр аутизма',en:'Autism center'}},
{name:'Клиника Исаева',city:{kk:'Шымкент',ru:'Шымкент',en:'Shymkent'},directions:{kk:['Инсульттан оңалту','Аурулардан оңалту','Жарақаттан оңалту','Мүгедек оңалтуы','Балаларды оңалту','Аутизм'],ru:['После инсульта','После болезней','После травм/ДТП','Реабилитация инвалидов','Реабилитация детей','Аутизм'],en:['Post-stroke','Post-illness','Post-injury','Disability rehab','Children rehab','Autism']},phone:'+77751325409',free:false,icon:'🏢',address:'Шымкент, ул. Утегенова, 48а',note:{kk:'Реабилитациялық клиника',ru:'Реабилитационная клиника',en:'Rehabilitation clinic'}},
{name:'Светлячок',city:{kk:'Шымкент',ru:'Шымкент',en:'Shymkent'},directions:{kk:['Аутизм'],ru:['Реабилитация при аутизме'],en:['Autism rehabilitation']},phone:'+77018660204',free:false,icon:'🏢',address:'Шымкент, пер. Александра Грибоедова, 2',note:{kk:'Психолого-педагогикалық коррекция кабинеті',ru:'Кабинет психолого-педагогической коррекции',en:'Psychological-pedagogical correction center'}},
{name:'Мирас',city:{kk:'Шымкент',ru:'Шымкент',en:'Shymkent'},directions:{kk:['Аутизм'],ru:['Реабилитация при аутизме'],en:['Autism rehabilitation']},phone:'+77718987051',free:false,icon:'🏢',address:'Шымкент, мкр. Восток, 63/3, 1 этаж, правое крыло',note:{kk:'Аутизм орталығы',ru:'Центр аутизма',en:'Autism center'}},
{name:'Zhaina Balakai',city:{kk:'Шымкент',ru:'Шымкент',en:'Shymkent'},directions:{kk:['Аутизм'],ru:['Реабилитация при аутизме'],en:['Autism rehabilitation']},phone:'+77776123570',free:false,icon:'🏢',address:'Шымкент, ул. Назарбекова, 24, 1 этаж',note:{kk:'Аутизм орталығы',ru:'Центр аутизма',en:'Autism center'}},
{name:'Многопрофильная Клиника ТЫНЫҚ',city:{kk:'Шымкент',ru:'Шымкент',en:'Shymkent'},directions:{kk:['Инсульттан оңалту','Аурулардан оңалту','Жарақаттан оңалту','Мүгедек оңалтуы'],ru:['После инсульта','После болезней','После травм/ДТП','Реабилитация инвалидов'],en:['Post-stroke','Post-illness','Post-injury','Disability rehab']},phone:'+77756222112',free:false,icon:'🏢',address:'Шымкент, ул. Рыскулова, 515, 1-5 этаж',note:{kk:'Көпсалалы клиника',ru:'Многопрофильная клиника',en:'Multidisciplinary clinic'}},
{name:'Отбасылық емхана',city:{kk:'Шымкент',ru:'Шымкент',en:'Shymkent'},directions:{kk:['Мүгедек оңалтуы'],ru:['Реабилитация инвалидов'],en:['Disability rehabilitation']},phone:'+77713185436',free:false,icon:'🏢',address:'Шымкент, мкр. Нижний Отырар, 10 ст54',note:{kk:'Отбасылық орталық',ru:'Семейный центр',en:'Family center'}},
{name:'Urker Medical',city:{kk:'Шымкент',ru:'Шымкент',en:'Shymkent'},directions:{kk:['Инсульттан оңалту','Аурулардан оңалту','Жарақаттан оңалту','Мүгедек оңалтуы'],ru:['После инсульта','После болезней','После травм/ДТП','Реабилитация инвалидов'],en:['Post-stroke','Post-illness','Post-injury','Disability rehab']},phone:'+77084221956',free:false,icon:'🏢',address:'Шымкент, ул. Жибек жолы, 22/4, 1-3 этаж',note:{kk:'Медициналық орталық',ru:'Медицинский центр',en:'Medical center'}},
],
zhambyl: [
{name:"КГУ «Асыл Мирас» Тараз",city:{kk:'Тараз',ru:'Тараз',en:'Taraz'},directions:{kk:['РАС','Аутизм','АВА-терапия'],ru:['РАС','Аутизм','АВА-терапия'],en:['ASD','Autism','ABA therapy']},phone:'+7(708)4509675',free:true,icon:'🏥',address:'Тараз, ул. Аскарова, 47',note:{kk:'Желінің 11 орталығының бірі',ru:'Один из 11 центров сети',en:'One of 11 network centers'}},
{name:'SS Life clinic',city:{kk:'Тараз',ru:'Тараз',en:'Taraz'},directions:{kk:['Инсульттан оңалту','Аурулардан оңалту','Жарақаттан оңалту','Мүгедек оңалтуы'],ru:['После инсульта','После болезней','После травм/ДТП','Реабилитация инвалидов'],en:['Post-stroke','Post-illness','Post-injury','Disability rehab']},phone:'+77475059721',free:false,icon:'🏢',address:'Тараз, ул. Ниеткалиева, 11',note:{kk:'Медициналық орталық',ru:'Медицинский центр',en:'Medical center'}},
],
vko: [
{name:'Көмек',city:{kk:'Өскемен',ru:'Усть-Каменогорск',en:'Oskemen'},directions:{kk:['Логопед','Дефектолог','Ерекше балалар'],ru:['Логопед','Дефектолог','Особые дети'],en:['Speech therapist','Special educator','Special needs children']},phone:'+77057418289',free:false,icon:'🏢',address:'Усть-Каменогорск, ул. Тохтарова, 40/1, офис 101',note:{kk:'Тәжірибелі мамандар',ru:'Опытные специалисты',en:'Experienced specialists'}},
],
almaty: [
{name:'ЭМИРМЕД (фил. 1)',city:{kk:'Алматы',ru:'Алматы',en:'Almaty'},directions:{kk:['Инсульттан оңалту','ДЦП','Аутизм','Балаларды оңалту'],ru:['После инсульта','ДЦП','Аутизм','Реабилитация детей'],en:['Post-stroke','CP','Autism','Children rehab']},phone:'+77089113808',free:false,icon:'🏢',address:'Алматы, ул. Нусупбекова, 26/1',note:{kk:'ЭМИРМЕД желісі. 7 филиал бар',ru:'Сеть ЭМИРМЕД. 7 филиалов',en:'EMIRMED network. 7 branches'}},
{name:'ЭМИРМЕД (фил. 2)',city:{kk:'Алматы',ru:'Алматы',en:'Almaty'},directions:{kk:['Инсульттан оңалту','ДЦП','Аутизм'],ru:['После инсульта','ДЦП','Аутизм'],en:['Post-stroke','CP','Autism']},phone:'+77070000103',free:false,icon:'🏢',address:'Алматы, ул. Манаса, 53а',note:{kk:'ЭМИРМЕД желісі',ru:'Сеть ЭМИРМЕД',en:'EMIRMED network'}},
{name:'АҚмед (фил. 1)',city:{kk:'Алматы',ru:'Алматы',en:'Almaty'},directions:{kk:['Инсульттан оңалту','ДЦП','Аутизм','Балаларды оңалту'],ru:['После инсульта','ДЦП','Аутизм','Реабилитация детей'],en:['Post-stroke','CP','Autism','Children rehab']},phone:'+77070000022',free:false,icon:'🏢',address:'Алматы, 8-й микрорайон, 58а',note:{kk:'АҚмед желісі. 2 филиал',ru:'Сеть АКмед. 2 филиала',en:'AKmed network. 2 branches'}},
{name:'Neuroland (фил. 1)',city:{kk:'Алматы',ru:'Алматы',en:'Almaty'},directions:{kk:['Мүгедек оңалтуы','ДЦП','Аутизм'],ru:['Реабилитация инвалидов','ДЦП','Аутизм'],en:['Disability rehab','CP','Autism']},phone:'+77713171718',free:false,icon:'🏢',address:'Алматы, ул. Толе би, 273а блок3, 1 этаж',note:{kk:'Neuroland желісі',ru:'Сеть Neuroland',en:'Neuroland network'}},
{name:'Реацентр Казахстан',city:{kk:'Алматы',ru:'Алматы',en:'Almaty'},directions:{kk:['Аутизм'],ru:['Аутизм'],en:['Autism']},phone:'+77009785151',free:false,icon:'🏢',address:'Алматы, ул. Смайылова, 95/1',note:{kk:'Аутизм реабилитациясы',ru:'Реабилитация при аутизме',en:'Autism rehabilitation'}},
{name:'New Star Clinic',city:{kk:'Алматы',ru:'Алматы',en:'Almaty'},directions:{kk:['Инсульттан оңалту','ДЦП','Аутизм','Балаларды оңалту'],ru:['После инсульта','ДЦП','Аутизм','Реабилитация детей'],en:['Post-stroke','CP','Autism','Children rehab']},phone:'+77071413062',free:false,icon:'🏢',address:'Алматы, 2-й микрорайон, 38в',note:{kk:'Реабилитациялық клиника',ru:'Реабилитационная клиника',en:'Rehabilitation clinic'}},
{name:'Институт неврологии и нейрореабилитации',city:{kk:'Алматы',ru:'Алматы',en:'Almaty'},directions:{kk:['Инсульттан оңалту','ДЦП','Балаларды оңалту'],ru:['После инсульта','ДЦП','Реабилитация детей'],en:['Post-stroke','CP','Children rehab']},phone:'+7(727)3174228',free:false,icon:'🏢',address:'Алматы, ул. Кабанбай батыра, 119',note:{kk:'им. Смагула Кайшибаева',ru:'им. Смагула Кайшибаева',en:'Smagul Kaishibayev Institute'}},
{name:'Тау Сункар (фил. 1)',city:{kk:'Алматы',ru:'Алматы',en:'Almaty'},directions:{kk:['Инсульттан оңалту','ДЦП','Балаларды оңалту'],ru:['После инсульта','ДЦП','Реабилитация детей'],en:['Post-stroke','CP','Children rehab']},phone:'+7(727)2430951',free:false,icon:'🏢',address:'Алматы, микрорайон Аксай-4, 59',note:{kk:'Тау Сункар желісі. 4 филиал',ru:'Сеть Тау Сункар. 4 филиала',en:'Tau Sunkar network. 4 branches'}},
{name:'Центр доктора Бубновского (Алматы)',city:{kk:'Алматы',ru:'Алматы',en:'Almaty'},directions:{kk:['Инсульттан оңалту','ДЦП','Аутизм','Балаларды оңалту'],ru:['После инсульта','ДЦП','Аутизм','Реабилитация детей'],en:['Post-stroke','CP','Autism','Children rehab']},phone:'+77072977550',free:false,icon:'🏢',address:'Алматы, 2-й микрорайон, 28а',note:{kk:'Бубновский орталығы. 2 филиал',ru:'Центр Бубновского. 2 филиала',en:'Bubnovsky center. 2 branches'}},
{name:'AsfaMedClinic',city:{kk:'Алматы',ru:'Алматы',en:'Almaty'},directions:{kk:['Инсульттан оңалту','ДЦП','Аутизм'],ru:['После инсульта','ДЦП','Аутизм'],en:['Post-stroke','CP','Autism']},phone:'+77071302232',free:false,icon:'🏢',address:'Алматы, ул. Беделбай, 14',note:{kk:'Медициналық клиника',ru:'Медицинская клиника',en:'Medical clinic'}},
{name:'Rekinetix',city:{kk:'Алматы',ru:'Алматы',en:'Almaty'},directions:{kk:['Инсульттан оңалту','ДЦП','Балаларды оңалту'],ru:['После инсульта','ДЦП','Реабилитация детей'],en:['Post-stroke','CP','Children rehab']},phone:'+77473449107',free:false,icon:'🏢',address:'Алматы, ул. Жарокова, 20',note:{kk:'2 филиал бар',ru:'2 филиала',en:'2 branches'}},
{name:'Kindermedclinic',city:{kk:'Алматы',ru:'Алматы',en:'Almaty'},directions:{kk:['Инсульттан оңалту','ДЦП','Балаларды оңалту'],ru:['После инсульта','ДЦП','Реабилитация детей'],en:['Post-stroke','CP','Children rehab']},phone:'+77757523658',free:false,icon:'🏢',address:'Алматы, ул. Наурызбай батыра, 99/1',note:{kk:'2 филиал бар',ru:'2 филиала',en:'2 branches'}},
{name:'Балбулак',city:{kk:'Алматы',ru:'Алматы',en:'Almaty'},directions:{kk:['ДЦП','Аутизм'],ru:['ДЦП','Аутизм'],en:['CP','Autism']},phone:'+7(727)2716418',free:false,icon:'🏢',address:'Алматы, ул. Керей-Жанибек хандар, 440',note:{kk:'Балалар оңалту орталығы',ru:'Детский реабилитационный центр',en:'Children rehabilitation center'}},
{name:'Saqtasyn',city:{kk:'Алматы',ru:'Алматы',en:'Almaty'},directions:{kk:['Инсульттан оңалту','ДЦП','Балаларды оңалту'],ru:['После инсульта','ДЦП','Реабилитация детей'],en:['Post-stroke','CP','Children rehab']},phone:'+77772580303',free:false,icon:'🏢',address:'Алматы, проспект Аль-Фараби, 128/8',note:{kk:'Медициналық орталық',ru:'Медицинский центр',en:'Medical center'}},
{name:'Республиканский протезно-ортопедический центр',city:{kk:'Алматы',ru:'Алматы',en:'Almaty'},directions:{kk:['Инсульттан оңалту','ДЦП','Балаларды оңалту'],ru:['После инсульта','ДЦП','Реабилитация детей'],en:['Post-stroke','CP','Children rehab']},phone:'+7(727)2793087',free:true,icon:'🏥',address:'Алматы, проспект Жибек Жолы, 112',note:{kk:'Мемлекеттік протездік-ортопедиялық орталық',ru:'Государственный протезно-ортопедический центр',en:'State prosthetic-orthopedic center'}},
{name:'Городской детский реабилитационный центр',city:{kk:'Алматы',ru:'Алматы',en:'Almaty'},directions:{kk:['ДЦП','Аутизм','Жарақаттан оңалту'],ru:['ДЦП','Аутизм','После травм'],en:['CP','Autism','Post-injury']},phone:'+7(727)2689828',free:true,icon:'🏥',address:'Алматы, Аксай 2 микрорайон, 41а',note:{kk:'Мемлекеттік балалар оңалту орталығы',ru:'Государственный детский реабилитационный центр',en:'State children rehabilitation center'}},
{name:'Neuro Rehab Clinic',city:{kk:'Алматы',ru:'Алматы',en:'Almaty'},directions:{kk:['Инсульттан оңалту','ДЦП','Балаларды оңалту'],ru:['После инсульта','ДЦП','Реабилитация детей'],en:['Post-stroke','CP','Children rehab']},phone:'+77085550848',free:false,icon:'🏢',address:'Алматы, проспект Гагарина, 46',note:{kk:'Нейрологиялық реабилитация орталығы',ru:'Центр неврологической реабилитации',en:'Neurological rehabilitation center'}},
{name:'Центр ранней детской реабилитации',city:{kk:'Алматы',ru:'Алматы',en:'Almaty'},directions:{kk:['ДЦП','Аутизм'],ru:['ДЦП','Аутизм'],en:['CP','Autism']},phone:'+7(727)2680900',free:true,icon:'🏥',address:'Алматы, 12-й микрорайон, 17',note:{kk:'Мемлекеттік ерте оңалту орталығы',ru:'Государственный центр ранней реабилитации',en:'State early rehabilitation center'}},
{name:'ЭЛИФАЙ',city:{kk:'Алматы',ru:'Алматы',en:'Almaty'},directions:{kk:['Инсульттан оңалту','ДЦП','Аутизм','Балаларды оңалту'],ru:['После инсульта','ДЦП','Аутизм','Реабилитация детей'],en:['Post-stroke','CP','Autism','Children rehab']},phone:'+77070000103',free:false,icon:'🏢',address:'Алматы, проспект Серкебаева, 79',note:{kk:'5+ филиал Алматыда',ru:'5+ филиалов в Алматы',en:'5+ branches in Almaty'}},
{name:'Verum',city:{kk:'Алматы',ru:'Алматы',en:'Almaty'},directions:{kk:['ДЦП','Аутизм'],ru:['ДЦП','Аутизм'],en:['CP','Autism']},phone:'+77001721991',free:false,icon:'🏢',address:'Алматы, микрорайон Коктем-1, 50',note:{kk:'Балалар оңалту орталығы',ru:'Детский реабилитационный центр',en:'Children rehabilitation center'}},
{name:'Neurolab',city:{kk:'Алматы',ru:'Алматы',en:'Almaty'},directions:{kk:['Инсульттан оңалту','ДЦП','Аутизм','Балаларды оңалту'],ru:['После инсульта','ДЦП','Аутизм','Реабилитация детей'],en:['Post-stroke','CP','Autism','Children rehab']},phone:'+77026917014',free:false,icon:'🏢',address:'Алматы, микрорайон Жетысу-2, 70Б',note:{kk:'Кешенді реабилитация',ru:'Комплексная реабилитация',en:'Complex rehabilitation'}},
{name:'Мейiрiм (Алматы)',city:{kk:'Алматы',ru:'Алматы',en:'Almaty'},directions:{kk:['Мүгедек оңалтуы','ДЦП','Аутизм','Балаларды оңалту'],ru:['Реабилитация инвалидов','ДЦП','Аутизм','Реабилитация детей'],en:['Disability rehab','CP','Autism','Children rehab']},phone:'+77081313508',free:false,icon:'🏢',address:'Алматы, ул. Акан Серы, 154',note:{kk:'Медициналық орталық',ru:'Медицинский центр',en:'Medical center'}},
{name:'Shipa Clinic',city:{kk:'Алматы',ru:'Алматы',en:'Almaty'},directions:{kk:['Инсульттан оңалту','ДЦП','Аутизм'],ru:['После инсульта','ДЦП','Аутизм'],en:['Post-stroke','CP','Autism']},phone:'+77001030005',free:false,icon:'🏢',address:'Алматы, ул. Кабдолова, 16',note:{kk:'2 филиал бар',ru:'2 филиала',en:'2 branches'}},
{name:'Rehab Team',city:{kk:'Алматы',ru:'Алматы',en:'Almaty'},directions:{kk:['Мүгедек оңалтуы','ДЦП','Аутизм','Балаларды оңалту'],ru:['Реабилитация инвалидов','ДЦП','Аутизм','Реабилитация детей'],en:['Disability rehab','CP','Autism','Children rehab']},phone:'+77771088989',free:false,icon:'🏢',address:'Алматы, ул. Жарокова, 24',note:{kk:'Оңалту тобы',ru:'Команда реабилитологов',en:'Rehabilitation team'}},
{name:'ReNeuro',city:{kk:'Алматы',ru:'Алматы',en:'Almaty'},directions:{kk:['Инсульттан оңалту','ДЦП','Аутизм','Балаларды оңалту'],ru:['После инсульта','ДЦП','Аутизм','Реабилитация детей'],en:['Post-stroke','CP','Autism','Children rehab']},phone:'+7(727)3573080',free:false,icon:'🏢',address:'Алматы, ул. Макатаева, 47',note:{kk:'БЦ Партнер',ru:'БЦ Партнер',en:'BC Partner'}},
{name:'BabySpa',city:{kk:'Алматы',ru:'Алматы',en:'Almaty'},directions:{kk:['ДЦП'],ru:['ДЦП'],en:['CP']},phone:'+77086722136',free:false,icon:'🏢',address:'Алматы, ул. Гоголя, 223',note:{kk:'Балалар реабилитация орталығы',ru:'Детский реабилитационный центр',en:'Children rehabilitation center'}},
{name:'Dan Health & Life',city:{kk:'Алматы',ru:'Алматы',en:'Almaty'},directions:{kk:['Инсульттан оңалту','ДЦП','Балаларды оңалту'],ru:['После инсульта','ДЦП','Реабилитация детей'],en:['Post-stroke','CP','Children rehab']},phone:'+77017728372',free:false,icon:'🏢',address:'Алматы, ул. Муратбаева, 62',note:{kk:'Реабилитациялық орталық',ru:'Реабилитационный центр',en:'Rehabilitation center'}},
{name:'International Marmara Academy',city:{kk:'Алматы',ru:'Алматы',en:'Almaty'},directions:{kk:['ДЦП','Аутизм'],ru:['ДЦП','Аутизм'],en:['CP','Autism']},phone:'+77071759545',free:false,icon:'🏢',address:'Алматы, ул. Майкы Би, 2',note:{kk:'Халықаралық академия',ru:'Международная академия',en:'International academy'}},
{name:'Biz Birgemiz',city:{kk:'Алматы',ru:'Алматы',en:'Almaty'},directions:{kk:['Инсульттан оңалту','ДЦП','Аутизм','Балаларды оңалту'],ru:['После инсульта','ДЦП','Аутизм','Реабилитация детей'],en:['Post-stroke','CP','Autism','Children rehab']},phone:'+77772333903',free:false,icon:'🏢',address:'Алматы, ул. Молдагалиева, 20/16, цокольный этаж',note:{kk:'Реабилитациялық орталық',ru:'Реабилитационный центр',en:'Rehabilitation center'}},
{name:'Вместе к цели',city:{kk:'Алматы',ru:'Алматы',en:'Almaty'},directions:{kk:['ДЦП'],ru:['ДЦП'],en:['CP']},phone:'+77472518840',free:false,icon:'🏢',address:'Алматы, ул. Сулейменова, 26в',note:{kk:'ДЦП реабилитациясы',ru:'Реабилитация при ДЦП',en:'CP rehabilitation'}},
{name:'Alash expert clinic',city:{kk:'Алматы',ru:'Алматы',en:'Almaty'},directions:{kk:['Инсульттан оңалту','ДЦП','Аутизм','Балаларды оңалту'],ru:['После инсульта','ДЦП','Аутизм','Реабилитация детей'],en:['Post-stroke','CP','Autism','Children rehab']},phone:'+77009990103',free:false,icon:'🏢',address:'Алматы, проспект Серкебаева, 81',note:{kk:'Медициналық клиника',ru:'Медицинская клиника',en:'Medical clinic'}},
],
};
 
function renderKazakhstanMap(container, userCity) {
container.innerHTML = '';

const REGION_COORDS = {
  'zko': [51.2333, 51.3667],
  'atyrau': [47.1167, 51.8833],
  'mangystau': [43.65, 51.1833],
  'aktobe': [50.2833, 57.1667],
  'kostanay': [53.2167, 63.6333],
  'nko': [54.8667, 69.1333],
  'akmola': [53.2833, 69.3833],
  'astana': [51.18, 71.446],
  'pavlodar': [52.2833, 76.9667],
  'vko': [49.95, 82.6167],
  'karagandy': [49.8167, 73.0667],
  'kyzylorda': [44.85, 65.5],
  'turkestan': [43.2972, 68.2722],
  'zhambyl': [42.9, 71.3833],
  'almaty': [43.25, 76.95]
};

// Find user region
const userReg = KZ_REGIONS.find(r => {
  const cap = (r.cap[LANG]||r.cap.kk).toLowerCase();
  const city = (userCity||'').toLowerCase();
  return city.length > 2 && (city.slice(0,4)===cap.slice(0,4) || cap.includes(city.slice(0,4)));
});

// ── WRAPPER ──
const wrap = document.createElement('div');
wrap.style.cssText = 'display:flex;flex-direction:column;gap:16px';

// ── HEADER ──
const hdr = document.createElement('div');
hdr.style.cssText = 'background:linear-gradient(135deg,var(--g1),var(--g2));border-radius:22px;padding:18px 26px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px';
hdr.innerHTML = `<div>
  <div style="font-family:'Inter',sans-serif;font-size:18px;font-weight:900;color:#fff">${t('mapTitle')}</div>
  <div style="font-size:11px;color:rgba(255,255,255,.72);margin-top:2px">${t('mapSub')}</div>
</div>
${userReg ? `<div style="background:rgba(255,255,255,.18);border-radius:50px;padding:6px 16px;font-size:12px;font-weight:700;color:#fff;display:flex;align-items:center;gap:6px">
  <span>📍</span><span>${t('mapYours')}: ${userReg.cap[LANG]||userReg.cap.kk}</span>
</div>` : ''}`;
wrap.appendChild(hdr);

// ── YANDEX MAP CARD ──
const mapCard = document.createElement('div');
mapCard.style.cssText = 'background:#fff;border-radius:22px;border:1.5px solid var(--border);overflow:hidden;box-shadow:0 6px 32px rgba(212,104,122,.11)';

const mapHint = document.createElement('div');
mapHint.style.cssText = 'padding:10px 20px;border-bottom:1px solid var(--border);font-size:12px;color:var(--text3);display:flex;align-items:center;gap:8px;background:var(--g5);min-height:40px';
mapHint.innerHTML = '<span style="font-size:15px;flex-shrink:0">🗺️</span><span id="kz-map-hint-text" style="flex:1;line-height:1.4">' + (LANG==='kk'?'Төмендегі клиника карточкасын басып картада қараңыз':LANG==='en'?'Click a clinic card below to view its location on the map':'Нажмите на карточку клиники ниже, чтобы показать её на карте') + '</span>';
mapCard.appendChild(mapHint);

const mapDiv = document.createElement('div');
const mapId = 'ymaps-' + Date.now();
mapDiv.id = mapId;
mapDiv.style.cssText = 'width:100%;height:500px';
mapCard.appendChild(mapDiv);
wrap.appendChild(mapCard);

// ── REGION GRID ──
const regionSection = document.createElement('div');
regionSection.style.cssText = 'background:#fff;border-radius:22px;border:1.5px solid var(--border);padding:20px 22px;box-shadow:0 6px 32px rgba(212,104,122,.11)';

const regionTitle = document.createElement('div');
regionTitle.style.cssText = "font-family:'Inter',sans-serif;font-weight:900;font-size:15px;color:var(--text);margin-bottom:14px;display:flex;align-items:center;gap:8px";
regionTitle.innerHTML = '<span style="font-size:18px">🏥</span>' + t('mapRegions');
regionSection.appendChild(regionTitle);

const grd = document.createElement('div');
grd.style.cssText = 'display:grid;grid-template-columns:repeat(4,1fr);gap:8px';

KZ_REGIONS.forEach(region => {
  const fc = PIN_C[region.pin];
  const isUser = userReg && userReg.id === region.id;
  const card = document.createElement('div');
  card.id = 'rc-' + region.id;
  card.style.cssText = `padding:10px 12px;border-radius:12px;border:1.5px solid var(--border);cursor:pointer;background:${isUser?'var(--g4)':'#fff'};transition:all .15s;`;
  const capName = region.cap[LANG]||region.cap.kk;
  card.innerHTML = `<div style="display:flex;align-items:center;gap:6px;margin-bottom:4px">
    <span style="font-size:11px;font-weight:800;color:var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${capName}</span>
    ${isUser?`<span style="font-size:8px;background:var(--g1);color:#fff;border-radius:4px;padding:1px 5px;font-weight:700;flex-shrink:0">📍</span>`:''}
  </div>`;
  card.addEventListener('mouseenter', () => { if(!card.dataset.sel){ card.style.borderColor='var(--g1)'; card.style.background='var(--g4)'; } });
  card.addEventListener('mouseleave', () => { if(!card.dataset.sel){ card.style.borderColor='var(--border)'; card.style.background=isUser?'var(--g4)':'#fff'; } });
  card.addEventListener('click', () => selectRegion(region.id));
  grd.appendChild(card);
});

regionSection.appendChild(grd);
wrap.appendChild(regionSection);


// ── 2GIS NOTE ──
const gisNote = document.createElement('div');
gisNote.style.cssText = 'display:flex;align-items:center;gap:10px;padding:12px 16px;background:var(--g5);border-radius:14px;border:1px solid var(--border);font-size:11px;color:var(--text3);margin-top:8px';
gisNote.innerHTML = '<span style="font-size:16px;flex-shrink:0">🗺️</span><span>'
  + (LANG==='kk'
    ? 'Барлық контактілер мен мекенжайлар <a href="https://2gis.kz" target="_blank" style="color:var(--g1);font-weight:700;text-decoration:none">2gis.kz</a> сайтынан алынған. Ақпарат 22.03.2026 жағдайы бойынша өзекті және уақыт өте келе өзгеруі мүмкін.'
    : LANG==='en'
    ? 'All contacts and addresses are sourced from <a href="https://2gis.kz" target="_blank" style="color:var(--g1);font-weight:700;text-decoration:none">2gis.kz</a>. Information is current as of 22.03.2026 and may change over time.'
    : 'Все контакты и адреса взяты с <a href="https://2gis.kz" target="_blank" style="color:var(--g1);font-weight:700;text-decoration:none">2gis.kz</a>. Информация актуальна по состоянию на 22.03.2026 и может изменяться со временем.')
  + '</span>';
wrap.appendChild(gisNote);

// ── DETAIL PANEL (shown when region selected) ──
const dp = document.createElement('div');
dp.id = 'kz-dp';
dp.style.cssText = 'display:none';
wrap.appendChild(dp);

container.appendChild(wrap);

// ── SELECT / DESELECT REGION ──
let selId = null;
function selectRegion(id) {
  // Deselect previous
  if(selId) {
    const prevCard = document.getElementById('rc-' + selId);
    if(prevCard) { delete prevCard.dataset.sel; const prevReg = KZ_REGIONS.find(r=>r.id===selId); const isU = userReg&&userReg.id===selId; prevCard.style.borderColor='var(--border)'; prevCard.style.background=isU?'var(--g4)':'#fff'; prevCard.style.boxShadow='none'; }
  }
  if(id === selId) { selId=null; dp.style.display='none'; return; }
  selId = id;
  const card = document.getElementById('rc-' + id);
  const region = KZ_REGIONS.find(r=>r.id===id);
  const fc = PIN_C[region.pin];
  if(card) { card.dataset.sel='1'; card.style.borderColor='var(--g1)'; card.style.background='var(--g4)'; card.style.boxShadow='0 0 0 3px rgba(212,104,122,.25)'; }
  showDetail(region);
  // Pan JS API map to region
  if(window['_ymapInst_' + mapId] && REGION_COORDS[id]) {
    window['_ymapInst_' + mapId].setCenter(REGION_COORDS[id], 8, {duration: 400});
  }
  // Pan iframe map to region
  const coords = REGION_COORDS[id];
  if(coords) {
    const iframeEl = document.querySelector('#' + mapId + ' iframe');
    if(iframeEl) {
      iframeEl.src = 'https://yandex.ru/map-widget/v1/?ll=' + coords[1] + '%2C' + coords[0] + '&z=9&l=map&lang=ru_RU&scroll=true';
    }
  }
}

// ── SHOW REGION DETAIL ──
function showDetail(region) {
  const fc = PIN_C[region.pin];
  const name = region.name[LANG]||region.name.kk;
  const cap = region.cap[LANG]||region.cap.kk;
  const desc = region.desc[LANG]||region.desc.kk;
  dp.style.display = 'block';
  dp.innerHTML = '';
  dp.style.cssText = 'background:#fff;border-radius:22px;border:1.5px solid var(--border);padding:22px 24px;box-shadow:0 6px 32px rgba(212,104,122,.11)';

  // Header row
  const headerDiv = document.createElement('div');
  headerDiv.style.cssText = 'margin-bottom:18px';
  headerDiv.innerHTML = `<div style="display:flex;align-items:flex-start;gap:16px;flex-wrap:wrap">
    <div style="flex:1;min-width:220px">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px">
        <div style="width:46px;height:46px;border-radius:14px;background:${fc}18;border:2px solid ${fc};display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0">&#128205;</div>
        <div style="flex:1">
          <div style="font-family:'Inter',sans-serif;font-weight:900;font-size:16px;color:var(--text)">${name}</div>
          <div style="font-size:12px;color:var(--text3);margin-top:2px">${cap}</div>
        </div>
        <button id="kz-back" style="padding:7px 18px;border-radius:50px;border:1.5px solid var(--border);background:#fff;font-size:12px;font-weight:700;cursor:pointer;color:var(--text2);font-family:'Inter',sans-serif">${t('mapBack')}</button>
      </div>
    </div>
  </div>`;
  dp.appendChild(headerDiv);

  document.getElementById('kz-back').onclick = () => {
    selId = null; dp.style.display = 'none';
    const card = document.getElementById('rc-' + region.id);
    if(card) { delete card.dataset.sel; const isU = userReg&&userReg.id===region.id; card.style.borderColor='var(--border)'; card.style.background=isU?'var(--g4)':'#fff'; card.style.boxShadow='none'; }
  };

  // ── Shared map panel at the top ──
  // (removed — clinic clicks now update the main map above)

  // Clinics
  const clinics = KZ_CLINICS[region.id] || [];
  if(clinics.length > 0) {
    const secTitle = document.createElement('div');
    secTitle.style.cssText = "font-family:'Inter',sans-serif;font-weight:900;font-size:15px;color:var(--text);margin-bottom:14px;display:flex;align-items:center;gap:8px";
    secTitle.innerHTML = '<span style="font-size:18px">&#127973;</span> ' + (LANG==='kk'?'Орталықтар':LANG==='ru'?'Центры помощи':'Help Centers');
    dp.appendChild(secTitle);
    const grid = document.createElement('div');
    grid.style.cssText = 'display:grid;grid-template-columns:1fr 1fr;gap:16px';
    clinics.forEach(function(clinic) {
      const card = document.createElement('div');
      card.style.cssText = 'background:#fff;border-radius:18px;border:1.5px solid var(--border);box-shadow:0 4px 20px rgba(26,122,69,.09);padding:20px;display:flex;flex-direction:column;gap:12px;cursor:pointer;transition:box-shadow .2s,border-color .2s';
      card.onmouseenter = function(){ card.style.borderColor='var(--g1)'; card.style.boxShadow='0 6px 28px rgba(212,104,122,.22)'; };
      card.onmouseleave = function(){ card.style.borderColor='var(--border)'; card.style.boxShadow='0 4px 20px rgba(26,122,69,.09)'; };
      const cardHdr = document.createElement('div');
      cardHdr.style.cssText = 'display:flex;align-items:center;gap:12px';
      const iconBadge = document.createElement('div');
      iconBadge.style.cssText = 'width:44px;height:44px;border-radius:12px;background:'+(clinic.free?'var(--g4)':'#fff3e8')+';border:1.5px solid '+(clinic.free?'var(--g6)':'#f0b87a')+';display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0';
      iconBadge.textContent = clinic.icon;
      cardHdr.appendChild(iconBadge);
      const nameBlock = document.createElement('div');
      nameBlock.style.cssText = 'flex:1;min-width:0';
      const nameEl = document.createElement('div');
      nameEl.style.cssText = "font-family:'Inter',sans-serif;font-weight:900;font-size:14px;color:var(--text);line-height:1.3";
      nameEl.textContent = clinic.name;
      const cityEl = document.createElement('div');
      cityEl.style.cssText = 'font-size:11px;color:var(--text3);margin-top:3px;display:flex;align-items:center;gap:6px;flex-wrap:wrap';
      const cityName = clinic.city[LANG]||clinic.city.ru;
      cityEl.innerHTML = cityName;
      nameBlock.appendChild(nameEl); nameBlock.appendChild(cityEl);
      cardHdr.appendChild(nameBlock); card.appendChild(cardHdr);
      const dirs = clinic.directions[LANG]||clinic.directions.ru;
      const tagsRow = document.createElement('div');
      tagsRow.style.cssText = 'display:flex;flex-wrap:wrap;gap:6px';
      dirs.forEach(function(d) {
        const tag = document.createElement('span');
        tag.style.cssText = 'display:inline-block;background:var(--g4);color:var(--g1);padding:3px 10px;border-radius:50px;font-size:11px;font-weight:700;border:1px solid var(--g6)';
        tag.textContent = d; tagsRow.appendChild(tag);
      });
      card.appendChild(tagsRow);
      if(clinic.address) {
        const addrEl = document.createElement('div');
        addrEl.style.cssText = 'font-size:11px;color:var(--text3);display:flex;gap:5px;align-items:flex-start';
        addrEl.innerHTML = '&#128204; <span>'+clinic.address+'</span>';
        card.appendChild(addrEl);

        // Click card → update main map to exact clinic address
        card.onclick = function() {
          // ── Update iframe (fallback) ──
          const iframeEl = document.querySelector('#' + mapId + ' iframe');
          if(iframeEl) {
            // Use search with high zoom + map type (shows all streets)
            iframeEl.src = 'https://yandex.ru/map-widget/v1/?text='
              + encodeURIComponent(clinic.address)
              + '&z=17&l=map&lang=ru_RU&scroll=true&traffic=false';
          }
          // ── Update JS API map if available ──
          const ymapInst = window['_ymapInst_' + mapId];
          if(ymapInst && typeof ymaps !== 'undefined') {
            ymaps.geocode(clinic.address, {results:1}).then(function(res) {
              const obj = res.geoObjects.get(0);
              if(obj) {
                const coords = obj.geometry.getCoordinates();
                ymapInst.setCenter(coords, 17, {duration:400});
                // Remove previous clinic placemark
                if(window._clinicPlacemark) ymapInst.geoObjects.remove(window._clinicPlacemark);
                window._clinicPlacemark = new ymaps.Placemark(coords, {
                  balloonContentHeader: '<b style="font-size:13px;color:#3a1f28">'+clinic.name+'</b>',
                  balloonContentBody: '<div style="font-size:12px;color:#7a4455;padding:4px 0">📍 '+clinic.address+'</div>',
                  hintContent: clinic.name
                }, {
                  preset: 'islands#violetDotIconWithCaption',
                  iconCaption: clinic.name,
                });
                ymapInst.geoObjects.add(window._clinicPlacemark);
                window._clinicPlacemark.balloon.open();
              }
            });
          }
          // ── Update hint bar ──
          const hintText = document.getElementById('kz-map-hint-text');
          if(hintText) {
            hintText.innerHTML = '📍 <b style="color:var(--text)">' + clinic.name + '</b>'
              + '<span style="color:var(--text3)"> — ' + clinic.address + '</span>';
          }
          // ── Highlight selected card ──
          grid.querySelectorAll('[data-clinic]').forEach(c => {
            c.style.borderColor = 'var(--border)';
            c.style.boxShadow = '0 4px 20px rgba(26,122,69,.09)';
          });
          card.style.borderColor = 'var(--g1)';
          card.style.boxShadow = '0 0 0 3px rgba(212,104,122,.25)';
          // ── Scroll to map ──
          mapCard.scrollIntoView({behavior:'smooth', block:'start'});
        };
        card.dataset.clinic = '1';
      }
      const contacts = document.createElement('div');
      contacts.style.cssText = 'display:flex;flex-direction:column;gap:5px;font-size:12px;color:var(--text2)';
      if(clinic.phone){const r=document.createElement('div');r.innerHTML='&#128222; <a href="tel:'+clinic.phone+'" style="color:var(--g1);font-weight:700;text-decoration:none">'+clinic.phone+'</a>';contacts.appendChild(r);}
      if(clinic.phone2){const r=document.createElement('div');r.innerHTML='&#128222; <a href="tel:'+clinic.phone2+'" style="color:var(--g1);font-weight:700;text-decoration:none">'+clinic.phone2+'</a>';contacts.appendChild(r);}
      if(clinic.email){const r=document.createElement('div');r.innerHTML='&#9993;&#65039; <a href="mailto:'+clinic.email+'" style="color:var(--g1);font-weight:700;text-decoration:none">'+clinic.email+'</a>';contacts.appendChild(r);}
      if(contacts.children.length > 0) card.appendChild(contacts);
      if(clinic.note) {
        const noteEl = document.createElement('div');
        noteEl.style.cssText = 'font-size:11px;color:var(--text3);font-style:italic;padding:8px 10px;background:#f7fbff;border-radius:8px;border:1px solid var(--border);line-height:1.5';
        noteEl.textContent = clinic.note[LANG]||clinic.note.ru;
        card.appendChild(noteEl);
      }
      grid.appendChild(card);
    });
    dp.appendChild(grid);
  }
  dp.scrollIntoView({behavior:'smooth',block:'nearest'});
}

// ── INIT MAP: try Yandex JS API first, fallback to iframe ──
function initYMap() {
  // Try JS API
  if(typeof ymaps !== 'undefined') {
    ymaps.ready(function() {
      try {
        const myMap = new ymaps.Map(mapId, {
          center: [48.0, 67.0],
          zoom: 5,
          controls: ['zoomControl', 'fullscreenControl']
        }, { suppressMapOpenBlock: true });

        window['_ymapInst_' + mapId] = myMap;

        KZ_REGIONS.forEach(function(region) {
          const coords = REGION_COORDS[region.id];
          if(!coords) return;
          const fc = PIN_C[region.pin];
          const isUser = userReg && userReg.id === region.id;
          const capName = region.cap[LANG]||region.cap.kk;
          const name = region.name[LANG]||region.name.kk;
          const clinicCount = (KZ_CLINICS[region.id]||[]).length;
          const iconColor = isUser ? '#1a7a45' : fc;
          const iconSize = isUser ? 44 : 36;

          const PlacemarkLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="width:'+iconSize+'px;height:'+iconSize+'px;border-radius:50%;background:'+iconColor+';border:3px solid #fff;box-shadow:0 3px 12px rgba(0,0,0,.3);display:flex;align-items:center;justify-content:center;font-size:'+(isUser?20:16)+'px;cursor:pointer;transform:translate(-50%,-50%)">'+(isUser?'📍':'🏥')+'</div>'
          );

          const placemark = new ymaps.Placemark(
            coords,
            {
              balloonContentHeader: '<b style="font-size:14px;color:#3a1f28">'+name+'</b>',
              balloonContentBody: '<div style="font-size:12px;padding:4px 0;min-width:180px"><div style="color:#7a4455;margin-bottom:5px">📍 '+capName+'</div><div style="margin-bottom:8px">📞 '+region.phone+'</div>'+(clinicCount>0?'<div onclick="(function(){document.getElementById(\'rc-'+region.id+'\').click()})()" style="color:#fff;background:linear-gradient(135deg,#d4687a,#e891a0);border-radius:8px;padding:6px 12px;text-align:center;cursor:pointer;font-weight:700;font-size:12px">'+(LANG==='kk'?'Орталықтарды қарау →':LANG==='en'?'View centers →':'Смотреть центры →')+'</div>':'')+'</div>',
              hintContent: capName+' — '+region.centers+' '+t('mapCenters'),
            },
            {
              iconLayout: PlacemarkLayout,
              iconShape: {type:'Circle',coordinates:[0,0],radius:iconSize/2},
              balloonOffset: [0,-(iconSize/2+5)],
              hideIconOnBalloonOpen: false,
            }
          );
          placemark.events.add('click', function(){ selectRegion(region.id); });
          myMap.geoObjects.add(placemark);
        });

        myMap.setBounds([[40.5,50.0],[55.5,87.5]], {checkZoomRange:true, zoomMargin:20});
        return; // success — no need for iframe fallback
      } catch(e) {
        console.warn('Yandex Maps JS error:', e);
      }
    });
  } else {
    // ── IFRAME FALLBACK — works in all browsers ──
    loadIframeMap();
  }

  // Also try iframe if JS API doesn't render within 3s
  setTimeout(function() {
    const el = document.getElementById(mapId);
    if(el && el.children.length === 0) {
      loadIframeMap();
    }
  }, 3000);
}

function loadIframeMap() {
  const el = document.getElementById(mapId);
  if(!el || el.querySelector('iframe')) return;
  el.innerHTML = '';
  const iframe = document.createElement('iframe');
  iframe.src = 'https://yandex.ru/map-widget/v1/?ll=67.0%2C48.0&z=5&l=map&lang=ru_RU&scroll=true';
  iframe.width = '100%';
  iframe.height = '500';
  iframe.frameBorder = '0';
  iframe.allowFullscreen = true;
  iframe.style.cssText = 'display:block;border:none';
  iframe.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
  el.appendChild(iframe);
}

initYMap();
}

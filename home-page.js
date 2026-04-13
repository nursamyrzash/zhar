/* ═══════════════════════════════════════════════════════
   ZHARYK ONLINE — HOME LANDING PAGE
   Pixel-faithful recreation of the reference design photo
   ═══════════════════════════════════════════════════════ */

(function () {
  'use strict';

  var HOMEPAGE_TEXT = {
    kk: {
      heroText: 'ЕРЕКШЕ БАЛАЛАРДЫҢ ОТБАСЫЛАРЫ\nОЗ МҮМКІНДІКТЕРІН БІЛУГЕ ХАҚЫЛЫ.',
      badge: 'сайт',
      whoTitle: 'Біз кімбіз?',
      whoBody1: 'Сайт ерекше дамуы бар балалары бар отбасыларды қолдауға арналған.',
      whoBody2: 'Мұнда біз барлық қажетті ақпаратты түсінікті түрде жинадық — күрделі заңдық және медициналық терминдерді қарапайым тілге аударамыз, практикалық ұсынымдар береміз және ата-аналарға уақытты жоғалтпай мәселелерінің шешімін табуға көмектесеміз.',
      whatTitle: 'Не істейміз?',
      whatBody: 'Мемлекеттік жеңілдіктер мен олардың мөлшері туралы негізгі және қажетті ақпаратты жылдам табуға, квоталар туралы ақпаратты табуға көмектесеміз. Кімге хабарласу керек, қандай құжаттар жинау керек және қайда баруды — барлық мәселені бюрократиялық қиындықтар мен уақыт жоғалтусыз шешуге мүмкіндік береміз.',
      quoteText: '"Сайтымыз ерекше дамуы бар балалары бар отбасыларға стрессті азайтуға, уақытты үнемдеуге және ата-аналарға күрделі жағдайларда өзін сенімді сезінуіне көмектесер деп үміттенеміз."',
      problemTitle: 'АҒЫМДАҒЫ МӘСЕЛЕ:',
      problemBody: 'Қазіргі уақытта ауылдық жерлерді қоса алғанда, көптеген отбасылар ерекше дамуы бар балаларды тәрбиелеуде қиындықтарға тап болуда. Сонымен қатар, мемлекеттік қолдау туралы ақпарат жеткіліксіз — берілетін жеңілдіктер, қызметтер мен әлеуметтік мүмкіндіктер туралы деректер қолжетімсіз немесе заңдық тілде жазылып, түсінуге қиын. Бұл баланың оңалтуын бастауда кешігуге әкеледі.',
      pieSegments: [
        { label: 'Нашар сөйлеу', pct: 40.0, color: '#a07848' },
        { label: 'ДЦП',          pct: 31.5, color: '#c8a878' },
        { label: 'ТМС',          pct: 18.7, color: '#d4b48a' },
        { label: 'Нашар есту',   pct:  9.4, color: '#b8905a' },
        { label: 'Нашар көру',   pct:  0.4, color: '#e8cfa0' },
      ],
      valuesTitle: 'САЙТЫМЫЗДЫҢ ҚҰНДЫЛЫҚТАРЫ',
      values: [
        { title: 'Қолжетімділік', desc: 'Барлық ақпарат бір жерде жинақталған және кез-келген адам таба алады' },
        { title: 'Қолдау', desc: 'Ата-аналарға ауыр сәттерде жалғыздық сезімін жеңуге көмектесеміз' },
        { title: 'Дұрыстық', desc: 'Тек дәлелденген, өзекті ақпаратты береміз: заңдар, жәрдемақылар, қызметтер' },
        { title: 'Қарапайымдылық', desc: 'Күрделі мәселелерді әрқашан барынша қарапайым түрде шешуге тырысамыз' },
        { title: 'Уақыт пен ата-ана тыныштығы', desc: 'Шешімдерді жылдам тауып, стресс деңгейін азайтуға көмектесеміз' },
      ],
    },
    ru: {
      heroText: 'СЕМЬИ ОСОБЕННЫХ ДЕТЕЙ ВПРАВЕ\nЗНАТЬ О СВОИХ ВОЗМОЖНОСТЯХ.',
      badge: 'сайт',
      whoTitle: 'Кто мы?',
      whoBody1: 'Сайт создан для поддержки семей с детьми с особенностями развития.',
      whoBody2: 'Здесь собрана вся необходимая информация в понятной форме — мы переводим сложные юридические и медицинские термины на простой язык, даём практические рекомендации и помогаем родителям быстро находить решения своих проблем.',
      whatTitle: 'Что мы делаем?',
      whatBody: 'Мы помогаем родителям быстро находить базовую и необходимую информацию о льготах, государственных пособиях и их оформлении. Объясняем, какие шаги нужно пройти, какие документы собрать и куда обращаться, чтобы получить поддержку без лишних сложностей и потери времени.',
      quoteText: '"Мы надеемся, что наш сайт сможет хотя бы немного облегчить жизнь семей с детьми с особенностями развития — снизить уровень стресса, сэкономить время и помочь родителям чувствовать себя уверенно в сложных ситуациях."',
      problemTitle: 'ТЕКУЩАЯ ПРОБЛЕМА:',
      problemBody: 'На данный момент многие семьи, включая сельские, воспитывают детей с особенностями развития. При этом информация о государственной поддержке зачастую труднодоступна, а законы изложены сложно и непонятно. Это приводит к трудностям в получении помощи и задержке начала реабилитации ребёнка.',
      pieSegments: [
        { label: 'Нарушение речи',  pct: 40.0, color: '#a07848' },
        { label: 'ДЦП',             pct: 31.5, color: '#c8a878' },
        { label: 'ТМС',             pct: 18.7, color: '#d4b48a' },
        { label: 'Нарушение слуха', pct:  9.4, color: '#b8905a' },
        { label: 'Нарушение зрения',pct:  0.4, color: '#e8cfa0' },
      ],
      valuesTitle: 'ЦЕННОСТИ НАШЕГО САЙТА',
      values: [
        { title: 'Доступность', desc: 'Вся информация собрана в одном месте и доступна каждому' },
        { title: 'Поддержка', desc: 'Помогаем родителям не чувствовать себя одинокими в трудную минуту' },
        { title: 'Достоверность', desc: 'Только проверенная, актуальная информация: законы, пособия, услуги' },
        { title: 'Простота', desc: 'Сложные вопросы всегда излагаем максимально просто' },
        { title: 'Забота о времени\nи спокойствии родителей', desc: 'Помогаем быстро находить решения и снижать уровень стресса' },
      ],
    },
    en: {
      heroText: 'FAMILIES OF SPECIAL CHILDREN\nHAVE THE RIGHT TO KNOW THEIR OPTIONS.',
      badge: 'site',
      whoTitle: 'Who are we?',
      whoBody1: 'The platform was created to support families with children with developmental differences.',
      whoBody2: 'All the necessary information is gathered here in a clear form — we translate complex legal and medical terms into plain language, give practical recommendations and help parents quickly find solutions to their problems.',
      whatTitle: 'What do we do?',
      whatBody: 'We help parents quickly find essential information about benefits, state allowances and registration. We explain what steps to take, which documents to collect and where to go — so families can get support without wasting time navigating bureaucracy.',
      quoteText: '"We hope our site can ease the lives of families with children with developmental differences — reduce stress, save time and help parents feel confident in difficult situations."',
      problemTitle: 'THE CURRENT PROBLEM:',
      problemBody: 'Many families, including those in rural areas, are raising children with developmental differences. Information about government support is often inaccessible, laws are written in complex language, and social services are hard to navigate. This leads to delays in starting rehabilitation.',
      pieSegments: [
        { label: 'Speech disorder',   pct: 40.0, color: '#a07848' },
        { label: 'Cerebral Palsy',    pct: 31.5, color: '#c8a878' },
        { label: 'Hearing impairment',pct: 18.7, color: '#d4b48a' },
        { label: 'Vision impairment', pct:  9.4, color: '#b8905a' },
        { label: 'Other',             pct:  0.4, color: '#e8cfa0' },
      ],
      valuesTitle: 'OUR PLATFORM VALUES',
      values: [
        { title: 'Accessibility', desc: 'All information in one place, available to everyone' },
        { title: 'Support', desc: 'Helping parents feel less alone during difficult times' },
        { title: 'Reliability', desc: 'Only verified, up-to-date information: laws, benefits, services' },
        { title: 'Simplicity', desc: 'Complex issues explained as simply as possible' },
        { title: 'Care for families', desc: 'We help find solutions quickly and reduce stress levels' },
      ],
    },
  };

  /* ── PIE CHART SVG ── */
  function buildPieChart(segments) {
    var cx = 85, cy = 85, r = 72;
    var paths = '';
    var total = segments.reduce(function(s, x){ return s + x.pct; }, 0);
    var angle = Math.PI * 0.55;

    segments.forEach(function(seg) {
      var sweep = (seg.pct / total) * 2 * Math.PI;
      var x1 = cx + r * Math.cos(angle);
      var y1 = cy + r * Math.sin(angle);
      var x2 = cx + r * Math.cos(angle + sweep);
      var y2 = cy + r * Math.sin(angle + sweep);
      var large = sweep > Math.PI ? 1 : 0;
      paths += '<path d="M' + cx + ',' + cy +
        ' L' + x1.toFixed(1) + ',' + y1.toFixed(1) +
        ' A' + r + ',' + r + ' 0 ' + large + ',1 ' + x2.toFixed(1) + ',' + y2.toFixed(1) +
        ' Z" fill="' + seg.color + '" stroke="#f5e8d0" stroke-width="1.5"/>';
      angle += sweep;
    });

    var legend = '';
    segments.forEach(function(seg) {
      legend += '<div style="display:flex;align-items:center;gap:6px;margin-bottom:4px;">' +
        '<span style="display:inline-block;width:10px;height:10px;border-radius:2px;background:' + seg.color + ';flex-shrink:0;"></span>' +
        '<span style="font-size:10.5px;color:#5c3c1c;line-height:1.35;">' + seg.label + ' ' + seg.pct.toFixed(1) + '%</span>' +
        '</div>';
    });

    return '<div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap;">' +
      '<svg viewBox="0 0 170 170" width="145" height="145" style="flex-shrink:0;">' + paths + '</svg>' +
      '<div>' + legend + '</div>' +
      '</div>';
  }

  /* ── ONE-TIME STYLES ── */
  function injectStyles() {
    if (document.getElementById('_zhHomeStyle')) return;
    var s = document.createElement('style');
    s.id = '_zhHomeStyle';
    s.textContent =
      '@keyframes zhFI{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}' +
      '.zh-hw{animation:zhFI .38s cubic-bezier(.4,0,.2,1);}' +

      /* Hero */
      '.zh-hero{width:100%;border-radius:16px;overflow:hidden;position:relative;margin-bottom:24px;}' +
      '.zh-hero img{width:100%;height:420px;object-fit:cover;object-position:center 20%;display:block;}' +
      '.zh-hero-ov{position:absolute;inset:0;background:linear-gradient(to top,rgba(35,15,3,.68) 0%,rgba(35,15,3,.1) 55%,transparent 100%);}' +
      '.zh-hero-bot{position:absolute;bottom:0;left:0;right:0;padding:16px 26px 20px;display:flex;align-items:flex-end;justify-content:space-between;}' +
      '.zh-hero-txt{font-family:\'Inter\',sans-serif;font-size:clamp(12px,2vw,16px);font-weight:900;color:#fff;letter-spacing:.5px;line-height:1.35;text-shadow:0 1px 8px rgba(0,0,0,.4);}' +
      '.zh-star{color:rgba(255,255,255,.75);font-size:20px;line-height:1;}' +

      /* Mid row */
      '.zh-mid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:0;align-items:start;}' +
      '.zh-lft{}' +
      '.zh-badge{display:inline-block;background:#d4a870;color:#fff;font-size:10px;font-weight:800;padding:3px 12px;border-radius:50px;letter-spacing:.4px;margin-bottom:10px;}' +
      '.zh-h{font-family:\'Inter\',sans-serif;font-size:14.5px;font-weight:900;color:#3a2510;margin-bottom:5px;margin-top:14px;}' +
      '.zh-h:first-of-type{margin-top:0;}' +
      '.zh-p{font-size:12px;line-height:1.72;color:#7a5838;}' +
      '.zh-quote{background:#d4a878;border-radius:13px;padding:20px 22px;height:100%;box-sizing:border-box;}' +
      '.zh-qt{font-size:12.5px;line-height:1.78;color:#fff;font-style:italic;}' +

      /* Problem */
      '.zh-prob-bar{background:#d4b078;border-radius:13px;text-align:center;padding:14px 20px;margin:22px 0 0;font-family:\'Inter\',sans-serif;font-size:13.5px;font-weight:900;color:#fff;letter-spacing:1px;}' +
      '.zh-prob-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px;padding:18px 2px 22px;align-items:center;}' +
      '.zh-prob-p{font-size:12px;line-height:1.78;color:#7a5838;}' +

      /* Values */
      '.zh-vt{text-align:center;font-family:\'Inter\',sans-serif;font-size:12px;font-weight:900;color:#7a5838;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:12px;}' +
      '.zh-vr1{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:10px;}' +
      '.zh-vr2{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;max-width:66%;margin:0 auto 28px;}' +
      '.zh-vc{background:linear-gradient(145deg,#faf3e4,#f2e4c8);border:1px solid #e8d8b0;border-radius:13px;padding:15px 13px;text-align:center;}' +
      '.zh-vct{font-family:\'Inter\',sans-serif;font-size:11.5px;font-weight:800;color:#3a2510;margin-bottom:4px;line-height:1.3;}' +
      '.zh-vcd{font-size:10.5px;color:#7a5838;line-height:1.55;}' +

      '@media(max-width:660px){' +
      '.zh-mid,.zh-prob-grid{grid-template-columns:1fr!important;}' +
      '.zh-vr1{grid-template-columns:1fr 1fr!important;}' +
      '.zh-vr2{max-width:100%!important;}' +
      '}';
    document.head.appendChild(s);
  }

  /* ── MAIN RENDER ── */
  window.renderHomePage = function(lang) {
    var l = lang || (typeof LANG !== 'undefined' ? LANG : 'ru');
    var d = HOMEPAGE_TEXT[l] || HOMEPAGE_TEXT.ru;
    var tc = document.getElementById('tabContent');
    if (!tc) return;
    injectStyles();

    var html =
      /* Wrapper */
      '<div class="zh-hw">' +

      /* ── 1. HERO ── */
      '<div class="zh-hero">' +
        '<img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1200&q=85" alt="" loading="eager">' +
        '<div class="zh-hero-ov"></div>' +
        '<div class="zh-hero-bot">' +
          '<div class="zh-hero-txt">' + d.heroText.replace('\n','<br>') + '</div>' +
          '<div class="zh-star">✦</div>' +
        '</div>' +
      '</div>' +

      /* ── 2. WHO / WHAT + QUOTE ── */
      '<div class="zh-mid">' +
        '<div class="zh-lft">' +
          '<span class="zh-badge">' + d.badge + '</span>' +
          '<div class="zh-h">' + d.whoTitle + '</div>' +
          '<div class="zh-p">' + d.whoBody1 + '<br><br>' + d.whoBody2 + '</div>' +
          '<div class="zh-h">' + d.whatTitle + '</div>' +
          '<div class="zh-p">' + d.whatBody + '</div>' +
        '</div>' +
        '<div class="zh-quote"><div class="zh-qt">' + d.quoteText + '</div></div>' +
      '</div>' +

      /* ── 3. PROBLEM BANNER ── */
      '<div class="zh-prob-bar">' + d.problemTitle + '</div>' +
      '<div class="zh-prob-grid">' +
        '<div>' + buildPieChart(d.pieSegments) + '</div>' +
        '<div class="zh-prob-p">' + d.problemBody + '</div>' +
      '</div>' +

      /* ── 4. VALUES TITLE ── */
      '<div class="zh-vt">' + d.valuesTitle + '</div>' +

      /* Row 1: 3 cards */
      '<div class="zh-vr1">' +
        d.values.slice(0,3).map(function(v){
          return '<div class="zh-vc"><div class="zh-vct">' + v.title.replace('\n','<br>') + '</div><div class="zh-vcd">' + v.desc + '</div></div>';
        }).join('') +
      '</div>' +

      /* Row 2: 2 cards centred */
      '<div class="zh-vr2">' +
        d.values.slice(3).map(function(v){
          return '<div class="zh-vc"><div class="zh-vct">' + v.title.replace('\n','<br>') + '</div><div class="zh-vcd">' + v.desc + '</div></div>';
        }).join('') +
      '</div>' +

      '</div>'; /* end zh-hw */

    tc.innerHTML = html;
  };

  /* ── HOOK ── */
  function _hook() {
    if (window._zhHomePageHooked) return;
    if (typeof window.renderDashboard !== 'function') return;
    window._zhHomePageHooked = true;
    var _orig = window.renderDashboard;
    window.renderDashboard = function(user) {
      _orig(user);
      setTimeout(function() {
        var tc = document.getElementById('tabContent');
        if (tc && tc.innerHTML.trim() === '') {
          window.renderHomePage(typeof LANG !== 'undefined' ? LANG : 'ru');
        }
      }, 80);
    };
  }

  [50, 300, 800].forEach(function(t){ setTimeout(_hook, t); });
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function(){
      [50,300,800].forEach(function(t){ setTimeout(_hook, t); });
    });
  }

})();

/* ═══════════════════════════════════════════════════════════════
   ZHARYK ONLINE — ACCESSIBILITY MODULE v3
   Режим для слабовидящих:
     • Монохромный вид (ч/б, высококонтрастный)
     • Панель настроек снизу: A / A+ / A++, Bold, читаемый шрифт, сброс
     • Нажатие на любой элемент → озвучка (TTS)
     • Подсветка при наведении
     • Строка состояния TTS снизу
     • Язык голоса: kk-KZ / ru-RU / en-US (автоопределение)
     • Состояние и настройки сохраняются в localStorage
   Подключение: <script src="./js/accessibility.js"></script>
   (последним, после app.js)
   ═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ──────────────────────────────
     КОНСТАНТЫ
  ────────────────────────────── */
  var STORAGE_KEY      = 'zh_accessibility_mode';
  var STORAGE_SETTINGS = 'zh_accessibility_settings';
  var CLASS_NAME       = 'accessibility-mode';
  var FONT_SIZES       = [100, 115, 130];
  var FONT_LABELS      = ['A', 'A+', 'A++'];

  /* ──────────────────────────────
     СОСТОЯНИЕ НАСТРОЕК
  ────────────────────────────── */
  var state = { fontSize: 0, bold: false, readableFont: false };

  function loadState() {
    try {
      var raw = localStorage.getItem(STORAGE_SETTINGS);
      if (raw) {
        var p = JSON.parse(raw);
        state.fontSize     = p.fontSize     || 0;
        state.bold         = !!p.bold;
        state.readableFont = !!p.readableFont;
      }
    } catch (e) {}
  }

  function saveState() {
    try { localStorage.setItem(STORAGE_SETTINGS, JSON.stringify(state)); } catch (e) {}
  }

  /* ──────────────────────────────
     КНОПКА-ГЛАЗ
  ────────────────────────────── */
  var btn = document.getElementById('zh-access-btn');
  if (!btn) {
    console.warn('[Accessibility] Кнопка #zh-access-btn не найдена');
    return;
  }

  /* ══════════════════════════════════════════
     CSS-ИНЪЕКЦИЯ
  ══════════════════════════════════════════ */
  var styleEl = null;

  function injectStyles() {
    if (styleEl) return;
    styleEl = document.createElement('style');
    styleEl.id = 'zh-access-styles';
    styleEl.textContent = [
      /* Монохром + контраст */
      'body.' + CLASS_NAME + ' {',
      '  filter: grayscale(100%) contrast(1.2) brightness(1.04) !important;',
      '  background: #ffffff !important;',
      '}',
      /* Кнопка-глаз без фильтра */
      'body.' + CLASS_NAME + ' #zh-access-btn {',
      '  filter: none !important;',
      '  background: #111 !important;',
      '  border-color: #111 !important;',
      '  color: #fff !important;',
      '}',
      /* Панели без фильтра */
      '#zh-access-panel, #zh-access-statusbar {',
      '  filter: none !important;',
      '}',
      /* Размер шрифта */
      'body.' + CLASS_NAME + ' * {',
      '  font-size: var(--zh-acc-size, 1em) !important;',
      '}',
      /* Жирный */
      'body.' + CLASS_NAME + '.acc-bold * {',
      '  font-weight: 700 !important;',
      '}',
      /* Читаемый шрифт */
      'body.' + CLASS_NAME + '.acc-readable * {',
      '  font-family: "Arial", "Helvetica Neue", sans-serif !important;',
      '  line-height: 1.8 !important;',
      '  letter-spacing: 0.05em !important;',
      '  word-spacing: 0.08em !important;',
      '}'
    ].join('\n');
    document.head.appendChild(styleEl);
  }

  function removeStyles() {
    if (styleEl) { styleEl.remove(); styleEl = null; }
    document.documentElement.style.removeProperty('--zh-acc-size');
  }

  /* ──────────────────────────────
     ПРИМЕНЕНИЕ НАСТРОЕК
  ────────────────────────────── */
  function applySettings() {
    var pct = FONT_SIZES[state.fontSize] || 100;
    document.documentElement.style.setProperty('--zh-acc-size', pct + '%');
    document.body.classList.toggle('acc-bold',     state.bold);
    document.body.classList.toggle('acc-readable', state.readableFont);
    updatePanelUI();
  }

  /* ══════════════════════════════════════════
     ПАНЕЛЬ НАСТРОЕК
  ══════════════════════════════════════════ */
  var panel    = null;
  var pBtns    = {};

  function createPanel() {
    if (panel) return;

    panel = document.createElement('div');
    panel.id = 'zh-access-panel';
    panel.setAttribute('role', 'toolbar');
    panel.setAttribute('aria-label', 'Настройки режима слабовидящих');
    panel.style.cssText = [
      'position:fixed', 'bottom:0', 'left:0', 'right:0',
      'z-index:99998',
      'background:#111',
      'color:#fff',
      'display:flex',
      'align-items:center',
      'justify-content:center',
      'flex-wrap:wrap',
      'gap:8px',
      'padding:9px 16px',
      'box-shadow:0 -3px 20px rgba(0,0,0,.55)',
      'transform:translateY(100%)',
      'transition:transform .3s cubic-bezier(.4,0,.2,1)'
    ].join(';');

    /* Заголовок */
    var lbl = document.createElement('span');
    lbl.textContent = '👁 Вид:';
    lbl.style.cssText = 'font-size:12px;font-weight:700;opacity:.6;margin-right:2px;white-space:nowrap;font-family:Arial,sans-serif;';
    panel.appendChild(lbl);

    /* Вертикальный разделитель */
    function sep() {
      var s = document.createElement('span');
      s.style.cssText = 'width:1px;height:22px;background:rgba(255,255,255,.15);flex-shrink:0;';
      return s;
    }

    /* Группа размера шрифта */
    var sg = document.createElement('div');
    sg.style.cssText = 'display:flex;gap:3px;align-items:center;';
    var sl = document.createElement('span');
    sl.textContent = 'Шрифт:';
    sl.style.cssText = 'font-size:11px;opacity:.55;white-space:nowrap;font-family:Arial,sans-serif;';
    sg.appendChild(sl);

    FONT_LABELS.forEach(function (lbl, idx) {
      var b = mkBtn(lbl, function () {
        state.fontSize = idx; saveState(); applySettings();
      });
      b.style.fontSize  = (12 + idx * 3) + 'px';
      b.style.minWidth  = '34px';
      b.style.fontWeight = '700';
      pBtns['sz' + idx] = b;
      sg.appendChild(b);
    });
    panel.appendChild(sg);
    panel.appendChild(sep());

    /* Жирный */
    pBtns.bold = mkBtn('Ж Bold', function () {
      state.bold = !state.bold; saveState(); applySettings();
    });
    pBtns.bold.style.fontWeight = '800';
    panel.appendChild(pBtns.bold);
    panel.appendChild(sep());

    /* Читаемый шрифт */
    pBtns.readable = mkBtn('Аа Читаемый', function () {
      state.readableFont = !state.readableFont; saveState(); applySettings();
    });
    panel.appendChild(pBtns.readable);
    panel.appendChild(sep());

    /* Сброс */
    var rbtn = mkBtn('↺ Сброс', function () {
      state.fontSize = 0; state.bold = false; state.readableFont = false;
      saveState(); applySettings();
    });
    rbtn.style.background   = '#444';
    rbtn.style.borderColor  = '#666';
    rbtn.onmouseenter = function () { rbtn.style.background = '#666'; };
    rbtn.onmouseleave = function () { rbtn.style.background = '#444'; };
    panel.appendChild(rbtn);

    document.body.appendChild(panel);
  }

  function mkBtn(text, onClick) {
    var b = document.createElement('button');
    b.textContent = text;
    b.style.cssText = [
      'background:#2a2a2a',
      'border:2px solid #444',
      'border-radius:5px',
      'color:#fff',
      'padding:4px 11px',
      'font-size:13px',
      'font-weight:600',
      'cursor:pointer',
      'font-family:Arial,sans-serif',
      'transition:background .15s,border-color .15s',
      'white-space:nowrap'
    ].join(';');
    b.onmouseenter = function () { if (!b._acc_active) b.style.background = '#3a3a3a'; };
    b.onmouseleave = function () { if (!b._acc_active) b.style.background = '#2a2a2a'; };
    b.addEventListener('click', function (e) { e.stopPropagation(); onClick(); });
    return b;
  }

  function setActive(b, active) {
    b._acc_active     = active;
    b.style.background   = active ? '#ffffff' : '#2a2a2a';
    b.style.color        = active ? '#000000' : '#ffffff';
    b.style.borderColor  = active ? '#ffffff' : '#444444';
  }

  function updatePanelUI() {
    if (!panel) return;
    FONT_LABELS.forEach(function (_, idx) {
      if (pBtns['sz' + idx]) setActive(pBtns['sz' + idx], state.fontSize === idx);
    });
    if (pBtns.bold)     setActive(pBtns.bold,     state.bold);
    if (pBtns.readable) setActive(pBtns.readable, state.readableFont);
  }

  function showPanel() {
    if (!panel) return;
    requestAnimationFrame(function () { panel.style.transform = 'translateY(0)'; });
  }

  function hidePanel() {
    if (!panel) return;
    panel.style.transform = 'translateY(100%)';
  }

  /* ══════════════════════════════════════════
     TTS — СТРОКА СОСТОЯНИЯ
  ══════════════════════════════════════════ */
  var statusBar  = null;
  var statusText = null;

  function createStatusBar() {
    if (statusBar) return;

    statusBar = document.createElement('div');
    statusBar.id = 'zh-access-statusbar';
    statusBar.style.cssText = [
      'position:fixed', 'bottom:0', 'left:0', 'right:0',
      'z-index:99999',
      'background:rgba(0,0,0,.95)',
      'color:#fff',
      'font-family:Arial,sans-serif',
      'font-size:14px',
      'display:flex',
      'align-items:center',
      'gap:12px',
      'padding:10px 20px',
      'box-shadow:0 -2px 16px rgba(0,0,0,.5)',
      'transform:translateY(100%)',
      'transition:transform .28s cubic-bezier(.4,0,.2,1)'
    ].join(';');

    var icon = document.createElement('span');
    icon.textContent = '🔊';
    icon.style.cssText = 'font-size:18px;flex-shrink:0;';

    statusText = document.createElement('span');
    statusText.style.cssText = 'flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;opacity:.9;';

    var stopBtn = document.createElement('button');
    stopBtn.innerHTML = '&#9632;&nbsp;Стоп';
    stopBtn.style.cssText = [
      'background:#c0392b', 'border:none', 'border-radius:5px',
      'color:#fff', 'padding:5px 15px', 'font-size:13px', 'font-weight:700',
      'cursor:pointer', 'font-family:Arial,sans-serif', 'flex-shrink:0'
    ].join(';');
    stopBtn.addEventListener('click', function (e) {
      e.stopPropagation(); stopSpeech(); hideStatusBar();
    });

    statusBar.appendChild(icon);
    statusBar.appendChild(statusText);
    statusBar.appendChild(stopBtn);
    document.body.appendChild(statusBar);
  }

  function showStatusBar(text) {
    if (!statusBar) return;
    statusText.textContent = text;
    /* Поднять панель настроек, чтобы не перекрывалась */
    if (panel) panel.style.bottom = '50px';
    requestAnimationFrame(function () {
      statusBar.style.transform = 'translateY(0)';
    });
  }

  function hideStatusBar() {
    if (!statusBar) return;
    statusBar.style.transform = 'translateY(100%)';
    if (panel) panel.style.bottom = '0';
  }

  /* ══════════════════════════════════════════
     ЯЗЫК
  ══════════════════════════════════════════ */
  function getCurrentLang() {
    if (window.zhLang) return window.zhLang;
    var l = document.documentElement.lang || '';
    if (l.indexOf('kk') === 0) return 'kk';
    if (l.indexOf('en') === 0) return 'en';
    return 'ru';
  }
  function getLangCode() {
    var l = getCurrentLang();
    if (l === 'kk') return 'kk-KZ';
    if (l === 'en') return 'en-US';
    return 'ru-RU';
  }

  /* ══════════════════════════════════════════
     TTS
  ══════════════════════════════════════════ */
  function speakText(text, lang) {
    if (!window.speechSynthesis || !text) return;
    window.speechSynthesis.cancel();

    var utt  = new SpeechSynthesisUtterance(text);
    utt.lang  = lang || getLangCode();
    utt.rate  = 0.88;
    utt.pitch = 1;
    utt.onend   = function () { hideStatusBar(); };
    utt.onerror = function () { hideStatusBar(); };

    function run() {
      var vs = window.speechSynthesis.getVoices();
      var tg = utt.lang.slice(0, 2);
      for (var i = 0; i < vs.length; i++) {
        if (vs[i].lang && vs[i].lang.indexOf(tg) === 0) { utt.voice = vs[i]; break; }
      }
      window.speechSynthesis.speak(utt);
      showStatusBar(text);
    }

    if (window.speechSynthesis.getVoices().length === 0) {
      window.speechSynthesis.onvoiceschanged = function () {
        window.speechSynthesis.onvoiceschanged = null; run();
      };
    } else { run(); }
  }

  function stopSpeech() {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
  }

  /* ══════════════════════════════════════════
     КЛИК-ОЗВУЧКА + ПОДСВЕТКА
  ══════════════════════════════════════════ */
  function extractText(el) {
    if (el.getAttribute('aria-label')) return el.getAttribute('aria-label').trim();
    if (el.getAttribute('title'))      return el.getAttribute('title').trim();
    if (el.tagName === 'IMG' && el.getAttribute('alt')) return el.getAttribute('alt').trim();
    var t = (el.innerText || el.textContent || '').trim();
    return t.length > 300 ? t.slice(0, 300) + '…' : t;
  }

  var HLSTYLE = '0 0 0 3px #000, 0 0 0 6px rgba(0,0,0,.15)';
  var _click, _over, _out, _lastHL;

  function attachHandlers() {
    _click = function (e) {
      var t = e.target;
      /* Игнорируем клики внутри наших панелей и на кнопку-глаз */
      if (t.closest && t.closest('#zh-access-statusbar')) return;
      if (t.closest && t.closest('#zh-access-panel'))     return;
      if (t === btn || btn.contains(t)) return;

      /* Ищем ближайший элемент с осмысленным текстом:
         сначала сам таргет, потом интерактивный предок */
      var text = extractText(t);
      if (!text && t.closest) {
        var a = t.closest('a,button,[role="button"],[role="tab"],li,label');
        if (a) text = extractText(a);
      }
      if (!text) return;

      /* НЕ вызываем stopPropagation — навигация продолжает работать.
         Озвучиваем текст с небольшой задержкой, чтобы страница
         успела отреагировать на клик раньше, чем начнётся речь. */
      setTimeout(function () { speakText(text); }, 80);
    };

    _over = function (e) {
      var el = e.target;
      if (el === btn || btn.contains(el)) return;
      if (el.closest && el.closest('#zh-access-statusbar')) return;
      if (el.closest && el.closest('#zh-access-panel'))     return;
      if (_lastHL && _lastHL !== el) {
        _lastHL.style.removeProperty('box-shadow');
        _lastHL.style.removeProperty('outline');
      }
      el.style.boxShadow = HLSTYLE;
      el.style.outline   = '2px solid transparent';
      _lastHL = el;
    };

    _out = function (e) {
      var el = e.target;
      el.style.removeProperty('box-shadow');
      el.style.removeProperty('outline');
      if (_lastHL === el) _lastHL = null;
    };

    /* bubble-фаза (false) — клик сначала доходит до цели,
       потом мы его слышим, не блокируя навигацию */
    document.addEventListener('click',     _click, false);
    document.addEventListener('mouseover', _over,  true);
    document.addEventListener('mouseout',  _out,   true);
  }

  function detachHandlers() {
    if (_click) document.removeEventListener('click',     _click, false);
    if (_over)  document.removeEventListener('mouseover', _over,  true);
    if (_out)   document.removeEventListener('mouseout',  _out,   true);
    _click = _over = _out = null;
    if (_lastHL) {
      _lastHL.style.removeProperty('box-shadow');
      _lastHL.style.removeProperty('outline');
      _lastHL = null;
    }
  }

  /* ══════════════════════════════════════════
     ВКЛ / ВЫКЛ
  ══════════════════════════════════════════ */
  function enableMode() {
    loadState();
    injectStyles();
    document.body.classList.add(CLASS_NAME);
    btn.classList.add('active');
    btn.setAttribute('aria-pressed', 'true');
    btn.setAttribute('title', 'Выключить режим для слабовидящих');
    try { localStorage.setItem(STORAGE_KEY, '1'); } catch (e) {}

    applySettings();
    createStatusBar();
    createPanel();
    showPanel();
    attachHandlers();

    var g = { ru:'Режим для слабовидящих включён.', kk:'Нашар көретіндерге арналған режим қосылды.', en:'Accessibility mode enabled.' };
    speakText(g[getCurrentLang()] || g.ru);
  }

  function disableMode() {
    document.body.classList.remove(CLASS_NAME, 'acc-bold', 'acc-readable');
    btn.classList.remove('active');
    btn.setAttribute('aria-pressed', 'false');
    btn.setAttribute('title', 'Режим для слабовидящих + озвучка');
    try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}

    removeStyles();
    stopSpeech();
    hideStatusBar();
    hidePanel();
    detachHandlers();
  }

  function toggle() {
    document.body.classList.contains(CLASS_NAME) ? disableMode() : enableMode();
  }

  /* ══════════════════════════════════════════
     ИНИЦИАЛИЗАЦИЯ
  ══════════════════════════════════════════ */
  try {
    if (localStorage.getItem(STORAGE_KEY) === '1') setTimeout(enableMode, 200);
  } catch (e) {}

  btn.addEventListener('click', toggle);
  window.addEventListener('beforeunload', stopSpeech);
  window.zhAccessibility = { enable: enableMode, disable: disableMode, speak: speakText };

})();

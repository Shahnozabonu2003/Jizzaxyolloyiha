(function () {
  'use strict';

  var MOBILE_QUERY = window.matchMedia('(max-width: 768px)');

  /* ---------- i18n ---------- */

  var LANGS = ['uz', 'uzCyrl', 'ru', 'en'];
  var LANG_SHORT = { uz: 'UZ', uzCyrl: 'ЎЗ', ru: 'RU', en: 'EN' };
  var LANG_HTML = { uz: 'uz', uzCyrl: 'uz-Cyrl', ru: 'ru', en: 'en' };
  var LANG_STORAGE_KEY = 'language';

  function getTranslation(lang, path) {
    var dict = window.translations && window.translations[lang];
    if (!dict) return null;
    var segments = path.split('.');
    var node = dict;
    for (var i = 0; i < segments.length; i++) {
      if (node == null) return null;
      node = node[segments[i]];
    }
    return typeof node === 'string' ? node : null;
  }

  function getInitialLanguage() {
    try {
      var saved = window.localStorage.getItem(LANG_STORAGE_KEY);
      if (saved && LANGS.indexOf(saved) !== -1) return saved;
    } catch (e) {}
    return 'uz';
  }

  function setMetaContent(selector, value) {
    if (!value) return;
    var el = document.querySelector(selector);
    if (el) el.setAttribute('content', value);
  }

  function applyLanguage(lang) {
    if (LANGS.indexOf(lang) === -1) lang = 'uz';

    document.documentElement.lang = LANG_HTML[lang];

    var title = getTranslation(lang, 'meta.title');
    if (title) document.title = title;

    var description = getTranslation(lang, 'meta.description');
    if (description) {
      setMetaContent('meta[name="description"]', description);
      setMetaContent('meta[property="og:title"]', title);
      setMetaContent('meta[property="og:description"]', description);
      setMetaContent('meta[name="twitter:title"]', title);
      setMetaContent('meta[name="twitter:description"]', description);
    }

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var value = getTranslation(lang, el.getAttribute('data-i18n'));
      if (value !== null) el.textContent = value;
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var value = getTranslation(lang, el.getAttribute('data-i18n-aria'));
      if (value !== null) el.setAttribute('aria-label', value);
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var value = getTranslation(lang, el.getAttribute('data-i18n-alt'));
      if (value !== null) el.setAttribute('alt', value);
    });

    document.querySelectorAll('.project-row').forEach(function (row) {
      var titleEl = row.querySelector('.project-row__title');
      var lineEl = row.querySelector('.project-row__line');
      if (titleEl) row.setAttribute('data-title', titleEl.textContent);
      if (lineEl) row.setAttribute('data-line', lineEl.textContent);
    });

    document.querySelectorAll('[data-lang-label]').forEach(function (label) {
      label.textContent = LANG_SHORT[lang];
    });

    document.querySelectorAll('.lang-option').forEach(function (opt) {
      var isMatch = opt.getAttribute('data-lang-code') === lang;
      opt.classList.toggle('is-selected', isMatch);
      opt.setAttribute('aria-selected', isMatch ? 'true' : 'false');
      var existingCheck = opt.querySelector('.lang-option__check');
      if (isMatch && !existingCheck) {
        var check = document.createElement('img');
        check.src = 'assets/check-gold.svg';
        check.alt = '';
        check.className = 'lang-option__check';
        check.width = 18;
        check.height = 18;
        opt.appendChild(check);
      } else if (!isMatch && existingCheck) {
        existingCheck.remove();
      }
    });

    try {
      window.localStorage.setItem(LANG_STORAGE_KEY, lang);
    } catch (e) {}
  }

  window.applyLanguage = applyLanguage;

  /* ---------- Mobile menu drawer ---------- */

  var menuTrigger = document.getElementById('mobileMenuTrigger');
  var menuDrawer = document.getElementById('mobileMenuDrawer');
  var menuScrim = document.getElementById('mobileMenuScrim');
  var menuClose = document.getElementById('mobileMenuClose');

  function openMobileMenu() {
    menuDrawer.hidden = false;
    menuScrim.hidden = false;
    requestAnimationFrame(function () {
      menuDrawer.classList.add('is-open');
      menuScrim.classList.add('is-open');
    });
    menuTrigger.setAttribute('aria-expanded', 'true');
    document.body.classList.add('no-scroll');
    menuClose.focus();
  }

  function closeMobileMenu() {
    menuDrawer.classList.remove('is-open');
    menuScrim.classList.remove('is-open');
    menuTrigger.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('no-scroll');
    window.setTimeout(function () {
      if (!menuDrawer.classList.contains('is-open')) {
        menuDrawer.hidden = true;
        menuScrim.hidden = true;
      }
    }, 250);
    menuTrigger.focus();
  }

  menuTrigger.addEventListener('click', openMobileMenu);
  menuClose.addEventListener('click', closeMobileMenu);
  menuScrim.addEventListener('click', closeMobileMenu);

  /* ---------- Language dropdown (desktop header + mobile drawer footer) ---------- */

  function setupLangDropdown(triggerId, dropdownId) {
    var trigger = document.getElementById(triggerId);
    var dropdown = document.getElementById(dropdownId);
    if (!trigger || !dropdown) return;

    function open() {
      closeAllLangDropdowns();
      dropdown.hidden = false;
      requestAnimationFrame(function () {
        dropdown.classList.add('is-open');
      });
      trigger.setAttribute('aria-expanded', 'true');
    }

    function close() {
      if (dropdown.contains(document.activeElement)) {
        trigger.focus();
      }
      dropdown.classList.remove('is-open');
      trigger.setAttribute('aria-expanded', 'false');
      window.setTimeout(function () {
        if (!dropdown.classList.contains('is-open')) dropdown.hidden = true;
      }, 150);
    }

    trigger.addEventListener('click', function (event) {
      event.stopPropagation();
      var isOpen = trigger.getAttribute('aria-expanded') === 'true';
      if (isOpen) {
        close();
      } else {
        open();
      }
    });

    var options = dropdown.querySelectorAll('.lang-option');
    options.forEach(function (option) {
      option.addEventListener('click', function () {
        selectLanguage(option.getAttribute('data-lang-code'));
        close();
      });
    });

    dropdown.__close = close;
  }

  function selectLanguage(code) {
    applyLanguage(code);
  }

  function closeAllLangDropdowns() {
    ['langDropdownDesktop', 'langDropdownMobile'].forEach(function (id) {
      var dropdown = document.getElementById(id);
      if (dropdown && dropdown.__close) dropdown.__close();
    });
  }

  setupLangDropdown('langTriggerDesktop', 'langDropdownDesktop');
  setupLangDropdown('langTriggerMobile', 'langDropdownMobile');

  applyLanguage(getInitialLanguage());

  document.addEventListener('click', function (event) {
    if (!event.target.closest('.lang-dropdown-wrap')) closeAllLangDropdowns();
  });

  /* ---------- Nav links: close mobile menu on click, smooth-scroll ---------- */

  document.querySelectorAll('[data-nav-link]').forEach(function (link) {
    link.addEventListener('click', function () {
      if (!menuDrawer.hidden) closeMobileMenu();
    });
  });

  /* ---------- Nav Link active state via scroll position ---------- */

  var navLinks = document.querySelectorAll('.nav__link[data-nav-link]');
  var sections = Array.prototype.map
    .call(navLinks, function (link) {
      var id = link.getAttribute('href').replace('#', '');
      return document.getElementById(id);
    })
    .filter(Boolean);

  if (sections.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          navLinks.forEach(function (link) {
            link.classList.toggle('is-active', link.getAttribute('href') === '#' + entry.target.id);
          });
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );
    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  /* ---------- Services accordion ---------- */

  document.querySelectorAll('[data-accordion]').forEach(function (accordion) {
    var items = accordion.querySelectorAll('[data-accordion-item]');
    items.forEach(function (item) {
      var header = item.querySelector('.service-item__header');
      if (!header) return;
      header.addEventListener('click', function () {
        var isOpen = item.classList.contains('is-expanded');
        items.forEach(function (other) {
          other.classList.remove('is-expanded');
          var otherHeader = other.querySelector('.service-item__header');
          if (otherHeader) otherHeader.setAttribute('aria-expanded', 'false');
        });
        if (!isOpen) {
          item.classList.add('is-expanded');
          header.setAttribute('aria-expanded', 'true');
        }
      });
    });
  });

  /* ---------- Projects: year filter ---------- */

  var yearFilters = document.querySelectorAll('.year-filter');
  var yearGroups = document.querySelectorAll('.year-group');

  yearFilters.forEach(function (filter) {
    filter.addEventListener('click', function () {
      yearFilters.forEach(function (f) {
        f.classList.remove('is-active');
      });
      filter.classList.add('is-active');

      var year = filter.getAttribute('data-year-filter');
      yearGroups.forEach(function (group) {
        var matches = year === 'all' || group.getAttribute('data-year-group') === year;
        group.hidden = !matches;
      });
    });
  });

  /* ---------- Projects: row click opens the existing Project Detail drawer ---------- */

  document.querySelectorAll('.project-row').forEach(function (row) {
    row.addEventListener('click', function () {
      window.openProjectDetail({
        year: row.getAttribute('data-year'),
        title: row.getAttribute('data-title'),
        line: row.getAttribute('data-line'),
        trigger: row
      });
    });
  });

  /* ---------- Project detail drawer / bottom sheet ---------- */

  var projectDetail = document.getElementById('projectDetail');
  var projectDetailScrim = document.getElementById('projectDetailScrim');
  var projectDetailClose = document.getElementById('projectDetailClose');
  var projectDetailYear = document.getElementById('projectDetailYear');
  var projectDetailTitle = document.getElementById('projectDetailTitle');
  var projectDetailLine = document.getElementById('projectDetailLine');
  var projectDetailTrigger = null;

  function openProjectDetail(data) {
    if (data) {
      projectDetailYear.textContent = data.year || projectDetailYear.textContent;
      projectDetailTitle.textContent = data.title || projectDetailTitle.textContent;
      projectDetailLine.textContent = data.line || projectDetailLine.textContent;
      projectDetailTrigger = data.trigger || null;
    }
    projectDetail.hidden = false;
    requestAnimationFrame(function () {
      projectDetail.classList.add('is-open');
    });
    document.body.classList.add('no-scroll');
    projectDetailClose.focus();
  }

  function closeProjectDetail() {
    projectDetail.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
    window.setTimeout(function () {
      if (!projectDetail.classList.contains('is-open')) projectDetail.hidden = true;
    }, 300);
    if (projectDetailTrigger) {
      projectDetailTrigger.focus();
      projectDetailTrigger = null;
    }
  }

  projectDetailClose.addEventListener('click', closeProjectDetail);
  projectDetailScrim.addEventListener('click', closeProjectDetail);

  window.openProjectDetail = openProjectDetail;
  window.closeProjectDetail = closeProjectDetail;

  /* ---------- Escape key closes whichever overlay is open; Tab is trapped inside it ---------- */

  function isAnyLangDropdownOpen() {
    return ['langDropdownDesktop', 'langDropdownMobile'].some(function (id) {
      var dropdown = document.getElementById(id);
      return dropdown && dropdown.classList.contains('is-open');
    });
  }

  var FOCUSABLE_SELECTOR =
    'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

  function getFocusableElements(container) {
    return Array.prototype.filter.call(container.querySelectorAll(FOCUSABLE_SELECTOR), function (el) {
      return el.offsetParent !== null;
    });
  }

  function trapTabKey(container, event) {
    var focusable = getFocusableElements(container);
    if (!focusable.length) return;
    var first = focusable[0];
    var last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      if (projectDetail.classList.contains('is-open')) {
        closeProjectDetail();
      } else if (isAnyLangDropdownOpen()) {
        closeAllLangDropdowns();
      } else if (menuDrawer.classList.contains('is-open')) {
        closeMobileMenu();
      }
      return;
    }
    if (event.key === 'Tab') {
      if (projectDetail.classList.contains('is-open')) {
        trapTabKey(projectDetail, event);
      } else if (menuDrawer.classList.contains('is-open')) {
        trapTabKey(menuDrawer, event);
      }
    }
  });

  /* ---------- Close mobile drawer if resized to desktop ---------- */

  MOBILE_QUERY.addEventListener('change', function (event) {
    if (!event.matches && menuDrawer.classList.contains('is-open')) closeMobileMenu();
  });
})();

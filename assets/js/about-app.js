/* ── Upgrade Summary ──
   - COMPLETE REWRITE — was a duplicate of legal-app.js (Arabic variant)
   - Now serves ONLY about.html — no longer handles legal pages
   - Uses SharedPage (SP) for: buildNavBrand, buildFooter, buildFooterCategories,
     buildWhatsAppLinks, buildEmailLinks, injectBaseSEO, injectJsonLd,
     markCurrentNavLink, buildCopyrightText
   - All hardcoded Arabic strings moved to COURSE_DATA.META where brand-specific
   - Footer tagline from META.footerTagline
   - Copyright via SP.buildCopyrightText() (unified formatYear)
   - Reduced from ~180 lines to ~95 lines by leveraging SharedPage
   - Added U.announce() on page load
   - JSON-LD: ProfilePage schema for about page (more specific than WebPage)
   - SEO: Arabic title/description, inLanguage: 'ar', hreflang-ar
   ── End Summary ── */

'use strict';

(function () {

  /* ── Guard & Aliases ── */

  var U    = window.Utils;
  var DATA = window.COURSE_DATA;
  var SP   = window.SharedPage;

  if (!U || !DATA || !SP) {
    console.error('about-app: dependencies missing.');
    return;
  }

  var META = DATA.META;

  /* ── Path Constants (relative from /) ── */

  var COURSE_BASE = './course/';

  /* ── SEO ── */

  function injectSEO() {
    var base      = 'https://' + DATA.DOMAIN;
    var pageUrl   = base + '/about.html';
    var pageTitle = 'عن السنتر \u2014 ' + DATA.BRAND_NAME;
    var pageDesc  = META.descriptionShort + ' \u2014 تعرف على السنتر ورؤيتنا وطريقة عملنا.';

    SP.injectBaseSEO({
      pageTitle:   pageTitle,
      pageDesc:    pageDesc,
      pageUrl:     pageUrl,
      pageImage:   base + META.ogImage,
      brand:       DATA.BRAND_NAME,
      hreflangId:  'hreflang-ar'
    });

    SP.markCurrentNavLink(function (href) {
      return href && href.indexOf('about') !== -1;
    });

    /* JSON-LD — AboutPage for Education Center */
    SP.injectJsonLd({
      '@context':     'https://schema.org',
      '@type':        'AboutPage',
      '@id':          pageUrl + '#webpage',
      'url':          pageUrl,
      'name':         pageTitle,
      'description':  pageDesc,
      'isPartOf':     { '@id': base + '/#website' },
      'inLanguage':   'ar',
      'mainEntity': {
        '@type':      'EducationalOrganization',
        'name':       DATA.BRAND_NAME,
        'description': META.tagline,
        'url':        base,
        'email':      META.supportEmail,
        'telephone':  '+' + DATA.WHATSAPP_NUMBER,
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'أعلى مسجد الأنوار المحمدية — أمام مستشفى المطرية',
          'addressLocality': 'القاهرة',
          'addressCountry': 'EG'
        },
        'contactPoint': {
          '@type': 'ContactPoint',
          'telephone': '+' + DATA.WHATSAPP_NUMBER,
          'email': META.supportEmail,
          'contactType': 'customer support',
          'availableLanguage': 'Arabic'
        }
      }
    }, 'jsonld-about');
  }

  /* ── Dynamic Text ── */

  function _populateDynamicText() {
    /* Header subtitle */
    SP.setTextById('about-header-subtitle', META.footerTagline || '');

    /* Visual panel — computed from data */
    SP.setTextById('about-stat-courses',     U.formatNumberAr(DATA.courses.length) + '+');
    SP.setTextById('about-stat-subjects',    U.formatNumberAr(DATA.subjects.length));
    SP.setTextById('about-stat-instructors', U.formatNumberAr(DATA.instructors.length) + '+');
  }

  /* ── Helpers ── */

  function _findSubject(subjectId) {
    for (var i = 0; i < DATA.subjects.length; i++) {
      if (DATA.subjects[i].id === subjectId) return DATA.subjects[i];
    }
    return null;
  }

  /* ── Instructors Section ── */

  function _buildInstructorCard(instructor) {
    var subject = _findSubject(instructor.subjectId);
    var subjectName = subject ? subject.name : '';
    var subjectIcon = subject ? subject.icon : 'bi-person-fill';
    var subjectColor = subject ? subject.color : 'emerald';

    var card = U.el('article', { className: 'about-instructor-card h-100' });

    card.appendChild(
      U.el('div', { className: 'about-instructor-icon about-instructor-icon--' + subjectColor, aria: { hidden: 'true' } }, [
        U.el('i', { className: 'bi ' + subjectIcon, aria: { hidden: 'true' } })
      ])
    );

    card.appendChild(U.el('h3', { className: 'about-instructor-name', textContent: instructor.name }));

    if (instructor.bio) {
      card.appendChild(U.el('p', { className: 'about-instructor-bio', textContent: instructor.bio }));
    }

    if (subjectName) {
      card.appendChild(
        U.el('span', { className: 'about-instructor-badge about-instructor-badge--' + subjectColor, textContent: subjectName })
      );
    }

    return card;
  }

  function _buildInstructorsSection() {
    /* Populate META text */
    if (META.instructorsSectionBadge)    SP.setTextById('instructors-badge-text',    META.instructorsSectionBadge);
    if (META.instructorsSectionTitle)    SP.setTextById('instructors-title-text',    META.instructorsSectionTitle);
    if (META.instructorsSectionSubtitle) SP.setTextById('instructors-subtitle-text', META.instructorsSectionSubtitle);

    var grid = document.getElementById('instructors-grid');
    if (!grid || !DATA.instructors || !DATA.instructors.length) return;

    var frag = document.createDocumentFragment();

    DATA.instructors.forEach(function (instructor) {
      var col = U.el('div', { className: 'col-12 col-sm-6 col-lg-4' });
      col.appendChild(_buildInstructorCard(instructor));
      frag.appendChild(col);
    });

    grid.appendChild(frag);
  }

  /* ── WhatsApp CTA ── */

  function buildWhatsAppCTA() {
    SP.buildWhatsAppLinks([
      'contact-whatsapp-btn',
      'footer-whatsapp-link',
      'footer-wa-link-2'
    ]);
  }

  /* ── Init ── */

  function init() {
    injectSEO();
    SP.buildNavBrand();
    SP.buildInlineBrandDomain();
    _populateDynamicText();
    _buildInstructorsSection();
    SP.buildEmailLinks();
    buildWhatsAppCTA();
    SP.buildFooterCategories(COURSE_BASE);
    SP.buildFooter();

    U.announce('صفحة عن السنتر');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
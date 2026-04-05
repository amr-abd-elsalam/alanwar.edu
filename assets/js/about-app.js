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
    var pageTitle = 'عن المدرس \u2014 ' + DATA.BRAND_NAME;
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
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': '8 شارع الحرية، ميدان المطرية',
          'addressLocality': 'القاهرة',
          'addressCountry': 'EG'
        }
      }
    }, 'jsonld-about');
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
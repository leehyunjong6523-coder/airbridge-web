/* ═══════════════════════════════════════════
   AIRBRIDGE — Common JS
   nav, footer injection + active state
═══════════════════════════════════════════ */

(function () {
  // ── NAV HTML ──
  const NAV_HTML = `
<nav class="nav" id="main-nav">
  <a href="/" class="nav-logo" style="margin-right:0;flex-shrink:0;">
    <div class="nav-logo-mark">AB</div>
    <div class="nav-logo-text">
      <div class="nav-logo-ko">(주) 에어브리지</div>
      <div class="nav-logo-en">AIRBRIDGE Co., Ltd.</div>
    </div>
  </a>
  <!-- LED 전광판 -->
  <div class="nav-ticker" id="nav-ticker">
    <div class="nav-ticker-inner" id="nav-ticker-inner"></div>
  </div>
  <ul class="nav-links">
    <li><a href="/">홈</a></li>
    <li><a href="/about.html">회사소개</a></li>
    <li><a href="/services.html">서비스</a></li>
    <li><a href="/notices.html">공지사항</a></li>
    <li><a href="/inquiries.html">문의게시판</a></li>
    <li><a href="/calculator.html">운임계산기</a></li>
    <li><a href="/contact.html">문의/오시는길</a></li>
  </ul>
  <a href="tel:032-502-1880" class="nav-links nav-cta">📞 032-502-1880</a>
  <div class="nav-ham" id="nav-ham" onclick="toggleMobileNav()">
    <span></span><span></span><span></span>
  </div>
</nav>
<div class="nav-mobile" id="nav-mobile">
  <a href="/">홈</a>
  <a href="/about.html">회사소개</a>
  <a href="/services.html">서비스</a>
  <a href="/notices.html">공지사항</a>
  <a href="/inquiries.html">문의게시판</a>
  <a href="/calculator.html">운임계산기</a>
  <a href="/contact.html">문의/오시는길</a>
  <a href="tel:032-502-1880" class="nav-cta">📞 032-502-1880</a>
</div>`;

  // ── FOOTER HTML ──
  const FOOTER_HTML = `
<footer class="footer">
  <div class="footer-inner">
    <div class="footer-brand">
      <div class="fb-logo">
        <div class="fb-mark">AB</div>
        <div>
          <div style="font-size:14px;font-weight:700;">(주) 에어브리지</div>
          <div style="font-size:11px;color:var(--muted);font-family:var(--mono);">AIRBRIDGE Co., Ltd.</div>
        </div>
      </div>
      <p>DHL·FedEx·UPS 공식 대리점<br>
      항공특급·항공화물·해상화물 전문<br>
      인천광역시 부평구 수변로 19번길 5<br>
      새한빌딩 1층 101·102호 (우 21415)</p>
    </div>
    <div class="footer-col">
      <h4>메뉴</h4>
      <ul>
        <li><a href="/">홈</a></li>
        <li><a href="/about.html">회사소개</a></li>
        <li><a href="/services.html">서비스 안내</a></li>
        <li><a href="/notices.html">공지사항</a></li>
        <li><a href="/inquiries.html">문의게시판</a></li>
        <li><a href="/calculator.html">운임 계산기</a></li>
        <li><a href="/contact.html">문의/오시는길</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>연락처</h4>
      <dl class="footer-info">
        <dt>전화</dt><dd>032-502-1880</dd>
        <dt>이메일</dt><dd>cs@airos.co.kr</dd>
        <dt>주소</dt><dd>인천광역시 부평구 수변로 19번길 5<br>새한빌딩 1층 101·102호 (우 21415)</dd>
        <dt>대표</dt><dd>호영준</dd>
      </dl>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2026 에어브리지 국제특송 (AIRBRIDGE Co., Ltd.) All rights reserved.</span>
    <span>DHL·FedEx·UPS 공식 대리점 · airbridge.kr</span>
  </div>
</footer>`;

  // ── INJECT ──
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
  document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);

  // ── ACTIVE STATE ──
  const path = window.location.pathname;
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(a => {
    const href = a.getAttribute('href');
    if (!href) return;
    const isHome = (href === '/' || href === '/index.html');
    const isActive = isHome
      ? (path === '/' || path === '/index.html' || path === '')
      : path.includes(href.replace('/', '').replace('.html', ''));
    if (isActive && !a.classList.contains('nav-cta')) a.classList.add('active');
  });

  // ── MOBILE NAV TOGGLE ──
  window.toggleMobileNav = function () {
    const m = document.getElementById('nav-mobile');
    m.classList.toggle('open');
  };

  // ── LED 전광판 ──
  (function(){
    const WORK_START = 9, WORK_END = 18; // 평일 09:00~18:00
    const now  = new Date();
    const day  = now.getDay(); // 0=일 6=토
    const hour = now.getHours();
    const isWork = day >= 1 && day <= 5 && hour >= WORK_START && hour < WORK_END;

    const MSG_WORK = '유선(032-502-1880)으로 연락 주시면 조금 더 빠르고 상세한 안내를 받으실 수 있습니다.';
    const MSG_OFF  = '문의하기로 남겨주시면 업무개시 후 최대한 빠르게 회신드릴 수 있도록 하겠습니다.';
    const msg = isWork ? MSG_WORK : MSG_OFF;

    const inner = document.getElementById('nav-ticker-inner');
    if (!inner) return;
    // 텍스트를 여러번 반복해서 끊김 없이
    inner.textContent = msg + '　　　　　' + msg + '　　　　　' + msg;
  })();

  // ── SCROLL NAV SHADOW ──
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('main-nav');
    if (nav) nav.style.borderBottomColor = window.scrollY > 20 ? 'var(--border)' : 'transparent';
  });
})();
/* ===== 사내네트워크 링크 (직원용 포털 입구) =====
   common.js 맨 아래에 그대로 붙여넣으세요. 모든 페이지의 푸터 맨 아래에 작은 링크가 생깁니다.
   - 주소를 바꾸려면 PORTAL_URL 만 고치세요.
   - 링크를 없애려면 이 블록 전체를 지우면 됩니다. */
(function () {
  var PORTAL_URL = 'https://portal.airbridge.kr/';
  var LINK_ID = 'staff-portal-link';

  function addStaffLink() {
    if (document.getElementById(LINK_ID)) return;           // 이미 있으면 다시 만들지 않음

    var wrap = document.createElement('div');
    wrap.id = LINK_ID;
    wrap.style.cssText = 'text-align:center;padding:12px 16px 20px;font-size:12px;';

    var a = document.createElement('a');
    a.href = PORTAL_URL;
    a.textContent = '사내네트워크';
    a.title = '직원 전용';
    a.target = '_blank';
    a.rel = 'nofollow noopener';
    a.style.cssText = 'color:inherit;opacity:.5;text-decoration:none;border-bottom:1px dotted currentColor;';
    a.onmouseover = function () { a.style.opacity = '1'; };
    a.onmouseout = function () { a.style.opacity = '.5'; };

    wrap.appendChild(a);
    var footer = document.querySelector('footer') || document.getElementById('footer');
    (footer || document.body).appendChild(wrap);
  }

  function run() {
    addStaffLink();
    setTimeout(addStaffLink, 1500);   // 푸터가 늦게 그려지는 경우를 대비해 한 번 더 확인
  }

  if (document.readyState === 'complete') {
    run();
  } else {
    window.addEventListener('load', run);
  }
})();
